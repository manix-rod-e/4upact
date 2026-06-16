
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, X, ArrowRight, Shield, Zap, Star, Crown, Building2,
    ChevronDown, ChevronUp,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGeo } from '../context/GeoContext';

/* ══════════════════════════════════════════════════════════════════════════════
   Static UI copy (trilingual)
   ══════════════════════════════════════════════════════════════════════════════ */
const uiCopy = {
    en: {
        badge: 'Transparent Pricing',
        title: 'Choose Your',
        titleHighlight: 'Growth Engine.',
        subtitle: 'Every plan includes Fortune 500 methodology. No hidden fees. Cancel anytime.',
        popular: 'Most Popular',
        notIncludedLabel: 'Not included:',
        guarantee: '30-Day Money-Back Guarantee',
        guaranteeDesc: 'If you don\'t see measurable improvement in your pipeline within 30 days, we\'ll refund your investment. No questions asked.',
        compareToggle: 'Compare all plans',
        faqTitle: 'Common Questions',
    },
    pt: {
        badge: 'Preços Transparentes',
        title: 'Escolha Seu',
        titleHighlight: 'Motor de Crescimento.',
        subtitle: 'Todos os planos incluem metodologia Fortune 500. Sem taxas ocultas. Cancele quando quiser.',
        popular: 'Mais Popular',
        notIncludedLabel: 'Não incluso:',
        guarantee: 'Garantia de 30 Dias',
        guaranteeDesc: 'Se você não ver melhoria mensurável no seu pipeline em 30 dias, devolvemos seu investimento. Sem perguntas.',
        compareToggle: 'Compare todos os planos',
        faqTitle: 'Perguntas Frequentes',
    },
    es: {
        badge: 'Precios Transparentes',
        title: 'Elige Tu',
        titleHighlight: 'Motor de Crecimiento.',
        subtitle: 'Todos los planes incluyen metodología Fortune 500. Sin costos ocultos. Cancela cuando quieras.',
        popular: 'Más Popular',
        notIncludedLabel: 'No incluido:',
        guarantee: 'Garantía de 30 Días',
        guaranteeDesc: 'Si no ves una mejora medible en tu pipeline en 30 días, devolvemos tu inversión. Sin preguntas.',
        compareToggle: 'Compara todos los planes',
        faqTitle: 'Preguntas Frecuentes',
    },
};

/* ══════════════════════════════════════════════════════════════════════════════
   Trilingual tier text — language controls ALL text, geo controls ONLY prices
   ══════════════════════════════════════════════════════════════════════════════ */
