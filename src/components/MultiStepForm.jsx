import React, { useMemo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Gauge, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ANSWER_STEPS = 4;
const CONTACT_STEP = 6;

const quizContent = {
  en: {
    start: 'Start My Revenue Diagnosis',
    next: 'Next Leak Check',
    submit: 'Send My Diagnosis',
    score_label: 'Revenue Leak-o-Meter',
    score_title: 'BIP found your leak profile',
    score_sub: 'Your diagnosis is ready. Leave your email and WhatsApp so BIP can route the exact follow-up.',
    contact_title: 'Where should BIP send this?',
    success_title: 'Diagnosis Routed!',
    success_sub: 'BIP tagged your language and sent the audit handoff into the follow-up workflow.',
    book: 'Book My 15-Min Strategy Call',
    placeholders: {
      firstName: 'First name',
      lastName: 'Last name',
      company: 'Company name',
      whatsapp: 'WhatsApp number',
      email: 'Your best email',
    },
    result: [
      { min: 0, title: 'Controlled leak', recommendation: 'Tighten tracking and speed-to-lead before scaling spend.' },
      { min: 35, title: 'Active leak', recommendation: 'Your follow-up rhythm needs automation before more ads.' },
      { min: 70, title: 'Revenue spill', recommendation: 'BIP recommends a full CRM rescue map and priority call.' },
    ],
    steps: [
      {
        label: 'When a new lead arrives, what usually happens first?',
        options: [
          { label: 'Instant CRM capture + reply', points: 5, reaction: 'BIP blinks twice. Rare discipline detected.' },
          { label: 'Someone replies when they can', points: 22, reaction: 'BIP hears revenue dripping in the background.' },
          { label: 'WhatsApp chaos decides destiny', points: 34, reaction: 'BIP just opened a tiny umbrella.' },
          { label: 'We are not sure', points: 42, reaction: 'BIP found the mystery leak door.' },
        ],
      },
      {
        label: 'Can you connect marketing spend to closed deals?',
        options: [
          { label: 'Yes, down to source and value', points: 5, reaction: 'BIP salutes the dashboard.' },
          { label: 'Only campaign-level guesses', points: 24, reaction: 'BIP says the spreadsheet is sweating.' },
          { label: 'Mostly vibes and invoices', points: 36, reaction: 'BIP has filed a vibe audit.' },
          { label: 'No, we cannot see it', points: 45, reaction: 'BIP found a blackout zone.' },
        ],
      },
      {
        label: 'Where do leads most often get stuck?',
        options: [
          { label: 'They do not; pipeline is clear', points: 6, reaction: 'BIP approves this operational flex.' },
          { label: 'First reply takes too long', points: 34, reaction: 'BIP is tapping the speed-to-lead clock.' },
          { label: 'Follow-up dies after one touch', points: 38, reaction: 'BIP found the lonely lead shelf.' },
          { label: 'Sales and marketing blame each other', points: 44, reaction: 'BIP brought a referee whistle.' },
        ],
      },
      {
        label: 'What would make the next 90 days more predictable?',
        options: [
          { label: 'Cleaner attribution', points: 20, reaction: 'BIP is mapping the signal path.' },
          { label: 'Automated follow-up', points: 30, reaction: 'BIP wants the robots doing the boring parts.' },
          { label: 'A CRM that people actually use', points: 36, reaction: 'BIP has seen this movie.' },
          { label: 'All of the above', points: 45, reaction: 'BIP just found the main valve.' },
        ],
      },
    ],
  },
  pt: {
    start: 'Iniciar Meu Diagnostico de Receita',
    next: 'Proximo Vazamento',
    submit: 'Enviar Meu Diagnostico',
    score_label: 'Medidor de Vazamento de Receita',
    score_title: 'BIP encontrou seu perfil de vazamento',
    score_sub: 'Seu diagnostico esta pronto. Deixe email e WhatsApp para o BIP encaminhar o follow-up certo.',
    contact_title: 'Para onde o BIP envia isso?',
    success_title: 'Diagnostico Encaminhado!',
    success_sub: 'BIP marcou seu idioma e enviou a auditoria para o fluxo de follow-up.',
    book: 'Agendar Minha Call de Estrategia',
    placeholders: {
      firstName: 'Primeiro nome',
      lastName: 'Sobrenome',
      company: 'Nome da empresa',
      whatsapp: 'Numero de WhatsApp',
      email: 'Seu melhor email',
    },
    result: [
      { min: 0, title: 'Vazamento controlado', recommendation: 'Ajuste rastreamento e velocidade de resposta antes de escalar investimento.' },
      { min: 35, title: 'Vazamento ativo', recommendation: 'Seu ritmo de follow-up precisa de automacao antes de mais midia.' },
      { min: 70, title: 'Receita escapando', recommendation: 'BIP recomenda mapa completo de resgate CRM e call prioritaria.' },
    ],
    steps: [
      {
        label: 'Quando um lead novo chega, o que acontece primeiro?',
        options: [
          { label: 'CRM captura e responde na hora', points: 5, reaction: 'BIP piscou duas vezes. Disciplina rara detectada.' },
          { label: 'Alguem responde quando da', points: 22, reaction: 'BIP esta ouvindo receita pingar ao fundo.' },
          { label: 'O caos do WhatsApp decide', points: 34, reaction: 'BIP abriu um guarda-chuva pequeno.' },
          { label: 'Nao temos certeza', points: 42, reaction: 'BIP encontrou a porta misteriosa do vazamento.' },
        ],
      },
      {
        label: 'Voce conecta investimento de marketing a vendas fechadas?',
        options: [
          { label: 'Sim, por origem e valor', points: 5, reaction: 'BIP saudou o dashboard.' },
          { label: 'So estimativas por campanha', points: 24, reaction: 'BIP diz que a planilha esta suando.' },
          { label: 'Mais feeling e notas fiscais', points: 36, reaction: 'BIP abriu uma auditoria de feeling.' },
          { label: 'Nao conseguimos enxergar', points: 45, reaction: 'BIP encontrou uma zona escura.' },
        ],
      },
      {
        label: 'Onde os leads travam com mais frequencia?',
        options: [
          { label: 'Nao travam; pipeline claro', points: 6, reaction: 'BIP aprovou esse luxo operacional.' },
          { label: 'Primeira resposta demora', points: 34, reaction: 'BIP esta olhando o relogio do speed-to-lead.' },
          { label: 'Follow-up morre depois de um toque', points: 38, reaction: 'BIP achou a prateleira dos leads solitarios.' },
          { label: 'Vendas e marketing se culpam', points: 44, reaction: 'BIP trouxe um apito de juiz.' },
        ],
      },
      {
        label: 'O que deixaria os proximos 90 dias mais previsiveis?',
        options: [
          { label: 'Atribuicao mais limpa', points: 20, reaction: 'BIP esta mapeando o caminho do sinal.' },
          { label: 'Follow-up automatico', points: 30, reaction: 'BIP quer robos fazendo as partes chatas.' },
          { label: 'Um CRM que o time use de verdade', points: 36, reaction: 'BIP ja viu esse filme.' },
          { label: 'Tudo acima', points: 45, reaction: 'BIP encontrou a valvula principal.' },
        ],
      },
    ],
  },
  es: {
    start: 'Iniciar Mi Diagnostico de Ingresos',
    next: 'Siguiente Fuga',
    submit: 'Enviar Mi Diagnostico',
    score_label: 'Medidor de Fuga de Ingresos',
    score_title: 'BIP encontro tu perfil de fuga',
    score_sub: 'Tu diagnostico esta listo. Deja email y WhatsApp para que BIP active el follow-up correcto.',
    contact_title: 'A donde debe enviarlo BIP?',
    success_title: 'Diagnostico Enviado!',
    success_sub: 'BIP marco tu idioma y envio la auditoria al flujo de seguimiento.',
    book: 'Agendar Mi Call de Estrategia',
    placeholders: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      company: 'Empresa',
      whatsapp: 'Numero de WhatsApp',
      email: 'Tu mejor email',
    },
    result: [
      { min: 0, title: 'Fuga controlada', recommendation: 'Ajusta tracking y velocidad de respuesta antes de escalar inversion.' },
      { min: 35, title: 'Fuga activa', recommendation: 'Tu ritmo de follow-up necesita automatizacion antes de mas pauta.' },
      { min: 70, title: 'Ingresos escapando', recommendation: 'BIP recomienda mapa completo de rescate CRM y llamada prioritaria.' },
    ],
    steps: [
      {
        label: 'Cuando llega un lead nuevo, que pasa primero?',
        options: [
          { label: 'CRM captura y responde al instante', points: 5, reaction: 'BIP parpadea dos veces. Disciplina rara detectada.' },
          { label: 'Alguien responde cuando puede', points: 22, reaction: 'BIP escucha ingresos goteando.' },
          { label: 'El caos de WhatsApp decide', points: 34, reaction: 'BIP abrio un paraguas pequeno.' },
          { label: 'No estamos seguros', points: 42, reaction: 'BIP encontro la puerta misteriosa de la fuga.' },
        ],
      },
      {
        label: 'Puedes conectar inversion de marketing con ventas cerradas?',
        options: [
          { label: 'Si, por fuente y valor', points: 5, reaction: 'BIP saluda al dashboard.' },
          { label: 'Solo estimaciones por campana', points: 24, reaction: 'BIP dice que la planilla esta sudando.' },
          { label: 'Mayormente vibes y facturas', points: 36, reaction: 'BIP abrio una auditoria de vibes.' },
          { label: 'No podemos verlo', points: 45, reaction: 'BIP encontro una zona oscura.' },
        ],
      },
      {
        label: 'Donde se atascan mas los leads?',
        options: [
          { label: 'No se atascan; pipeline claro', points: 6, reaction: 'BIP aprueba este lujo operativo.' },
          { label: 'La primera respuesta tarda', points: 34, reaction: 'BIP mira el reloj speed-to-lead.' },
          { label: 'El follow-up muere tras un toque', points: 38, reaction: 'BIP encontro la repisa de leads solitarios.' },
          { label: 'Ventas y marketing se culpan', points: 44, reaction: 'BIP trajo un silbato de arbitro.' },
        ],
      },
      {
        label: 'Que haria mas predecibles los proximos 90 dias?',
        options: [
          { label: 'Atribucion mas limpia', points: 20, reaction: 'BIP mapea la ruta de la senal.' },
          { label: 'Follow-up automatico', points: 30, reaction: 'BIP quiere robots haciendo lo aburrido.' },
          { label: 'Un CRM que el equipo use de verdad', points: 36, reaction: 'BIP ya vio esta pelicula.' },
          { label: 'Todo lo anterior', points: 45, reaction: 'BIP encontro la valvula principal.' },
        ],
      },
    ],
  },
};

