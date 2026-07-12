
import React from 'react';
import { Linkedin, MessageCircle, Mail, Youtube } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ELLEN_WHATSAPP_DISPLAY, ELLEN_WHATSAPP_E164 } from '../config/contact';

// --- Meta (Instagram/Facebook) Icon ---
const MetaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z" />
    </svg>
);

// --- WhatsApp Icon ---
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.58-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35zM12.05 21.75c-1.8 0-3.55-.49-5.08-1.4l-.36-.22-3.78.99 1.01-3.68-.24-.38A9.66 9.66 0 012.3 12.05c0-5.37 4.37-9.74 9.75-9.74 2.6 0 5.05 1.01 6.89 2.86a9.7 9.7 0 012.86 6.89c0 5.37-4.38 9.74-9.75 9.74zm8.31-18.06A11.65 11.65 0 0012.05.31C5.56.31.31 5.56.31 12.05c0 2.06.54 4.07 1.56 5.85L.25 23.75l6.04-1.58a11.6 11.6 0 005.76 1.52c6.49 0 11.74-5.25 11.74-11.74 0-3.14-1.22-6.09-3.44-8.31z" />
    </svg>
);

// --- THE OFFICIAL 4U PACT LOGO (SVG) - GOLDEN RULE: 4 MUST REMAIN OPEN ---
const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
        <img
            src="/assets/4upact-logo-correct.png"
            alt="4U Pact"
            className="w-[100px] h-[100px] object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter text-white leading-none uppercase">4U PACT</span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4AB8B0] mt-1">Growth Engine</span>
        </div>
    </div>
);