const tierText = {
    en: {
        diagnostic: {
            freeLabel: 'Free',
            label: '4U Pact Diagnostic',
            subtitle: 'Understand where you are before investing',
            badge: '',
            badgeColor: '',
            features: [
                'Full current infrastructure audit',
                'Lead leakage mapping',
                'Custom 90-day roadmap',
            ],
            notIncluded: ['CRM access', 'Automations', 'Ongoing support'],
            cta: 'Get My Free Audit',
            priceDetail: '',
        },
        starter: {
            label: 'Starter CRM',
            subtitle: 'Your CRM with ready-made automations to sell more',
            badge: 'Start Here',
            badgeColor: 'green',
            features: [
                'White-Label CRM with your brand',
                'Sales pipeline configured for your segment',
                '3 WhatsApp automation templates (welcome, follow-up, re-engagement)',
                '3 automated email sequences',
                '1 conversion-optimized Landing Page',
                'Ready-made funnel snapshots for your niche',
                'Guided onboarding with video tutorials',
                'Email support (24h response)',
                'Quarterly strategic review with Rod-e (45 min)',
            ],
            notIncluded: ['Custom KPI Dashboard', 'Monthly progress reports', 'Priority support', 'Paid ads management', 'Social media strategy', 'Custom AI Chatbot', 'Weekly meetings'],
            cta: 'Start with CRM',
            priceDetail: { usd: '+ $197 one-time setup fee · 3-month minimum', brl: '+ taxa de setup (1 mês extra) · contrato mínimo 3 meses' },
        },
        velocity: {
            label: 'Velocity Engine',
            subtitle: 'We build your growth engine together',
            badge: 'Most Popular',
            badgeColor: 'teal',
            features: [
                'Everything in Starter CRM ✓',
                'Advanced CRM Architecture (GHL/Kommo — full setup)',
                'Advanced WhatsApp + Email Automation (unlimited sequences)',
                'Up to 3 high-conversion Landing Pages',
                'Weekly KPI Dashboard (team access)',
                'Monthly progress reports & recommendations',
                'Priority support (4h response)',
                'Monthly strategy session with Rod-e (60 min)',
                'Tool setup & integrations (Calendar, Payments, etc.)',
            ],
            notIncluded: ['Custom AI Chatbot', 'Paid ads management (Meta + Google)', 'Social Media Strategy + content', 'Brand DNA & Persona Strategy', 'Weekly meeting'],
            cta: 'Start Building',
            priceDetail: '',
        },
        pact: {
            label: '4U Pact Intelligence',
            subtitle: 'We do everything for you with artificial intelligence',
            badge: 'Most Complete',
            badgeColor: 'purple',
            features: [
                'Everything in Velocity Engine ✓',
                'Custom 4U Pact Intelligence Dashboard (13+ modules, team access)',
                'Custom AI Chatbot (like Lara) trained for your business',
                'Social Media Strategy + content creation',
                'Full paid ads management (Meta + Google Ads)',
                'Full Brand DNA & Persona Strategy',
                'Weekly progress reports with actionable insights',
                'Weekly meeting with Rod-e (strategy + results)',
                'Priority access to new AI features & modules',
            ],
            notIncluded: [],
            cta: 'Build with 4U Pact',
            priceDetail: '',
        },
        enterprise: {
            customLabel: 'Custom',
            label: 'Enterprise DNA',
            subtitle: 'For companies that think like Fortune 500',
            badge: '',
            badgeColor: '',
            features: [
                'Everything in 4U Pact Intelligence, customized',
                'Fortune 500 Methodology (IBM & Intel)',
                'C-Level / Fractional CMO Advisory',
                'Marketing team build-out & training',
                'High-performance leadership training',
                'Full go-to-market architecture',
                'Dedicated SLA & white-glove support',
            ],
            notIncluded: [],
            cta: 'Talk to Rod-e',
            priceDetail: '',
        },
    },
    pt: {
        diagnostic: {
            freeLabel: 'Gratuito',
            label: 'Diagnóstico 4U Pact',
            subtitle: 'Entenda onde você está antes de investir',
            badge: '',
            badgeColor: '',
            features: [
                'Análise completa da infraestrutura atual',
                'Mapeamento de vazamento de leads',
                'Roadmap de 90 dias personalizado',
            ],
            notIncluded: ['Acesso ao CRM', 'Automações', 'Suporte contínuo'],
            cta: 'Receber Minha Auditoria Gratuita',
            priceDetail: '',
        },
        starter: {
            label: 'Starter CRM',
            subtitle: 'Seu CRM com automações prontas para vender mais',
            badge: 'Comece Aqui',
            badgeColor: 'green',
            features: [
                'CRM White-Label com sua marca',
                'Pipeline de vendas configurado para seu segmento',
                '3 templates de automação WhatsApp (boas-vindas, follow-up, reengajamento)',
                '3 sequências de email automáticas',
                '1 Landing Page otimizada para conversão',
                'Snapshots de funil prontos para seu nicho',
                'Onboarding guiado com tutoriais em vídeo (PT-BR)',
                'Suporte por email (resposta em até 24h úteis)',
                'Revisão estratégica trimestral com Rod-e (45 min)',
            ],
            notIncluded: ['Dashboard KPI personalizado', 'Relatórios mensais de progresso', 'Suporte prioritário', 'Gestão de tráfego pago', 'Social media strategy', 'AI Chatbot personalizado', 'Reuniões semanais'],
            cta: 'Começar com CRM',
            priceDetail: { usd: '+ $197 taxa de setup única · mínimo 3 meses', brl: '+ taxa de setup (1 mês extra) · contrato mínimo 3 meses' },
        },
        velocity: {
            label: 'Velocity Engine',
            subtitle: 'Construímos seu motor de crescimento juntos',
            badge: 'Mais Popular',
            badgeColor: 'teal',
            features: [
                'Tudo do Starter CRM incluso ✓',
                'CRM Architecture avançada (GHL/Kommo — configuração completa)',
                'Automação avançada WhatsApp + Email (sequências ilimitadas)',
                'Até 3 Landing Pages de alta conversão',
                'Dashboard KPI semanal (acesso da sua equipe)',
                'Relatórios mensais de progresso e recomendações',
                'Suporte prioritário (resposta em até 4h úteis)',
                'Sessão estratégica mensal com Rod-e (60 min)',
                'Setup e integração de ferramentas (Calendário, Pagamentos, etc.)',
            ],
            notIncluded: ['AI Chatbot personalizado', 'Gestão de tráfego pago (Meta + Google)', 'Social Media Strategy + conteúdo', 'Brand DNA & Persona Strategy', 'Reunião semanal'],
            cta: 'Começar a Construir',
            priceDetail: '',
        },
        pact: {
            label: '4U Pact Intelligence',
            subtitle: 'Fazemos tudo por você com inteligência artificial',
            badge: 'Mais Completo',
            badgeColor: 'purple',
            features: [
                'Tudo do Velocity Engine incluso ✓',
                'Dashboard 4U Pact Intelligence personalizado (13+ módulos, acesso por equipe)',
                'AI Chatbot personalizado (como Lara) treinado para seu negócio',
                'Social Media Strategy + criação de conteúdo',
                'Gestão completa de tráfego pago (Meta + Google Ads)',
                'Brand DNA & Persona Strategy completa',
                'Relatórios semanais de progresso com insights acionáveis',
                'Reunião semanal com Rod-e (estratégia + resultados)',
                'Acesso prioritário a novas features e módulos de IA',
            ],
            notIncluded: [],
            cta: 'Construir com 4U Pact',
            priceDetail: '',
        },
        enterprise: {
            customLabel: 'Sob Consulta',
            label: 'Enterprise DNA',
            subtitle: 'Para empresas que pensam como Fortune 500',
            badge: '',
            badgeColor: '',
            features: [
                'Tudo do 4U Pact Intelligence, customizado',
                'Metodologia Fortune 500 (IBM & Intel)',
                'Consultoria C-Level / CMO Fracional',
                'Construção e treinamento de equipe de marketing',
                'Treinamento de liderança de alta performance',
                'Arquitetura completa de go-to-market',
                'SLA dedicado e suporte white-glove',
            ],
            notIncluded: [],
            cta: 'Falar com Rod-e',
            priceDetail: '',
        },
    },
    es: {
        diagnostic: {
            freeLabel: 'Gratis',
            label: 'Diagnóstico 4U Pact',
            subtitle: 'Entiende dónde estás antes de invertir',
            badge: '',
            badgeColor: '',
            features: [
                'Análisis completo de la infraestructura actual',
                'Mapeo de fuga de leads',
                'Roadmap de 90 días personalizado',
            ],
            notIncluded: ['Acceso al CRM', 'Automatizaciones', 'Soporte continuo'],
            cta: 'Recibir Mi Auditoría Gratuita',
            priceDetail: '',
        },
        starter: {
            label: 'Starter CRM',
            subtitle: 'Tu CRM con automatizaciones listas para vender más',
            badge: 'Empieza Aquí',
            badgeColor: 'green',
            features: [
                'CRM White-Label con tu marca',
                'Pipeline de ventas configurado para tu segmento',
                '3 plantillas de automatización WhatsApp (bienvenida, follow-up, reenganche)',
                '3 secuencias de email automáticas',
                '1 Landing Page optimizada para conversión',
                'Snapshots de embudo listos para tu nicho',
                'Onboarding guiado con tutoriales en video',
                'Soporte por email (respuesta en 24h)',
                'Revisión estratégica trimestral con Rod-e (45 min)',
            ],
            notIncluded: ['Dashboard KPI personalizado', 'Reportes mensuales de progreso', 'Soporte prioritario', 'Gestión de tráfico pago', 'Social media strategy', 'AI Chatbot personalizado', 'Reuniones semanales'],
            cta: 'Comenzar con CRM',
            priceDetail: { usd: '+ $197 tarifa de setup única · mínimo 3 meses', brl: '+ tarifa de setup (1 mes extra) · mínimo 3 meses' },
        },
        velocity: {
            label: 'Velocity Engine',
            subtitle: 'Construimos tu motor de crecimiento juntos',
            badge: 'Más Popular',
            badgeColor: 'teal',
            features: [
                'Todo del Starter CRM incluido ✓',
                'CRM Architecture avanzado (GHL/Kommo — configuración completa)',
                'Automatización avanzada WhatsApp + Email (secuencias ilimitadas)',
                'Hasta 3 Landing Pages de alta conversión',
                'Dashboard KPI semanal (acceso del equipo)',
                'Reportes mensuales de progreso y recomendaciones',
                'Soporte prioritario (respuesta en 4h hábiles)',
                'Sesión estratégica mensual con Rod-e (60 min)',
                'Setup e integración de herramientas (Calendario, Pagos, etc.)',
            ],
            notIncluded: ['AI Chatbot personalizado', 'Gestión de tráfico pago (Meta + Google)', 'Social Media Strategy + contenido', 'Brand DNA & Persona Strategy', 'Reunión semanal'],
            cta: 'Empezar a Construir',
            priceDetail: '',
        },
        pact: {
            label: '4U Pact Intelligence',
            subtitle: 'Hacemos todo por ti con inteligencia artificial',
            badge: 'Más Completo',
            badgeColor: 'purple',
            features: [
                'Todo del Velocity Engine incluido ✓',
                'Dashboard 4U Pact Intelligence personalizado (13+ módulos, acceso por equipo)',
                'AI Chatbot personalizado (como Lara) entrenado para tu negocio',
                'Social Media Strategy + creación de contenido',
                'Gestión completa de tráfico pago (Meta + Google Ads)',
                'Brand DNA & Persona Strategy completo',
                'Reportes semanales de progreso con insights accionables',
                'Reunión semanal con Rod-e (estrategia + resultados)',
                'Acceso prioritario a nuevas features y módulos de IA',
            ],
            notIncluded: [],
            cta: 'Construir con 4U Pact',
            priceDetail: '',
        },
        enterprise: {
            customLabel: 'Bajo Consulta',
            label: 'Enterprise DNA',
            subtitle: 'Para empresas que piensan como Fortune 500',
            badge: '',
            badgeColor: '',
            features: [
                'Todo del 4U Pact Intelligence, personalizado',
                'Metodología Fortune 500 (IBM & Intel)',
                'Consultoría C-Level / CMO Fraccional',
                'Construcción y capacitación de equipo de marketing',
                'Entrenamiento de liderazgo de alto rendimiento',
                'Arquitectura completa de go-to-market',
                'SLA dedicado y soporte white-glove',
            ],
            notIncluded: [],
            cta: 'Hablar con Rod-e',
            priceDetail: '',
        },
    },
};

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ data (trilingual)
   ══════════════════════════════════════════════════════════════════════════════ */
