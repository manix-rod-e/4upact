
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { MessageCircle, Mail, Calendar, ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ELLEN_WHATSAPP_E164 } from '../config/contact';

// ─── WhatsApp Tracking Link Builder ───────────────────────────────────────────
const buildWhatsAppLink = (language, source = 'CONTACT') => {
    const messages = {
        en: `[EN][${source}] Hi 4UPact! I found you on your website and I'd like to book a free strategy call. English speaker here. 🚀`,
        pt: `[PT][${source}] Olá 4UPact! Encontrei vocês no site e gostaria de agendar uma call de estratégia gratuita. 🚀`,
        es: `[ES][${source}] ¡Hola 4UPact! Los encontré en su sitio web y me gustaría agendar una call de estrategia gratuita. 🚀`,
    };
    const text = encodeURIComponent(messages[language] || messages.en);
    return `https://wa.me/${ELLEN_WHATSAPP_E164}?text=${text}`;
};

const GHL_CALENDAR_ID = 'RlsPDFRRKlSKcmJtRvZw_1771879473718';
const GHL_CALENDAR_URL = 'https://link.4upact.com/widget/booking/VDGab1d976AlsQkmowqB';

const contactContent = {
    en: {
        badge: '30-Minute Audit',
        title: 'Let\'s Build Your',
        titleHighlight: 'System.',
        subtitle: '30-minute audit. No pitch. Just answers about your revenue system.',
        wa_label: 'Fastest Response',
        wa_title: 'WhatsApp VIP Support',
        email_label: 'Detailed Inquiry',
        email_title: 'info@4upact.com',
        stat1_value: '15 min',
        stat1_label: 'Average Reply Time',
        stat2_value: '3 SLOTS',
        stat2_label: 'Available This Week',
        cal_title: '30-Minute Revenue Audit',
        cal_subtitle: 'No pitch. Just answers about your revenue system.',
        privacy_notice: 'Your booking data is processed by GoHighLevel on our behalf. By scheduling, you consent to the processing of your personal data in accordance with our ',
        privacy_link: 'Privacy Policy',
        consent_label: 'I have read and agree to the ',
        consent_link: 'Privacy Policy',
        consent_suffix: ' and consent to the processing of my personal data.',
        includes: 'Your call includes:',
        include1: 'Revenue system review',
        include2: 'Lead capture leak mapping',
        include3: '90-day next action plan',
    },
    pt: {
        badge: 'Agende Sua Call de Estratégia',
        title: 'Vamos Mapear Seus',
        titleHighlight: 'Vazamentos de Receita.',
        subtitle: 'Escolha o canal de preferência. Nossa equipe executiva responde em menos de 15 minutos (horário comercial).',
        wa_label: 'Resposta Mais Rápida',
        wa_title: 'WhatsApp VIP Support',
        email_label: 'Consulta Detalhada',
        email_title: 'sales@4upact.com',
        stat1_value: '15 min',
        stat1_label: 'Tempo Médio de Resposta',
        stat2_value: '3 VAGAS',
        stat2_label: 'Disponíveis Esta Semana',
        cal_title: 'Call de Estratégia — 15 Min',
        cal_subtitle: 'Identificamos o gargalo #1 de conversão do seu funil — sem pitch, só precisão.',
        privacy_notice: 'Seus dados de agendamento são processados pelo GoHighLevel em nosso nome. Ao agendar, você consente com o tratamento de seus dados pessoais conforme nossa ',
        privacy_link: 'Política de Privacidade',
        consent_label: 'Li e concordo com a ',
        consent_link: 'Política de Privacidade',
        consent_suffix: ' e consinto com o tratamento dos meus dados pessoais.',
        includes: 'Sua call inclui:',
        include1: 'Análise completa de gaps no funil',
        include2: 'Mapeamento de vazamento de leads',
        include3: 'Roadmap personalizado de 90 dias',
    },
    es: {
        badge: 'Agenda Tu Call de Estrategia',
        title: 'Mapeemos Tus',
        titleHighlight: 'Fugas de Ingresos.',
        subtitle: 'Elija el canal de su preferencia. Nuestro equipo ejecutivo responde en menos de 15 minutos (horario comercial).',
        wa_label: 'Respuesta Más Rápida',
        wa_title: 'WhatsApp VIP Support',
        email_label: 'Consulta Detallada',
        email_title: 'sales@4upact.com',
        stat1_value: '15 min',
        stat1_label: 'Tiempo Promedio de Respuesta',
        stat2_value: '3 CUPOS',
        stat2_label: 'Disponibles Esta Semana',
        cal_title: 'Call de Estrategia — 15 Min',
        cal_subtitle: 'Identificamos el cuello de botella #1 de conversión en tu embudo — sin pitch, solo precisión.',
        privacy_notice: 'Tus datos de reserva son procesados por GoHighLevel en nuestro nombre. Al agendar, consientes el tratamiento de tus datos personales conforme a nuestra ',
        privacy_link: 'Política de Privacidad',
        consent_label: 'He leído y acepto la ',
        consent_link: 'Política de Privacidad',
        consent_suffix: ' y consiento el tratamiento de mis datos personales.',
        includes: 'Tu call incluye:',
        include1: 'Análisis completo de gaps del embudo',
        include2: 'Mapeo de fuga de leads',
        include3: 'Roadmap personalizado de 90 días',
    },
};

