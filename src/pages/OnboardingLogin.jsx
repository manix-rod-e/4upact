import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fingerprint, ArrowRight, Loader2 } from 'lucide-react';
import { audioCues } from '../lib/audio';
// import { auth } from '../lib/firebase'; // Uncomment when Firebase is configured

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordFlow, setPasswordFlow] = useState(false);

  const handlePasskeyLogin = async () => {
    audioCues.playZenClick();
    setLoading(true);
    try {
      // Simulate WebAuthn/Passkey delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      audioCues.playZenSuccess();
      navigate('/onboarding');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handlePasswordLogin = (e) => {
    e.preventDefault();
    audioCues.playZenClick();
    navigate('/onboarding');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">{t('login_title')}</h1>
        <p className="text-slate-500 font-medium text-sm">Welcome back. Securely authenticate to continue.</p>
      </div>

      {!passwordFlow ? (
        <div className="space-y-6">
          <button
            onClick={handlePasskeyLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-teal text-white font-bold text-lg hover:bg-teal/90 transition-all hover:scale-[1.02] shadow-[0_8px_20px_rgba(78,205,196,0.25)] active:scale-95 disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Fingerprint className="w-6 h-6" />}
            {t('login_cta')}
          </button>
          
          <div className="text-center">
            <button 
              onClick={() => { audioCues.playZenClick(); setPasswordFlow(true); }}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              {t('login_password')}
            </button>
          </div>
        </div>
      ) : (
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handlePasswordLogin}
          className="space-y-4"
        >
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full px-6 py-4 rounded-xl bg-white/50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
            required
          />
          <input 
            type="password" 
            placeholder="Temporary Password" 
            className="w-full px-6 py-4 rounded-xl bg-white/50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
          >
            Sign In <ArrowRight className="w-5 h-5" />
          </button>
          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => { audioCues.playZenClick(); setPasswordFlow(false); }}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              Back to Passkey
            </button>
          </div>
        </motion.form>
      )}

      {/* Language Toggle */}
      <div className="mt-12 flex justify-center gap-4">
        {['en', 'pt', 'es'].map(lang => (
            <button 
              key={lang}
              onClick={() => { audioCues.playZenClick(); /* i18n logic later */ }}
              className="text-xs uppercase font-bold text-slate-400 hover:text-teal transition-colors tracking-widest"
            >
              {lang}
            </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Login;
