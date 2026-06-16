import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CALENDAR_ID = 'VDGab1d976AlsQkmowqB';
const CALENDAR_SRC = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;

const COPY = {
  pt: {
    title: 'Agende sua consultoria gratuita — 4U Pact',
    subtitle: 'Escolha o melhor horário e fale direto com Rodrigo Ezquerra.',
  },
  en: {
    title: 'Book your free strategy call — 4U Pact',
    subtitle: 'Pick a time that works for you and meet directly with Rodrigo Ezquerra.',
  },
  es: {
    title: 'Agenda tu consultoría gratuita — 4U Pact',
    subtitle: 'Elige tu horario ideal y habla directamente con Rodrigo Ezquerra.',
  },
};

export default function Book() {
  const { lang } = useParams();
  const locale = ['pt', 'en', 'es'].includes(lang) ? lang : 'pt';
  const text = COPY[locale];

  return (
    <>
      <Helmet>
        <title>{text.title}</title>
        <meta name="description" content={text.subtitle} />
      </Helmet>

      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#4ecdc4] font-semibold">4U Pact Calendar</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-black text-white">{text.title}</h1>
            <p className="mt-3 text-sm md:text-base text-slate-300">{text.subtitle}</p>
          </header>

          <div className="rounded-2xl overflow-hidden border border-[#4ecdc4]/30 bg-slate-900 shadow-[0_20px_80px_rgba(20,184,166,0.12)]">
            <iframe
              src={CALENDAR_SRC}
              title="4U Pact Booking Calendar"
              style={{ width: '100%', height: '760px', border: 'none' }}
              scrolling="no"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