function getResult(content, score) {
  return [...content.result].reverse().find((item) => score >= item.min) || content.result[0];
}

const MultiStepForm = () => {
  const { language } = useLanguage();
  const content = quizContent[language] || quizContent.en;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reaction, setReaction] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const score = useMemo(() => {
    const total = Object.values(answers).reduce((sum, item) => sum + (item?.points || 0), 0);
    return Math.min(100, Math.round(total / 1.7));
  }, [answers]);
  const result = getResult(content, score);

  const selectOption = (step, option) => {
    setAnswers((prev) => ({ ...prev, [step]: option }));
    setReaction(option.reaction);
    window.setTimeout(() => {
      setCurrentStep(step < ANSWER_STEPS ? step + 1 : 5);
    }, 500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const payload = {
      firstName,
      lastName,
      company,
      whatsapp,
      email,
      language,
      tags: [`lang_${language}`, 'lead_source_4upact_quiz', `leak_score_${score >= 70 ? 'high' : score >= 35 ? 'mid' : 'low'}`],
      score,
      result,
      answers: Object.fromEntries(Object.entries(answers).map(([key, value]) => [key, value.label])),
    };

    try {
      await fetch('/api/revenue-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = currentStep === 0 ? 0 : currentStep === CONTACT_STEP ? 100 : Math.min(100, Math.round((currentStep / CONTACT_STEP) * 100));

  if (submitted) {
    return (
      <Motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal/20 border border-teal/30 mb-8">
          <Check className="w-10 h-10 text-teal" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">{content.success_title}</h3>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">{content.success_sub}</p>
        <a href={`/${language}/contact`} className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-orange/90 transition-all shadow-xl shadow-orange/20">
          {content.book}
          <ArrowRight className="w-4 h-4" />
        </a>
      </Motion.div>
    );
  }

  if (currentStep === 0) {
    return (
      <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
        <div className="mx-auto mb-8 flex w-36 h-36 items-center justify-center rounded-full bg-white/10 border border-white/10 overflow-hidden">
          <img src="/assets/bip-robot.png" alt="BIP" className="w-full h-full object-cover" />
        </div>
        <button onClick={() => setCurrentStep(1)} className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-orange/90 transition-all shadow-xl shadow-orange/20 active:scale-95">
          {content.start}
          <ChevronRight className="w-5 h-5" />
        </button>
      </Motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{content.score_label}</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-teal">{score}%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <Motion.div className="h-full bg-gradient-to-r from-teal via-orange to-red-500 rounded-full" animate={{ width: `${Math.max(score, progress / 2)}%` }} transition={{ duration: 0.45, ease: 'easeOut' }} />
        </div>
      </div>

      <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
          <img src="/assets/bip-robot.png" alt="BIP" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" />
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-teal">
            <Gauge className="w-3 h-3" />
            BIP
          </div>
          <p className="mt-4 text-xs font-bold text-slate-300 leading-relaxed min-h-[48px]">{reaction || result.recommendation}</p>
        </aside>

        <AnimatePresence mode="wait">
          {currentStep >= 1 && currentStep <= ANSWER_STEPS && (
            <Motion.div key={`step-${currentStep}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter">{content.steps[currentStep - 1].label}</h3>
              <div className="grid gap-3">
                {content.steps[currentStep - 1].options.map((option) => (
                  <button key={option.label} onClick={() => selectOption(currentStep, option)} className={`w-full text-left px-5 py-5 rounded-2xl border transition-all duration-300 font-bold text-sm ${answers[currentStep]?.label === option.label ? 'bg-teal/20 border-teal/40 text-teal' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </Motion.div>
          )}

          {currentStep === 5 && (
            <Motion.div key="score" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-orange mb-4">{score}% leak score</p>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">{result.title}</h3>
              <p className="text-slate-300 text-lg font-bold leading-relaxed mb-4">{result.recommendation}</p>
              <p className="text-slate-500 leading-relaxed mb-8">{content.score_sub}</p>
              <button onClick={() => setCurrentStep(CONTACT_STEP)} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs hover:bg-orange/90 transition-all">
                {content.next}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Motion.div>
          )}

          {currentStep === CONTACT_STEP && (
            <Motion.div key="contact" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter">{content.contact_title}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={content.placeholders.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-teal/50 focus:bg-white/10 transition-all" />
                  <input type="text" placeholder={content.placeholders.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-teal/50 focus:bg-white/10 transition-all" />
                </div>
                <input type="text" placeholder={content.placeholders.company} value={company} onChange={(e) => setCompany(e.target.value)} required className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-teal/50 focus:bg-white/10 transition-all" />
                <input type="tel" placeholder={content.placeholders.whatsapp} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-teal/50 focus:bg-white/10 transition-all" />
                <input type="email" placeholder={content.placeholders.email} value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-teal/50 focus:bg-white/10 transition-all" />
                <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-orange text-slate-950 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-orange/90 transition-all shadow-xl shadow-orange/20 disabled:opacity-60">
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  {content.submit}
                </button>
              </form>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiStepForm;