const Footer = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (newLang) => {
        const pathSegments = location.pathname.split('/');
        pathSegments[1] = newLang;
        const newPath = pathSegments.join('/') || `/${newLang}`;
        navigate(newPath);
    };

    const socialLinks = [
        { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/${ELLEN_WHATSAPP_E164}` },
        { icon: Mail, label: 'Messages', href: 'mailto:sales@4upact.com' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/4upact' },
        { icon: MetaIcon, label: 'Meta (IG/FB)', href: 'https://instagram.com/4upact' },
        { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@4upact' },
    ];

    // imPACT pillars for footer (customer-results focused)
    const impactPillars = {
        en: [
            { label: 'Speed', desc: 'Lead response in under 45 seconds.' },
            { label: 'Predictability', desc: 'Revenue you can forecast, not guess.' },
            { label: 'Scalability', desc: 'Systems that grow with your ambition.' },
            { label: 'Loyalty', desc: 'Customers that stay and refer.' },
        ],
        pt: [
            { label: 'Velocidade', desc: 'Resposta ao lead em menos de 45 segundos.' },
            { label: 'Previsibilidade', desc: 'Receita que você prevê, não adivinha.' },
            { label: 'Escalabilidade', desc: 'Sistemas que crescem com sua ambição.' },
            { label: 'Fidelização', desc: 'Clientes que ficam e indicam.' },
        ],
        es: [
            { label: 'Velocidad', desc: 'Respuesta al lead en menos de 45 segundos.' },
            { label: 'Predictibilidad', desc: 'Ingresos que puedes predecir, no adivinar.' },
            { label: 'Escalabilidad', desc: 'Sistemas que crecen con tu ambición.' },
            { label: 'Fidelización', desc: 'Clientes que se quedan y recomiendan.' },
        ],
    };

    const pillars = impactPillars[language] || impactPillars.en;

    const motto = {
        en: ['Built for im', 'PACT', '. Powered by Intelligence. Transforming daily actions into desired results and long-term predictability.'],
        pt: ['Construído para im', 'PACT', 'o. Movido por Inteligência. Transformando ações diárias em resultados desejados e previsibilidade de longo prazo.'],
        es: ['Construido para im', 'PACT', 'o. Impulsado por Inteligencia. Transformando acciones diarias en resultados deseados y previsibilidad a largo plazo.'],
    };

    const m = motto[language] || motto.en;

    return (
        <footer className="bg-slate-950 text-slate-300 py-32 border-t border-white/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-20 mb-20 pb-20 border-b border-white/5">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-10" onClick={() => navigate(`/${language}`)}>
                            <Logo />
                        </div>
                        <p className="text-slate-500 max-w-sm text-xl leading-relaxed italic mb-10 border-l-2 border-teal/30 pl-6">
                            "{m[0]}<span className="text-orange font-black italic">{m[1]}</span>{m[2]}"
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" title={item.label}>
                                    {typeof item.icon === 'function' && item.icon.prototype ? <item.icon size={20} /> : <item.icon />}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-black uppercase tracking-[0.3em] text-[10px] mb-10">
                            {language === 'en' ? 'The im' : language === 'pt' ? 'O im' : 'El im'}<span className="text-orange">PACT</span>
                        </h4>
                        <ul className="space-y-6 text-sm">
                            {pillars.map((p, i) => (
                                <li key={i}>
                                    <span className="text-white font-black uppercase tracking-wider text-xs">{p.label}</span>
                                    <p className="text-slate-600 text-xs mt-1 italic">{p.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-black uppercase tracking-[0.3em] text-[10px] mb-10">
                            {language === 'en' ? 'Start a Conversation' : language === 'pt' ? 'Inicie uma Conversa' : 'Inicia una Conversación'}
                        </h4>
                        <div className="space-y-5">
                            {/* WhatsApp with pre-typed message */}
                            <a
                                href={
                                    language === 'pt'
                                        ? `https://wa.me/${ELLEN_WHATSAPP_E164}?text=Ol%C3%A1%204U%20Pact!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20automa%C3%A7%C3%A3o%20e%20CRM.`
                                        : language === 'es'
                                            ? `https://wa.me/${ELLEN_WHATSAPP_E164}?text=Hola%204U%20Pact!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20automatizaci%C3%B3n%20y%20CRM.`
                                            : `https://wa.me/${ELLEN_WHATSAPP_E164}?text=Hi%204U%20Pact!%20I%27d%20like%20to%20learn%20more%20about%20your%20automation%20and%20CRM%20services.`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm font-black text-white hover:text-teal transition-all group"
                            >
                                <span className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                                    <WhatsAppIcon />
                                </span>
                                WhatsApp
                            </a>

                            {/* SMS/Text with pre-typed message */}
                            <a
                                href={
                                    language === 'pt'
                                        ? `sms:+${ELLEN_WHATSAPP_E164}?body=Ol%C3%A1%204U%20Pact!%20Gostaria%20de%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20e%20CRM.`
                                        : language === 'es'
                                            ? `sms:+${ELLEN_WHATSAPP_E164}?body=Hola%204U%20Pact!%20Quiero%20saber%20m%C3%A1s%20sobre%20automatizaci%C3%B3n%20y%20CRM.`
                                            : `sms:+${ELLEN_WHATSAPP_E164}?body=Hi%204U%20Pact!%20I%27d%20like%20to%20learn%20more%20about%20your%20CRM%20services.`
                                }
                                className="flex items-center gap-3 text-sm font-black text-white hover:text-teal transition-all group"
                            >
                                <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <MessageCircle size={18} />
                                </span>
                                {language === 'en' ? 'Text Message' : language === 'pt' ? 'Mensagem SMS' : 'Mensaje de Texto'}
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:sales@4upact.com?subject=I%27d%20like%20to%20learn%20more"
                                className="flex items-center gap-3 text-sm font-black text-white hover:text-teal transition-all group"
                            >
                                <span className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                                    <Mail size={18} />
                                </span>
                                Email
                            </a>
                        </div>

                        {/* Language Switcher */}
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4">
                                {language === 'en' ? 'Language' : language === 'pt' ? 'Idioma' : 'Idioma'}
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { code: 'en', flag: '🇺🇸' },
                                    { code: 'pt', flag: '🇧🇷' },
                                    { code: 'es', flag: '🇦🇷' }
                                ].map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg transition-all ${language === lang.code ? 'bg-teal/10 border-teal/30 scale-110' : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-50 hover:opacity-100'}`}
                                    >
                                        {lang.flag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line 1 — Copyright + Legal identity (Marco Civil da Internet) */}
                <div className="mb-2 text-[8px] font-mono text-slate-600 text-right truncate">
                    © 2026 4U Pact Ltda&nbsp;-&nbsp;CNPJ&nbsp;51.336.978/0001-60&nbsp;·&nbsp;Rua Itapiru 572, São Paulo, SP, 04143-010, Brazil&nbsp;·&nbsp;<a href={`tel:+${ELLEN_WHATSAPP_E164}`} className="hover:text-teal transition-colors">{ELLEN_WHATSAPP_DISPLAY}</a>
                </div>

                {/* Line 2 — Condensed legal links */}
                <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[8px] font-mono text-slate-600">
                    <span className="text-slate-700 uppercase tracking-widest text-[7px]">{language === 'en' ? 'Policies:' : 'Políticas:'}</span>
                    <Link to={`/${language}/privacy`} className="hover:text-teal transition-colors">
                        {language === 'en' ? 'Privacy' : language === 'pt' ? 'Privacidade' : 'Privacidad'}
                    </Link>
                    <span>·</span>
                    <Link to={`/${language}/privacy#cookies`} className="hover:text-teal transition-colors">Cookies</Link>
                    <span>·</span>
                    <Link to={`/${language}/terms`} className="hover:text-teal transition-colors">
                        {language === 'en' ? 'Terms' : language === 'pt' ? 'Termos de Serviço' : 'Términos'}
                    </Link>
                    <span>·</span>
                    <a href="mailto:info@4upact.com?subject=Do%20Not%20Sell%20or%20Share%20My%20Personal%20Information" className="hover:text-teal transition-colors">
                        {language === 'en' ? 'Do Not Sell' : language === 'pt' ? 'Não Vender Dados' : 'No Vender Datos'}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