const faqData = {
    en: [
        { q: 'Can I upgrade my plan at any time?', a: 'Absolutely. You can upgrade at any time and we\'ll prorate the difference. Your data, automations, and configurations carry over seamlessly.' },
        { q: 'Is there a contract or commitment?', a: 'Starter CRM has a 3-month minimum to allow proper setup and optimization. Velocity Engine and 4U Pact Intelligence are month-to-month after the first month.' },
        { q: 'What\'s included in the free diagnostic?', a: 'A full audit of your current infrastructure, lead leakage mapping, and a custom 90-day roadmap. No obligations.' },
        { q: 'Do you work with businesses outside of Brazil and the US?', a: 'Yes! We serve clients across 5 countries. Our platform supports English, Portuguese, and Spanish, and our methodology is built for global markets.' },
    ],
    pt: [
        { q: 'Posso fazer upgrade do meu plano a qualquer momento?', a: 'Com certeza. Você pode fazer upgrade a qualquer momento e faremos o rateio da diferença. Seus dados, automações e configurações migram sem problemas.' },
        { q: 'Existe contrato ou compromisso?', a: 'O Starter CRM tem um mínimo de 3 meses para permitir setup e otimização adequados. Velocity Engine e 4U Pact Intelligence são mês a mês após o primeiro mês.' },
        { q: 'O que está incluso no diagnóstico gratuito?', a: 'Uma auditoria completa da sua infraestrutura atual, mapeamento de vazamento de leads e roadmap personalizado de 90 dias. Sem obrigações.' },
        { q: 'Vocês atendem empresas fora do Brasil e dos EUA?', a: 'Sim! Atendemos clientes em 5 países. Nossa plataforma suporta inglês, português e espanhol, e nossa metodologia é construída para mercados globais.' },
    ],
    es: [
        { q: '¿Puedo mejorar mi plan en cualquier momento?', a: 'Por supuesto. Puedes mejorar en cualquier momento y prorratearemos la diferencia. Tus datos, automatizaciones y configuraciones se transfieren sin problemas.' },
        { q: '¿Hay contrato o compromiso?', a: 'Starter CRM tiene un mínimo de 3 meses para permitir la configuración y optimización adecuadas. Velocity Engine y 4U Pact Intelligence son mes a mes después del primer mes.' },
        { q: '¿Qué incluye el diagnóstico gratuito?', a: 'Una auditoría completa de tu infraestructura actual, mapeo de fuga de leads y hoja de ruta personalizada de 90 días. Sin obligaciones.' },
        { q: '¿Trabajan con empresas fuera de Brasil y EE.UU.?', a: '¡Sí! Atendemos clientes en 5 países. Nuestra plataforma soporta inglés, portugués y español, y nuestra metodología está diseñada para mercados globales.' },
    ],
};

