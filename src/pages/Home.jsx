
import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Layout, BarChart3, Quote, Briefcase, Star, Heart, Sparkles, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import BrandCarousel from '../components/BrandCarousel';
import MultiStepForm from '../components/MultiStepForm';
import ScrollyHero from '../components/ScrollyHero';
import Marketplace from '../components/Marketplace';


// ─── LinkedIn Testimonials (extracted from About.jsx) ───────────────────────
const testimonials = [
    {
        name: 'Mariano Yacovino',
        role: 'Ex-Intel',
        text: 'Rodrigo is one of the best professionals I have worked with in my career. He has an extraordinary ability to combine creative vision with business impact, and a discipline for execution that distinguishes any high-performance team.',
        color: 'border-teal',
        initials: 'MY',
    },
    {
        name: 'Edu Lotfi',
        role: 'TikTok \u00b7 Meta \u00b7 Intel',
        text: 'I worked with Rodrigo for over three years, and he is one of the most dedicated professionals I\u2019ve had the pleasure of collaborating with. His commitment to excellence in everything he does is impressive.',
        color: 'border-orange',
        initials: 'EL',
    },
    {
        name: 'Paulo de Tarso M Gomes',
        role: 'Dell \u00b7 IBM',
        text: 'Rodrigo is an outstanding professional \u2014 strategic, creative, and relentlessly focused on results. His energy and marketing acumen make him an exceptional partner for any business challenge.',
        color: 'border-primary',
        initials: 'PT',
    },
];

// ─── Work Experience Badges ──────────────────────────────────────────────────
const experience = [
    { company: 'IBM', role: 'Marketing Lead, LatAm', years: '8+ years', logo: '/assets/ibm/ibm-logo.png' },
    { company: 'Intel', role: 'Marketing Manager, LatAm', years: '6+ years', logo: '/assets/intel/intel-logo.png' },
    { company: 'Azulik', role: 'CMO', years: '1 year', logo: '/assets/azulik/azulik-logo.png' },
];

