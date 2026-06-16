import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "step1_label": "What's your current monthly marketing spend?",
      "step1_options": ["Less than $2K", "$2K – $5K", "$5K – $15K", "$15K+"],
      "step2_label": "Where are you losing deals?",
      "step2_options": ["No CRM in place", "Leads not being followed up", "Can't track ROI", "Manual processes everywhere"],
      "step3_label": "What's your primary channel?",
      "step3_options": ["WhatsApp", "Instagram / TikTok", "LinkedIn", "Google Ads", "Referral only"],
      "step4_label": "Your monthly revenue range?",
      "step4_options": ["Under $10K", "$10K – $50K", "$50K – $150K", "$150K – $500K", "$500K+"],
      "step5_label": "Where should we send your audit?",
      "firstname_placeholder": "First name",
      "lastname_placeholder": "Last name",
      "company_placeholder": "Company name",
      "whatsapp_placeholder": "WhatsApp number",
      "email_placeholder": "Your best email",
      "cta_start": "Start Onboarding",
      "cta_next": "Next Step",
      "cta_final": "Complete Onboarding",
      "progress": "Step",
      "login_title": "Access your portal",
      "login_cta": "Continue with Passkey",
      "login_password": "Or use temporary password"
    }
  },
  pt: {
    translation: {
      "welcome": "Bem-vindo",
      "step1_label": "Qual é seu investimento mensal atual em marketing?",
      "step1_options": ["Menos de R$10K", "R$10K – R$25K", "R$25K – R$75K", "R$75K+"],
      "step2_label": "Onde você está perdendo negócios?",
      "step2_options": ["Sem CRM implementado", "Leads não são acompanhados", "Não consigo rastrear ROI", "Processos manuais em tudo"],
      "step3_label": "Qual é seu canal principal?",
      "step3_options": ["WhatsApp", "Instagram / TikTok", "LinkedIn", "Google Ads", "Apenas indicação"],
      "step4_label": "Seu faturamento mensal?",
      "step4_options": ["Abaixo de R$50K", "R$50K – R$250K", "R$250K – R$750K", "R$750K – R$2.5M", "R$2.5M+"],
      "step5_label": "Para onde enviamos sua auditoria?",
      "firstname_placeholder": "Primeiro nome",
      "lastname_placeholder": "Sobrenome",
      "company_placeholder": "Nome da empresa",
      "whatsapp_placeholder": "Número de WhatsApp",
      "email_placeholder": "Seu melhor email",
      "cta_start": "Iniciar Onboarding",
      "cta_next": "Próximo Passo",
      "cta_final": "Completar Onboarding",
      "progress": "Passo",
      "login_title": "Acesse seu portal",
      "login_cta": "Continuar com Passkey",
      "login_password": "Ou use a senha temporária"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido",
      "step1_label": "¿Cuál es tu inversión mensual actual en marketing?",
      "step1_options": ["Menos de $2K", "$2K – $5K", "$5K – $15K", "$15K+"],
      "step2_label": "¿Dónde estás perdiendo negocios?",
      "step2_options": ["Sin CRM implementado", "Leads sin seguimiento", "No puedo rastrear ROI", "Procesos manuales en todo"],
      "step3_label": "¿Cuál es tu canal principal?",
      "step3_options": ["WhatsApp", "Instagram / TikTok", "LinkedIn", "Google Ads", "Solo referidos"],
      "step4_label": "¿Tu rango de facturación mensual?",
      "step4_options": ["Menos de $10K", "$10K – $50K", "$50K – $150K", "$150K – $500K", "$500K+"],
      "step5_label": "¿Dónde enviamos tu auditoría?",
      "firstname_placeholder": "Nombre",
      "lastname_placeholder": "Apellido",
      "company_placeholder": "Nombre de la empresa",
      "whatsapp_placeholder": "Número de WhatsApp",
      "email_placeholder": "Tu mejor email",
      "cta_start": "Iniciar Onboarding",
      "cta_next": "Siguiente Paso",
      "cta_final": "Completar Onboarding",
      "progress": "Paso",
      "login_title": "Accede a tu portal",
      "login_cta": "Continuar con Passkey",
      "login_password": "O usa la contraseña temporal"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
