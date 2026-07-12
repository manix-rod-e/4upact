
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { Database, TrendingUp, Zap, Workflow, Layers, CheckCircle2, Bot, Target, Smartphone, BarChart3, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CRMOffer = () => {
    const { language, t } = useLanguage();

    const verticalSnapshots = [
        {
            title: language === 'en' ? 'Info Product Creators' : language === 'pt' ? 'Criadores de Infoprodutos' : 'Creadores de Infoproductos',
            icon: Target,
            logic: language === 'en' ? 'Lead → Bot Qualify → VSL Redirect' : 'Lead → Bot Qualify → Redirect VSL',
            metric: '+140% Conv.',
            features: language === 'en' ? ['Automatic Enrollments', 'Checkout Recovery'] : ['Matrículas Automáticas', 'Recuperação de Checkout'],
            impact: language === 'en' ? 'Zero lead leaks.' : 'Zero vazamento de leads.'
        },
        {
            title: language === 'en' ? 'Real Estate Premium' : 'Imobiliário Premium',
            icon: Smartphone,
            logic: language === 'en' ? 'Portal Lead → Instant WA Call' : 'Lead Portal → Chamada WA Instantânea',
            metric: '45s Response',
            features: language === 'en' ? ['Lead Rotation', 'Tour Schedule'] : ['Rotação de Corretores', 'Agendamento de Visitas'],
            impact: language === 'en' ? 'Unbeatable speed.' : 'Velocidade imbatível.'
        },
        {
            title: language === 'en' ? 'Agencies & Experts' : language === 'pt' ? 'Agências e Experts' : 'Agencias y Expertos',
            icon: BarChart3,
            logic: language === 'en' ? 'Ad → Form → Setter AI' : 'Ad → Form → Setter AI',
            metric: '3x Pipeline',
            features: language === 'en' ? ['Setter Bot v2.0', 'Calendar Sync'] : ['Setter Bot v2.0', 'Sincronização Agenda'],
            impact: language === 'en' ? 'Scale consultations.' : 'Escala de consultorias.'
        },
        {
            title: language === 'en' ? 'Lifestyle Brands' : language === 'pt' ? 'Marcas de Lifestyle' : 'Marcas de Estilo de Vida',
            icon: Share2,
            logic: language === 'en' ? 'IG Click → DM Funnel → Loyalty' : 'Clique IG → Funil DM → Fidelidade',
            metric: 'ROAS 5.2x',
            features: language === 'en' ? ['Social CRM', 'Recurrent Billing'] : ['Social CRM', 'Recorrência'],
            impact: language === 'en' ? 'Predictable revenue.' : 'Faturamento previsível.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t.nav.crm} | 4U Pact Architecture</title>
                <meta name="description" content="Executive Sales Stack. Transform your CRM into a ROI-generating machine." />
            </Helmet>

            {/* --- INDUSTRIAL HERO --- */}
            <section className="pt-48 pb-32 bg-slate-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] -z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <h1 className="text-sm font-black text-teal uppercase tracking-[0.4em] mb-6 italic">{t.crm.badge}</h1>
                            <h2 className="font-display text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-10">
                                {t.crm.title.split(' ')[0]} <br /> <span className="text-primary italic">{t.crm.title.split(' ')[1]}</span> <br /> {t.crm.title.split(' ')[2]}
                            </h2>
                            <p className="text-xl text-slate-400 italic max-w-2xl mb-12 border-l-2 border-primary pl-8 leading-relaxed">
                                "{t.crm.subtitle}"
                            </p>
                            <Link to={`/${language}/contact`} className="btn-cta bg-orange text-slate-950">
                                {t.crm.cta} <Zap size={16} fill="white" />
                            </Link>
                        </Motion.div>

                        <div className="relative">
                            <Motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-900/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-3xl overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-primary to-orange" />
                                <div className="flex justify-between items-center mb-12">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Global Sales Cloud v2.4</div>
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal shadow-lg shadow-teal/50" />
                                        <span className="text-[10px] font-black text-teal uppercase">LIVE SYNC</span>
                                    </div>
                                </div>
                                <div className="space-y-12">
                                    {[
                                        { label: language === 'en' ? 'Unqualified Leads' : 'Leads Desqualificados', val: language === 'en' ? 'Minimal' : 'Mínimo', color: 'bg-emerald-400', w: '12%' },
                                        { label: language === 'en' ? 'Pipeline Velocity' : 'Velocidade Pipeline', val: '45s', color: 'bg-teal', w: '95%' },
                                        { label: language === 'en' ? 'ROAS Attribution' : 'Atribuição ROAS', val: 'Verified', color: 'bg-orange', w: '100%' }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3">
                                                <span className="text-slate-400">{stat.label}</span>
                                                <span className="text-white">{stat.val}</span>
                                            </div>
                                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <Motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.w }}
                                                    transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
                                                    className={`h-full ${stat.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE VERTICAL SNAPSHOTS --- */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Vertical Specific Engine</h2>
                        <h3 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">{t.crm.snapshots_title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {verticalSnapshots.map((item, i) => (
                            <Motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:bg-slate-950 hover:text-white transition-all duration-500 group overflow-hidden relative"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black tracking-tighter uppercase">{item.title}</h4>
                                            <p className="text-[10px] font-black uppercase text-slate-400 group-hover:text-teal transition-colors tracking-widest">Logic Optimized</p>
                                        </div>
                                    </div>
                                    <div className="text-teal font-black text-xl italic">{item.metric}</div>
                                </div>

                                <div className="bg-white/50 group-hover:bg-white/5 p-6 rounded-2xl border border-slate-100 group-hover:border-white/10 mb-8">
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">CORE LOGIC</div>
                                    <div className="text-sm font-bold flex items-center gap-2 group-hover:text-teal transition-colors">
                                        {item.logic} <ChevronRight size={14} />
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs font-bold italic text-slate-500 group-hover:text-slate-300">
                                            <CheckCircle2 size={16} className="text-teal" /> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm font-black uppercase tracking-widest text-primary group-hover:text-orange transition-colors">
                                    Impact: {item.impact}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CRMOffer;
