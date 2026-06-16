import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Mail, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
    const { language } = useLanguage();

    // ─── CONTENT ────────────────────────────────────────────────────────────
    const content = {
        en: {
            meta_title: 'Privacy Policy | 4U Pact',
            meta_desc: 'Privacy Policy for 4U Pact — how we collect, use, and protect your personal data in compliance with LGPD, CCPA, PIPEDA, and other applicable laws.',
            badge: 'Legal · Privacy',
            title: 'Privacy Policy',
            updated: 'Last updated: March 16, 2026',
            intro: 'At 4U Pact, we take your privacy seriously. This Policy explains what personal data we collect, why we collect it, how we use it, and your rights over that data. We comply with the Brazilian General Data Protection Law (LGPD — Law 13,709/2018), the California Consumer Privacy Act (CCPA), Canada\'s PIPEDA, Argentina\'s Ley 25.326, Colombia\'s Ley 1581, and Mexico\'s LFPDPPP.',
            sections: [
                {
                    title: '1. Data Controller',
                    body: '4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "we", "us") is the data controller for personal data collected through this website.\n\nLegal name: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nRegistered address: Rua Itapiru 572, São Paulo, SP, 04143-010, Brazil\nDPO / Privacy Contact: info@4upact.com'
                },
                {
                    title: '2. What Data We Collect',
                    body: 'When you interact with our website or booking system, we may collect:\n• Name and surname\n• Email address\n• Phone / WhatsApp number\n• Company name and role\n• Country and city\n• Messages and project details you submit\n• IP address, browser type, and device information (via cookies and analytics tools)\n• Calendar booking data (via GoHighLevel widget)'
                },
                {
                    title: '3. How We Collect Data',
                    body: 'We collect data through:\n• Contact and booking forms powered by GoHighLevel (GHL)\n• Our website analytics (Google Analytics 4)\n• WhatsApp and email communications you initiate\n• Cookies and similar tracking technologies (see Section 8)'
                },
                {
                    title: '4. Legal Basis for Processing (LGPD Art. 7)',
                    body: 'We process your personal data on the following legal bases:\n• Consent (Art. 7, I): when you tick the consent checkbox on our contact form.\n• Legitimate Interest (Art. 7, IX): for responding to enquiries, improving our services, and fraud prevention.\n• Contract Performance (Art. 7, V): when processing is necessary to provide the services you request.\n• Legal Obligation (Art. 7, II): to comply with Brazilian tax and commercial law requirements.'
                },
                {
                    title: '5. How We Use Your Data',
                    body: 'We use your personal data to:\n• Respond to your enquiries and schedule discovery calls\n• Deliver the consulting and marketing automation services you engage us for\n• Send service-related communications (no unsolicited marketing without consent)\n• Improve and secure our website and services\n• Comply with legal and tax obligations'
                },
                {
                    title: '6. Third-Party Processors',
                    body: 'We share your data only with processors who help us deliver our services. All processors are contractually required to protect your data.\n\n• GoHighLevel (USA): CRM, booking, and marketing automation platform. Stores contact and booking data.\n• Google LLC (USA): Analytics (GA4) and Google Workspace email. Subject to EU-US Data Privacy Framework adequacy.\n• Meta Platforms Inc. (USA): WhatsApp Business API used for communication upon your request.\n• Netlify Inc. (USA): Website hosting. Does not access personal data beyond server logs.\n\nWe do not sell, rent, or trade your personal data to any third party for advertising purposes.'
                },
                {
                    title: '7. International Data Transfers',
                    body: 'Some processors are located outside Brazil. Where data is transferred internationally, we rely on:\n• Standard Contractual Clauses (SCCs) approved by the competent authority\n• The ANPD international transfer mechanisms as they become available\n• Adequacy decisions where applicable\n\nYou may request information about specific transfer safeguards by contacting info@4upact.com.'
                },
                {
                    title: '8. Cookies & Tracking',
                    body: 'We use the following categories of cookies:\n\n• Strictly Necessary: required for the website to function. Cannot be disabled.\n• Analytics: Google Analytics 4 to understand usage patterns (disabled until consent).\n• Marketing: Meta Pixel for ad performance measurement (disabled until consent).\n\nYou can manage your cookie preferences at any time via the cookie banner on this site. Withdrawing consent does not affect the lawfulness of processing before withdrawal.'
                },
                {
                    title: '9. Your Rights',
                    body: 'Depending on your location, you have the following rights:\n\nAll users (LGPD):\n• Right to confirmation of processing\n• Right of access to your data\n• Right to correct incomplete, inaccurate, or outdated data\n• Right to anonymization, blocking, or deletion of unnecessary data\n• Right to data portability\n• Right to information about third parties with whom we share data\n• Right to revoke consent at any time\n• Right to lodge a complaint with Brazil\'s ANPD\n\nCalifornia residents (CCPA):\n• Right to know what personal information is collected, used, shared, or sold\n• Right to delete personal information\n• Right to opt out of the sale or sharing of personal information (see Section 11)\n• Right to non-discrimination for exercising your rights\n\nCanadian residents (PIPEDA):\n• Right of access and correction\n• Right to withdraw consent\n\nTo exercise any of these rights, contact: info@4upact.com'
                },
                {
                    title: '10. Data Retention',
                    body: 'We retain personal data for as long as necessary to provide our services and comply with legal obligations:\n\n• Enquiry and contact data: 2 years from last interaction\n• Client project data: 5 years (Brazilian tax law requirement)\n• Analytics data: 14 months (Google Analytics default)\n• Cookie consent records: 3 years\n\nAfter the retention period, data is securely deleted or anonymised.'
                },
                {
                    title: '11. Do Not Sell or Share My Personal Information (CCPA)',
                    body: '4U Pact does not sell your personal information to third parties. We do not share your personal information with third parties for cross-context behavioural advertising. California residents may submit a "Do Not Sell or Share" request to info@4upact.com at any time, and we will process it within 15 business days.'
                },
                {
                    title: '12. Children\'s Privacy',
                    body: 'Our services are directed at businesses and professionals. We do not knowingly collect personal data from individuals under the age of 18. If you believe we have inadvertently collected such data, please contact us immediately at info@4upact.com.'
                },
                {
                    title: '13. Security',
                    body: 'We implement technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted connections (HTTPS/TLS), access controls, and regular security reviews.'
                },
                {
                    title: '14. Changes to This Policy',
                    body: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting a prominent notice on our website and updating the "Last updated" date at the top of this page. Continued use of our services after such changes constitutes acceptance of the updated Policy.'
                },
                {
                    title: '15. Contact & DPO',
                    body: 'For any privacy-related questions, requests, or complaints:\n\nEmail: info@4upact.com\nGeneral contact: info@4upact.com\nPhone: +1 (646) 531-1313\nAddress: [Brasília, DF, Brazil — to be filled]\n\nWe aim to respond to all requests within 15 business days. Brazilian users may also contact Brazil\'s National Data Protection Authority (ANPD) at gov.br/anpd.'
                }
            ]
        },
        pt: {
            meta_title: 'Política de Privacidade | 4U Pact',
            meta_desc: 'Política de Privacidade da 4U Pact — como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD, CCPA, PIPEDA e outras legislações aplicáveis.',
            badge: 'Legal · Privacidade',
            title: 'Política de Privacidade',
            updated: 'Última atualização: 16 de março de 2026',
            intro: 'Na 4U Pact, levamos sua privacidade a sério. Esta Política explica quais dados pessoais coletamos, por que os coletamos, como os utilizamos e quais são os seus direitos sobre esses dados. Cumprimos a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018), o California Consumer Privacy Act (CCPA), o PIPEDA canadense, a Lei argentina 25.326, a Lei colombiana 1581 e a LFPDPPP mexicana.',
            sections: [
                {
                    title: '1. Controlador de Dados',
                    body: '4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "nós") é o controlador dos dados pessoais coletados por meio deste site.\n\nRazão social: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nEndereço: Rua Itapiru 572, São Paulo, SP, 04143-010, Brasil\nEncarregado (DPO): info@4upact.com'
                },
                {
                    title: '2. Dados que Coletamos',
                    body: 'Ao interagir com nosso site ou sistema de agendamento, podemos coletar:\n• Nome e sobrenome\n• Endereço de e-mail\n• Telefone / WhatsApp\n• Nome e cargo da empresa\n• País e cidade\n• Mensagens e detalhes do projeto que você enviar\n• Endereço IP, tipo de navegador e informações do dispositivo (via cookies e ferramentas de análise)\n• Dados de agendamento (via widget GoHighLevel)'
                },
                {
                    title: '3. Como Coletamos Dados',
                    body: 'Coletamos dados por meio de:\n• Formulários de contato e agendamento via GoHighLevel (GHL)\n• Analytics do nosso site (Google Analytics 4)\n• Comunicações via WhatsApp e e-mail iniciadas por você\n• Cookies e tecnologias similares (veja Seção 8)'
                },
                {
                    title: '4. Base Legal de Tratamento (LGPD Art. 7)',
                    body: 'Tratamos seus dados pessoais com base nas seguintes hipóteses legais:\n• Consentimento (Art. 7, I): quando você marca a caixa de consentimento no formulário de contato.\n• Legítimo interesse (Art. 7, IX): para responder a solicitações, melhorar nossos serviços e prevenir fraudes.\n• Execução de contrato (Art. 7, V): quando o tratamento é necessário para a prestação dos serviços solicitados.\n• Obrigação legal (Art. 7, II): para cumprimento de obrigações tributárias e comerciais brasileiras.'
                },
                {
                    title: '5. Como Usamos Seus Dados',
                    body: 'Utilizamos seus dados pessoais para:\n• Responder às suas solicitações e agendar chamadas de diagnóstico\n• Prestar os serviços de consultoria e automação de marketing contratados\n• Enviar comunicações relacionadas aos serviços (sem marketing não solicitado sem consentimento)\n• Aprimorar e proteger nosso site e serviços\n• Cumprir obrigações legais e fiscais'
                },
                {
                    title: '6. Operadores Terceirizados',
                    body: 'Compartilhamos seus dados apenas com operadores que nos auxiliam na prestação de serviços. Todos são contratualmente obrigados a proteger seus dados.\n\n• GoHighLevel (EUA): plataforma de CRM, agendamento e automação de marketing. Armazena dados de contato e agendamento.\n• Google LLC (EUA): Analytics (GA4) e e-mail corporativo (Google Workspace).\n• Meta Platforms Inc. (EUA): API do WhatsApp Business, usado para comunicação a seu pedido.\n• Netlify Inc. (EUA): hospedagem do site. Não acessa dados pessoais além de logs de servidor.\n\nNão vendemos, alugamos nem negociamos seus dados pessoais para fins publicitários.'
                },
                {
                    title: '7. Transferências Internacionais de Dados',
                    body: 'Alguns operadores estão localizados fora do Brasil. Quando os dados são transferidos internacionalmente, nos baseamos em:\n• Cláusulas Contratuais Padrão (CCPs) aprovadas pela autoridade competente\n• Mecanismos de transferência internacional da ANPD quando disponíveis\n• Decisões de adequação quando aplicável\n\nVocê pode solicitar informações sobre as garantias de transferência específicas pelo e-mail info@4upact.com.'
                },
                {
                    title: '8. Cookies e Rastreamento',
                    body: 'Utilizamos as seguintes categorias de cookies:\n\n• Estritamente Necessários: essenciais para o funcionamento do site. Não podem ser desativados.\n• Analíticos: Google Analytics 4 para entender padrões de uso (desativados até o consentimento).\n• Marketing: Meta Pixel para mensuração de desempenho de anúncios (desativado até o consentimento).\n\nVocê pode gerenciar suas preferências de cookies a qualquer momento pelo banner de cookies neste site. A revogação do consentimento não afeta a licitude do tratamento realizado anteriormente.'
                },
                {
                    title: '9. Seus Direitos (LGPD)',
                    body: 'Como titular de dados, você tem os seguintes direitos:\n• Confirmação da existência de tratamento\n• Acesso aos dados\n• Correção de dados incompletos, inexatos ou desatualizados\n• Anonimização, bloqueio ou eliminação de dados desnecessários\n• Portabilidade dos dados\n• Informação sobre compartilhamento com terceiros\n• Revogação do consentimento a qualquer momento\n• Petição à ANPD (Autoridade Nacional de Proteção de Dados)\n\nPara exercer seus direitos: info@4upact.com'
                },
                {
                    title: '10. Retenção de Dados',
                    body: 'Retemos dados pessoais pelo tempo necessário para prestar nossos serviços e cumprir obrigações legais:\n\n• Dados de contato e consulta: 2 anos após o último contato\n• Dados de projetos de clientes: 5 anos (exigência da legislação tributária brasileira)\n• Dados de analytics: 14 meses (padrão do Google Analytics)\n• Registros de consentimento de cookies: 3 anos\n\nApós o prazo de retenção, os dados são excluídos com segurança ou anonimizados.'
                },
                {
                    title: '11. Não Venda ou Compartilhamento de Informações Pessoais (CCPA)',
                    body: 'A 4U Pact não vende suas informações pessoais a terceiros. Residentes da Califórnia podem enviar uma solicitação "Não Vender ou Compartilhar" para info@4upact.com a qualquer momento, e processaremos em até 15 dias úteis.'
                },
                {
                    title: '12. Privacidade de Menores',
                    body: 'Nossos serviços são voltados para empresas e profissionais. Não coletamos dados pessoais de menores de 18 anos. Caso acredite que coletamos tais dados inadvertidamente, entre em contato imediatamente: info@4upact.com.'
                },
                {
                    title: '13. Segurança',
                    body: 'Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui conexões criptografadas (HTTPS/TLS), controles de acesso e revisões regulares de segurança.'
                },
                {
                    title: '14. Alterações nesta Política',
                    body: 'Podemos atualizar esta Política periodicamente. Informaremos sobre alterações relevantes por meio de aviso em destaque no site e atualização da data no topo desta página. O uso continuado dos serviços após tais alterações constitui aceitação da Política atualizada.'
                },
                {
                    title: '15. Contato e Encarregado (DPO)',
                    body: 'Para dúvidas, solicitações ou reclamações relacionadas à privacidade:\n\nE-mail: info@4upact.com\nContato geral: info@4upact.com\nTelefone: +1 (646) 531-1313\nEndereço: [Brasília, DF, Brasil — a preencher]\n\nResponderemos a todas as solicitações em até 15 dias úteis. Você também pode contatar a ANPD em gov.br/anpd.'
                }
            ]
        },
        es: {
            meta_title: 'Política de Privacidad | 4U Pact',
            meta_desc: 'Política de Privacidad de 4U Pact — cómo recopilamos, usamos y protegemos tus datos personales de acuerdo con la LGPD, CCPA, PIPEDA y otras leyes aplicables.',
            badge: 'Legal · Privacidad',
            title: 'Política de Privacidad',
            updated: 'Última actualización: 16 de marzo de 2026',
            intro: 'En 4U Pact tomamos tu privacidad en serio. Esta Política explica qué datos personales recopilamos, por qué los recopilamos, cómo los utilizamos y cuáles son tus derechos sobre dichos datos. Cumplimos con la Ley General de Protección de Datos de Brasil (LGPD — Ley 13.709/2018), la CCPA de California, la PIPEDA de Canadá, la Ley 25.326 de Argentina, la Ley 1581 de Colombia y la LFPDPPP de México.',
            sections: [
                {
                    title: '1. Responsable del Tratamiento',
                    body: '4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "nosotros") es el responsable del tratamiento de los datos personales recopilados a través de este sitio web.\n\nRazón social: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nDirección registrada: Rua Itapiru 572, São Paulo, SP, 04143-010, Brasil\nDPO / Contacto de privacidad: info@4upact.com'
                },
                {
                    title: '2. Datos que Recopilamos',
                    body: 'Al interactuar con nuestro sitio web o sistema de reservas, podemos recopilar:\n• Nombre y apellido\n• Dirección de correo electrónico\n• Teléfono / WhatsApp\n• Nombre de empresa y cargo\n• País y ciudad\n• Mensajes y detalles del proyecto que envíes\n• Dirección IP, tipo de navegador e información del dispositivo (mediante cookies y herramientas de análisis)\n• Datos de reservas (mediante el widget de GoHighLevel)'
                },
                {
                    title: '3. Cómo Recopilamos los Datos',
                    body: 'Recopilamos datos a través de:\n• Formularios de contacto y reservas a través de GoHighLevel (GHL)\n• Analítica del sitio web (Google Analytics 4)\n• Comunicaciones por WhatsApp y correo electrónico que tú inicias\n• Cookies y tecnologías similares (ver Sección 8)'
                },
                {
                    title: '4. Base Legal del Tratamiento (LGPD Art. 7)',
                    body: 'Tratamos tus datos personales con base en las siguientes hipótesis legales:\n• Consentimiento (Art. 7, I): cuando marcas la casilla de consentimiento en nuestro formulario de contacto.\n• Interés legítimo (Art. 7, IX): para responder consultas, mejorar nuestros servicios y prevenir fraudes.\n• Ejecución de contrato (Art. 7, V): cuando el tratamiento es necesario para prestar los servicios solicitados.\n• Obligación legal (Art. 7, II): para cumplir con las obligaciones tributarias y comerciales brasileñas.'
                },
                {
                    title: '5. Cómo Usamos tus Datos',
                    body: 'Utilizamos tus datos personales para:\n• Responder a tus consultas y agendar llamadas de diagnóstico\n• Prestar los servicios de consultoría y automatización de marketing contratados\n• Enviar comunicaciones relacionadas con los servicios (sin marketing no solicitado sin consentimiento)\n• Mejorar y proteger nuestro sitio web y servicios\n• Cumplir con obligaciones legales y fiscales'
                },
                {
                    title: '6. Encargados de Tratamiento',
                    body: 'Compartimos tus datos únicamente con encargados que nos ayudan a prestar nuestros servicios. Todos están obligados contractualmente a proteger tus datos.\n\n• GoHighLevel (EE. UU.): plataforma de CRM, reservas y automatización de marketing.\n• Google LLC (EE. UU.): Analytics (GA4) y correo corporativo (Google Workspace).\n• Meta Platforms Inc. (EE. UU.): API de WhatsApp Business, usado para comunicación a tu solicitud.\n• Netlify Inc. (EE. UU.): alojamiento del sitio web.\n\nNo vendemos, alquilamos ni negociamos tus datos personales con fines publicitarios.'
                },
                {
                    title: '7. Transferencias Internacionales de Datos',
                    body: 'Algunos encargados están ubicados fuera de Brasil. Cuando los datos se transfieren internacionalmente, nos basamos en:\n• Cláusulas Contractuales Estándar (CCE) aprobadas por la autoridad competente\n• Mecanismos de transferencia internacional de la ANPD cuando estén disponibles\n• Decisiones de adecuación cuando corresponda\n\nPuedes solicitar información sobre las garantías de transferencia específicas en info@4upact.com.'
                },
                {
                    title: '8. Cookies y Rastreo',
                    body: 'Utilizamos las siguientes categorías de cookies:\n\n• Estrictamente Necesarias: imprescindibles para el funcionamiento del sitio. No pueden desactivarse.\n• Analíticas: Google Analytics 4 para comprender patrones de uso (desactivadas hasta el consentimiento).\n• Marketing: Meta Pixel para medir el rendimiento de anuncios (desactivado hasta el consentimiento).\n\nPuedes gestionar tus preferencias de cookies en cualquier momento mediante el banner de cookies de este sitio.'
                },
                {
                    title: '9. Tus Derechos',
                    body: 'Según tu ubicación, tienes los siguientes derechos:\n\nTodos los usuarios (LGPD / Derechos ARCO):\n• Confirmación de la existencia del tratamiento\n• Acceso a tus datos\n• Corrección de datos incompletos, inexactos o desactualizados\n• Anonimización, bloqueo o eliminación de datos innecesarios\n• Portabilidad de datos\n• Información sobre terceros con quienes compartimos datos\n• Revocación del consentimiento en cualquier momento\n• Reclamación ante la ANPD de Brasil\n\nResidentes de California (CCPA):\n• Derecho a conocer qué información personal se recopila, usa, comparte o vende\n• Derecho a eliminar información personal\n• Derecho a rechazar la venta o el intercambio de información personal\n• Derecho a no ser discriminado por ejercer tus derechos\n\nPara ejercer tus derechos: info@4upact.com'
                },
                {
                    title: '10. Retención de Datos',
                    body: 'Conservamos los datos personales durante el tiempo necesario para prestar nuestros servicios y cumplir con las obligaciones legales:\n\n• Datos de contacto y consultas: 2 años desde la última interacción\n• Datos de proyectos de clientes: 5 años (requisito de la ley tributaria brasileña)\n• Datos de analítica: 14 meses (valor predeterminado de Google Analytics)\n• Registros de consentimiento de cookies: 3 años'
                },
                {
                    title: '11. No Vender ni Compartir mi Información Personal (CCPA)',
                    body: '4U Pact no vende tu información personal a terceros. Los residentes de California pueden enviar una solicitud de "No Vender ni Compartir" a info@4upact.com en cualquier momento. Procesaremos la solicitud en un plazo de 15 días hábiles.'
                },
                {
                    title: '12. Privacidad de Menores',
                    body: 'Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos datos personales de menores de 18 años de manera intencional. Si crees que hemos recopilado tales datos inadvertidamente, contáctanos de inmediato en info@4upact.com.'
                },
                {
                    title: '13. Seguridad',
                    body: 'Implementamos medidas técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Esto incluye conexiones cifradas (HTTPS/TLS), controles de acceso y revisiones de seguridad periódicas.'
                },
                {
                    title: '14. Cambios en esta Política',
                    body: 'Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios relevantes mediante un aviso destacado en nuestro sitio web y actualizando la fecha de "Última actualización" al inicio de esta página.'
                },
                {
                    title: '15. Contacto y DPO',
                    body: 'Para cualquier pregunta, solicitud o reclamación relacionada con la privacidad:\n\nCorreo: info@4upact.com\nContacto general: info@4upact.com\nTeléfono: +1 (646) 531-1313\nDirección: [Brasilia, DF, Brasil — por completar]\n\nRespondemos a todas las solicitudes en un plazo de 15 días hábiles. Los usuarios brasileños también pueden contactar a la ANPD en gov.br/anpd.'
                }
            ]
        }
    };

    const c = content[language] || content.en;

    return (
        <>
            <Helmet>
                <title>{c.meta_title}</title>
                <meta name="description" content={c.meta_desc} />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href={`https://4upact.com/${language}/privacy`} />
            </Helmet>

            {/* Hero */}
            <section className="pt-40 pb-20 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-5 py-2 mb-8">
                            <Shield size={14} className="text-teal" />
                            <span className="text-teal text-xs font-black uppercase tracking-[0.3em]">{c.badge}</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                            {c.title}
                        </h1>
                        <p className="text-slate-500 text-sm font-mono">{c.updated}</p>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-teal pl-6">{c.intro}</p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {c.sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="border-b border-slate-100 pb-12 last:border-0"
                        >
                            <h2 className="text-xl font-black text-slate-900 mb-4 font-display tracking-tight">
                                {section.title}
                            </h2>
                            <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
                                {section.body}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Mail size={32} className="text-teal mx-auto mb-6" />
                    <h3 className="text-white font-display font-black text-2xl mb-4">
                        {language === 'en' ? 'Privacy Questions?' : language === 'pt' ? 'Dúvidas sobre Privacidade?' : '¿Preguntas sobre Privacidad?'}
                    </h3>
                    <p className="text-slate-400 mb-6 text-sm">
                        {language === 'en' ? 'Our DPO responds within 15 business days.' : language === 'pt' ? 'Nosso DPO responde em até 15 dias úteis.' : 'Nuestro DPO responde en 15 días hábiles.'}
                    </p>
                    <a
                        href="mailto:info@4upact.com"
                        className="inline-flex items-center gap-2 bg-teal text-white font-black px-8 py-4 rounded-2xl hover:bg-teal/90 transition-colors text-sm uppercase tracking-widest"
                    >
                        <Mail size={16} />
                        info@4upact.com
                    </a>
                </div>
            </section>
        </>
    );
};

export default Privacy;
