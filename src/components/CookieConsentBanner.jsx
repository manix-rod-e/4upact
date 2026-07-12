
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/* ═══════════════════════════════════════════════════════════════════════════
   CookieConsentBanner
   • LGPD-compliant (Brazil): no pre-ticked boxes, explicit opt-in required
   • CCPA-compliant (US): opt-out of "sale/share" of personal data
   • Quebec Law 25: granular consent, consent recorded with timestamp
   • First-layer: Accept All / Reject All / Manage Preferences
   • Second-layer: granular toggles for Necessary / Analytics / Marketing
   • Consent stored in localStorage with ISO timestamp
   • Banner hidden after choice until consent expires (365 days)
   ══════════════════════════════════════════════════════════════════════════ */

const CONSENT_KEY = '4upact_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

// Read stored consent; return null if absent or expired
const readStoredConsent = () => {
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return null;
        const stored = JSON.parse(raw);
        if (!stored.timestamp) return null;
        const ageDays = (Date.now() - new Date(stored.timestamp).getTime()) / (1000 * 60 * 60 * 24);
        if (ageDays > CONSENT_EXPIRY_DAYS) return null;
        return stored;
    } catch {
        return null;
    }
};

const saveConsent = (prefs) => {
    const payload = { ...prefs, timestamp: new Date().toISOString(), version: '1.0' };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    // Dispatch event so analytics/marketing scripts can react
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: payload }));
    return payload;
};

// ─── Copy ───────────────────────────────────────────────────────────────────
const copy = {
    en: {
        title: 'We use cookies',
        desc: 'We use cookies and similar technologies to improve your experience, analyze traffic, and personalize content. Your booking data is processed by GoHighLevel — see our ',
        privacyLink: 'Privacy Policy',
        forDetails: ' for details.',
        necessary: 'Necessary',
        necessaryDesc: 'Required for the site to function. Cannot be disabled.',
        analytics: 'Analytics',
        analyticsDesc: 'Help us understand how visitors interact with the site (Google Analytics 4).',
        marketing: 'Marketing',
        marketingDesc: 'Used to measure ad campaign performance (Meta Pixel, Google Ads).',
        acceptAll: 'Accept All',
        rejectAll: 'Reject All',
        manage: 'Manage Preferences',
        savePrefs: 'Save My Choices',
        alwaysOn: 'Always on',
        poweredBy: 'LGPD · CCPA · Quebec Law 25',
    },
    pt: {
        title: 'Usamos cookies',
        desc: 'Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o tráfego e personalizar o conteúdo. Seus dados de agendamento são processados pelo GoHighLevel — veja nossa ',
        privacyLink: 'Política de Privacidade',
        forDetails: ' para mais detalhes.',
        necessary: 'Necessários',
        necessaryDesc: 'Indispensáveis para o funcionamento do site. Não podem ser desativados.',
        analytics: 'Analíticos',
        analyticsDesc: 'Nos ajudam a entender como os visitantes interagem com o site (Google Analytics 4).',
        marketing: 'Marketing',
        marketingDesc: 'Utilizados para medir o desempenho de campanhas publicitárias (Meta Pixel, Google Ads).',
        acceptAll: 'Aceitar Todos',
        rejectAll: 'Rejeitar Todos',
        manage: 'Gerenciar Preferências',
        savePrefs: 'Salvar Minhas Escolhas',
        alwaysOn: 'Sempre ativo',
        poweredBy: 'LGPD · CCPA · Lei 25 do Québec',
    },
    es: {
        title: 'Usamos cookies',
        desc: 'Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Tus datos de reserva son procesados por GoHighLevel — consulta nuestra ',
        privacyLink: 'Política de Privacidad',
        forDetails: ' para más detalles.',
        necessary: 'Necesarias',
        necessaryDesc: 'Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.',
        analytics: 'Analíticas',
        analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio (Google Analytics 4).',
        marketing: 'Marketing',
        marketingDesc: 'Se utilizan para medir el rendimiento de campañas publicitarias (Meta Pixel, Google Ads).',
        acceptAll: 'Aceptar Todo',
        rejectAll: 'Rechazar Todo',
        manage: 'Gestionar Preferencias',
        savePrefs: 'Guardar Mis Opciones',
        alwaysOn: 'Siempre activo',
        poweredBy: 'LGPD · CCPA · Ley 25 de Quebec',
    },
};

