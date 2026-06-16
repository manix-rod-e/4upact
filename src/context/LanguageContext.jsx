
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
            badge: 'Engineering Stack',
            title: 'Construímos para Impacto Real.',
            subtitle: 'Unimos a melhor tecnologia global com a estratégia russa e o momentum brasileiro.'
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
            badge: 'Engineering Stack',
            title: 'Built for Real Impact.',
            subtitle: 'We combine the best global technology with high-end strategy and Brazilian momentum.'
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
            badge: 'Pila de Ingeniería',
            title: 'Construimos para Impacto Real.',
            subtitle: 'Unimos la mejor tecnología global con la estrategia de alto nivel y el momentum brasileño.'
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
