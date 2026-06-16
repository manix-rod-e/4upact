import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// ─── Two-row scrolling logo carousel ────────────────────────────────────────────
// Row 1 → Tools & platforms (SVG image logos, scrolls left)
// Row 2 → Clients & partners (image logos, scrolls right)
//
// Default state : grayscale + dimmed  →  Hover : full color + bright pop

const toolLogos = [
    // AI & Automation
    { name: 'Claude', img: '/assets/tools/claude.svg' },
    { name: 'Perplexity', img: '/assets/tools/perplexity.svg' },
    { name: 'Gemini', img: '/assets/tools/gemini.svg' },
    { name: 'Nano Banana', img: '/assets/tools/nano-banana.svg' },
    // CRM & Business
    { name: 'GoHighLevel', img: '/assets/tools/gohighlevel.svg' },
    { name: 'Kommo', img: '/assets/tools/kommo.svg' },
    { name: 'Clio', img: '/assets/tools/clio.svg' },
    { name: 'Asaas', img: '/assets/tools/asaas.svg' },
    // Google Suite
    { name: 'Google Ads', img: '/assets/tools/google-ads.svg' },
    { name: 'Google Merchant', img: '/assets/tools/google-merchant.svg' },
    { name: 'Google Business', img: '/assets/tools/google-business.svg' },
    { name: 'Google Antigravity', img: '/assets/tools/antigravity.svg' },
    { name: 'Google Stitch', img: '/assets/tools/stitch.svg' },
    { name: 'Veo 3', img: '/assets/tools/veo3.svg' },
    { name: 'Google Vids', img: '/assets/tools/google-vids.svg' },
    // Meta & Social
    { name: 'Meta Business', img: '/assets/tools/meta-ads.svg' },
    { name: 'Meta Ads', img: '/assets/tools/meta-ads.svg' },
    { name: 'Facebook', img: '/assets/tools/facebook.svg' },
    { name: 'Instagram', img: '/assets/tools/instagram.svg' },
    { name: 'WhatsApp API', img: '/assets/tools/whatsapp-api.svg' },
    { name: 'WhatsApp Plus', img: '/assets/tools/whatsapp-plus.svg' },
    { name: 'TikTok', img: '/assets/tools/tiktok.svg' },
    { name: 'Pinterest', img: '/assets/tools/pinterest.svg' },
    { name: 'YouTube', img: '/assets/tools/youtube.svg' },
    { name: 'LinkedIn', img: '/assets/tools/linkedin.svg' },
    // Payments & eCommerce
    { name: 'Stripe', img: '/assets/tools/stripe.svg' },
    { name: 'Shopify', img: '/assets/tools/shopify.svg' },
    { name: 'WooCommerce', img: '/assets/tools/woocommerce.svg' },
    // Automation & Integration
    { name: 'Make', img: '/assets/tools/make.svg' },
    { name: 'Zapier', img: '/assets/tools/zapier.svg' },
    { name: 'n8n', img: '/assets/tools/n8n.svg' },
    // Infrastructure
    { name: 'Firebase', img: '/assets/tools/firebase.svg' },
    { name: 'Twilio', img: '/assets/tools/twilio.svg' },
    { name: 'Calendly', img: '/assets/tools/calendly.svg' },
];

const clientLogos = [
    { name: '4U Pact', img: '/assets/4upact-logo-512.png' },
    { name: 'Azulik', img: '/assets/clients/azulik-white.svg' },
    { name: 'Intel', img: '/assets/intel/intel-logo.png' },
    { name: 'IBM', img: '/assets/ibm/ibm-logo.png' },
];

/* ── Shared logo card ─────────────────────────────────────────────────────────── */
const LogoCard = ({ name, img, size = 'sm' }) => {
    const isSm = size === 'sm';

    return (
        <div
            className={`
                flex-shrink-0 flex items-center justify-center rounded-xl
                border border-white/[0.06] backdrop-blur-sm cursor-default
                transition-all duration-500 ease-out
                bg-white/[0.03]
                hover:bg-white/[0.08] hover:border-white/[0.15]
                hover:shadow-[0_0_24px_rgba(255,255,255,0.06)]
                hover:scale-105
                group
                ${isSm ? 'mx-3 h-12 px-5' : 'mx-5 h-16 px-7'}
            `}
        >
            <img
                src={img}
                alt={name}
                className={`
                    w-auto object-contain
                    transition-all duration-500 ease-out
                    grayscale brightness-[0.45] opacity-60
                    group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100
                    ${isSm ? 'h-7' : 'h-9'}
                `}
            />
        </div>
    );
};

/* ── Main component ───────────────────────────────────────────────────────────── */
const BrandCarousel = () => {
    const { language } = useLanguage();

    const toolLabel =
        language === 'en' ? 'Built With Enterprise-Grade Tools'
        : language === 'es' ? 'Construido Con Herramientas Empresariales'
        : 'Construído Com Ferramentas Enterprise';

    const clientLabel =
        language === 'en' ? 'Trusted by Brands Across 5 Countries'
        : language === 'es' ? 'Confiado por Marcas en 5 Países'
        : 'Confiado por Marcas em 5 Países';

    const toolsDoubled = [...toolLogos, ...toolLogos];
    // Client row has few logos — repeat 8x to fill viewport and eliminate gaps
    const clientsRepeated = Array(8).fill(clientLogos).flat();

    return (
        <section className="py-16 bg-slate-950 relative overflow-hidden border-y border-white/5">
            {/* Edge fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Row 1 — Tools (scroll left) */}
            <div className="mb-10">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-6">
                    {toolLabel}
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
                        {toolsDoubled.map((logo, i) => (
                            <LogoCard key={`tool-${i}`} {...logo} size="sm" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 2 — Clients (scroll right) */}
            <div>
                <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-6">
                    {clientLabel}
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-right-clients hover:[animation-play-state:paused]">
                        {clientsRepeated.map((logo, i) => (
                            <LogoCard key={`client-${i}`} {...logo} size="lg" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
