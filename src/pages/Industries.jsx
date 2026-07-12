
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { Home as HomeIcon, Briefcase, GraduationCap, Users, ArrowRight, TrendingUp, Target, Stethoscope, Palmtree, ShoppingBag, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Industries = () => {
    const { language, t } = useLanguage();

    const industries = [
        {
            icon: Stethoscope,
            title: language === 'en' ? 'Clinics & Medical' : language === 'pt' ? 'Clínicas e Saúde' : 'Clínicas y Salud',
            subtitle: language === 'en' ? 'Patient Acquisition & Retention' : language === 'pt' ? 'Captação e Retenção de Pacientes' : 'Captación y Retención de Pacientes',
            desc: language === 'en'
                ? 'Automated patient journey from first inquiry to post-procedure follow-up. Speed-to-lead wins in high-ticket medical.'
                : language === 'pt'
                    ? 'Jornada automatizada do paciente desde a consulta até o acompanhamento pós-procedimento. Velocidade de resposta vence no médico high-ticket.'
                    : 'Recorrido automatizado del paciente desde la consulta hasta el seguimiento post-procedimiento. La velocidad gana en servicios médicos premium.',
            stats: { label: language === 'en' ? 'Avg Response Time' : language === 'pt' ? 'Tempo Médio de Resposta' : 'Tiempo Promedio de Respuesta', value: '< 45s', trend: '-85%' },
            color: 'text-teal',
            bg: 'bg-teal/10',
            highlights: [
                language === 'en' ? 'Instant WhatsApp Response' : language === 'pt' ? 'Resposta Imediata via WhatsApp' : 'Respuesta Inmediata por WhatsApp',
                language === 'en' ? 'Appointment Automation' : language === 'pt' ? 'Agendamento Automatizado' : 'Agendamiento Automatizado',
                language === 'en' ? 'Post-Procedure NPS & Referrals' : language === 'pt' ? 'NPS e Indicações Pós-Procedimento' : 'NPS y Referencias Post-Procedimiento'
            ]
        },
        {
            icon: HomeIcon,
            title: language === 'en' ? 'Premium Real Estate' : language === 'pt' ? 'Imobiliário Premium' : 'Inmobiliario Premium',
            subtitle: language === 'en' ? 'Speed-to-Lead Architecture' : language === 'pt' ? 'Arquitetura Speed-to-Lead' : 'Arquitectura Speed-to-Lead',
            desc: language === 'en'
                ? 'In real estate, the first agent to respond wins. We build the infrastructure that makes you first, every time.'
                : language === 'pt'
                    ? 'No imobiliário, o primeiro corretor a responder vence. Construímos a infraestrutura que te coloca primeiro, sempre.'
                    : 'En inmobiliaria, el primer agente en responder gana. Construimos la infraestructura que te pone primero, siempre.',
            stats: { label: language === 'en' ? 'Lead Response' : language === 'pt' ? 'Resposta ao Lead' : 'Respuesta al Lead', value: '45s', trend: '-80%' },
            color: 'text-orange',
            bg: 'bg-orange/10',
            highlights: [
                language === 'en' ? 'Instant Lead Routing' : language === 'pt' ? 'Roteamento Instantâneo de Leads' : 'Enrutamiento Instantáneo de Leads',
                language === 'en' ? 'Pipeline by Property Type' : language === 'pt' ? 'Pipeline por Tipo de Imóvel' : 'Pipeline por Tipo de Propiedad',
                language === 'en' ? 'Viewing Reminders & Follow-up' : language === 'pt' ? 'Lembretes de Visita e Follow-up' : 'Recordatorios de Visita y Seguimiento'
            ]
        },
        {
            icon: Palmtree,
            title: language === 'en' ? 'Luxury Tourism & Hospitality' : language === 'pt' ? 'Turismo de Luxo e Hotelaria' : 'Turismo de Lujo y Hotelería',
            subtitle: language === 'en' ? 'Experience-Driven Revenue' : language === 'pt' ? 'Receita Orientada por Experiência' : 'Ingresos por Experiencia',
            desc: language === 'en'
                ? 'From inquiry to booking to post-trip review — automated guest journeys that drive loyalty and referrals.'
                : language === 'pt'
                    ? 'Da consulta à reserva até a avaliação pós-viagem — jornadas automatizadas que geram fidelidade e indicações.'
                    : 'Desde la consulta hasta la reserva y la reseña post-viaje — recorridos automatizados que generan lealtad y referencias.',
            stats: { label: language === 'en' ? 'Booking Rate' : language === 'pt' ? 'Taxa de Reserva' : 'Tasa de Reserva', value: '+34%', trend: '+34%' },
            color: 'text-primary',
            bg: 'bg-primary/10',
            highlights: [
                language === 'en' ? 'Multi-Channel Booking Funnels' : language === 'pt' ? 'Funis de Reserva Multicanal' : 'Embudos de Reserva Multicanal',
                language === 'en' ? 'Guest Lifecycle Automation' : language === 'pt' ? 'Automação do Ciclo do Hóspede' : 'Automatización del Ciclo del Huésped',
                language === 'en' ? 'Review & Referral Engine' : language === 'pt' ? 'Motor de Avaliações e Indicações' : 'Motor de Reseñas y Referencias'
            ]
        },
        {
            icon: Briefcase,
            title: language === 'en' ? 'C-Level Consulting' : language === 'pt' ? 'Consultoria C-Level' : 'Consultoría C-Level',
            subtitle: language === 'en' ? 'Scalable Sales Machine' : language === 'pt' ? 'Máquina de Vendas Escalável' : 'Máquina de Ventas Escalable',
            desc: language === 'en'
                ? 'Clear metrics for every pipeline stage. Automated proposals, qualification scoring, and appointment scheduling.'
                : language === 'pt'
                    ? 'Métricas claras para cada etapa do pipeline. Propostas automatizadas, scoring de qualificação e agendamento de reuniões.'
                    : 'Métricas claras para cada etapa del pipeline. Propuestas automatizadas, scoring de calificación y programación de reuniones.',
            stats: { label: language === 'en' ? 'Consulting ROI' : language === 'pt' ? 'ROI de Consultoria' : 'ROI de Consultoría', value: '4.2x', trend: '+31%' },
            color: 'text-slate-800',
            bg: 'bg-slate-100',
            highlights: [
                language === 'en' ? 'Automated Qualification' : language === 'pt' ? 'Qualificação Automatizada' : 'Calificación Automatizada',
                language === 'en' ? 'Proposal Generation' : language === 'pt' ? 'Geração de Propostas' : 'Generación de Propuestas',
                language === 'en' ? 'Pipeline Revenue Tracking' : language === 'pt' ? 'Acompanhamento de Receita' : 'Seguimiento de Ingresos'
            ]
        },
        {
            icon: ShoppingBag,
            title: language === 'en' ? 'Lifestyle Brands & E-commerce' : language === 'pt' ? 'Marcas de Lifestyle e E-commerce' : 'Marcas de Lifestyle y E-commerce',
            subtitle: language === 'en' ? 'Repeat Purchase & Loyalty' : language === 'pt' ? 'Recompra e Fidelização' : 'Recompra y Fidelización',
            desc: language === 'en'
                ? 'Turn one-time buyers into loyal advocates. Automated post-purchase flows, VIP tiers, and referral programs.'
                : language === 'pt'
                    ? 'Transforme compradores únicos em defensores leais. Fluxos pós-compra automatizados, níveis VIP e programas de indicação.'
                    : 'Transforma compradores únicos en defensores leales. Flujos post-compra automatizados, niveles VIP y programas de referencia.',
            stats: { label: language === 'en' ? 'Repeat Rate' : language === 'pt' ? 'Taxa de Recompra' : 'Tasa de Recompra', value: '+48%', trend: '+48%' },
            color: 'text-orange',
            bg: 'bg-orange/10',
            highlights: [
                language === 'en' ? 'Post-Purchase Automation' : language === 'pt' ? 'Automação Pós-Compra' : 'Automatización Post-Compra',
                language === 'en' ? 'VIP Club & Loyalty Tiers' : language === 'pt' ? 'Clube VIP e Níveis de Fidelidade' : 'Club VIP y Niveles de Fidelidad',
                language === 'en' ? 'Referral & Review Engine' : language === 'pt' ? 'Motor de Indicações e Avaliações' : 'Motor de Referencias y Reseñas'
            ]
        },
        {
            icon: Smartphone,
            title: language === 'en' ? 'WhatsApp-First SMBs' : language === 'pt' ? 'PMEs WhatsApp-First' : 'PyMEs WhatsApp-First',
            subtitle: language === 'en' ? 'Speed-to-Lead for LatAm' : language === 'pt' ? 'Speed-to-Lead para LatAm' : 'Speed-to-Lead para LatAm',
            desc: language === 'en'
                ? 'For businesses where WhatsApp IS the sales channel. Instant replies, qualification bots, and pipeline management — all in one.'
                : language === 'pt'
                    ? 'Para negócios onde o WhatsApp É o canal de vendas. Respostas instantâneas, bots de qualificação e gestão de pipeline — tudo em um.'
                    : 'Para negocios donde WhatsApp ES el canal de ventas. Respuestas instantáneas, bots de calificación y gestión de pipeline — todo en uno.',
            stats: { label: language === 'en' ? 'Response Speed' : language === 'pt' ? 'Velocidade de Resposta' : 'Velocidad de Respuesta', value: '< 2min', trend: '-92%' },
            color: 'text-teal',
            bg: 'bg-teal/10',
            highlights: [
                language === 'en' ? 'WhatsApp Bot Qualification' : language === 'pt' ? 'Qualificação via Bot WhatsApp' : 'Calificación via Bot WhatsApp',
                language === 'en' ? 'Missed-Call Text-Back' : language === 'pt' ? 'Text-Back para Chamadas Perdidas' : 'Text-Back para Llamadas Perdidas',
                language === 'en' ? '< 2 Min Auto-Response' : language === 'pt' ? 'Resposta Automática < 2 Min' : 'Respuesta Automática < 2 Min'
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t.nav.industries} | 4U Pact Architecture</title>
                <meta name="description" content="Industry-specific CRM and automation solutions for clinics, real estate, tourism, consulting, lifestyle brands, and WhatsApp-first businesses." />
            </Helmet>

            <section className="pt-48 pb-24 bg-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic">{t.industries.badge}</h1>
                    <h2 className="font-display text-5xl md:text-[100px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.85] uppercase">
                        {t.industries.title.split(' ')[0]} <br /> <span className="text-primary italic">{t.industries.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <p className="text-xl text-slate-500 italic max-w-2xl mx-auto leading-relaxed border-t border-slate-100 pt-8">
                        "{t.industries.subtitle}"
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {industries.map((item, idx) => (
                            <Motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03, y: -6 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: idx * 0.08 }}
                                className="bg-white/90 backdrop-blur-md rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 group overflow-visible relative flex flex-col cursor-pointer"
                            >
                                {/* Gaussian blur glow on hover */}
                                <div className="absolute -inset-3 bg-gradient-to-br from-orange/25 via-primary/20 to-teal/15 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 pointer-events-none" />
                                <div className="flex items-center gap-5 mb-8">
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-lg`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-tight">{item.title}</h3>
                                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mt-1">{item.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 font-medium italic leading-relaxed text-sm mb-8">
                                    "{item.desc}"
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-8">
                                    {item.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.bg} ${item.color}`} />
                                            {h}
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Card */}
                                <div className="bg-slate-950 rounded-2xl p-6 mb-8 text-white border border-white/5 relative overflow-hidden group-hover:border-teal/30 transition-all mt-auto">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-3xl rounded-full" />
                                    <div className="flex justify-between items-end relative z-10">
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{item.stats.label}</p>
                                            <p className="text-3xl font-black text-white">{item.stats.value}</p>
                                        </div>
                                        <div className="text-teal font-black text-xs flex items-center gap-1.5 bg-teal/10 px-2.5 py-1 rounded-full">
                                            <TrendingUp size={14} /> {item.stats.trend}
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/${language}/contact`} className="btn-cta w-full text-center text-xs py-4">
                                    {language === 'en' ? 'Build My Architecture' : language === 'pt' ? 'Construir Minha Arquitetura' : 'Construir Mi Arquitectura'} <ArrowRight size={14} />
                                </Link>
                            </Motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                            {language === 'en' ? 'Don\'t see your industry?' : language === 'pt' ? 'Não encontrou seu segmento?' : '¿No ves tu industria?'}
                        </p>
                        <Link to={`/${language}/contact`} className="inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-2xl">
                            {language === 'en' ? 'Request Custom Architecture' : language === 'pt' ? 'Solicitar Arquitetura Personalizada' : 'Solicitar Arquitectura Personalizada'} <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industries;
