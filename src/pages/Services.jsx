import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Layers, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const pillarCopy = [
    {
        id: 'positioning',
        icon: Target,
        number: '01',
        title: 'Positioning & Authority',
        headline: 'Own your market before you enter it.',
        body: 'We clarify the category, offer, proof, and commercial story so your market understands why you matter before the first sales conversation.',
        outcomes: ['Market position', 'Offer architecture', 'Authority assets']
    },
    {
        id: 'capture',
        icon: Zap,
        number: '02',
        title: 'Intelligent Capture',
        headline: 'Every lead captured, qualified, and nurtured automatically.',
        body: 'We connect forms, CRM, WhatsApp, email, and follow-up logic so interest becomes pipeline instead of disappearing into inboxes and spreadsheets.',
        outcomes: ['Lead capture', 'Qualification logic', 'Automated nurture']
    },
    {
        id: 'system',
        icon: Layers,
        number: '03',
        title: 'Integrated Commercial System',
        headline: 'Your CRM, content, and team finally become one engine.',
        body: 'We align sales stages, campaign content, operational handoffs, and dashboards around one revenue system measured by movement and closed deals.',
        outcomes: ['CRM integration', 'Team workflow', 'Revenue dashboard']
    }
];

const Services = () => {
    const { language, t } = useLanguage();
    const isEnglish = language === 'en';

    if (!isEnglish) {
        return (
            <>
                <Helmet>
                    <title>Marketing Services | CRM, Automation & Brand Strategy - 4U Pact</title>
                    <meta name="description" content="4U Pact offers CRM architecture, automation, web engineering, performance growth, and revenue systems." />
                    <link rel="canonical" href={`https://4upact.com/${language}/services`} />
                </Helmet>

                <section className="pt-48 pb-32 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">{t.services.badge}</p>
                        <h1 className="font-display text-5xl md:text-[88px] font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                            {t.services.title}
                        </h1>
                        <p className="text-xl text-slate-500 italic leading-relaxed mb-12">"{t.services.subtitle}"</p>
                        <Link to={`/${language}/contact`} className="btn-cta mx-auto">
                            {t.common.cta} <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>The imPACT Method | 4U Pact Services</title>
                <meta name="description" content="Three pillars. One revenue engine. 4U Pact builds positioning, intelligent capture, and integrated commercial systems that convert." />
                <meta name="keywords" content="4U Pact services, imPACT method, revenue engine, CRM architecture, lead capture, marketing automation" />
                <meta property="og:title" content="The imPACT Method | 4U Pact Services" />
                <meta property="og:description" content="Three pillars. One revenue engine. Results in 90 days." />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:url" content="https://4upact.com/en/services" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://4upact.com/en/services" />
            </Helmet>

            <section className="pt-44 pb-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">The imPACT Method</p>
                        <h1 className="font-display text-5xl md:text-[96px] font-black text-slate-900 tracking-tighter leading-[0.88] mb-10">
                            Three pillars. <br />
                            <span className="text-primary italic">One revenue engine.</span>
                        </h1>
                        <p className="text-xl text-slate-500 italic leading-relaxed border-l-4 border-teal pl-8 max-w-2xl">
                            "Three pillars. One revenue engine. Results in 90 days."
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {pillarCopy.map((pillar) => (
                            <article
                                id={pillar.id}
                                key={pillar.id}
                                className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center">
                                        <pillar.icon size={26} />
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-28 section-violet text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-black text-teal uppercase tracking-[0.4em] mb-6 italic">Results in 90 Days</p>
                    <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10">
                        Built for founders who are done with disconnected marketing activity.
                    </h2>
                    <Link to="/en/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-orange/90 transition-all shadow-xl shadow-orange/20">
                        Book Free Audit <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
