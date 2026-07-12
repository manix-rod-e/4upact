
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, TrendingUp, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// ─── Animated image slideshow for Azulik ──────────────────────────────────
const AzulikSlideshow = ({ images }) => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setCurrent(c => (c + 1) % images.length), 2800);
        return () => clearInterval(t);
    }, [images.length]);
    return (
        <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
                <Motion.img
                    key={current}
                    src={images[current]}
                    alt="Azulik Tulum"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`} />
                ))}
            </div>
        </div>
    );
};

// ─── Video loop card ────────────────────────────────────────────────────────
const VideoCard = ({ src, poster }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { v.play().then(() => setPlaying(true)).catch(() => {}); }
            else { v.pause(); setPlaying(false); }
        }, { threshold: 0.3 });
        obs.observe(v);
        return () => obs.disconnect();
    }, []);
    return (
        <div className="w-full h-full relative">
            <video ref={videoRef} src={src} poster={poster} muted loop playsInline
                className="w-full h-full object-cover" />
            {!playing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <Play size={24} className="text-primary ml-1" fill="currentColor" />
                    </div>
                </div>
            )}
        </div>
    );
};

const Portfolio = () => {
    const { language, t } = useLanguage();

    const cardGradients = [
        'from-[#3C2A4D] via-[#4ECDC4]/40 to-[#5E3B6F]',    // FitKel — purple/teal
        'from-[#0d1f3c] via-[#1F70C1]/50 to-[#003d82]',     // IBM — deep blue
        'from-[#001830] via-[#0068B5]/50 to-[#0050a0]',     // Intel — Intel blue
        'from-[#0d2818] via-[#1b4332]/80 to-[#40916c]',     // Azulik — jungle green
        'from-[#1a1a2e] via-[#3a3a5c]/70 to-[#4ECDC4]',    // Studio Mum — dark/teal
        'from-[#1a2a1a] via-[#2d5a2d]/70 to-[#52b788]',    // Villamor — forest green
        'from-[#0f172a] via-[#312e81]/60 to-[#7C3AED]',    // 4U Planner — dark/violet
        'from-[#1c1c1c] via-[#2d2d2d]/70 to-[#F7941D]',    // Apartments — dark/orange
        'from-[#1a0a2a] via-[#5E3B6F]/70 to-[#F7941D]',    // emdrc — purple/orange
    ];

    const projects = [
        {
            id: 'fitkel-sensuale',
            title: 'FitKel Sensuale',
            category: language === 'en' ? 'Lingerie & Lifestyle Fashion' : language === 'es' ? 'Lencería & Moda Lifestyle' : 'Lingerie & Moda Lifestyle',
            impact: language === 'en' ? 'Full Stack Built' : 'Stack Completo',
            image: '/assets/fitkel/fks-brand.jpg',
            tags: ['Brand from Zero', 'GoHighLevel', 'AI Chatbot', 'Social Media'],
            links: [
                { label: 'Website', url: 'https://fitkelsensuale.com' },
                { label: 'Instagram', url: 'https://instagram.com/fitkelsensuale' },
            ],
            desc: language === 'en'
                ? 'Brand, website, all social media, GHL KPI dashboard, and Lara — an AI virtual stylist — all built from scratch for a lingerie lifestyle brand.'
                : language === 'es'
                ? 'Marca, sitio, redes completas, dashboard KPI en GHL y Lara — estilista virtual IA — todo desde cero para una marca de lencería.'
                : 'Marca, site, redes completas, dashboard KPI no GHL e Lara — estilista virtual IA — tudo do zero para uma marca de lingerie.',
        },
        {
            id: 'ibm-netvista',
            title: 'IBM NetVista',
            category: language === 'en' ? 'Fortune 500 · Product Management LatAm' : language === 'es' ? 'Fortune 500 · Gestión de Producto LatAm' : 'Fortune 500 · Gestão de Produto LatAm',
            impact: language === 'en' ? '#2 Branded PC · Closed 18pt Gap' : '#2 PC de Marca · Gap de 18pts',
            image: '/assets/ibm/ibm-hero.png',
            links: [{ label: 'IBM', url: 'https://www.ibm.com' }],
            tags: ['IBM', 'Product Manager', 'NetVista', 'LatAm'],
            desc: language === 'en'
                ? 'Led IBM NetVista product management across Latin America — closed an 18-point market share gap vs. Compaq to become the #2 Branded PC in the region.'
                : language === 'es'
                ? 'Lideré la gestión de producto de IBM NetVista en LatAm — cerré una brecha de 18 puntos vs. Compaq, convirtiéndonos en la #2 PC de Marca en la región.'
                : 'Liderou a gestão de produto da IBM NetVista na LatAm — fechou gap de 18 pontos vs. Compaq, tornando-se o #2 PC de Marca na região.',
        },
        {
            id: 'intel-latam',
            title: 'Intel Latin America',
            category: language === 'en' ? 'Fortune 500 · Product Director & Marketing Ops' : language === 'es' ? 'Fortune 500 · Director de Producto & Marketing Ops' : 'Fortune 500 · Diretor de Produto & Marketing Ops',
            impact: language === 'en' ? '5X Mobile Growth' : '5X Crescimento Mobile',
            image: '/assets/intel/intel-hero.png',
            links: [{ label: 'Intel', url: 'https://www.intel.com' }],
            tags: ['Intel', 'Product Director', 'Loyalty', 'Marketing Operations'],
            desc: language === 'en'
                ? 'Product Director for Intel LatAm. Led Loyalty & Marketing Operations for the entire region. Intel Honors Award winner. Datamation Top Professional 2001. 5X mobile growth.'
                : language === 'es'
                ? 'Director de Producto para Intel LatAm. Lideré Operaciones de Lealtad y Marketing para toda la región. Premio Intel Honors. Top Professional Datamation 2001.'
                : 'Diretor de Produto para Intel LatAm. Liderou Operações de Fidelidade e Marketing para toda a região. Prêmio Intel Honors. Top Professional Datamation 2001.',
        },
        {
            id: 'azulik-tulum',
            title: 'Azulik · Sfer Ik',
            category: language === 'en' ? 'Luxury Hospitality & Art · CMO' : language === 'es' ? 'Hospitalidad de Lujo & Arte · CMO' : 'Hospitalidade de Luxo & Arte · CMO',
            impact: '15X ROI · 2 Weeks',
            type: 'video',
            video: '/assets/videos/azulik.mp4',
            image: '/assets/azulik/aerial-nest.jpg',
            tags: ['Azulik', 'CMO', 'Luxury', 'Tulum', 'SEM'],
            links: [
                { label: 'Website', url: 'https://azulik.com' },
                { label: 'Instagram', url: 'https://instagram.com/azulik' },
            ],
            desc: language === 'en'
                ? 'CMO at the world\'s most followed hotel. Built 4 precise buyer personas and achieved 15X ROI in the first 2 weeks. Featured in NOWNESS and MEXX.'
                : language === 'es'
                ? 'CMO del hotel más seguido del mundo. Construí 4 buyer personas precisas y logré 15X ROI en las primeras 2 semanas. Destacado en NOWNESS y MEXX.'
                : 'CMO do hotel mais seguido do mundo. Construiu 4 buyer personas precisas e alcançou 15X ROI nas primeiras 2 semanas. Destaque no NOWNESS e MEXX.',
        },
        {
            id: 'studio-mum',
            title: 'Studio Mum',
            category: language === 'en' ? 'Maternity Brand Strategy & Identity' : language === 'es' ? 'Estrategia de Marca Maternidad' : 'Estratégia de Marca Maternidade',
            impact: 'Full Brand Identity',
            type: 'video',
            video: '/assets/videos/studiomum.mp4',
            image: '/assets/social_proof.png',
            tags: ['Brand Strategy', 'Logo Design', 'Identity System'],
            links: [{ label: 'Website', url: 'https://studiomum.com' }],
            desc: language === 'en'
                ? 'Brand strategy and logo celebrating the beauty of motherhood — curves and tummy literally built into the visual identity.'
                : language === 'es'
                ? 'Estrategia de marca y logo que celebra la belleza de la maternidad — curvas y barriga integradas en la identidad visual.'
                : 'Estratégia de marca e logo celebrando a beleza da maternidade — curvas e barriga integradas na identidade visual.',
        },
        {
            id: 'villamor-tambaba',
            title: 'Villamor Tambaba Resort',
            category: language === 'en' ? 'Resort Brand Launch — Northeast Brazil' : language === 'es' ? 'Lanzamiento de Marca — Brasil' : 'Lançamento de Marca — Nordeste Brasil',
            impact: language === 'en' ? 'R$50K Chatbot Sale' : 'Venda R$50K pelo Chatbot',
            type: 'video',
            video: '/assets/videos/villamor.mp4',
            image: '/assets/villamor/villamortambabaresort.png',
            tags: ['Brand Positioning', 'Website + AI Chatbot', 'B2B + B2C'],
            links: [{ label: 'Website', url: 'https://villamortambabaresort.com.br' }],
            desc: language === 'en'
                ? 'Built brand, website and AI chatbot from zero for a luxury resort in Northeast Brazil. A chatbot-assisted sale closed R$50,000 — no phone call, no agent.'
                : language === 'es'
                ? 'Construí la marca, el sitio web y el chatbot de IA desde cero para un resort de lujo en el Nordeste de Brasil. Una venta asistida por chatbot cerró R$50.000 — sin llamada, sin agente.'
                : 'Construiu marca, site e chatbot de IA do zero para um resort de luxo no Nordeste do Brasil. Uma venda via chatbot fechou R$50.000 — sem ligação, sem agente.',
        },
        {
            id: '4u-planner-mvp',
            title: '4U Planner MVP',
            category: language === 'en' ? 'Productivity App — Goal & Protocol System' : language === 'es' ? 'App de Productividad — Sistema de Metas y Protocolos' : 'App de Produtividade — Sistema de Metas e Protocolos',
            impact: language === 'en' ? 'Full MVP Built' : 'MVP Completo',
            type: 'video',
            video: '/assets/videos/4uplanner.mp4',
            image: '/assets/4upact-logo-512.png',
            tags: ['Product MVP', 'Mobile App', 'Goal Architecture'],
            desc: language === 'en'
                ? 'The 4U Planner MVP — a goal and protocol system designed around quarterly sprints, daily execution, and behavioral architecture. Built to turn big goals into repeatable daily actions.'
                : language === 'es'
                ? 'El MVP del 4U Planner — un sistema de metas y protocolos diseñado en torno a sprints trimestrales, ejecución diaria y arquitectura conductual. Creado para convertir grandes metas en acciones diarias repetibles.'
                : 'O MVP do 4U Planner — um sistema de metas e protocolos projetado em torno de sprints trimestrais, execução diária e arquitetura comportamental. Construído para transformar grandes metas em ações diárias repetíveis.',
        },
        {
            id: 'apartments-leaseup',
            title: 'ApartmentsLeaseUp',
            category: language === 'en' ? 'Real Estate Digital Marketing' : language === 'es' ? 'Marketing Digital Inmobiliario' : 'Marketing Digital Imobiliário',
            impact: 'Full Website Launch',
            image: '/assets/apartments/alue-logo.png',
            logo: '/assets/apartments/alue-logo.png',
            tags: ['Website Launch', 'Lead Gen', 'Real Estate CRM'],
            links: [{ label: 'Website', url: 'https://apartmentsleaseupexperts.com' }],
            desc: language === 'en'
                ? 'Complete website launch for apartment lease-up specialists — lead capture, brand presence, and CRM integration from day one.'
                : language === 'es'
                ? 'Lanzamiento completo de sitio web para especialistas en arrendamiento — captura de leads, presencia de marca e integración CRM desde el día uno.'
                : 'Lançamento completo de site para especialistas em locação — captação de leads, presença de marca e integração CRM desde o dia um.',
        },
        {
            id: 'emdrc-covid',
            title: 'EMDRC · COVID Launch',
            category: language === 'en' ? 'Emergency Digital Transformation · 5 Hours' : language === 'es' ? 'Transformación Digital de Emergencia · 5 Horas' : 'Transformação Digital de Emergência · 5 Horas',
            impact: language === 'en' ? 'Built in 5 Hours' : 'Construído em 5 Horas',
            type: 'video',
            video: '/assets/videos/emdrc.mp4',
            image: '/assets/hero_bg.png',
            tags: ['COVID Response', 'Emergency Build', '5 Hours', 'Digital Launch'],
            desc: language === 'en'
                ? 'During COVID lockdown, built and launched a complete website in 5 hours for an organization that needed to go digital immediately. Zero to live in one afternoon.'
                : language === 'es'
                ? 'Durante el confinamiento por COVID, construí y lancé un sitio web completo en 5 horas para una organización que necesitaba digitalizarse de inmediato.'
                : 'Durante o lockdown do COVID, construiu e lançou um site completo em 5 horas para uma organização que precisava ir digital imediatamente.',
        },
        {
            id: 'aepit-healthcare-analytics',
            title: 'AEPIT',
            category: language === 'en' ? 'Healthcare Analytics' : language === 'es' ? 'Analytics de Salud' : 'Analytics em Saúde',
            impact: language === 'en' ? 'Coming Q3 2026' : language === 'es' ? 'Disponible Q3 2026' : 'Disponível Q3 2026',
            image: '/assets/4upact-logo-512.png',
            tags: ['Healthcare Analytics', 'Case Study', 'Q3 2026'],
            placeholder: true,
            desc: language === 'en'
                ? 'Case study coming: AEPIT healthcare analytics. Real results from real clients. Numbers first, always.'
                : language === 'es'
                ? 'Caso próximamente: AEPIT healthcare analytics. Resultados reales de clientes reales. Números primero, siempre.'
                : 'Case em breve: AEPIT healthcare analytics. Resultados reais de clientes reais. Números primeiro, sempre.',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Case Studies | Proof Before Promise — 4U Pact</title>
                <meta name="description" content="Real results from real clients. Numbers first, always. Review 4U Pact case studies and upcoming AEPIT healthcare analytics proof." />
                <meta name="keywords" content="marketing case studies, IBM NetVista LatAm, Intel Product Director, 15X ROI Azulik, FitKel Sensuale, Rod Ezquerra portfolio" />
                <meta property="og:title" content="Case Studies | Proof Before Promise — 4U Pact" />
                <meta property="og:description" content="Real results from real clients. Numbers first, always." />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:url" content="https://4upact.com/en/portfolio" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://4upact.com/en/portfolio" />
            </Helmet>

            <section className="pt-48 pb-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mb-24">
                        <h1 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">{language === 'en' ? 'Proof Before Promise' : 'Selected Success Protocols'}</h1>
                        <h2 className="font-display text-5xl md:text-[100px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-10 uppercase">
                            {language === 'en' ? 'Real Results,' : 'Engenharia Provada,'} <br />
                            <span className="text-primary italic">{language === 'en' ? 'Real Clients.' : 'Resultados Reais.'}</span>
                        </h2>
                        <p className="text-xl text-slate-500 italic leading-relaxed border-l-4 border-teal pl-8">
                            {language === 'en'
                                ? '"Real results from real clients. Numbers first, always."'
                                : '"O sucesso não é um acidente. É o resultado de uma arquitetura meticulosa."'}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20">
                        {projects.map((project, idx) => (
                            <Motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="block">
                                    {/* ── Card visual ── */}
                                    <div className={`aspect-[16/10] rounded-[3.5rem] overflow-hidden mb-10 relative bg-gradient-to-br ${cardGradients[idx % cardGradients.length]}`}>

                                        {project.type === 'slideshow' ? (
                                            <AzulikSlideshow images={project.slides} />
                                        ) : project.type === 'video' ? (
                                            <VideoCard src={project.video} poster={project.image} />
                                        ) : project.logo ? (
                                            /* Logo-only card (ApartmentsLeaseUp) */
                                            <div className="w-full h-full flex items-center justify-center p-16">
                                                <img src={project.logo} alt={project.title}
                                                    className="max-w-[70%] max-h-[60%] object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" />
                                            </div>
                                        ) : (
                                            <img src={project.image} alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                                onError={(e) => { e.target.style.display = 'none'; }} />
                                        )}

                                        {/* Bottom gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none group-hover:from-black/10 transition-all duration-500" />

                                        {/* Impact badge + arrow */}
                                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                            <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                                                <span className="text-emerald-600 font-black text-sm flex items-center gap-2">
                                                    <TrendingUp size={16} /> {project.impact}
                                                </span>
                                            </div>
                                            <Link to={`/${language}/contact`}
                                                className="w-16 h-16 bg-orange rounded-2xl flex items-center justify-center text-slate-950 shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                                <ArrowRight size={28} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* ── Card text ── */}
                                    <div className="px-4">
                                        <div className="flex gap-3 mb-6 flex-wrap">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-4 py-1.5 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter uppercase">{project.title}</h3>
                                        <p className="text-xs font-black uppercase tracking-widest text-primary mb-4">{project.category}</p>
                                        <p className="text-lg text-slate-500 font-bold italic mb-6 leading-relaxed">
                                            "{project.desc}"
                                        </p>
                                        <div className="flex items-center gap-6 flex-wrap">
                                            {project.placeholder ? (
                                                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                                                    {language === 'en' ? 'Case Study Coming Q3 2026' : 'Case Study Q3 2026'}
                                                </span>
                                            ) : (
                                                <Link to={`/${language}/case/${project.id2 || project.id}`}
                                                    className="text-xs font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                                    {language === 'en' ? 'Read Case Study' : 'Ver Case Study'} <ArrowRight size={14} />
                                                </Link>
                                            )}
                                            {project.links && project.links.map(link => (
                                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                                                    className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-teal flex items-center gap-1.5 transition-colors">
                                                    <ExternalLink size={11} /> {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numerical Impact Section */}
            <section className="py-32 section-violet text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { val: '15X',  label: language === 'en' ? 'ROI in 2 Weeks · Azulik' : 'ROI en 2 Semanas · Azulik' },
                            { val: '5X',   label: language === 'en' ? 'Mobile Growth · Intel LatAm' : 'Crescimento Mobile · Intel LatAm' },
                            { val: '30+',  label: language === 'en' ? 'LinkedIn Recommendations' : 'Recomendações LinkedIn' },
                            { val: 'F500', label: language === 'en' ? 'IBM & Intel Experience' : 'Experiência IBM & Intel' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all transform hover:-translate-y-2">
                                <div className="text-5xl font-black mb-2 tracking-tighter uppercase text-teal">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-display text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-none uppercase">
                        {language === 'en' ? 'Your Next Case Study Begins Now.' : 'Seu Próximo Case Study Começa Agora.'}
                    </h2>
                    <Link to={`/${language}/contact`} className="btn-cta mx-auto">
                        {t.common.cta} <Star size={18} fill="currentColor" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
