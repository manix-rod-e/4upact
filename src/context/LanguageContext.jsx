
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    pt: {
        nav: {
            home: 'Início',
            crm: 'CRM',
            services: 'Serviços',
            industries: 'Segmentos',
            about: 'Sobre',
            portfolio: 'Portfólio',
            blog: 'Blog',
            contact: 'Estratégia',
            pricing: 'Planos'
        },
        common: {
            cta: 'Receber Minha Auditoria',
            view_more: 'Ver Mais',
            learn_more: 'Saber Mais',
            founder: 'Fundador: Rod-e.',
            back_to_top: 'Voltar ao Topo'
        },
        home: {
            hero: {
                badge: 'ENGINE DE VELOCIDADE v1.0',
                title: 'Marketing PARA VOCÊ. Com imPACT.',
                subtitle: 'Construímos a infraestrutura de crescimento do seu negócio. Flows, CRM e Performance na velocidade do pensamento.',
                cta_primary: 'Agendar Diagnóstico',
                cta_secondary: 'Ver Portfólio'
            },
            pillars: {
                title: 'Pilares de Resultado',
                subtitle: 'O que fazemos, focamos em ROI.',
                p1_title: 'Arquitetura de Vendas',
                p1_desc: 'Estruturação de CRM que não deixa nenhum lead parado no limbo.',
                p2_title: 'Engenharia Web',
                p2_desc: 'Landing Pages e Funis de alta performance focados em conversão.',
                p3_title: 'Inteligência de Dados',
                p3_desc: 'Marketing baseado em dados reais de faturamento, não apenas cliques.'
            }
        },
        services: {
            metaTitle: 'Método imPACT | Serviços 4U Pact',
            metaDescription: 'Posicionamento, captação inteligente e sistemas comerciais integrados para transformar marketing em receita.',
            badge: 'Método imPACT',
            title: 'Três pilares.',
            titleAccent: 'Um motor de receita.',
            subtitle: 'Três pilares. Um motor de receita. Resultados em 90 dias.',
            pillars: [
                {
                    id: 'positioning',
                    number: '01',
                    title: 'Posicionamento e Autoridade',
                    headline: 'Domine seu mercado antes de entrar nele.',
                    body: 'Clarificamos categoria, oferta, provas e narrativa comercial para que o mercado entenda seu valor antes da primeira conversa de vendas.',
                    outcomes: ['Posicionamento de mercado', 'Arquitetura da oferta', 'Ativos de autoridade']
                },
                {
                    id: 'capture',
                    number: '02',
                    title: 'Captação Inteligente',
                    headline: 'Cada lead captado, qualificado e nutrido automaticamente.',
                    body: 'Conectamos formulários, CRM, WhatsApp, e-mail e lógica de follow-up para transformar interesse em pipeline, sem perder oportunidades em caixas de entrada e planilhas.',
                    outcomes: ['Captação de leads', 'Lógica de qualificação', 'Nutrição automatizada']
                },
                {
                    id: 'system',
                    number: '03',
                    title: 'Sistema Comercial Integrado',
                    headline: 'Seu CRM, conteúdo e equipe finalmente operam como um motor.',
                    body: 'Alinhamos etapas de vendas, conteúdo de campanha, passagens operacionais e dashboards em um sistema medido por avanço no pipeline e negócios fechados.',
                    outcomes: ['Integração de CRM', 'Fluxo da equipe', 'Dashboard de receita']
                }
            ],
            clientStory: {
                badge: 'História de Cliente',
                title: 'SOLENIEVE: da inspiração de viagem ao acompanhamento comercial.',
                body: 'A 4U Pact conectou uma jornada multilíngue de descoberta e consultoria para experiências selecionadas de cruzeiros e resorts, reunindo conteúdo, captação de interesse e follow-up em um único fluxo operacional.',
                outcomes: ['Conteúdo multilíngue', 'Captação de interesse', 'Follow-up conectado']
            },
            resultsBadge: 'Resultados em 90 Dias',
            resultsTitle: 'Para fundadores que não aceitam mais ações de marketing desconectadas.',
            cta: 'Receber Auditoria Gratuita'
        },
        industries: {
            badge: 'Engineering by Vertical',
            title: 'Nichos de Velocidade.',
            subtitle: 'Engenharia que respeita a lógica do seu segmento.'
        },
        crm: {
            badge: 'Nível de Arquitetura: Industrial',
            title: 'CRM Architecture Engine.',
            subtitle: 'Sua operação não precisa de mais ferramentas. Precisa de uma arquitetura que funcione enquanto você dorme.',
            cta: 'Auditar Minha Estrutura',
            snapshots_title: 'Snapshots de Velocidade.',
            impact_method: 'O imPACT Method em Ação',
            logic_viz: 'Visualização do Fluxo Lógico'
        },
        about: {
            founder_badge: 'O Arquiteto por trás do Motor',
            founder_title: 'Rod-e: Engenharia de Growth.',
            mission: 'Nossa missão é transformar tecnologia complexa na interface de lucro mais simples possível.',
            purpose_title: 'O Propósito: O Motor Invisível.',
            purpose_text: 'Acreditamos que o marketing é mais poderoso quando é pessoal, automatizado e intencional.',
            methodology: 'Metodologia imPACT'
        }
    },
    en: {
        nav: {
            home: 'Home',
            crm: 'CRM',
            services: 'Services',
            industries: 'Industries',
            about: 'About',
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Strategy Call',
            pricing: 'Pricing'
        },
        common: {
            cta: 'Get My Free Audit',
            view_more: 'View More',
            learn_more: 'Learn More',
            founder: 'Founder: Rod-e.',
            back_to_top: 'Back to Top'
        },
        home: {
            hero: {
                badge: 'VELOCITY ENGINE v1.0',
                title: 'Marketing FOR YOU. With imPACT.',
                subtitle: 'We build your business growth infrastructure. Flows, CRM, and Performance at the speed of thought.',
                cta_primary: 'Book Diagnosis',
                cta_secondary: 'View Portfolio'
            },
            pillars: {
                title: 'Outcome-Focused Pillars',
                subtitle: 'What we do, we focus on ROI.',
                p1_title: 'Sales Architecture',
                p1_desc: 'CRM structuring that leaves no lead behind in limbo.',
                p2_title: 'Web Engineering',
                p2_desc: 'High-performance Landing Pages and Funnels focused on conversion.',
                p3_title: 'Data Intelligence',
                p3_desc: 'Marketing based on real revenue data, not just clicks.'
            }
        },
        services: {
            metaTitle: 'The imPACT Method | 4U Pact Services',
            metaDescription: 'Positioning, intelligent capture, and integrated commercial systems that turn marketing into revenue.',
            badge: 'The imPACT Method',
            title: 'Three pillars.',
            titleAccent: 'One revenue engine.',
            subtitle: 'Three pillars. One revenue engine. Results in 90 days.',
            pillars: [
                {
                    id: 'positioning',
                    number: '01',
                    title: 'Positioning & Authority',
                    headline: 'Own your market before you enter it.',
                    body: 'We clarify the category, offer, proof, and commercial story so your market understands why you matter before the first sales conversation.',
                    outcomes: ['Market position', 'Offer architecture', 'Authority assets']
                },
                {
                    id: 'capture',
                    number: '02',
                    title: 'Intelligent Capture',
                    headline: 'Every lead captured, qualified, and nurtured automatically.',
                    body: 'We connect forms, CRM, WhatsApp, email, and follow-up logic so interest becomes pipeline instead of disappearing into inboxes and spreadsheets.',
                    outcomes: ['Lead capture', 'Qualification logic', 'Automated nurture']
                },
                {
                    id: 'system',
                    number: '03',
                    title: 'Integrated Commercial System',
                    headline: 'Your CRM, content, and team finally become one engine.',
                    body: 'We align sales stages, campaign content, operational handoffs, and dashboards around one revenue system measured by movement and closed deals.',
                    outcomes: ['CRM integration', 'Team workflow', 'Revenue dashboard']
                }
            ],
            clientStory: {
                badge: 'Client Story',
                title: 'SOLENIEVE: from travel inspiration to commercial follow-up.',
                body: '4U Pact connected a multilingual discovery and consultation journey for curated cruise and resort experiences, bringing content, interest capture, and follow-up into one operating flow.',
                outcomes: ['Multilingual content', 'Interest capture', 'Connected follow-up']
            },
            resultsBadge: 'Results in 90 Days',
            resultsTitle: 'Built for founders who are done with disconnected marketing activity.',
            cta: 'Book Free Audit'
        },
        industries: {
            badge: 'Engineering by Vertical',
            title: 'Velocity Niches.',
            subtitle: 'Engineering that respects the logic of your specific segment.'
        },
        crm: {
            badge: 'Architecture Level: Industrial',
            title: 'CRM Architecture Engine.',
            subtitle: 'Your operation doesn\'t need more tools. It needs an architecture that works while you sleep.',
            cta: 'Audit My Structure',
            snapshots_title: 'Speed Snapshots.',
            impact_method: 'The imPACT Method in Action',
            logic_viz: 'Logic Flow Visualization'
        },
        about: {
            founder_badge: 'The Architect Behind the Engine',
            founder_title: 'Rod-e: Growth Engineering.',
            mission: 'Our mission is to transform complex technology into the simplest profit interface possible.',
            purpose_title: 'The Purpose: The Invisible Engine.',
            purpose_text: 'We believe marketing is most powerful when it\'s personal, automated, and intentional.',
            methodology: 'imPACT Methodology'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            crm: 'CRM',
            services: 'Servicios',
            industries: 'Industrias',
            about: 'Nosotros',
            portfolio: 'Portafolio',
            blog: 'Blog',
            contact: 'Estrategia',
            pricing: 'Precios'
        },
        common: {
            cta: 'Recibir Mi Auditoría',
            view_more: 'Ver Más',
            learn_more: 'Saber Más',
            founder: 'Fundador: Rod-e.',
            back_to_top: 'Volver Arriba'
        },
        home: {
            hero: {
                badge: 'MOTOR DE VELOCIDAD v1.0',
                title: 'Marketing PARA TI. Con imPACTO.',
                subtitle: 'Construimos la infraestructura de crecimiento de tu negocio. Flows, CRM y Performance a la velocidad del pensamiento.',
                cta_primary: 'Agendar Diagnóstico',
                cta_secondary: 'Ver Portafolio'
            },
            pillars: {
                title: 'Pilares de Resultados',
                subtitle: 'Lo que hacemos, enfocado en el ROI.',
                p1_title: 'Arquitectura de Ventas',
                p1_desc: 'Estructuración de CRM que no deja ningún lead olvidado en el limbo.',
                p2_title: 'Ingeniería Web',
                p2_desc: 'Landing Pages y Embudos de alto rendimiento centrados en la conversión.',
                p3_title: 'Inteligencia de Datos',
                p3_desc: 'Marketing basado en datos reales de facturación, no solo clics.'
            }
        },
        services: {
            metaTitle: 'El Método imPACT | Servicios 4U Pact',
            metaDescription: 'Posicionamiento, captación inteligente y sistemas comerciales integrados que convierten marketing en ingresos.',
            badge: 'El Método imPACT',
            title: 'Tres pilares.',
            titleAccent: 'Un motor de ingresos.',
            subtitle: 'Tres pilares. Un motor de ingresos. Resultados en 90 días.',
            pillars: [
                {
                    id: 'positioning',
                    number: '01',
                    title: 'Posicionamiento y Autoridad',
                    headline: 'Domina tu mercado antes de entrar en él.',
                    body: 'Aclaramos la categoría, la oferta, las pruebas y la narrativa comercial para que el mercado entienda tu valor antes de la primera conversación de ventas.',
                    outcomes: ['Posición de mercado', 'Arquitectura de oferta', 'Activos de autoridad']
                },
                {
                    id: 'capture',
                    number: '02',
                    title: 'Captación Inteligente',
                    headline: 'Cada lead captado, calificado y nutrido automáticamente.',
                    body: 'Conectamos formularios, CRM, WhatsApp, correo y lógica de seguimiento para convertir el interés en pipeline, sin perder oportunidades en bandejas de entrada y hojas de cálculo.',
                    outcomes: ['Captación de leads', 'Lógica de calificación', 'Nutrición automatizada']
                },
                {
                    id: 'system',
                    number: '03',
                    title: 'Sistema Comercial Integrado',
                    headline: 'Tu CRM, contenido y equipo finalmente funcionan como un motor.',
                    body: 'Alineamos etapas de ventas, contenido de campaña, entregas operativas y dashboards en un sistema medido por movimiento del pipeline y negocios cerrados.',
                    outcomes: ['Integración de CRM', 'Flujo del equipo', 'Dashboard de ingresos']
                }
            ],
            clientStory: {
                badge: 'Historia de Cliente',
                title: 'SOLENIEVE: de la inspiración de viaje al seguimiento comercial.',
                body: '4U Pact conectó una experiencia multilingüe de descubrimiento y consultoría para cruceros y resorts seleccionados, reuniendo contenido, captación de interés y seguimiento en un solo flujo operativo.',
                outcomes: ['Contenido multilingüe', 'Captación de interés', 'Seguimiento conectado']
            },
            resultsBadge: 'Resultados en 90 Días',
            resultsTitle: 'Para fundadores que ya no aceptan acciones de marketing desconectadas.',
            cta: 'Recibir Auditoría Gratuita'
        },
        industries: {
            badge: 'Ingeniería por Vertical',
            title: 'Nichos de Velocidad.',
            subtitle: 'Ingeniería que respeta la lógica de su segmento específico.'
        },
        crm: {
            badge: 'Nivel de Arquitectura: Industrial',
            title: 'Motor de Arquitectura CRM.',
            subtitle: 'Su operación no necesita más herramientas. Necesita una arquitectura que funcione mientras usted duerme.',
            cta: 'Auditar Mi Estructura',
            snapshots_title: 'Instantáneas de Velocidad.',
            impact_method: 'El Método imPACTO en Acción',
            logic_viz: 'Visualización del Flujo Lógico'
        },
        about: {
            founder_badge: 'El Arquitecto detrás del Motor',
            founder_title: 'Rod-e: Ingeniería de Crecimiento.',
            mission: 'Nuestra misión es transformar la tecnología compleja en la interfaz de lucro más sencilla posible.',
            purpose_title: 'El Propósito: El Motor Invisible.',
            purpose_text: 'Creemos que el marketing es más poderoso cuando es personal, automatizado e intencional.',
            methodology: 'Metodología imPACTO'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const getInitialLang = () => {
        const path = window.location.pathname.split('/')[1];
        if (['en', 'pt', 'es'].includes(path)) return path;
        return localStorage.getItem('language') || 'pt';
    };

    const [language, setLanguage] = useState(getInitialLang());

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
