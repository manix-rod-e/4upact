import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Layers, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { language, t } = useLanguage();
    const services = t.services;
    const pillarIcons = [Target, Zap, Layers];

    return (
        <>
            <Helmet>
                <title>{services.metaTitle}</title>
                <meta name="description" content={services.metaDescription} />
                <meta name="keywords" content="4U Pact services, imPACT method, revenue engine, CRM architecture, lead capture, marketing automation" />
                <meta property="og:title" content={services.metaTitle} />
                <meta property="og:description" content={services.subtitle} />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:url" content={`https://4upact.com/${language}/services`} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={`https://4upact.com/${language}/services`} />
            </Helmet>

            <section className="pt-44 pb-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">{services.badge}</p>
                        <h1 className="font-display text-5xl md:text-[96px] font-black text-slate-900 tracking-tighter leading-[0.88] mb-10">
                            {services.title} <br />
                            <span className="text-primary italic">{services.titleAccent}</span>
                        </h1>
                        <p className="text-xl text-slate-500 italic leading-relaxed border-l-4 border-teal pl-8 max-w-2xl">
                            “{services.subtitle}”
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {services.pillars.map((pillar, index) => {
                            const Icon = pillarIcons[index];
                            return (
                                <article
                                    id={pillar.id}
                                    key={pillar.id}
                                    className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                            <Icon size={26} />
                                        </div>
                                        <span className="text-sm font-black text-teal">{pillar.number}</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4">{pillar.title}</h2>
                                    <p className="text-xl text-primary font-black italic leading-tight mb-6">{pillar.headline}</p>
                                    <p className="text-slate-500 font-bold leading-relaxed mb-10">{pillar.body}</p>
                                    <ul className="space-y-4">
                                        {pillar.outcomes.map((outcome) => (
                                            <li key={outcome} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 md:p-16 shadow-xl shadow-primary/5">
                        <p className="text-xs font-black text-teal uppercase tracking-[0.35em] mb-6">{services.clientStory.badge}</p>
                        <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                            {services.clientStory.title}
                        </h2>
                        <p className="text-lg text-slate-500 font-bold leading-relaxed mb-10 max-w-3xl">
                            {services.clientStory.body}
                        </p>
                        <ul className="flex flex-wrap gap-3">
                            {services.clientStory.outcomes.map((outcome) => (
                                <li key={outcome} className="px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
                                    {outcome}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-28 section-violet text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-black text-teal uppercase tracking-[0.4em] mb-6 italic">{services.resultsBadge}</p>
                    <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10">
                        {services.resultsTitle}
                    </h2>
                    <Link to={`/${language}/contact`} className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-orange/90 transition-all shadow-xl shadow-orange/20">
                        {services.cta} <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
