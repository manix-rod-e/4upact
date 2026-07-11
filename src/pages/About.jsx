import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { Linkedin, Zap, Target, Star, ShieldCheck, Heart, Users, Handshake, Brain, ArrowRight, TrendingUp, Sparkles, Quote, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { language, t } = useLanguage();
    const aboutHero = language === 'en'
        ? {
            badge: 'Architecture Over Activity',
            title: 'Architecture Over Activity.',
            role: '20+ years in marketing leadership at IBM and Intel across Latin America',
            quote: 'The gap was never effort. It was infrastructure.',
            intro: "Rod Ezquerra spent 20+ years in marketing leadership at IBM and Intel across Latin America. Now he builds revenue systems for founders who are done with noise.",
            mission: 'Most agencies sell activity: posts, campaigns, dashboards, meetings. 4U Pact builds commercial architecture: positioning, capture, automation, and CRM logic that turns attention into revenue.',
            proof: 'The imPACT method was created for operators who need a working revenue engine, not another disconnected marketing calendar.'
        }
        : null;

    const principles = [
        { icon: Star, title: language === 'en' ? 'Excellence' : language === 'es' ? 'Excelencia' : 'Excelência', desc: language === 'en' ? 'Constantly refining our craft to deliver exceptional results.' : language === 'es' ? 'Refinando constantemente nuestro oficio para entregar resultados excepcionales.' : 'Refinando constantemente nosso ofício para entregar resultados excepcionais.' },
        { icon: Handshake, title: language === 'en' ? 'Commitment' : language === 'es' ? 'Compromiso' : 'Compromisso', desc: language === 'en' ? 'A promise made is a promise kept.' : language === 'es' ? 'Una promesa hecha es una promesa cumplida.' : 'Uma promessa feita é uma promessa cumprida.' },
        { icon: Heart, title: language === 'en' ? 'Respect' : language === 'es' ? 'Respeto' : 'Respeito', desc: language === 'en' ? 'Respect for your time, goals, and brand.' : language === 'es' ? 'Respeto por tu tiempo, metas y marca.' : 'Respeito pelo seu tempo, metas e marca.' },
        { icon: ShieldCheck, title: language === 'en' ? 'Trust' : language === 'es' ? 'Confianza' : 'Confiança', desc: language === 'en' ? 'Built through transparency and fairness.' : language === 'es' ? 'Construida a través de la transparencia y la justicia.' : 'Construída através de transparência e justiça.' },
        { icon: Brain, title: language === 'en' ? 'Humbleness' : language === 'es' ? 'Humildad' : 'Humildade', desc: language === 'en' ? 'Embracing marginal gains and constant learning.' : language === 'es' ? 'Abrazando las ganancias marginales y el aprendizaje constante.' : 'Abraçando ganhos marginais e aprendizado constante.' },
        { icon: Users, title: language === 'en' ? 'Partnership' : language === 'es' ? 'Alianza' : 'Parceria', desc: language === 'en' ? "We don't sell; we co-create." : language === 'es' ? 'No vendemos; co-creamos.' : 'Não vendemos; co-criamos.' }
    ];

    const strategy = [
        { title: language === 'en' ? 'Strategic & Results-Driven' : language === 'es' ? 'Estratégico y Orientado a Resultados' : 'Estratégico e Orientado a Resultados', desc: language === 'en' ? 'We measure success in outcomes, not hours.' : language === 'es' ? 'Medimos el éxito en resultados, no en horas.' : 'Medimos o sucesso em resultados, não em horas.' },
        { title: language === 'en' ? 'Agile & Energetic' : language === 'es' ? 'Ágil y Enérgico' : 'Ágil e Enérgico', desc: language === 'en' ? "We bring a founder's passion to every project." : language === 'es' ? 'Traemos la pasión de un fundador a cada proyecto.' : 'Trazemos a paixão de um fundador a cada projeto.' },
        { title: language === 'en' ? 'Human & Approachable' : language === 'es' ? 'Humano y Accesible' : 'Humano e Acessível', desc: language === 'en' ? 'We avoid jargon and believe in real conversations.' : language === 'es' ? 'Evitamos la jerga y creemos en conversaciones reales.' : 'Evitamos jargão e acreditamos em conversas reais.' },
        { title: language === 'en' ? 'Confident & Direct' : language === 'es' ? 'Confiado y Directo' : 'Confiante e Direto', desc: language === 'en' ? "We speak with clarity. This isn't fluff—it's strategy." : language === 'es' ? 'Hablamos con claridad. Esto no es relleno — es estrategia.' : 'Falamos com clareza. Isso não é enrolação — é estratégia.' }
    ];

    return (
        <>
            <Helmet>
                <title>Architecture Over Activity | About Rod Ezquerra</title>
                <meta name="description" content="Rod Ezquerra brings 20+ years in IBM and Intel marketing leadership to 4U Pact revenue systems for founders who are done with noise." />
                <meta name="keywords" content="Rod Ezquerra, 4U Pact founder, marketing architect, IBM marketing director, Intel LatAm, marketing consultant, CRM specialist, brand strategy expert" />
                <meta property="og:title" content="Architecture Over Activity | About Rod Ezquerra" />
                <meta property="og:description" content="20+ years in marketing leadership at IBM and Intel across Latin America, now building revenue systems for founders." />
                <meta property="og:image" content="https://4upact.com/assets/logos.png" />
                <meta property="og:url" content="https://4upact.com/en/about" />
                <meta property="og:type" content="profile" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://4upact.com/en/about" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Rod Ezquerra",
                    "jobTitle": "Founder & Marketing Architect",
                    "worksFor": { "@type": "Organization", "name": "4U Pact", "url": "https://4upact.com" },
                    "description": "Former IBM & Intel LatAm marketing leader, CMO at Azulik Tulum, and founder of 4U Pact. Specialist in CRM architecture, brand DNA and high-performance revenue systems.",
                    "knowsAbout": ["CRM Architecture", "Marketing Automation", "Brand Strategy", "GoHighLevel", "Performance Marketing", "Revenue Systems"],
                    "alumniOf": ["IBM", "Intel"],
                    "sameAs": ["https://www.linkedin.com/in/rodezguerra"]
                })}</script>
            </Helmet>

            {/* --- HERO: Founder focus --- */}
            <section className="pt-48 pb-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <Motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-primary/10 to-orange/10 rounded-[4rem] -rotate-3 -z-10" />
                            <img src="/assets/rod-e.png" alt="Rodrigo Ezquerra — Founder & CEO, 4U Pact" className="rounded-[4rem] w-full h-[700px] object-cover transition-all duration-700 shadow-2xl hover:scale-[1.02]" />
                            <div className="absolute -bottom-10 -right-10 bg-slate-950 p-12 rounded-[2.5rem] shadow-3xl border border-white/5 max-w-xs text-white">
                                <div className="text-teal font-black text-3xl mb-2 italic tracking-tighter uppercase">RODRIGO</div>
                                <p className="text-slate-400 font-bold leading-relaxed text-sm italic">
                                    {language === 'en'
                                        ? `"${aboutHero.quote}"`
                                        : language === 'es'
                                        ? '"La arquitectura es la diferencia entre una marca que sobrevive y un negocio que escala."'
                                        : '"Arquitetura é a diferença entre uma marca que sobrevive e um negócio que escala."'}
                                </p>
                            </div>
                        </Motion.div>

                        <div>
                            <h1 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">{language === 'en' ? aboutHero.badge : t.about.founder_badge}</h1>
                            <h2 className="font-display text-5xl md:text-[80px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-4">
                                {language === 'en' ? 'Architecture' : 'Rodrigo'} <br /> <span className="text-slate-400 text-4xl md:text-5xl font-black italic">{language === 'en' ? 'Over Activity.' : 'Ezquerra'}</span>
                            </h2>
                            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-10">
                                {language === 'en' ? aboutHero.role : language === 'es' ? 'Fundador y CEO · Conocido como Rod' : 'Fundador e CEO · Conhecido como Rod'}
                            </p>
                            <div className="space-y-8 text-xl text-slate-600 font-bold italic leading-relaxed mb-12">
                                <p>
                                    {language === 'en'
                                        ? aboutHero.intro
                                        : language === 'es'
                                        ? "La carrera de Rodrigo fue forjada a escala Fortune 500 — liderando operaciones de marketing de alto rendimiento para IBM e Intel en América Latina. Esa precisión corporativa, combinada con el hambre de un fundador, se convirtió en la base de 4U Pact."
                                        : "A carreira de Rodrigo foi forjada em escala Fortune 500 — liderando operações de marketing de alta performance para IBM e Intel na América Latina. Essa precisão corporativa, combinada com a fome de um fundador, se tornou a base da 4U Pact."
                                    }
                                </p>
                                <div className="flex gap-6 items-center py-2">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 rounded-xl px-4 py-2">IBM</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 rounded-xl px-4 py-2">Intel</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 rounded-xl px-4 py-2">LatAm</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 rounded-xl px-4 py-2">Fortune 500</div>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-lg text-slate-500 border-l-4 border-primary">
                                    "{language === 'en' ? aboutHero.mission : t.about.mission}"
                                </div>
                                {language === 'en' && (
                                    <p>{aboutHero.proof}</p>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <a href="https://linkedin.com/in/rodrigoe" target="_blank" rel="noopener noreferrer" className="btn-cta bg-slate-950 text-white hover:bg-slate-900 shadow-slate-900/10">
                                    <Linkedin className="w-5 h-5" /> {language === 'en' ? 'LinkedIn Protocol' : language === 'es' ? 'Protocolo LinkedIn' : 'Protocolo LinkedIn'}
                                </a>
                                <div className="px-8 py-5 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-[9px] text-slate-400 flex items-center gap-3">
                                    <Star className="text-orange" size={16} fill="currentColor" /> {language === 'en' ? 'Enterprise Leadership' : language === 'es' ? 'Liderazgo Empresarial' : 'Liderança Empresarial'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MISSION & VISION --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 border-l-2 border-teal pl-12">
                        <div>
                            <h3 className="text-primary font-black uppercase text-xl mb-4 italic">
                                {language === 'en' ? 'Our Mission' : language === 'es' ? 'Nuestra Misión' : 'Nossa Missão'}
                            </h3>
                            <p className="text-2xl font-bold italic text-slate-600 leading-relaxed">
                                {language === 'en'
                                    ? 'To build smart, CRM-driven marketing systems that build trust, convert leads, and empower premium brands to scale sustainably and with confidence.'
                                    : language === 'es'
                                    ? 'Construir sistemas de marketing inteligentes impulsados por CRM que generen confianza, conviertan leads y empoderen marcas premium para escalar de forma sostenible y con confianza.'
                                    : 'Construir sistemas de marketing inteligentes orientados por CRM que construam confiança, convertam leads e empoderem marcas premium para escalar de forma sustentável e com confiança.'}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-primary font-black uppercase text-xl mb-4 italic">
                                {language === 'en' ? 'Our Vision' : language === 'es' ? 'Nuestra Visión' : 'Nossa Visão'}
                            </h3>
                            <p className="text-2xl font-bold italic text-slate-600 leading-relaxed">
                                {language === 'en'
                                    ? 'To be the essential partner for brands that aim to build lasting, loyal relationships with their customers in an increasingly automated world.'
                                    : language === 'es'
                                    ? 'Ser el socio esencial para marcas que buscan construir relaciones duraderas y leales con sus clientes en un mundo cada vez más automatizado.'
                                    : 'Ser o parceiro essencial para marcas que buscam construir relacionamentos duradouros e leais com seus clientes em um mundo cada vez mais automatizado.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ENTERPRISE DNA --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            {language === 'en' ? 'The Corporate Foundation' : language === 'es' ? 'La Fundación Corporativa' : 'A Fundação Corporativa'}
                        </h2>
                        <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
                            {language === 'en' ? 'Enterprise DNA. Startup Speed.' : language === 'es' ? 'ADN Empresarial. Velocidad de Startup.' : 'DNA Enterprise. Velocidade de Startup.'}
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 bg-slate-950 rounded-[3rem] text-white group hover:bg-primary transition-all">
                            <div className="text-teal font-black text-xs uppercase tracking-widest mb-4">Fortune 500</div>
                            <div className="text-3xl font-black mb-4 uppercase tracking-tighter">IBM LatAm</div>
                            <p className="text-slate-400 font-bold italic leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                                {language === 'en'
                                    ? 'Led enterprise marketing operations across Latin America for one of the world\'s most iconic tech brands.'
                                    : language === 'es'
                                    ? 'Lideró operaciones de marketing empresarial en América Latina para una de las marcas tecnológicas más icónicas del mundo.'
                                    : 'Liderou operações de marketing empresarial na América Latina para uma das marcas tecnológicas mais icônicas do mundo.'}
                            </p>
                        </div>
                        <div className="p-10 bg-slate-950 rounded-[3rem] text-white group hover:bg-primary transition-all">
                            <div className="text-orange font-black text-xs uppercase tracking-widest mb-4">Fortune 500</div>
                            <div className="text-3xl font-black mb-4 uppercase tracking-tighter">Intel LatAm</div>
                            <p className="text-slate-400 font-bold italic leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                                {language === 'en'
                                    ? 'Drove high-performance campaigns for Intel across Latin America — Fortune 500 precision in fast-moving regional markets.'
                                    : language === 'es'
                                    ? 'Impulsó campañas de alto rendimiento para Intel en América Latina — precisión Fortune 500 en mercados regionales de rápido movimiento.'
                                    : 'Impulsou campanhas de alta performance para a Intel na América Latina — precisão Fortune 500 em mercados regionais de rápido movimento.'}
                            </p>
                        </div>
                        <div className="p-10 bg-primary rounded-[3rem] text-white">
                            <div className="text-teal font-black text-xs uppercase tracking-widest mb-4">4U Pact</div>
                            <div className="text-3xl font-black mb-4 uppercase tracking-tighter">
                                {language === 'en' ? 'The Synthesis' : language === 'es' ? 'La Síntesis' : 'A Síntese'}
                            </div>
                            <p className="text-white/70 font-bold italic leading-relaxed text-sm">
                                {language === 'en'
                                    ? 'Fortune 500 marketing precision combined with founder-level agility. That\'s the unfair advantage 4U Pact brings to every client.'
                                    : language === 'es'
                                    ? 'Precisión de marketing Fortune 500 combinada con agilidad de nivel fundador. Esa es la ventaja injusta que 4U Pact aporta a cada cliente.'
                                    : 'Precisão de marketing Fortune 500 combinada com agilidade de nível fundador. Essa é a vantagem injusta que a 4U Pact traz para cada cliente.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GUIDING PRINCIPLES (GRID) --- */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            {language === 'en' ? 'The Pact Foundations' : language === 'es' ? 'Los Fundamentos del Pacto' : 'Os Fundamentos do Pacto'}
                        </h2>
                        <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            {language === 'en' ? 'Our Guiding Principles' : language === 'es' ? 'Nuestros Principios Guía' : 'Nossos Princípios Norteadores'}
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {principles.map((p, i) => (
                            <div key={i} className="text-center p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                    <p.icon size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{p.title}</h4>
                                <p className="text-slate-500 font-bold italic leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORPORATE STRATEGY WITH STARTUP ENERGY (VIOLET) --- */}
            <section className="py-32 section-violet text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-7xl font-black tracking-tighter leading-none uppercase mb-12">
                                {language === 'en' ? <>Corporate <br /> Strategy <br /> <span className="text-teal italic">With Startup Energy.</span></> : language === 'es' ? <>Estrategia <br /> Corporativa <br /> <span className="text-teal italic">Con Energía de Startup.</span></> : <>Estratégia <br /> Corporativa <br /> <span className="text-teal italic">Com Energia de Startup.</span></>}
                            </h2>
                            <div className="grid gap-8">
                                {strategy.map((s, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-1.5 h-1.5 bg-teal rounded-full mt-3 group-hover:scale-150 transition-transform" />
                                        <div>
                                            <h4 className="text-xl font-black uppercase mb-1">{s.title}</h4>
                                            <p className="text-slate-400 font-bold italic">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Static Bars Graphical Element */}
                        <div className="flex flex-col justify-end h-full">
                            <div className="grid grid-cols-4 gap-4 items-end h-[400px]">
                                {[
                                    { height: '40%', label: 'STRATEGY', color: 'bg-primary' },
                                    { height: '60%', label: 'SALES', color: 'bg-teal' },
                                    { height: '85%', label: 'LOYALTY', color: 'bg-orange' },
                                    { height: '100%', label: 'GROWTH', color: 'bg-white' }
                                ].map((bar, i) => (
                                    <div key={i} className="flex flex-col items-center gap-6 group">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 origin-left -rotate-90 whitespace-nowrap mb-12 group-hover:text-white transition-colors">
                                            {bar.label}
                                        </div>
                                        <div
                                            className={`${bar.color} w-full rounded-2xl shadow-2xl relative`}
                                            style={{ height: bar.height }}
                                        >
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- METHODOLOGY: imPACT --- */}
            <section className="py-32 bg-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-primary font-black uppercase tracking-[0.4em] mb-6">
                            {language === 'en' ? 'The Methodology' : language === 'es' ? 'La Metodología' : 'A Metodologia'}
                        </h2>
                        <h3 className="font-display text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight uppercase">
                            Arquitetura <span className="text-primary italic">imPACT.</span>
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { letters: 'im', title: 'IMMEDIACY', desc: language === 'en' ? 'We eliminate dead time. The lead waits seconds, not hours. Mastery of the first 45 seconds.' : language === 'es' ? 'Eliminamos el "tiempo muerto". El lead espera segundos, no horas. Dominio de los primeros 45 segundos.' : 'Acabamos com o "tempo morto". O lead espera segundos, não horas. Domínio dos primeiros 45 segundos.' },
                            { letters: 'PAC', title: 'PACING', desc: language === 'en' ? 'Cadence architecture. We monitor the rhythm of each lead to ensure follow-up without harassment.' : language === 'es' ? 'Arquitectura de cadencia. Monitoreamos el ritmo de cada lead para garantizar seguimiento sin persecución.' : 'Arquitetura de cadência. Monitoramos o ritmo de cada lead para garantir follow-up sem perseguição.' },
                            { letters: 'T', title: 'TRACKING', desc: language === 'en' ? 'Total transparency. Every click is tracked all the way to actual revenue in your bank.' : language === 'es' ? 'Transparencia total. Cada clic se rastrea hasta la facturación real en tu banco.' : 'Transparência total. Cada clique é rastreado até o faturamento real no seu banco.' }
                        ].map((item, i) => (
                            <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl transition-all group overflow-hidden relative">
                                <div className="text-8xl font-black text-slate-200/50 group-hover:text-primary/5 transition-colors absolute -top-4 -left-4 pointer-events-none">{item.letters}</div>
                                <div className="flex flex-col h-full relative z-10">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform"><Zap size={24} /></div>
                                    <h4 className="text-2xl font-black tracking-tighter text-slate-900 mb-6 uppercase">{item.title}</h4>
                                    <p className="text-slate-500 font-bold italic text-lg leading-relaxed">"{item.desc}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ORIGIN STORY — Why 4U Pact --- */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            <Sparkles className="inline w-4 h-4 mr-2" />
                            {language === 'en' ? 'Our Origin Story' : language === 'es' ? 'Nuestra Historia' : 'Nossa História'}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            {language === 'en' ? 'Why "4U Pact"?' : language === 'es' ? '¿Por Qué "4U Pact"?' : 'Por Que "4U Pact"?'}
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-lg text-slate-600 leading-relaxed mb-6 border-l-4 border-primary pl-6">
                                {language === 'en'
                                    ? '"4U Pact" stands for "FOR YOU — with imPACT." It was born from a simple belief: marketing should serve people first. I\'ve always loved to serve, to build something that genuinely moves the needle for others. That\'s the pact — everything we do is for you, with measurable impact.'
                                    : language === 'es'
                                    ? '"4U Pact" significa "PARA TI — con imPACTo." Nació de una creencia simple: el marketing debe servir a las personas primero. Siempre me encantó servir, construir algo que genuinamente mueva la aguja para otros. Ese es el pacto — todo lo que hacemos es para ti, con impacto medible.'
                                    : '"4U Pact" significa "PARA VOCÊ — com imPACTo." Nasceu de uma crença simples: o marketing deve servir às pessoas primeiro. Sempre amei servir, construir algo que genuinamente mova a agulha para os outros. Esse é o pacto — tudo que fazemos é para você, com impacto mensurável.'}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {language === 'en'
                                    ? 'The logo was designed by my daughter, Blumeke. She saw what I was building and sketched ascending bar charts — the universal sign of growth. That sketch became our mark: a visual promise that working with us means moving up.'
                                    : language === 'es'
                                    ? 'El logo fue diseñado por mi hija, Blumeke. Ella vio lo que estaba construyendo y dibujó gráficos de barras ascendentes — el signo universal de crecimiento. Ese boceto se convirtió en nuestra marca: una promesa visual de que trabajar con nosotros significa crecer.'
                                    : 'O logo foi desenhado pela minha filha, Blumeke. Ela viu o que eu estava construindo e esboçou gráficos de barras ascendentes — o sinal universal de crescimento. Esse esboço se tornou nossa marca: uma promessa visual de que trabalhar conosco significa crescer.'}
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <Quote size={20} className="text-primary mb-2" />
                                <p className="text-sm italic text-slate-500">
                                    {language === 'en'
                                        ? '"Every bar in our logo is a step higher — that\'s the promise we make to every client."'
                                        : language === 'es'
                                        ? '"Cada barra en nuestro logo es un paso más alto — esa es la promesa que hacemos a cada cliente."'
                                        : '"Cada barra no nosso logo é um degrau a mais — essa é a promessa que fazemos a cada cliente."'}
                                </p>
                                <p className="text-xs font-black text-primary mt-2 uppercase tracking-widest">— Rod Ezquerra</p>
                            </div>
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-10 p-8 rounded-[2.5rem] bg-slate-950 border border-white/10 shadow-2xl">
                                <img src="/assets/4upact-logo-correct.png" alt="4U Pact Logo" className="h-[100px] w-[100px] object-contain mx-auto" />
                                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-4">
                                    {language === 'en' ? 'Designed by Blumeke Ezquerra' : language === 'es' ? 'Diseñado por Blumeke Ezquerra' : 'Desenhado por Blumeke Ezquerra'}
                                </p>
                            </div>

                            <div className="w-full space-y-4">
                                <h4 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
                                    <Palette className="inline w-3.5 h-3.5 mr-2" />
                                    {language === 'en' ? 'Our Colors, Our Values' : language === 'es' ? 'Nuestros Colores, Nuestros Valores' : 'Nossas Cores, Nossos Valores'}
                                </h4>
                                {[
                                    {
                                        color: 'bg-primary',
                                        name: language === 'en' ? 'Pact Purple' : language === 'es' ? 'Púrpura Pacto' : 'Roxo Pacto',
                                        values: language === 'en'
                                            ? 'Trust & Commitment — A promise made is a promise kept.'
                                            : language === 'es'
                                            ? 'Confianza y Compromiso — Una promesa hecha es una promesa cumplida.'
                                            : 'Confiança e Compromisso — Uma promessa feita é uma promessa cumprida.',
                                    },
                                    {
                                        color: 'bg-teal',
                                        name: language === 'en' ? 'Impact Teal' : language === 'es' ? 'Teal Impacto' : 'Teal Impacto',
                                        values: language === 'en'
                                            ? 'Excellence & Partnership — We co-create, constantly refining.'
                                            : language === 'es'
                                            ? 'Excelencia y Asociación — Co-creamos, refinando constantemente.'
                                            : 'Excelência e Parceria — Co-criamos, refinando constantemente.',
                                    },
                                    {
                                        color: 'bg-orange',
                                        name: language === 'en' ? 'Growth Orange' : language === 'es' ? 'Naranja Crecimiento' : 'Laranja Crescimento',
                                        values: language === 'en'
                                            ? 'Respect & Humbleness — Embracing marginal gains with care.'
                                            : language === 'es'
                                            ? 'Respeto y Humildad — Abrazando ganancias marginales con cuidado.'
                                            : 'Respeito e Humildade — Abraçando ganhos marginais com cuidado.',
                                    },
                                ].map((item, i) => (
                                    <Motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-500 group"
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                                        <div>
                                            <div className="text-xs font-black uppercase tracking-widest text-slate-900">{item.name}</div>
                                            <div className="text-sm text-slate-500 mt-0.5">{item.values}</div>
                                        </div>
                                    </Motion.div>
                                ))}
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS --- */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                            {language === 'en' ? 'Peer Endorsements' : language === 'es' ? 'Testimonios de Colegas' : 'Depoimentos de Colegas'}
                        </h2>
                        <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">
                            {language === 'en' ? 'What Leaders Say' : language === 'es' ? 'Lo Que Dicen los Líderes' : 'O Que Dizem os Líderes'}
                        </h3>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {[
                            { name: 'Edu Lotfi', role: 'TikTok · Meta · Intel', text: 'I worked with Rodrigo for over three years, and he is one of the most dedicated professionals I\u2019ve had the pleasure of collaborating with. His commitment to excellence in everything he does is impressive.', color: 'border-teal' },
                            { name: 'Hernán Ramírez', role: 'CMO at Azulik', text: 'Rodrigo is an incredible human being with a very entrepreneurial vision. Very dedicated and focused on objectives and goals. If you have the opportunity to work with him, go ahead!', color: 'border-orange' },
                            { name: 'Brent McCray', role: 'Intel', text: 'I had the pleasure of working with Rodrigo on many events across the Americas. He is a talented marketing professional with a real passion for what he does. Rodrigo is an extremely kind, smart, and creative human being.', color: 'border-primary' },
                            { name: 'Mariano Yacovino', role: 'Ex-Intel', text: 'Rodrigo is one of the best professionals I have worked with in my career. He has an extraordinary ability to combine creative vision with business impact, and a discipline for execution that distinguishes any high-performance team.', color: 'border-teal' },
                            { name: 'Marcos Lacerda', role: 'SUSE · AWS · Intel', text: 'Rodrigo was a key person at Intel. His exceptional skills and dedication to the success of the marketing programs in Latin America were truly remarkable. Rodrigo consistently went above and beyond.', color: 'border-orange' },
                            { name: 'Carlos Ibarra', role: 'Azulik', text: 'Rodrigo brings unmatched energy and passion. His ability to structure marketing processes and build lasting brand connections is rare. A true partner in growth.', color: 'border-primary' },
                            { name: 'Phil Topness', role: 'Microsoft · Intel', text: 'In all of my work with Rodrigo, I was always impressed at his positive and charismatic attitude, as well as his ability to create compelling marketing campaigns that truly connected with audiences.', color: 'border-teal' },
                            { name: 'Michael de la Cruz', role: 'Microsoft · Google · Intel', text: 'Rodrigo is a fantastic marketing professional. He is creative, data-driven and has a deep understanding of the Latin American market. A pleasure to work with.', color: 'border-orange' },
                            { name: 'Paulo de Tarso M Gomes', role: 'Dell · IBM', text: 'Rodrigo is an outstanding professional — strategic, creative, and relentlessly focused on results. His energy and marketing acumen make him an exceptional partner for any business challenge.', color: 'border-primary' }
                        ].map((t, i) => (
                            <Motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`break-inside-avoid bg-white rounded-[2.5rem] p-10 border-l-4 ${t.color} shadow-sm hover:shadow-xl transition-all`}
                            >
                                <p className="text-slate-600 font-bold italic leading-relaxed mb-6">"{t.text}"</p>
                                <div>
                                    <p className="font-black text-slate-900 text-sm uppercase tracking-wider">{t.name}</p>
                                    {t.role && <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{t.role}</p>}
                                </div>
                            </Motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a href="https://linkedin.com/in/rodrigoe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-xl">
                            <Linkedin size={18} />
                            {language === 'en' ? 'See All on LinkedIn' : language === 'es' ? 'Ver Todos en LinkedIn' : 'Ver Todos no LinkedIn'}
                        </a>
                    </div>
                </div>
            </section>

            {/* --- LANGUAGES + SPORTS (Personal Story) --- */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">

                        {/* Languages Column */}
                        <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
                                {language === 'en' ? 'Languages' : language === 'es' ? 'Idiomas' : 'Idiomas'}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-12">
                                {language === 'en' ? 'Built for the World.' : language === 'es' ? 'Hecho para el Mundo.' : 'Feito para o Mundo.'}
                            </h3>
                            <div className="space-y-7">
                                {[
                                    { lang: 'English', flag: '🇺🇸', level: language === 'en' ? 'Fluent' : 'Fluente', bar: 100, color: 'from-[#5E3B6F] to-[#4ECDC4]' },
                                    { lang: 'Español', flag: '🇦🇷', level: language === 'en' ? 'Fluent · Native' : language === 'es' ? 'Fluente · Nativo' : 'Fluente · Nativo', bar: 100, color: 'from-[#5E3B6F] to-[#4ECDC4]' },
                                    { lang: 'Português', flag: '🇧🇷', level: language === 'en' ? 'Fluent' : 'Fluente', bar: 95, color: 'from-[#5E3B6F] to-[#4ECDC4]' },
                                    { lang: 'Italiano', flag: '🇮🇹', level: language === 'en' ? 'Learning · Loves to Practice' : language === 'es' ? 'Aprendiendo · Le Encanta Practicar' : 'Aprendendo · Adora Praticar', bar: 42, color: 'from-[#F7941D] to-[#F7941D]/60' },
                                    { lang: 'Deutsch', flag: '🇩🇪', level: language === 'en' ? 'Learning · Loves to Practice' : language === 'es' ? 'Aprendiendo · Le Encanta Practicar' : 'Aprendendo · Adora Praticar', bar: 30, color: 'from-[#F7941D] to-[#F7941D]/40' },
                                ].map((l, i) => (
                                    <div key={i} className="flex items-center gap-5 group">
                                        <span className="text-3xl flex-shrink-0">{l.flag}</span>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-black text-sm text-slate-900 uppercase tracking-[0.15em]">{l.lang}</span>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{l.level}</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full bg-gradient-to-r ${l.color}`} style={{ width: `${l.bar}%` }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-slate-500 font-bold italic leading-relaxed border-l-4 border-primary pl-6">
                                {language === 'en'
                                    ? '"Speaking someone\'s language is the fastest way to earn their trust." Rodrigo brings this belief to every client relationship — and every market.'
                                    : language === 'es'
                                    ? '"Hablar el idioma de alguien es la forma más rápida de ganarse su confianza." Rodrigo lleva esta creencia a cada relación con el cliente — y cada mercado.'
                                    : '"Falar o idioma de alguém é a forma mais rápida de conquistar sua confiança." Rodrigo leva essa crença para cada relacionamento com o cliente — e cada mercado.'}
                            </p>
                        </Motion.div>

                        {/* Sports Column */}
                        <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-8">
                            <div>
                                <h2 className="text-sm font-black text-orange uppercase tracking-[0.4em] mb-4">
                                    {language === 'en' ? 'The Human Behind the Strategy' : language === 'es' ? 'El Humano Detrás de la Estrategia' : 'O Humano Por Trás da Estratégia'}
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                                    {language === 'en' ? 'Champions run in the family.' : language === 'es' ? 'Los campeones corren en la familia.' : 'Campeões correm na família.'}
                                </h3>
                            </div>

                            {/* Skiing Card — Mom highlighted first */}
                            <div className="p-10 bg-white rounded-[3rem] border border-slate-200 shadow-sm group hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-4xl">⛷️</span>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-primary">Skiing</h4>
                                </div>
                                <p className="text-slate-600 font-bold italic leading-relaxed">
                                    {language === 'en'
                                        ? "The mountains have always been home. His father was 4x Argentine Skiing Champion. His mother was 3x Argentine Skiing Champion. Rodrigo grew up racing down slopes that built resilience, precision, and an instinct for reading terrain — skills that translate directly to market strategy."
                                        : language === 'es'
                                        ? "Las montañas siempre han sido su hogar. Su padre fue 4 veces Campeón Argentino de Ski. Su madre fue 3 veces Campeona Argentina de Ski. Rodrigo creció bajando pistas que construyeron resiliencia, precisión e instinto para leer el terreno — habilidades que se traducen directamente en estrategia de mercado."
                                        : "As montanhas sempre foram lar. Seu pai foi 4x Campeão Argentino de Ski. Sua mãe foi 3x Campeã Argentina de Ski. Rodrigo cresceu descendo pistas que construíram resiliência, precisão e instinto para ler o terreno — habilidades que se traduzem diretamente em estratégia de mercado."
                                    }
                                </p>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-teal/5 border border-teal/20 rounded-xl text-teal">🥇 Mom: 3x Argentine Champion</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-primary/5 border border-primary/20 rounded-xl text-primary">🥇 Dad: 4x Argentine Champion</span>
                                </div>
                            </div>

                            {/* Motocross Card */}
                            <div className="p-10 bg-slate-950 rounded-[3rem] text-white group hover:bg-[#1a0a2e] transition-all">
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-4xl">🏍️</span>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-orange">Motocross</h4>
                                </div>
                                <p className="text-slate-300 font-bold italic leading-relaxed">
                                    {language === 'en'
                                        ? "Rodrigo grew up on bikes. His father was Argentine Motocross Champion — passing his relentless competitive spirit directly to his son. That same fire powers every strategy Rodrigo builds."
                                        : language === 'es'
                                        ? "Rodrigo creció entre motos. Su padre fue Campeón Argentino de Motocross — transmitiendo directamente su espíritu competitivo a su hijo. Ese mismo fuego impulsa cada estrategia que Rodrigo construye."
                                        : "Rodrigo cresceu entre motos. Seu pai foi Campeão Argentino de Motocross — transmitindo diretamente seu espírito competitivo implacável ao filho. Esse mesmo fogo alimenta cada estratégia que Rodrigo constrói."
                                    }
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/20 rounded-xl">
                                    <span className="text-orange text-[10px] font-black uppercase tracking-widest">🥇 Dad: Argentine Champion</span>
                                </div>
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* --- LIFE JOURNEY --- */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-teal uppercase tracking-[0.4em] mb-4">
                            {language === 'en' ? 'The Journey' : language === 'es' ? 'El Recorrido' : 'A Jornada'}
                        </h2>
                        <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                            {language === 'en' ? 'A Life in Motion.' : language === 'es' ? 'Una Vida en Movimiento.' : 'Uma Vida em Movimento.'}
                        </h3>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative border-l-2 border-primary/20 pl-10 space-y-12">
                            {[
                                { flag: '🇦🇷', place: 'Bariloche, Argentina', detail: language === 'en' ? 'Grew up in the mountains of Patagonia — skiing, competing, and building the competitive fire that would define his career.' : language === 'es' ? 'Creció en las montañas de la Patagonia — esquiando, compitiendo y forjando el fuego competitivo que definiría su carrera.' : 'Cresceu nas montanhas da Patagônia — esquiando, competindo e construindo o fogo competitivo que definiria sua carreira.', accent: 'bg-primary' },
                                { flag: '🇺🇸', place: 'White Pass, Washington', detail: language === 'en' ? 'Competed in the US Junior Olympic Qualifier — ranked 11th in Giant Slalom.' : language === 'es' ? 'Compitió en el Clasificatorio Junior Olímpico de EE.UU. — clasificó 11° en Slalom Gigante.' : 'Competiu no Classificatório Junior Olímpico dos EUA — classificou 11° no Slalom Gigante.', accent: 'bg-teal' },
                                { flag: '🇪🇸', place: 'Benasque, Spain', detail: language === 'en' ? 'Lived and trained at Cerler ski resort — expanding horizons across the Atlantic.' : language === 'es' ? 'Vivió y entrenó en la estación de esquí de Cerler — expandiendo horizontes al otro lado del Atlántico.' : 'Viveu e treinou na estação de esqui de Cerler — expandindo horizontes do outro lado do Atlântico.', accent: 'bg-orange' },
                                { flag: '🇺🇸', place: 'Stillwater, Oklahoma', detail: language === 'en' ? 'Rotary Exchange Student. Won the Oklahoma State Junior Achievement MESE competition (1989) and represented the state at Nationals at Bloomington University.' : language === 'es' ? 'Estudiante de intercambio Rotary. Ganó la competencia MESE de Junior Achievement del Estado de Oklahoma (1989) y representó al estado en los Nacionales en Bloomington University.' : 'Estudante de intercâmbio Rotary. Venceu a competição MESE do Junior Achievement do Estado de Oklahoma (1989) e representou o estado nos Nacionais na Bloomington University.', accent: 'bg-primary' },
                                { flag: '🇦🇷', place: language === 'en' ? 'Córdoba, Argentina' : 'Córdoba, Argentina', detail: language === 'en' ? 'Studied at Universidad Católica de Córdoba — building the academic foundation.' : language === 'es' ? 'Estudió en la Universidad Católica de Córdoba — construyendo los cimientos académicos.' : 'Estudou na Universidade Católica de Córdoba — construindo a base acadêmica.', accent: 'bg-teal' },
                                { flag: '🇨🇭', place: 'St. Moritz, Switzerland', detail: language === 'en' ? 'Spent 3 years as a ski instructor while funding his education — discipline meets alpine precision.' : language === 'es' ? 'Pasó 3 años como instructor de esquí mientras financiaba su educación — disciplina con precisión alpina.' : 'Passou 3 anos como instrutor de esqui enquanto financiava sua educação — disciplina com precisão alpina.', accent: 'bg-primary' },
                                { flag: '🇦🇹', place: 'Klagenfurt, Austria', detail: language === 'en' ? 'Invited by mentor Jure Novljan to work at Agrochem and Petrochem — a pivotal chapter in business leadership.' : language === 'es' ? 'Invitado por su mentor Jure Novljan a trabajar en Agrochem y Petrochem — un capítulo decisivo en liderazgo empresarial.' : 'Convidado pelo mentor Jure Novljan para trabalhar na Agrochem e Petrochem — um capítulo decisivo em liderança empresarial.', accent: 'bg-teal' },
                                { flag: '🇦🇷', place: 'Buenos Aires, Argentina', detail: language === 'en' ? 'Launched his professional career. Completed a Postgraduate in International Marketing from Universidad de Belgrano. Became father to Ben & Sere.' : language === 'es' ? 'Lanzó su carrera profesional. Completó un Posgrado en Marketing Internacional de la Universidad de Belgrano. Se convirtió en padre de Ben y Sere.' : 'Lançou sua carreira profissional. Completou Pós-Graduação em Marketing Internacional na Universidad de Belgrano. Tornou-se pai de Ben e Sere.', accent: 'bg-orange' },
                                { flag: '🇺🇸', place: 'Folsom, California', detail: language === 'en' ? 'Relocated with Intel to one of their global headquarters — Fortune 500 at the epicenter.' : language === 'es' ? 'Se mudó con Intel a una de sus sedes globales — Fortune 500 en el epicentro.' : 'Mudou-se com a Intel para uma das sedes globais — Fortune 500 no epicentro.', accent: 'bg-orange' },
                                { flag: '🇧🇷', place: language === 'en' ? 'São Paulo, Brazil (2006–2017)' : language === 'es' ? 'São Paulo, Brasil (2006–2017)' : 'São Paulo, Brasil (2006–2017)', detail: language === 'en' ? 'Over a decade leading marketing operations for IBM and Intel across Latin America — the corporate forge.' : language === 'es' ? 'Más de una década liderando operaciones de marketing para IBM e Intel en América Latina — la forja corporativa.' : 'Mais de uma década liderando operações de marketing para IBM e Intel na América Latina — a forja corporativa.', accent: 'bg-primary' },
                                { flag: '🇺🇸', place: 'Miami, Florida', detail: language === 'en' ? 'Founded a gym — testing the entrepreneurial waters for the first time.' : language === 'es' ? 'Fundó un gimnasio — probando las aguas emprendedoras por primera vez.' : 'Fundou uma academia — testando as águas empreendedoras pela primeira vez.', accent: 'bg-teal' },
                                { flag: '🇲🇽', place: 'Tulum, Mexico', detail: language === 'en' ? 'CMO at Azulik — delivering 15X ROI and building luxury hospitality marketing from the ground up.' : language === 'es' ? 'CMO en Azulik — logrando 15X ROI y construyendo marketing de hospitalidad de lujo desde cero.' : 'CMO na Azulik — entregando 15X ROI e construindo marketing de hospitalidade de luxo do zero.', accent: 'bg-orange' },
                                { flag: '🇧🇷', place: language === 'en' ? 'Brasília, Brazil' : language === 'es' ? 'Brasília, Brasil' : 'Brasília, Brasil', detail: language === 'en' ? 'Settled with wife Raquel Ferreira and dedicated full focus to building 4U Pact — the synthesis of 20+ years of Fortune 500 precision and founder energy.' : language === 'es' ? 'Se estableció con su esposa Raquel Ferreira y dedicó todo su enfoque a construir 4U Pact — la síntesis de 20+ años de precisión Fortune 500 y energía de fundador.' : 'Estabeleceu-se com sua esposa Raquel Ferreira e dedicou foco total à construção da 4U Pact — a síntese de 20+ anos de precisão Fortune 500 e energia de fundador.', accent: 'bg-primary' },
                            ].map((stop, i) => (
                                <Motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="relative group"
                                >
                                    <div className={`absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full ${stop.accent} border-4 border-white shadow-sm group-hover:scale-125 transition-transform`} />
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl flex-shrink-0 mt-0.5">{stop.flag}</span>
                                        <div>
                                            <h4 className="font-black text-lg text-slate-900 uppercase tracking-tight">{stop.place}</h4>
                                            <p className="text-slate-500 font-bold italic leading-relaxed mt-1">{stop.detail}</p>
                                        </div>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>

                        <div className="mt-16 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center">
                            <p className="text-slate-500 font-bold italic text-lg leading-relaxed">
                                {language === 'en'
                                    ? '"Every city shaped my perspective. Every culture sharpened my instincts. This journey is the reason 4U Pact understands markets — not just metrics."'
                                    : language === 'es'
                                    ? '"Cada ciudad moldeó mi perspectiva. Cada cultura afinó mis instintos. Este recorrido es la razón por la que 4U Pact entiende mercados — no solo métricas."'
                                    : '"Cada cidade moldou minha perspectiva. Cada cultura afinou meus instintos. Essa jornada é a razão pela qual a 4U Pact entende mercados — não apenas métricas."'}
                            </p>
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mt-4">— Rod</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none uppercase">
                        {language === 'en' ? <>Ready for <br /> <span className="text-primary italic">Your Next Level?</span></> : language === 'es' ? <>Listo para <br /> <span className="text-primary italic">Tu Próximo Nivel?</span></> : <>Pronto para o <br /> <span className="text-primary italic">Seu Próximo Nível?</span></>}
                    </h2>
                    <Link to={`/${language}/contact`} className="btn-cta mx-auto">
                        {language === 'en' ? 'Start Free Diagnostic' : language === 'es' ? 'Iniciar Diagnóstico Gratuito' : 'Iniciar Diagnóstico Gratuito'} <ArrowRight />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