const Home = () => {
    const { t, language } = useLanguage();

    // ─── Trilingual content ──────────────────────────────────────────────────
    const hero = {
        en: {
            badge: 'REVENUE INFRASTRUCTURE',
            h1_line1: 'We Build',
            h1_line2: 'Revenue',
            h1_line3: 'Engines.',
            subtitle: 'Most agencies deliver activity. 4U Pact delivers infrastructure: CRM, automation, and content that converts.',
            cta_primary: 'Book Free Audit \u2192',
            cta_secondary: 'See the imPACT Method \u2192',
        },
        pt: {
            badge: 'MOTOR DE RECEITA',
            h1_line1: 'Seu Marketing Roda.',
            h1_line2: 'Mas Ele Realmente',
            h1_line3: 'Fecha Neg\u00f3cios?',
            subtitle: 'Se voc\u00ea investe em marketing mas n\u00e3o consegue rastrear at\u00e9 neg\u00f3cios fechados, vamos te mostrar exatamente onde a receita est\u00e1 vazando \u2014 e construir o sistema para corrigir.',
            cta_primary: 'Receber Minha Auditoria Gratuita \u2192',
            cta_secondary: 'Ver Resultados de Clientes \u2192',
        },
        es: {
            badge: 'MOTOR DE INGRESOS',
            h1_line1: 'Tu Marketing Funciona.',
            h1_line2: 'Pero \u00bfRealmente',
            h1_line3: 'Cierra Negocios?',
            subtitle: 'Si inviertes en marketing pero no puedes rastrearlo hasta negocios cerrados, te mostraremos exactamente d\u00f3nde se est\u00e1 fugando el ingreso \u2014 y construiremos el sistema para corregirlo.',
            cta_primary: 'Recibir Mi Auditor\u00eda Gratuita \u2192',
            cta_secondary: 'Ver Resultados de Clientes \u2192',
        },
    };

    const pillars = {
        en: {
            title: 'The imPACT Method',
            p1_num: '01',
            p1_title: 'Positioning & Authority',
            p1_desc: 'Own your market before you enter it.',
            p2_num: '02',
            p2_title: 'Intelligent Capture',
            p2_desc: 'Every lead captured, qualified, and nurtured automatically.',
            p3_num: '03',
            p3_title: 'Integrated Commercial System',
            p3_desc: 'Your CRM, content, and team finally become one engine.',
        },
        pt: {
            title: 'Como Engenheiramos Receita',
            p1_num: '01',
            p1_title: 'Seus Leads Param de Cair no Limbo.',
            p1_desc: 'Arquitetamos seu CRM para que cada lead seja capturado, qualificado e acompanhado automaticamente. Sem mais adivinhar quem ligar.',
            p2_num: '02',
            p2_title: 'Seu Marketing Roda Enquanto Voc\u00ea Dorme.',
            p2_desc: 'Flows automatizados, sequ\u00eancias com IA e funis de performance que geram pipeline 24/7 sem esfor\u00e7o manual.',
            p3_num: '03',
            p3_title: 'Voc\u00ea V\u00ea Exatamente o Que Funciona \u2014 e o Que N\u00e3o.',
            p3_desc: 'Dashboards de receita conectados a neg\u00f3cios reais, n\u00e3o m\u00e9tricas de vaidade. Saiba seu custo por aquisi\u00e7\u00e3o e ROI em tempo real.',
        },
        es: {
            title: 'C\u00f3mo Ingeniamos Ingresos',
            p1_num: '01',
            p1_title: 'Tus Leads Dejan de Caer en el Limbo.',
            p1_desc: 'Arquitectamos tu CRM para que cada lead sea capturado, calificado y seguido autom\u00e1ticamente. Sin m\u00e1s adivinar a qui\u00e9n llamar.',
            p2_num: '02',
            p2_title: 'Tu Marketing Funciona Mientras Duermes.',
            p2_desc: 'Flows automatizados, secuencias con IA y embudos de rendimiento que generan pipeline 24/7 sin esfuerzo manual.',
            p3_num: '03',
            p3_title: 'Ves Exactamente Qu\u00e9 Funciona \u2014 y Qu\u00e9 No.',
            p3_desc: 'Dashboards de ingresos conectados a negocios reales, no m\u00e9tricas de vanidad. Conoce tu costo por adquisici\u00f3n y ROI en tiempo real.',
        },
    };

    const h = hero[language] || hero.en;
    const p = pillars[language] || pillars.en;

    const testimonialsTitle = language === 'en' ? 'What Fortune 500 Leaders Say'
        : language === 'es' ? 'Lo Que Dicen L\u00edderes Fortune 500'
        : 'O Que L\u00edderes Fortune 500 Dizem';

    const experienceTitle = language === 'en' ? '20+ Years at Fortune 500 Scale'
        : language === 'es' ? '20+ A\u00f1os a Escala Fortune 500'
        : '20+ Anos em Escala Fortune 500';

    const formSectionTitle = language === 'en' ? 'Book Your Free Revenue Audit'
        : language === 'es' ? 'Descubre D\u00f3nde Est\u00e1s Perdiendo Ingresos'
        : 'Descubra Onde Voc\u00ea Est\u00e1 Perdendo Receita';

    const formSectionSub = language === 'en' ? '30-minute audit. No pitch. Just answers about your revenue system.'
        : language === 'es' ? 'Responde 5 preguntas r\u00e1pidas. Recibe una auditor\u00eda de ingresos personalizada \u2014 gratis.'
        : 'Responda 5 perguntas r\u00e1pidas. Receba uma auditoria de receita personalizada \u2014 gr\u00e1tis.';

    return (
        <>
            <Helmet>
                <title>4U Pact | We Build Revenue Engines</title>
                <meta name="description" content="4U Pact delivers revenue infrastructure: CRM, automation, and content that converts. Book a free 30-minute audit." />
                <meta name="keywords" content="marketing strategy, CRM architecture, marketing automation, revenue growth, GoHighLevel, AI marketing, 4U Pact, revenue audit, marketing consultant" />
                <meta property="og:title" content="4U Pact | We Build Revenue Engines" />
                <meta property="og:description" content="Most agencies deliver activity. 4U Pact delivers infrastructure: CRM, automation, and content that converts." />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:url" content="https://4upact.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="4U Pact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="4U Pact | We Build Revenue Engines" />
                <meta name="twitter:description" content="CRM, automation, and content infrastructure that converts." />
                <meta name="twitter:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <link rel="canonical" href="https://4upact.com" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "4U Pact",
                    "description": "CRM architecture, AI automation and revenue growth systems. 20+ years of Fortune 500 marketing expertise.",
                    "url": "https://4upact.com",
                    "email": "info@4upact.com",
                    "areaServed": ["US", "BR", "MX", "CO", "AR"],
                    "serviceType": ["Marketing Strategy", "CRM Architecture", "Marketing Automation", "Revenue Systems"],
                    "knowsLanguage": ["en", "pt", "es"],
                    "founder": { "@type": "Person", "name": "Rod Ezquerra", "alumniOf": ["IBM", "Intel"] },
                    "sameAs": ["https://www.linkedin.com/company/4upact"]
                })}</script>
            </Helmet>

            <ScrollyHero h={h} language={language} />

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 2: BRAND CAROUSEL (Logo Scroll)
            ════════════════════════════════════════════════════════════════════ */}
            <BrandCarousel />

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 3: VALUE PROPS — Numbered, Outcome-Driven
            ════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">{p.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, num: p.p1_num, title: p.p1_title, desc: p.p1_desc },
                            { icon: Layout, num: p.p2_num, title: p.p2_title, desc: p.p2_desc },
                            { icon: BarChart3, num: p.p3_num, title: p.p3_title, desc: p.p3_desc },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="p-10 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative"
                            >
                                {/* Number badge */}
                                <div className="absolute -top-4 -left-2 w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center">
                                    <span className="text-xs font-black text-teal">{item.num}</span>
                                </div>
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                    <item.icon size={26} />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">{item.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 4: TESTIMONIALS — LinkedIn Evaluations with Metrics
            ════════════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            {language === 'en' ? 'LinkedIn Verified' : language === 'es' ? 'Verificado en LinkedIn' : 'Verificado no LinkedIn'}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">{testimonialsTitle}</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`p-10 rounded-[2.5rem] bg-slate-50 border-t-4 ${item.color} hover:shadow-xl transition-all duration-500 relative`}
                            >
                                <Quote size={32} className="text-slate-200 mb-6" />
                                <p className="text-slate-600 leading-relaxed mb-8 text-sm">{item.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white font-black text-sm">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-sm">{item.name}</div>
                                        <div className="text-[11px] font-bold text-slate-400">{item.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="https://linkedin.com/in/rodrigoe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:text-teal transition-colors"
                        >
                            {language === 'en' ? 'See All on LinkedIn' : language === 'es' ? 'Ver Todos en LinkedIn' : 'Ver Todos no LinkedIn'}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 5: MULTI-STEP QUALIFICATION FORM
            ════════════════════════════════════════════════════════════════════ */}
            <section id="revenue-audit" className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/20 text-orange text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            {language === 'en' ? 'Free \u2022 No Obligation' : language === 'es' ? 'Gratis \u2022 Sin Compromiso' : 'Gr\u00e1tis \u2022 Sem Compromisso'}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">{formSectionTitle}</h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">{formSectionSub}</p>
                    </div>

                    <div className="glass-panel-dark p-8 md:p-12">
                        <MultiStepForm />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 6: WORK EXPERIENCE STRIP
            ════════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            <Briefcase className="inline w-4 h-4 mr-2" />
                            {experienceTitle}
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all text-center group"
                            >
                                {exp.logo ? (
                                    <img src={exp.logo} alt={exp.company} className="h-10 mx-auto mb-4 object-contain grayscale group-hover:grayscale-0 transition-all" />
                                ) : (
                                    <div className="h-10 flex items-center justify-center mb-4">
                                        <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors">{exp.company}</span>
                                    </div>
                                )}
                                <div className="text-sm font-bold text-slate-600 mb-1">{exp.role}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-teal">{exp.years}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 6.5: PORTFOLIO SHOWCASE
            ════════════════════════════════════════════════════════════════════ */}
            <Marketplace />

            {/* ════════════════════════════════════════════════════════════════════
                SECTION 7: FINAL CTA — Book a Call
            ════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 section-violet relative">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                        {language === 'en' ? 'Ready to Stop Guessing?' : language === 'pt' ? 'Pronto Para Parar de Adivinhar?' : '\u00bfListo Para Dejar de Adivinar?'}
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-lg mx-auto">
                        {language === 'en' ? 'Book a 15-minute strategy call. No pitch \u2014 just precision.'
                            : language === 'pt' ? 'Agende uma call de estrat\u00e9gia de 15 minutos. Sem pitch \u2014 apenas precis\u00e3o.'
                            : 'Agenda una llamada de estrategia de 15 minutos. Sin pitch \u2014 solo precisi\u00f3n.'}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to={`/${language}/contact`} className="btn-cta shadow-orange/30">
                            {language === 'en' ? 'Book My 15-Min Strategy Call \u2192'
                                : language === 'pt' ? 'Agendar Minha Call de Estrat\u00e9gia \u2192'
                                : 'Agendar Mi Call de Estrategia \u2192'}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