// ─── Toggle Switch ───────────────────────────────────────────────────────────
const Toggle = ({ checked, onChange, disabled = false, label }) => (
    <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`
            relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent
            transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2
            focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
            ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
            ${checked ? 'bg-teal' : 'bg-slate-700'}
        `}
    >
        <span
            className={`
                pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow
                transition duration-200 ease-in-out
                ${checked ? 'translate-x-5' : 'translate-x-0'}
            `}
        />
    </button>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const CookieConsentBanner = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const c = copy[language] || copy.en;

    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

    // Derive current lang from URL for Privacy link
    const lang = location.pathname.split('/')[1] || 'pt';

    useEffect(() => {
        const stored = readStoredConsent();
        if (!stored) {
            // Small delay so page renders first
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        saveConsent({ necessary: true, analytics: true, marketing: true });
        setVisible(false);
    };

    const handleRejectAll = () => {
        saveConsent({ necessary: true, analytics: false, marketing: false });
        setVisible(false);
    };

    const handleSavePrefs = () => {
        saveConsent({ necessary: true, ...prefs });
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <>
            {/* ── Backdrop blur ── */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[9998] pointer-events-none"
                aria-hidden="true"
            />

            {/* ── Banner ── */}
            <div
                role="dialog"
                aria-modal="false"
                aria-label={c.title}
                className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
            >
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-3xl bg-slate-900/95 border border-white/10 backdrop-blur-xl shadow-[0_-4px_60px_rgba(0,0,0,0.6)] overflow-hidden">

                        {/* ── Top stripe ── */}
                        <div className="h-1 w-full bg-gradient-to-r from-teal via-orange to-teal bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />

                        <div className="p-6 sm:p-8">
                            {/* ── Header ── */}
                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-10 h-10 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CookieIcon />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-white font-black text-lg tracking-tight mb-1">{c.title}</h2>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {c.desc}
                                        <Link
                                            to={`/${lang}/privacy`}
                                            className="text-teal hover:text-teal/80 underline underline-offset-2 font-bold"
                                        >
                                            {c.privacyLink}
                                        </Link>
                                        {c.forDetails}
                                    </p>
                                </div>
                            </div>

                            {/* ── Expanded preferences ── */}
                            {expanded && (
                                <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/5">
                                    {/* Necessary */}
                                    <div className="flex items-center gap-4 p-4">
                                        <div className="flex-1">
                                            <p className="text-white font-black text-sm">{c.necessary}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{c.necessaryDesc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-teal/60">{c.alwaysOn}</span>
                                            <Toggle checked={true} onChange={() => {}} disabled={true} label={c.necessary} />
                                        </div>
                                    </div>

                                    {/* Analytics */}
                                    <div className="flex items-center gap-4 p-4">
                                        <div className="flex-1">
                                            <p className="text-white font-black text-sm">{c.analytics}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{c.analyticsDesc}</p>
                                        </div>
                                        <Toggle
                                            checked={prefs.analytics}
                                            onChange={(val) => setPrefs(p => ({ ...p, analytics: val }))}
                                            label={c.analytics}
                                        />
                                    </div>

                                    {/* Marketing */}
                                    <div className="flex items-center gap-4 p-4">
                                        <div className="flex-1">
                                            <p className="text-white font-black text-sm">{c.marketing}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{c.marketingDesc}</p>
                                        </div>
                                        <Toggle
                                            checked={prefs.marketing}
                                            onChange={(val) => setPrefs(p => ({ ...p, marketing: val }))}
                                            label={c.marketing}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* ── Action buttons ── */}
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={handleAcceptAll}
                                    className="flex-1 min-w-[120px] px-5 py-3 rounded-2xl bg-teal text-slate-950 text-sm font-black uppercase tracking-wider hover:bg-teal/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.97]"
                                >
                                    {c.acceptAll}
                                </button>

                                {expanded ? (
                                    <button
                                        onClick={handleSavePrefs}
                                        className="flex-1 min-w-[120px] px-5 py-3 rounded-2xl bg-orange text-slate-950 text-sm font-black uppercase tracking-wider hover:bg-orange/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.97]"
                                    >
                                        {c.savePrefs}
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleRejectAll}
                                        className="flex-1 min-w-[120px] px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-black uppercase tracking-wider hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.97]"
                                    >
                                        {c.rejectAll}
                                    </button>
                                )}

                                <button
                                    onClick={() => setExpanded(e => !e)}
                                    className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-sm font-bold hover:bg-white/10 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                    aria-expanded={expanded}
                                >
                                    {expanded ? '↑' : c.manage}
                                </button>
                            </div>

                            {/* ── Legal badge ── */}
                            <p className="mt-4 text-[9px] font-mono text-slate-700 text-center uppercase tracking-widest">
                                {c.poweredBy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// ─── Cookie SVG icon ─────────────────────────────────────────────────────────
const CookieIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="#4ECDC4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
    </svg>
);

export default CookieConsentBanner;
