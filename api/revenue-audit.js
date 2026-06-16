/* global process */

const sendJson = (res, response, status = 200) => {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};

const text = (value, max = 500) => String(value || '').trim().slice(0, max);

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function normalizePayload(body) {
  const language = ['en', 'pt', 'es'].includes(body.language) ? body.language : 'en';
  const score = Math.max(0, Math.min(100, Number(body.score || 0)));
  return {
    firstName: text(body.firstName, 80),
    lastName: text(body.lastName, 80),
    company: text(body.company, 160),
    whatsapp: text(body.whatsapp, 80),
    email: text(body.email, 180).toLowerCase(),
    language,
    score,
    result: body.result && typeof body.result === 'object' ? body.result : {},
    answers: body.answers && typeof body.answers === 'object' ? body.answers : {},
    tags: Array.isArray(body.tags)
      ? body.tags.map((tag) => text(tag, 80)).filter(Boolean).slice(0, 12)
      : [`lang_${language}`, 'lead_source_4upact_quiz'],
  };
}

async function postWebhook(payload) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) return { skipped: true, reason: 'GHL_WEBHOOK_URL missing' };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return {
    skipped: false,
    ok: response.ok,
    status: response.status,
  };
}

async function upsertGhlContact(payload) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) return { skipped: true, reason: 'GHL_API_KEY or GHL_LOCATION_ID missing' };

  const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locationId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      name: `${payload.firstName} ${payload.lastName}`.trim(),
      email: payload.email,
      phone: payload.whatsapp,
      companyName: payload.company,
      tags: payload.tags,
      source: '4upact_revenue_quiz',
      customField: {
        language: payload.language,
        revenue_leak_score: String(payload.score),
        revenue_leak_result: text(payload.result.title, 160),
        revenue_leak_recommendation: text(payload.result.recommendation, 400),
      },
    }),
  });

  return {
    skipped: false,
    ok: response.ok,
    status: response.status,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, { error: 'POST only' }, 405);

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const payload = normalizePayload(body);
    if (!payload.firstName || !payload.email || !payload.whatsapp || !isEmail(payload.email)) {
      return sendJson(res, { error: 'Missing required contact fields' }, 400);
    }

    const webhook = await postWebhook(payload);
    const contact = webhook.skipped ? await upsertGhlContact(payload) : { skipped: true, reason: 'webhook attempted first' };

    return sendJson(res, {
      ok: webhook.ok || contact.ok || (webhook.skipped && contact.skipped),
      dry_run: webhook.skipped && contact.skipped,
      configured: {
        webhook: !webhook.skipped,
        ghl_contact: !contact.skipped,
      },
    });
  } catch (error) {
    return sendJson(res, { error: error instanceof Error ? error.message : 'Unexpected error' }, 500);
  }
}
