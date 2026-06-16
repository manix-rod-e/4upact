import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';
import { audioCues } from '../lib/audio';

const TOTAL_STEPS = 5;

const Onboarding = () => {
  const { t, i18n } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0); 
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({ firstName: '', lastName: '', company: '', whatsapp: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const selectOption = (step, option) => {
    audioCues.playZenClick();
    setAnswers(prev => ({ ...prev, [step]: option }));
    if (step <= 4) {
      setTimeout(() => setCurrentStep(step + 1), 400); // Wait for click sound and animation
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    audioCues.playZenSuccess();
    setSubmitted(true);
    console.log("Payload:", { ...answers, ...contactInfo });
    // In production, this triggers the Firebase saving / GHL webhook
  };

  const progress = currentStep > 0 ? (currentStep / TOTAL_STEPS) * 100 : 0;

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-teal/10 border border-teal/20 mb-8 mx-auto">
          <Check className="w-12 h-12 text-teal" />
        </div>
        <h3 className="text-4xl font-black text-slate-800 mb-4 tracking-tighter">Onboarding Complete</h3>
        <p className="text-slate-500 text-lg">Your data has been securely synced. Welcome to 4UPact.</p>
      </motion.div>
    );
  }

  if (currentStep === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 flex flex-col items-center">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-8">Ready to systematize your growth?</h2>
        <button
          onClick={() => { audioCues.playZenClick(); setCurrentStep(1); }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-orange text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-orange/90 transition-all hover:scale-[1.03] shadow-[0_10px_30px_rgba(255,107,53,0.3)] active:scale-95"
        >
          {t('cta_start')}
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    );
  }

  const stepsConfig = [
    { label: t('step1_label'), options: t('step1_options', { returnObjects: true }) },
    { label: t('step2_label'), options: t('step2_options', { returnObjects: true }) },
    { label: t('step3_label'), options: t('step3_options', { returnObjects: true }) },
    { label: t('step4_label'), options: t('step4_options', { returnObjects: true }) },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {t('progress')} {currentStep} / {TOTAL_STEPS}
          </span>
          <span className="text-xs font-black uppercase tracking-widest text-teal">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal to-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentStep >= 1 && currentStep <= 4 && (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 tracking-tighter">
              {stepsConfig[currentStep - 1].label}
            </h3>
            <div className="grid gap-4">
              {Array.isArray(stepsConfig[currentStep - 1].options) && stepsConfig[currentStep - 1].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => selectOption(currentStep, option)}
                  className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 font-bold text-sm shadow-sm
                    ${answers[currentStep] === option
                      ? 'bg-teal/10 border-teal text-teal-700 shadow-[0_4px_20px_rgba(78,205,196,0.15)] scale-[1.01]'
                      : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 hover:scale-[1.02] hover:shadow-md'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
            key="step-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 tracking-tighter">
              {t('step5_label')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('firstname_placeholder')}
                  value={contactInfo.firstName}
                  onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/60 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-teal focus:bg-white transition-all shadow-sm"
                />
                <input
                  type="text"
                  placeholder={t('lastname_placeholder')}
                  value={contactInfo.lastName}
                  onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/60 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-teal focus:bg-white transition-all shadow-sm"
                />
              </div>
              <input
                type="text"
                placeholder={t('company_placeholder')}
                value={contactInfo.company}
                onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-teal focus:bg-white transition-all shadow-sm"
              />
              <input
                type="tel"
                placeholder={t('whatsapp_placeholder')}
                value={contactInfo.whatsapp}
                onChange={(e) => setContactInfo({...contactInfo, whatsapp: e.target.value})}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-teal focus:bg-white transition-all shadow-sm"
              />
              <input
                type="email"
                placeholder={t('email_placeholder')}
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none focus:border-teal focus:bg-white transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 mt-4 px-8 py-5 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl shadow-slate-900/20 active:scale-95"
              >
                {t('cta_final')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