const Contact = () => {
    const { language } = useLanguage();
    const c = contactContent[language] || contactContent.en;
    const [consentChecked, setConsentChecked] = useState(false);

    // Dynamically load GHL calendar embed script
    useEffect(() => {
        const scriptId = 'ghl-form-embed';
        if (document.getElementById(scriptId)) return;
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://link.4upact.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            const s = document.getElementById(scriptId);
            if (s) s.remove();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Book Your 30-Minute Revenue Audit — 4U Pact</title>
                <meta name="description" content="Book a free 30-minute revenue audit with 4U Pact. No pitch. Just answers about your revenue system." />
                <meta property="og:title" content="Book Your 30-Minute Revenue Audit — 4U Pact" />
                <meta property="og:description" content="No pitch. Just answers about your revenue system." />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:url" content="https://4upact.com/en/contact" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://4upact.com/en/contact" />
            </Helmet>

            {/* Dark glass-panel aesthetic — matching $1M Website style */}
            <section className="pt-32 pb-20 bg-slate-950 min-h-screen overflow-hidden relative">
                {/* Background gradient effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column — Contact Info */}
                        <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-teal mb-6">
                                {c.badge}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                                {c.title} <br />
                                <span className="bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent">
                                    {c.titleHighlight}
                                </span>
                            </h1>
                            <p className="text-lg text-slate-400 font-bold max-w-lg mb-12 leading-relaxed">
                                {c.subtitle}
                            </p>

                            {/* WhatsApp CTA */}
                            <div className="space-y-4 mb-12">
                                <a
                                    href={buildWhatsAppLink(language, 'CONTACT')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                        <MessageCircle size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{c.wa_label}</div>
                                        <div className="text-xl font-black text-white tracking-tight">{c.wa_title}</div>
                                    </div>
                                    <ArrowRight className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                                </a>

                                <a
                                    href="mailto:info@4upact.com"
                                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-orange/10 hover:border-orange/30 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center text-slate-950 shadow-lg shadow-orange/20 group-hover:scale-110 transition-transform">
                                        <Mail size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{c.email_label}</div>
                                        <div className="text-xl font-black text-white tracking-tight">{c.email_title}</div>
                                    </div>
                                    <ArrowRight className="text-slate-600 group-hover:text-orange transition-colors" />
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Clock size={18} className="text-teal" />
                                        <span className="text-2xl font-black text-teal">{c.stat1_value}</span>
                                    </div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{c.stat1_label}</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users size={18} className="text-orange" />
                                        <span className="text-2xl font-black text-orange">{c.stat2_value}</span>
                                    </div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{c.stat2_label}</div>
                                </div>
                            </div>
                        </Motion.div>

                        {/* Right Column — Calendar (dark glass-panel) */}
                        <Motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 relative overflow-hidden">
                                {/* Corner badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange/30 rotate-12">
                                    <Calendar size={28} />
                                </div>

                                <h3 className="text-2xl font-black text-white tracking-tighter mb-2">
                                    {c.cal_title}
                                </h3>
                                <p className="text-sm text-slate-400 font-bold mb-6">
                                    {c.cal_subtitle}
                                </p>

                                {/* What's included */}
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{c.includes}</p>
                                    <div className="space-y-2">
                                        {[c.include1, c.include2, c.include3].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                                                <span className="text-sm text-slate-300 font-bold">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* GHL Calendar — restyled as dark embed */}
                                <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white">
                                    <iframe
                                        src={GHL_CALENDAR_URL}
                                        style={{ width: '100%', minHeight: '550px', border: 'none', overflow: 'hidden' }}
                                        scrolling="no"
                                        id={GHL_CALENDAR_ID}
                                        title={c.cal_title}
                                    />
                                </div>

                                {/* Data processing notice (GoHighLevel) */}
                                <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-start gap-3 mb-4">
                                        <ShieldCheck size={18} className="text-teal flex-shrink-0 mt-0.5" />
                                        <p className="text-[11px] text-slate-400 leading-relaxed">
                                            {c.privacy_notice}
                                            <Link
                                                to={`/${language}/privacy`}
                                                className="text-teal hover:text-teal/80 underline underline-offset-2 font-bold"
                                            >
                                                {c.privacy_link}
                                            </Link>
                                            .
                                        </p>
                                    </div>

                                    {/* Consent checkbox — required by LGPD */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex-shrink-0 mt-0.5">
                                            <input
                                                type="checkbox"
                                                checked={consentChecked}
                                                onChange={(e) => setConsentChecked(e.target.checked)}
                                                className="sr-only"
                                                aria-label={c.consent_label + c.consent_link + c.consent_suffix}
                                            />
                                            <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center
                                                ${consentChecked
                                                    ? 'bg-teal border-teal'
                                                    : 'bg-transparent border-slate-600 group-hover:border-teal/50'
                                                }`}
                                            >
                                                {consentChecked && (
                                                    <svg viewBox="0 0 12 12" width="10" height="10" fill="none">
                                                        <path d="M2 6l3 3 5-5" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-slate-400 leading-relaxed">
                                            {c.consent_label}
                                            <Link
                                                to={`/${language}/privacy`}
                                                className="text-teal hover:text-teal/80 underline underline-offset-2 font-bold"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {c.consent_link}
                                            </Link>
                                            {c.consent_suffix}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ShieldCheck = ({ size, className }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

export default Contact;
