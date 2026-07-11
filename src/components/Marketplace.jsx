import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Marketplace = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'PORTFOLIO SHOWCASE',
      title: 'See a Live Example',
      cardTitle: 'Interactive Travel Agency',
      cardDesc: 'Full digital ecosystem built for a boutique travel agency — automated CRM, AI chatbot, campaign flows, and a custom client portal.',
      cta: 'View Live Project',
    },
    pt: {
      badge: 'PORTFÓLIO',
      title: 'Veja um Exemplo Real',
      cardTitle: 'Agência de Viagens Interativa',
      cardDesc: 'Ecossistema digital completo para uma agência de viagens boutique — CRM automatizado, chatbot com IA, fluxos de campanha e portal do cliente.',
      cta: 'Ver Projeto ao Vivo',
    },
    es: {
      badge: 'PORTAFOLIO',
      title: 'Mira un Ejemplo Real',
      cardTitle: 'Agencia de Viajes Interactiva',
      cardDesc: 'Ecosistema digital completo para una agencia de viajes boutique — CRM automatizado, chatbot con IA, flujos de campaña y portal del cliente.',
      cta: 'Ver Proyecto en Vivo',
    },
  };

  const t = content[language] || content.en;

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">
            {t.badge}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            {t.title}
          </h3>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50 hover:shadow-2xl transition-all"
        >
          <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white mb-8">
            <Plane size={26} />
          </div>
          <h4 className="text-2xl font-black text-slate-900 mb-4">{t.cardTitle}</h4>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {t.cardDesc}
          </p>
          <a
            href="https://4u-thais-agency.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
          >
            {t.cta} <ArrowRight size={16} />
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Marketplace;