/* ══════════════════════════════════════════════════════════════════════════════
   Comparison table rows (trilingual) — 1:1 session removed from Diagnostic
   ══════════════════════════════════════════════════════════════════════════════ */
const comparisonRows = {
    en: [
        { feature: 'Infrastructure Audit', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Lead Leakage Mapping', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Custom 90-Day Roadmap', d: true, s: true, v: true, p: true, e: true },
        { feature: '1:1 Session with Rod-e', d: false, s: '45 min / quarter', v: '60 min / month', p: 'Weekly', e: 'Unlimited' },
        { feature: 'White-Label CRM', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Sales Pipeline Setup', d: false, s: true, v: true, p: true, e: true },
        { feature: 'WhatsApp Automation', d: false, s: '3 templates', v: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
        { feature: 'Email Sequences', d: false, s: '3 sequences', v: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
        { feature: 'Landing Pages', d: false, s: '1 page', v: 'Up to 3', p: 'Unlimited', e: 'Unlimited' },
        { feature: 'Funnel Snapshots', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Video Onboarding', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Support Response Time', d: false, s: '24h', v: '4h priority', p: '4h priority', e: 'Dedicated SLA' },
        { feature: 'Advanced CRM Architecture', d: false, s: false, v: true, p: true, e: true },
        { feature: 'KPI Dashboard', d: false, s: false, v: 'Weekly', p: '13+ modules', e: 'Custom' },
        { feature: 'Monthly Reports', d: false, s: false, v: true, p: 'Weekly', e: 'Custom cadence' },
        { feature: 'Tool Integrations', d: false, s: false, v: true, p: true, e: true },
        { feature: 'AI Chatbot (like Lara)', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Social Media Strategy', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Paid Ads Management', d: false, s: false, v: false, p: 'Meta + Google', e: 'Full stack' },
        { feature: 'Brand DNA & Persona', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Fractional CMO Advisory', d: false, s: false, v: false, p: false, e: true },
        { feature: 'Team Build-out & Training', d: false, s: false, v: false, p: false, e: true },
    ],
    pt: [
        { feature: 'Auditoria de Infraestrutura', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Mapeamento de Vazamento de Leads', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Roadmap 90 Dias Personalizado', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Sessão 1:1 com Rod-e', d: false, s: '45 min / trimestre', v: '60 min / mês', p: 'Semanal', e: 'Ilimitado' },
        { feature: 'CRM White-Label', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Pipeline de Vendas', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Automação WhatsApp', d: false, s: '3 templates', v: 'Ilimitado', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Sequências de Email', d: false, s: '3 sequências', v: 'Ilimitado', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Landing Pages', d: false, s: '1 página', v: 'Até 3', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Snapshots de Funil', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Onboarding em Vídeo', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Tempo de Resposta Suporte', d: false, s: '24h', v: '4h prioritário', p: '4h prioritário', e: 'SLA dedicado' },
        { feature: 'CRM Architecture Avançado', d: false, s: false, v: true, p: true, e: true },
        { feature: 'Dashboard KPI', d: false, s: false, v: 'Semanal', p: '13+ módulos', e: 'Personalizado' },
        { feature: 'Relatórios Mensais', d: false, s: false, v: true, p: 'Semanal', e: 'Cadência custom' },
        { feature: 'Integrações', d: false, s: false, v: true, p: true, e: true },
        { feature: 'AI Chatbot (como Lara)', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Social Media Strategy', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Gestão de Tráfego Pago', d: false, s: false, v: false, p: 'Meta + Google', e: 'Full stack' },
        { feature: 'Brand DNA & Persona', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Consultoria CMO Fracional', d: false, s: false, v: false, p: false, e: true },
        { feature: 'Construção e Treinamento de Equipe', d: false, s: false, v: false, p: false, e: true },
    ],
    es: [
        { feature: 'Auditoría de Infraestructura', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Mapeo de Fuga de Leads', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Roadmap 90 Días Personalizado', d: true, s: true, v: true, p: true, e: true },
        { feature: 'Sesión 1:1 con Rod-e', d: false, s: '45 min / trimestre', v: '60 min / mes', p: 'Semanal', e: 'Ilimitado' },
        { feature: 'CRM White-Label', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Pipeline de Ventas', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Automatización WhatsApp', d: false, s: '3 plantillas', v: 'Ilimitado', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Secuencias de Email', d: false, s: '3 secuencias', v: 'Ilimitado', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Landing Pages', d: false, s: '1 página', v: 'Hasta 3', p: 'Ilimitado', e: 'Ilimitado' },
        { feature: 'Snapshots de Embudo', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Onboarding en Video', d: false, s: true, v: true, p: true, e: true },
        { feature: 'Tiempo de Respuesta Soporte', d: false, s: '24h', v: '4h prioritario', p: '4h prioritario', e: 'SLA dedicado' },
        { feature: 'CRM Architecture Avanzado', d: false, s: false, v: true, p: true, e: true },
        { feature: 'Dashboard KPI', d: false, s: false, v: 'Semanal', p: '13+ módulos', e: 'Personalizado' },
        { feature: 'Reportes Mensuales', d: false, s: false, v: true, p: 'Semanal', e: 'Cadencia custom' },
        { feature: 'Integraciones', d: false, s: false, v: true, p: true, e: true },
        { feature: 'AI Chatbot (como Lara)', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Social Media Strategy', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Gestión de Tráfico Pago', d: false, s: false, v: false, p: 'Meta + Google', e: 'Full stack' },
        { feature: 'Brand DNA & Persona', d: false, s: false, v: false, p: true, e: true },
        { feature: 'Consultoría CMO Fraccional', d: false, s: false, v: false, p: false, e: true },
        { feature: 'Formación y Capacitación de Equipo', d: false, s: false, v: false, p: false, e: true },
    ],
};

/* ══════════════════════════════════════════════════════════════════════════════
   Cell renderer for comparison table
   ══════════════════════════════════════════════════════════════════════════════ */
const CellValue = ({ val, highlight }) => {
    if (val === true) return <Check size={16} className={highlight ? 'text-teal' : 'text-emerald-400'} />;
    if (val === false) return <X size={14} className="text-slate-700" />;
    return <span className={`text-xs font-bold ${highlight ? 'text-teal' : 'text-slate-300'}`}>{val}</span>;
};

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ Accordion Item
   ══════════════════════════════════════════════════════════════════════════════ */
const FaqItem = ({ q, a, isOpen, onToggle }) => (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
        >
            <span className="text-sm font-black text-white tracking-tight pr-4">{q}</span>
            {isOpen ? <ChevronUp size={18} className="text-teal flex-shrink-0" /> : <ChevronDown size={18} className="text-slate-500 flex-shrink-0" />}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                >
                    <p className="px-6 pb-5 text-sm text-slate-400 font-bold leading-relaxed">{a}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   Tier card accent config
   ══════════════════════════════════════════════════════════════════════════════ */
const tierStyles = {
    diagnostic: {
        icon: Shield,
        border: 'border-white/10',
        bg: 'bg-white/[0.03]',
        iconBg: 'bg-white/10 text-slate-400',
        priceColor: 'text-white',
        checkColor: 'text-slate-500',
        ctaClass: 'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    },
    starter: {
        icon: Zap,
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/[0.04]',
        iconBg: 'bg-emerald-500/15 text-emerald-400',
        priceColor: 'text-emerald-400',
        checkColor: 'text-emerald-400',
        ctaClass: 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/20',
    },
    velocity: {
        icon: Star,
        border: 'border-teal/40 shadow-xl shadow-teal/10',
        bg: 'bg-gradient-to-b from-teal/10 to-teal/[0.03]',
        iconBg: 'bg-teal/20 text-teal',
        priceColor: 'text-teal',
        checkColor: 'text-teal',
        ctaClass: 'bg-teal text-slate-950 hover:bg-teal/90 shadow-lg shadow-teal/20',
        elevated: true,
    },
    pact: {
        icon: Crown,
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/[0.04]',
        iconBg: 'bg-purple-500/15 text-purple-400',
        priceColor: 'text-purple-400',
        checkColor: 'text-purple-400',
        ctaClass: 'bg-purple-500/15 text-purple-400 hover:bg-purple-500/25 border border-purple-500/20',
    },
    enterprise: {
        icon: Building2,
        border: 'border-amber-500/30',
        bg: 'bg-amber-500/[0.03]',
        iconBg: 'bg-amber-500/15 text-amber-400',
        priceColor: 'text-amber-400',
        checkColor: 'text-amber-400',
        ctaClass: 'bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/20',
    },
};

const badgeColors = {
    green: 'bg-emerald-500 text-slate-950',
    teal: 'bg-teal text-slate-950',
    purple: 'bg-purple-500 text-white',
};

/* ══════════════════════════════════════════════════════════════════════════════
   Main Pricing Page
   ══════════════════════════════════════════════════════════════════════════════ */
const Pricing = () => {
    const { language } = useLanguage();
    const { pricing, isBRL } = useGeo();
    const c = uiCopy[language] || uiCopy.en;
    const faqs = faqData[language] || faqData.en;
    const rows = comparisonRows[language] || comparisonRows.en;
    const text = tierText[language] || tierText.en;

    const [openFaq, setOpenFaq] = useState(null);
    const [showComparison, setShowComparison] = useState(false);

    const tierKeys = ['diagnostic', 'starter', 'velocity', 'pact', 'enterprise'];

    const tiers = tierKeys.map((key) => {
        const priceData = pricing[key] || {};
        const t = text[key];

        // Resolve display price: special labels for free/custom, otherwise currency amount
        let displayPrice = priceData.price || '';
        if (key === 'diagnostic') displayPrice = t.freeLabel;
        if (key === 'enterprise') displayPrice = t.customLabel;

        // Resolve priceDetail — may have usd/brl variants
        let detail = '';
        if (t.priceDetail) {
            if (typeof t.priceDetail === 'string') {
                detail = t.priceDetail;
            } else {
                detail = isBRL ? t.priceDetail.brl : t.priceDetail.usd;
            }
        }

        return {
            key,
            price: displayPrice,
            period: priceData.period || '',
            priceDetail: detail,
            label: t.label,
            subtitle: t.subtitle,
            badge: t.badge,
            badgeColor: t.badgeColor,
            features: t.features,
            notIncluded: t.notIncluded,
            cta: t.cta,
            style: tierStyles[key],
        };
    });

    return (
        <>
            <Helmet>
                <title>Pricing — Growth Engine Plans | 4U Pact</title>
                <meta name="description" content="Transparent pricing for 4U Pact growth engine plans. CRM architecture, AI automation, and performance marketing — from free diagnostic to enterprise." />
                <meta property="og:title" content="Pricing — 4U Pact Growth Engine" />
                <meta property="og:description" content="Choose your growth engine. Every plan includes Fortune 500 methodology." />
                <link rel="canonical" href="https://4upact.com/en/pricing" />
            </Helmet>

            <section className="pt-32 pb-20 bg-slate-950 min-h-screen relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* ── Header ──────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-teal mb-6">
                            {c.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                            {c.title} <br />
                            <span className="bg-gradient-to-r from-teal to-orange bg-clip-text text-transparent">
                                {c.titleHighlight}
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto">
                            {c.subtitle}
                        </p>
                    </motion.div>

                    {/* ── Pricing Cards Grid ───────────────────────────────────── */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
                        {tiers.map((tier, index) => {
                            const Icon = tier.style.icon;
                            const isVelocity = tier.style.elevated;
                            return (
                                <motion.div
                                    key={tier.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.035, y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 22, delay: index * 0.08 }}
                                    className={`relative rounded-3xl p-6 flex flex-col border-2 backdrop-blur-md cursor-pointer group/card ${tier.style.border} ${tier.style.bg} ${
                                        isVelocity ? 'lg:-mt-4 lg:mb-4 ring-1 ring-teal/20' : ''
                                    }`}
                                    style={{ willChange: 'transform' }}
                                >
                                    {/* Hover glow behind card */}
                                    <div className={`absolute -inset-2 rounded-[2rem] blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none ${
                                        tier.key === 'diagnostic' ? 'bg-white/5' :
                                        tier.key === 'starter' ? 'bg-emerald-500/15' :
                                        tier.key === 'velocity' ? 'bg-teal/20' :
                                        tier.key === 'pact' ? 'bg-purple-500/15' :
                                        'bg-amber-500/15'
                                    }`} />
                                    {/* Badge */}
                                    {tier.badge && (
                                        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${
                                            badgeColors[tier.badgeColor] || 'bg-white/10 text-white'
                                        }`}>
                                            {tier.badge}
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3 group-hover/card:shadow-lg ${tier.style.iconBg}`}>
                                        <Icon size={22} />
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-base font-black text-white tracking-tight mb-1">
                                        {tier.label}
                                    </h3>

                                    {/* Subtitle */}
                                    {tier.subtitle && (
                                        <p className="text-xs text-slate-500 font-bold mb-4 leading-snug">
                                            {tier.subtitle}
                                        </p>
                                    )}

                                    {/* Price */}
                                    <div className="mb-1">
                                        <span className={`text-3xl font-black tracking-tighter ${tier.style.priceColor}`}>
                                            {tier.price}
                                        </span>
                                        {tier.period && (
                                            <span className="text-sm text-slate-500 font-bold ml-1">{tier.period}</span>
                                        )}
                                    </div>

                                    {/* Price detail */}
                                    {tier.priceDetail && (
                                        <p className="text-[10px] text-slate-600 font-bold mb-4 leading-snug">
                                            {tier.priceDetail}
                                        </p>
                                    )}
                                    {!tier.priceDetail && <div className="mb-4" />}

                                    {/* Features */}
                                    <ul className="space-y-2.5 mb-5 flex-1">
                                        {tier.features.map((feature, fi) => (
                                            <li key={fi} className="flex items-start gap-2.5">
                                                <Check size={14} className={`mt-0.5 flex-shrink-0 ${tier.style.checkColor}`} />
                                                <span className="text-[13px] text-slate-300 font-bold leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Not included */}
                                    {tier.notIncluded && tier.notIncluded.length > 0 && (
                                        <div className="mb-5 pt-3 border-t border-white/5">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-2">
                                                {c.notIncludedLabel}
                                            </p>
                                            <ul className="space-y-1.5">
                                                {tier.notIncluded.map((item, ni) => (
                                                    <li key={ni} className="flex items-start gap-2">
                                                        <X size={12} className="mt-0.5 text-slate-700 flex-shrink-0" />
                                                        <span className="text-[11px] text-slate-600 font-bold">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <a
                                        href={`/${language}/contact`}
                                        className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 group-hover/card:shadow-lg group-hover/card:scale-[1.02] ${tier.style.ctaClass}`}
                                    >
                                        {tier.cta}
                                        <ArrowRight size={13} />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── Compare All Plans Toggle ─────────────────────────────── */}
                    <div className="text-center mb-8">
                        <button
                            onClick={() => setShowComparison(!showComparison)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-black text-slate-300 uppercase tracking-widest hover:bg-white/10 transition-all"
                        >
                            {c.compareToggle}
                            {showComparison ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                    {/* ── Comparison Table ──────────────────────────────────────── */}
                    <AnimatePresence>
                        {showComparison && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="overflow-hidden mb-20"
                            >
                                <div className="overflow-x-auto rounded-2xl border border-white/10">
                                    <table className="w-full min-w-[800px]">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left text-[10px] font-black uppercase tracking-widest text-slate-500 px-5 py-4 w-[200px] sticky left-0 bg-slate-950/95 backdrop-blur-sm z-10">
                                                    Feature
                                                </th>
                                                {['Diagnostic', 'Starter', 'Velocity', 'Pact', 'Enterprise'].map((name, i) => (
                                                    <th
                                                        key={name}
                                                        className={`text-center text-[10px] font-black uppercase tracking-widest px-4 py-4 ${
                                                            i === 2 ? 'text-teal bg-teal/5' : 'text-slate-500'
                                                        }`}
                                                    >
                                                        {name}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map((row, ri) => (
                                                <tr
                                                    key={ri}
                                                    className={`border-b border-white/5 ${ri % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                                                >
                                                    <td className="text-[12px] font-bold text-slate-400 px-5 py-3 sticky left-0 bg-slate-950/95 backdrop-blur-sm z-10">
                                                        {row.feature}
                                                    </td>
                                                    {[row.d, row.s, row.v, row.p, row.e].map((val, ci) => (
                                                        <td key={ci} className={`text-center px-4 py-3 ${ci === 2 ? 'bg-teal/5' : ''}`}>
                                                            <div className="flex items-center justify-center">
                                                                <CellValue val={val} highlight={ci === 2} />
                                                            </div>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Guarantee ─────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center mb-20"
                    >
                        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-12">
                            <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} className="text-orange" />
                            </div>
                            <h3 className="text-3xl font-black text-white tracking-tighter mb-4">
                                {c.guarantee}
                            </h3>
                            <p className="text-slate-400 font-bold text-lg leading-relaxed">
                                {c.guaranteeDesc}
                            </p>
                        </div>
                    </motion.div>

                    {/* ── FAQ ───────────────────────────────────────────────────── */}
                    <div className="max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter text-center mb-10">
                            {c.faqTitle}
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <FaqItem
                                    key={i}
                                    q={faq.q}
                                    a={faq.a}
                                    isOpen={openFaq === i}
                                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
