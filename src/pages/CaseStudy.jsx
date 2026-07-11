
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, AlertCircle, CheckCircle2, Zap, Calendar, TrendingUp, X as LucideX, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- PHOTO CAROUSEL ---
const PhotoCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const go = useCallback((idx) => {
        setDirection(idx > current ? 1 : -1);
        setCurrent(idx);
    }, [current]);

    const prev = () => go((current - 1 + images.length) % images.length);
    const next = useCallback(() => go((current + 1) % images.length), [current, go, images.length]);

    // Auto-advance every 4s
    useEffect(() => {
        const t = setTimeout(next, 4000);
        return () => clearTimeout(t);
    }, [current, next]);

    const variants = {
        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    return (
        <div className="mb-20 max-w-4xl mx-auto px-6">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] bg-slate-900 shadow-2xl shadow-primary/10">
                <AnimatePresence custom={direction} mode="popLayout">
                    <Motion.img
                        key={current}
                        src={images[current].src}
                        alt={images[current].caption}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </AnimatePresence>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-8 pointer-events-none">
                    <p className="text-white font-black text-sm uppercase tracking-widest">{images[current].caption}</p>
                </div>

                {/* Prev / Next */}
                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <ChevronLeft size={18} />
                </button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const CaseStudy = () => {
    const { id } = useParams();
    const { language } = useLanguage();

    // Mapping of data (In a real app, this would come from a CMS)
    const caseData = {
        'fitkel-sensuale': {
            title: 'FitKel Sensuale',
            links: [
                { label: 'Website', url: 'https://fitkelsensuale.com' },
                { label: 'Instagram', url: 'https://instagram.com/fitkelsensuale' },
            ],
            images: [
                { src: '/assets/fitkel/dashboard-hero.png', caption: 'FitKel Sensuale — 4U Pact Intelligence Dashboard' },
            ],
            impactTitle: language === 'en' ? 'Full-Stack Lingerie Brand Built from Zero' : language === 'es' ? 'Marca de Lencería Full-Stack desde Cero' : 'Marca de Lingerie Full-Stack do Zero',
            revenue: language === 'en' ? 'Full Stack Built' : language === 'es' ? 'Stack Completo Construido' : 'Stack Completo Construído',
            timeframe: language === 'en' ? 'End-to-End Build' : language === 'es' ? 'Construcción End-to-End' : 'Construção End-to-End',
            context: language === 'en'
                ? 'Kel is a 3x Bodybuilding Champion on a mission to inspire sensual confidence and empower women through fashion. "Victory on the Stage of real life." We didn\'t just build a brand — we built the entire digital infrastructure from a blank page.'
                : language === 'es'
                ? 'Kel es Campeona de Fisicoculturismo 3 veces con la misión de inspirar confianza sensual y empoderar mujeres a través de la moda. "Victoria en el Escenario de la vida real." No solo construimos una marca — construimos toda la infraestructura digital desde una página en blanco.'
                : 'Kel é Campeã de Fisiculturismo 3 vezes com a missão de inspirar confiança sensual e empoderar mulheres pela moda. "Vitória no Palco da vida real." Não construímos só uma marca — construímos toda a infraestrutura digital do zero.',
            challenge: language === 'en'
                ? ['Zero brand identity — no manifesto, no archetypes, no visual language for the lingerie market', 'No digital presence: no website, no Instagram, no social ecosystem, no CRM or automation', 'No way to recover abandoned carts, nurture leads, or track ROI across channels']
                : language === 'es'
                ? ['Sin identidad de marca — sin manifiesto, sin arquetipos, sin lenguaje visual para el mercado de lencería', 'Sin presencia digital: sin sitio web, sin Instagram, sin ecosistema social, sin CRM ni automatización', 'Sin forma de recuperar carritos abandonados, nutrir leads o rastrear ROI entre canales']
                : ['Zero identidade de marca — sem manifesto, sem arquétipos, sem linguagem visual para o mercado de lingerie', 'Sem presença digital: sem site, sem Instagram, sem ecossistema social, sem CRM ou automação', 'Sem forma de recuperar carrinhos abandonados, nutrir leads ou rastrear ROI entre canais'],
            solution: language === 'en'
                ? [
                    'Built complete brand DNA — manifesto ("Victory on the Real Life Stage"), 3 archetypes (Lover · Explorer · Creator), dark-mode luxury boutique UX (#090609 + gold CTAs), and dual brand personas: KEL (The Soul & Storyteller) and LARA (The Brain & Sales Logic)',
                    'Launched "Kel\'s Command" — a custom 4U Pact Intelligence dashboard with 13+ modules (CEO Command, Marketing Hub, AI Insights Lab, Growth Command, Creative Engine, Hook Lab, Revenue Expansion) plus automated media scheduling via GoHighLevel',
                    'Created "Lara" — AI virtual stylist & blogger who engages clients in Portuguese, with smart cart abandonment ("The Moneymaker" workflow: value-based routing, WhatsApp for high-value, email + SMS coupon sequences) and conversation management'
                  ]
                : language === 'es'
                ? [
                    'Construí el ADN de marca completo — manifiesto ("Victoria en el Escenario"), 3 arquetipos (Amante · Explorador · Creador), UX de boutique de lujo en modo oscuro, y doble persona de marca: KEL (Alma y Narradora) y LARA (Cerebro y Lógica de Ventas)',
                    'Lancé "Kel\'s Command" — dashboard personalizado de 4U Pact Intelligence con 13+ módulos (CEO Command, Marketing Hub, AI Insights Lab, Growth Command, Creative Engine) más programación automatizada vía GoHighLevel',
                    'Creé a "Lara" — estilista virtual IA y blogger que interactúa en portugués, con recuperación inteligente de carritos ("The Moneymaker": enrutamiento por valor, WhatsApp para alto valor, secuencias email + SMS) y gestión de conversación'
                  ]
                : [
                    'Construí o DNA completo da marca — manifesto ("Vitória no Palco da Vida Real"), 3 arquétipos (Amante · Explorador · Criador), UX de boutique de luxo em dark mode (#090609 + CTAs dourados), e dupla persona: KEL (Alma e Contadora de Histórias) e LARA (Cérebro e Lógica de Vendas)',
                    'Lancei "Kel\'s Command" — dashboard personalizado de 4U Pact Intelligence com 13+ módulos (CEO Command, Marketing Hub, AI Insights Lab, Growth Command, Creative Engine, Hook Lab, Revenue Expansion) + agendamento automático via GoHighLevel',
                    'Criei "Lara" — estilista virtual IA e blogueira que interage em português, com recuperação inteligente de carrinho ("The Moneymaker": roteamento por valor, WhatsApp para alto valor, sequências email + SMS) e gestão de conversa'
                  ],
            roiBoost: '100%',
            stats: [
                { value: '13+', label: language === 'en' ? 'Dashboard Modules Built' : language === 'es' ? 'Módulos del Dashboard' : 'Módulos do Dashboard' },
                { value: 'Lara', label: language === 'en' ? 'AI Virtual Stylist Deployed' : language === 'es' ? 'Estilista Virtual IA Lanzada' : 'Estilista Virtual IA Lançada' },
                { value: 'KEL', label: language === 'en' ? 'Brand DNA & Manifesto' : language === 'es' ? 'ADN de Marca & Manifiesto' : 'DNA de Marca & Manifesto' }
            ]
        },
        'studio-mum': {
            links: [
                { label: 'Website', url: 'https://studiomum.com' },
            ],
            title: 'Studio Mum',
            impactTitle: language === 'en' ? 'Maternity Brand Born from Love' : language === 'es' ? 'Marca de Maternidad Nacida del Amor' : 'Marca de Maternidade Nascida do Amor',
            revenue: language === 'en' ? 'Full Brand Identity' : 'Identidade de Marca Completa',
            timeframe: language === 'en' ? '6 Weeks' : '6 Semanas',
            challenge: language === 'en'
                ? ['No visual identity reflecting the beauty of motherhood', 'Generic brand positioning in a saturated market', 'Missing emotional connection with pregnant audience']
                : language === 'es'
                ? ['Sin identidad visual que refleje la belleza de la maternidad', 'Posicionamiento genérico en un mercado saturado', 'Sin conexión emocional con el público embarazado']
                : ['Sem identidade visual que reflita a beleza da maternidade', 'Posicionamento genérico em mercado saturado', 'Sem conexão emocional com o público grávido'],
            solution: language === 'en'
                ? ['Brand strategy celebrating the beauty of curves and the pregnant belly', 'Logo with mother\'s tummy and curves literally built into the design', 'Complete identity system in warm beige and signature deep red']
                : language === 'es'
                ? ['Estrategia de marca que celebra la belleza de las curvas y la barriga', 'Logo con la barriga y curvas de la madre literalmente integradas en el diseño', 'Sistema de identidad completo en beige cálido y rojo profundo']
                : ['Estratégia de marca celebrando a beleza das curvas e da barriga grávida', 'Logo com a barriga e curvas da mãe literalmente integradas no design', 'Sistema de identidade completo em bege quente e vermelho profundo'],
            roiBoost: '100%',
            stats: [
                { value: 'Logo', label: language === 'en' ? 'Custom Brand Mark' : 'Marca Personalizada' },
                { value: 'Full', label: language === 'en' ? 'Identity System Built' : 'Sistema de Identidade' },
                { value: '2', label: language === 'en' ? 'Signature Brand Colors' : 'Cores de Marca' }
            ]
        },
        'apartments-leaseup': {
            title: 'ApartmentsLeaseUp Experts',
            links: [
                { label: 'Website', url: 'https://apartmentsleaseupexperts.com' },
            ],
            impactTitle: language === 'en' ? 'Real Estate Digital Presence Built' : language === 'es' ? 'Presencia Digital Inmobiliaria Construida' : 'Presença Digital Imobiliária Construída',
            revenue: language === 'en' ? 'Full Website Launch' : 'Lançamento Completo do Site',
            timeframe: language === 'en' ? '4 Weeks' : '4 Semanas',
            challenge: language === 'en'
                ? ['No digital presence to capture apartment leads online', 'Manual inquiry management with no CRM system', 'Missed leads from lack of automated follow-up']
                : language === 'es'
                ? ['Sin presencia digital para captar leads de apartamentos en línea', 'Gestión manual de consultas sin sistema CRM', 'Leads perdidos por falta de seguimiento automatizado']
                : ['Sem presença digital para captar leads de apartamentos online', 'Gestão manual de consultas sem sistema CRM', 'Leads perdidos por falta de follow-up automatizado'],
            solution: language === 'en'
                ? ['Complete website launch with lead capture architecture from day one', 'Real estate CRM integration built directly into the site', 'Brand presence and conversion pages engineered for lease-up velocity']
                : language === 'es'
                ? ['Lanzamiento completo del sitio web con arquitectura de captación de leads desde el día uno', 'Integración CRM inmobiliario directamente en el sitio', 'Presencia de marca y páginas de conversión diseñadas para velocidad de arrendamiento']
                : ['Lançamento completo do site com arquitetura de captação de leads desde o dia um', 'Integração CRM imobiliário diretamente no site', 'Presença de marca e páginas de conversão projetadas para velocidade de locação'],
            roiBoost: '+200%',
            stats: [
                { value: 'Day 1', label: language === 'en' ? 'CRM Integration Live' : 'CRM Integrado' },
                { value: '3x', label: language === 'en' ? 'Lead Capture Rate' : 'Taxa de Captação' },
                { value: '100%', label: language === 'en' ? 'Digital Presence Built' : 'Presença Digital' }
            ]
        },
        'azulik-tulum': {
            title: 'Azulik · Sfer Ik · Tulum',
            links: [
                { label: 'Website', url: 'https://azulik.com' },
                { label: 'Instagram', url: 'https://instagram.com/azulik' },
            ],
            images: [
                { src: '/assets/azulik/aerial-nest.jpg', caption: language === 'en' ? 'Azulik · Aerial View of the Iconic Nest at Sunset' : language === 'es' ? 'Azulik · Vista Aérea del Nido Icónico al Atardecer' : 'Azulik · Vista Aérea do Ninho Icônico ao Pôr do Sol' },
                { src: '/assets/azulik/rooftop-sunset.jpg', caption: language === 'en' ? 'Azulik Rooftop · Sunset Dining Over the Jungle Canopy' : language === 'es' ? 'Azulik Rooftop · Cena al Atardecer Sobre la Selva' : 'Azulik Rooftop · Jantar ao Pôr do Sol Sobre a Selva' },
                { src: '/assets/azulik/night-jungle.jpg', caption: language === 'en' ? 'Azulik · The Jungle Path at Night Under the Stars' : language === 'es' ? 'Azulik · Camino de Selva Nocturno Bajo las Estrellas' : 'Azulik · Caminho na Selva à Noite Sob as Estrelas' },
                { src: '/assets/azulik/interior-suite.jpg', caption: language === 'en' ? 'Azulik · Treehouse Suite — Organic Architecture & Luxury' : language === 'es' ? 'Azulik · Suite en el Árbol — Arquitectura Orgánica y Lujo' : 'Azulik · Suíte na Árvore — Arquitetura Orgânica e Luxo' },
            ],
            impactTitle: language === 'en' ? 'From Viral Fame to Real Buyers' : language === 'es' ? 'De la Fama Viral a los Compradores Reales' : 'Da Fama Viral aos Compradores Reais',
            revenue: '15X ROI',
            timeframe: language === 'en' ? '2 Weeks (First Campaign)' : '2 Semanas (1ª Campanha)',
            context: language === 'en'
                ? 'Azulik was the most followed hotel in the world on social media. Millions of followers, international press, art installations covered by NOWNESS and MEXX. The brand had everything — except one thing: the audience following them wasn\'t the audience buying from them.'
                : language === 'es'
                ? 'Azulik era el hotel más seguido del mundo en redes sociales. Millones de seguidores, prensa internacional, instalaciones de arte cubiertas por NOWNESS y MEXX. La marca lo tenía todo — excepto una cosa: la audiencia que los seguía no era la audiencia que les compraba.'
                : 'A Azulik era o hotel mais seguido do mundo nas redes sociais. Milhões de seguidores, imprensa internacional, instalações de arte cobertas pelo NOWNESS e MEXX. A marca tinha tudo — exceto uma coisa: o público que os seguia não era o público que comprava.',
            challenge: language === 'en'
                ? ['Most followed hotel in the world — but audience reach didn\'t convert to actual bookings', 'Social media strategy based on boosted posts with no buyer persona framework or measurable ROI', 'High-turnover "leaking" marketing team — talented individuals working in silos, no shared direction']
                : language === 'es'
                ? ['El hotel más seguido del mundo — pero el alcance en redes no se convertía en reservas reales', 'Estrategia de redes basada en posts impulsados sin marco de buyer persona ni ROI medible', 'Equipo de marketing fragmentado con alta rotación — individuos talentosos trabajando en silos']
                : ['Hotel mais seguido do mundo — mas o alcance nas redes não convertia em reservas reais', 'Estratégia de redes baseada em posts impulsionados sem framework de buyer persona ou ROI mensurável', 'Equipe de marketing "fragmentada" com alta rotatividade — indivíduos talentosos trabalhando em silos'],
            solution: language === 'en'
                ? ['Built 4 precise buyer personas (Cindy the Wanderer · Ben the Artist · Serena the Naturalist · Bill the Investor) — shifted from broadcasting to targeting the right audience', 'Launched "Love Reconnection" & "Blooming" campaigns — full SEM + dedicated landing pages + Tag Manager tracking, achieving 15X ROI in 2 weeks', 'Rebuilt team culture around collaboration and shared KPIs — reducing turnover and aligning creative, digital, and press teams under one strategy']
                : language === 'es'
                ? ['Construí 4 buyer personas precisos (Cindy la Viajera · Ben el Artista · Serena la Naturalista · Bill el Inversor) — cambié de broadcast a targeting del público correcto', 'Lancé campañas "Love Reconnection" y "Blooming" — SEM completo + landing pages dedicadas + Tag Manager, logrando 15X ROI en 2 semanas', 'Reconstruí la cultura del equipo en torno a la colaboración y KPIs compartidos — reduciendo la rotación y alineando equipos creativos, digitales y de prensa']
                : ['Construí 4 buyer personas precisas (Cindy a Viajante · Ben o Artista · Serena a Naturalista · Bill o Investidor) — mudei de broadcast para targeting do público certo', 'Lancei campanhas "Love Reconnection" e "Blooming" — SEM completo + landing pages dedicadas + Tag Manager, alcançando 15X ROI em 2 semanas', 'Reconstruí a cultura da equipe em torno de colaboração e KPIs compartilhados — reduzindo rotatividade e alinhando equipes criativas, digitais e de imprensa'],
            roiBoost: '15X',
            stats: [
                { value: '#1', label: language === 'en' ? 'Most Followed Hotel Worldwide' : 'Hotel Mais Seguido do Mundo' },
                { value: '15X', label: language === 'en' ? 'ROI — First 2 Weeks' : 'ROI — Primeiras 2 Semanas' },
                { value: '4', label: language === 'en' ? 'Buyer Personas Built' : 'Buyer Personas Criadas' }
            ]
        },
        'villamor-tambaba': {
            title: 'Villamor Tambaba Resort',
            links: [
                { label: 'Website', url: 'https://villamortambabaresort.com.br' },
            ],
            images: [
                { src: '/assets/villamor/villamortambabaresort.png', caption: 'Villamor Tambaba Resort — Luxury Beachfront Property, Northeast Brazil' },
            ],
            impactTitle: language === 'en' ? 'Luxury Resort Brand Built From Zero' : language === 'es' ? 'Marca de Resort de Lujo Construida desde Cero' : 'Marca de Resort de Luxo Construída do Zero',
            revenue: language === 'en' ? 'Full Brand Launch' : 'Lançamento Completo da Marca',
            timeframe: language === 'en' ? '6 Months' : '6 Meses',
            context: language === 'en'
                ? [
                    'Northeast Brazil holds some of the most breathtaking coastline in South America — warm water, constant breeze, white sand, and a sky that seems wider than anywhere else on earth. Tambaba is one of those places. When the owners of Villamor Tambaba Resort approached 4U Pact, they had something extraordinary: a world-class luxury property sitting on a nearly untouched stretch of the Brazilian coast. What they didn\'t have was a brand, a team, a website, or a single marketing system in place.',
                    'The challenge wasn\'t just about launching a resort. It was about building an entire commercial organism from scratch — brand identity, positioning, tone of voice, a full website, digital infrastructure, demand generation, and a team capable of sustaining it all. The luxury travel market is unforgiving: first impressions are permanent, and the gap between a memorable brand and a forgettable one is measured in weeks, not years.',
                    'Rodrigo led the full brand and digital architecture for Villamor Tambaba Resort. This included designing and launching the resort\'s website — built not just as a showcase, but as an intelligent sales engine. An AI-powered chatbot was deployed directly on the site, trained with the full property knowledge base: room categories, packages, experiences, pricing, availability, and FAQs. The chatbot could engage, qualify, and guide prospective guests in real time — at any hour, in any language.',
                    'The results validated the approach almost immediately. One guest, navigating the site and interacting with the chatbot, completed a booking worth R$50,000 — entirely through the conversational interface, without a single phone call or sales agent involved. A luxury sale of that magnitude, closed by an automated system, in a market where personal selling is considered essential. That single transaction made the entire digital stack pay for itself.',
                    'By the end of the engagement, Villamor Tambaba Resort had a fully operational brand, a trained marketing team aligned around shared KPIs, and an active demand generation machine running across B2B and B2C channels. A property that existed in silence now had a voice — and the intelligence to convert it.'
                  ]
                : language === 'es'
                ? [
                    'El Nordeste de Brasil tiene algunas de las costas más impresionantes de Sudamérica — agua cálida, brisa constante, arena blanca y un cielo que parece más amplio que en ningún otro lugar del mundo. Tambaba es uno de esos lugares. Cuando los dueños de Villamor Tambaba Resort se acercaron a 4U Pact, tenían algo extraordinario: una propiedad de lujo de clase mundial en una franja casi virgen de la costa brasileña. Lo que no tenían era una marca, un equipo, un sitio web ni un solo sistema de marketing.',
                    'El desafío no era simplemente lanzar un resort. Era construir un organismo comercial completo desde cero — identidad de marca, posicionamiento, tono de voz, un sitio web completo, infraestructura digital, generación de demanda y un equipo capaz de sostener todo ello. El mercado de viajes de lujo es implacable: las primeras impresiones son permanentes, y la diferencia entre una marca memorable y una olvidable se mide en semanas, no en años.',
                    'Rodrigo lideró la arquitectura completa de marca y digital para Villamor Tambaba Resort. Esto incluyó diseñar y lanzar el sitio web del resort — construido no solo como vitrina, sino como motor de ventas inteligente. Se desplegó un chatbot de IA directamente en el sitio, entrenado con toda la base de conocimiento de la propiedad: categorías de habitaciones, paquetes, experiencias, precios, disponibilidad y FAQs. El chatbot podía captar, calificar y guiar a los huéspedes potenciales en tiempo real — a cualquier hora, en cualquier idioma.',
                    'Los resultados validaron el enfoque casi de inmediato. Un huésped, navegando el sitio e interactuando con el chatbot, completó una reserva por valor de R$50.000 — íntegramente a través de la interfaz conversacional, sin una sola llamada telefónica ni agente de ventas involucrado. Una venta de lujo de esa magnitud, cerrada por un sistema automatizado, en un mercado donde la venta personal se considera esencial. Esa única transacción hizo que toda la plataforma digital se pagara sola.',
                    'Al final del proyecto, Villamor Tambaba Resort tenía una marca completamente operativa, un equipo de marketing formado y alineado en torno a KPIs compartidos, y una máquina activa de generación de demanda B2B y B2C. Una propiedad que existía en silencio ahora tenía una voz — y la inteligencia para convertirla.'
                  ]
                : [
                    'O Nordeste do Brasil tem algumas das costas mais deslumbrantes da América do Sul — água morna, brisa constante, areia branca e um céu que parece mais amplo do que em qualquer outro lugar do mundo. Tambaba é um desses lugares. Quando os proprietários do Villamor Tambaba Resort procuraram a 4U Pact, tinham algo extraordinário: uma propriedade de luxo de classe mundial em um trecho quase intocado da costa brasileira. O que não tinham era uma marca, uma equipe, um site ou um único sistema de marketing em funcionamento.',
                    'O desafio não era apenas lançar um resort. Era construir um organismo comercial completo do zero — identidade de marca, posicionamento, tom de voz, um site completo, infraestrutura digital, geração de demanda e uma equipe capaz de sustentar tudo isso. O mercado de viagens de luxo é implacável: as primeiras impressões são permanentes, e a diferença entre uma marca memorável e uma esquecível se mede em semanas, não em anos.',
                    'Rodrigo liderou a arquitetura completa de marca e digital do Villamor Tambaba Resort. Isso incluiu o design e lançamento do site do resort — construído não apenas como vitrine, mas como um motor de vendas inteligente. Um chatbot com IA foi implantado diretamente no site, treinado com toda a base de conhecimento da propriedade: categorias de quartos, pacotes, experiências, preços, disponibilidade e perguntas frequentes. O chatbot podia engajar, qualificar e guiar hóspedes em potencial em tempo real — a qualquer hora, em qualquer idioma.',
                    'Os resultados validaram a abordagem quase imediatamente. Um hóspede, navegando pelo site e interagindo com o chatbot, concluiu uma reserva no valor de R$50.000 — inteiramente pela interface conversacional, sem uma única ligação ou agente de vendas envolvido. Uma venda de luxo dessa magnitude, fechada por um sistema automatizado, em um mercado onde a venda pessoal é considerada essencial. Essa única transação fez toda a plataforma digital se pagar.',
                    'Ao final do projeto, o Villamor Tambaba Resort tinha uma marca totalmente operacional, uma equipe de marketing treinada e alinhada em torno de KPIs compartilhados, e uma máquina ativa de geração de demanda B2B e B2C. Uma propriedade que existia em silêncio agora tinha uma voz — e a inteligência para convertê-la.'
                  ],
            quote: language === 'en'
                ? 'A R$50,000 sale closed by a chatbot — no phone call, no sales agent. That\'s what happens when you build digital infrastructure that doesn\'t just look good, but actually sells.'
                : language === 'es'
                ? 'Una venta de R$50.000 cerrada por un chatbot — sin llamada, sin agente de ventas. Eso es lo que ocurre cuando construyes infraestructura digital que no solo se ve bien, sino que realmente vende.'
                : 'Uma venda de R$50.000 fechada por um chatbot — sem ligação, sem agente de vendas. É isso que acontece quando você constrói uma infraestrutura digital que não apenas parece boa, mas realmente vende.',
            challenge: language === 'en'
                ? ['New luxury resort with zero brand recognition in Northeast Brazil', 'No website, no marketing team, no digital infrastructure, no demand generation system', 'Needed simultaneous B2B (travel agents, corporate) and B2C (direct guests) strategy']
                : language === 'es'
                ? ['Nuevo resort de lujo sin reconocimiento de marca en el Nordeste de Brasil', 'Sin sitio web, sin equipo de marketing, sin infraestructura digital, sin sistema de generación de demanda', 'Necesitaba estrategia simultánea B2B (agencias, corporativo) y B2C (huéspedes directos)']
                : ['Novo resort de luxo sem reconhecimento de marca no Nordeste do Brasil', 'Sem site, sem equipe de marketing, sem infraestrutura digital, sem sistema de geração de demanda', 'Precisava de estratégia simultânea B2B (agências, corporativo) e B2C (hóspedes diretos)'],
            solution: language === 'en'
                ? ['Defined full brand positioning — lifestyle, identity, tone of voice for the Nordeste luxury market', 'Built and launched the resort website with an AI chatbot trained on full property knowledge — enabling 24/7 automated guest qualification and booking', 'Built marketing team from zero and launched B2B + B2C demand generation — digital media, alliances, influencer strategy, and lead capture systems']
                : language === 'es'
                ? ['Definí el posicionamiento completo de marca — lifestyle, identidad y tono de voz para el mercado de lujo del Nordeste', 'Construí y lancé el sitio web del resort con un chatbot de IA entrenado con todo el conocimiento de la propiedad — habilitando calificación y reserva automatizada de huéspedes 24/7', 'Construí el equipo de marketing desde cero y lancé generación de demanda B2B + B2C — medios digitales, alianzas, estrategia de influencers y sistemas de captación de leads']
                : ['Defini o posicionamento completo da marca — lifestyle, identidade e tom de voz para o mercado de luxo do Nordeste', 'Construí e lancei o site do resort com um chatbot de IA treinado com todo o conhecimento da propriedade — habilitando qualificação e reserva automatizada de hóspedes 24/7', 'Construí a equipe de marketing do zero e lancei geração de demanda B2B + B2C — mídia digital, alianças, estratégia de influenciadores e sistemas de captação de leads'],
            milestones: language === 'en'
                ? [
                    { year: 'Month 1', title: 'Brand Architecture', desc: 'Full brand identity defined — positioning, lifestyle narrative, tone of voice, and visual direction for the luxury Nordeste market.' },
                    { year: 'Month 2', title: 'Team Built', desc: 'Marketing team recruited from zero — roles defined, people hired and onboarded, culture and KPIs aligned from day one.' },
                    { year: 'Month 3', title: 'Website + AI Chatbot Live', desc: 'Resort website launched with an AI-powered chatbot trained on the full property knowledge base — rooms, packages, pricing, experiences. Available 24/7 in any language.' },
                    { year: 'Month 4', title: 'B2B Alliance Program Launched', desc: 'Travel agency and corporate account strategy activated — partnerships built to generate group bookings and sustained B2B demand.' },
                    { year: 'Month 5', title: 'R$50K Chatbot Sale', desc: 'A guest interacting with the AI chatbot completed a R$50,000 booking autonomously — no phone call, no agent. The entire digital stack paid for itself in a single transaction.' },
                    { year: 'Month 6', title: 'Full Demand Generation Running', desc: 'B2C media campaigns live, influencer strategy active, and a full-funnel marketing machine operating across B2B and B2C channels.' },
                  ]
                : language === 'es'
                ? [
                    { year: 'Mes 1', title: 'Arquitectura de Marca', desc: 'Identidad de marca completa definida — posicionamiento, narrativa de lifestyle, tono de voz y dirección visual para el mercado de lujo del Nordeste.' },
                    { year: 'Mes 2', title: 'Equipo Construido', desc: 'Equipo de marketing reclutado desde cero — roles definidos, personas contratadas e integradas, cultura y KPIs alineados desde el primer día.' },
                    { year: 'Mes 3', title: 'Sitio Web + Chatbot IA Activo', desc: 'Sitio web del resort lanzado con chatbot de IA entrenado en la base de conocimiento completa — habitaciones, paquetes, precios, experiencias. Disponible 24/7 en cualquier idioma.' },
                    { year: 'Mes 4', title: 'Programa B2B Lanzado', desc: 'Estrategia de agencias de viaje y cuentas corporativas activada — alianzas construidas para generar reservas grupales y demanda B2B sostenida.' },
                    { year: 'Mes 5', title: 'Venta de R$50K por Chatbot', desc: 'Un huésped interactuando con el chatbot de IA completó una reserva de R$50.000 de forma autónoma — sin llamada, sin agente. Toda la plataforma digital se pagó sola en una sola transacción.' },
                    { year: 'Mes 6', title: 'Generación de Demanda Completa', desc: 'Campañas B2C en medios activas, estrategia de influencers en marcha, y una máquina de marketing full-funnel operando en canales B2B y B2C.' },
                  ]
                : [
                    { year: 'Mês 1', title: 'Arquitetura de Marca', desc: 'Identidade de marca completa definida — posicionamento, narrativa de lifestyle, tom de voz e direção visual para o mercado de luxo do Nordeste.' },
                    { year: 'Mês 2', title: 'Equipe Construída', desc: 'Equipe de marketing recrutada do zero — funções definidas, pessoas contratadas e integradas, cultura e KPIs alinhados desde o primeiro dia.' },
                    { year: 'Mês 3', title: 'Site + Chatbot IA no Ar', desc: 'Site do resort lançado com chatbot de IA treinado na base de conhecimento completa — quartos, pacotes, preços, experiências. Disponível 24/7 em qualquer idioma.' },
                    { year: 'Mês 4', title: 'Programa B2B Lançado', desc: 'Estratégia de agências de viagem e contas corporativas ativada — parcerias construídas para gerar reservas em grupo e demanda B2B sustentada.' },
                    { year: 'Mês 5', title: 'Venda de R$50K pelo Chatbot', desc: 'Um hóspede interagindo com o chatbot de IA concluiu uma reserva de R$50.000 de forma autônoma — sem ligação, sem agente. Toda a plataforma digital se pagou em uma única transação.' },
                    { year: 'Mês 6', title: 'Geração de Demanda Completa', desc: 'Campanhas B2C em mídia no ar, estratégia de influenciadores ativa, e uma máquina de marketing full-funnel operando em canais B2B e B2C.' },
                  ],
            roiBoost: 'R$50K',
            stats: [
                { value: 'R$50K', label: language === 'en' ? 'Sale via AI Chatbot' : language === 'es' ? 'Venta vía Chatbot IA' : 'Venda via Chatbot IA' },
                { value: '0→1', label: language === 'en' ? 'Brand + Website + Team Built' : language === 'es' ? 'Marca + Web + Equipo Construidos' : 'Marca + Site + Equipe Construídos' },
                { value: 'B2B+B2C', label: language === 'en' ? 'Dual Demand Strategy' : language === 'es' ? 'Estrategia Dual de Demanda' : 'Estratégia Dual de Demanda' }
            ]
        },
        'ibm-netvista': {
            title: 'IBM · NetVista LatAm',
            images: [
                { src: '/assets/ibm/ibm-hero.png', caption: 'IBM NetVista — Closing the Gap on Compaq Across Latin America' },
                { src: '/assets/ibm/ibm-magazine-article.png', caption: language === 'en' ? 'IBM era — technology press coverage featuring NetVista and IBM product innovations' : language === 'es' ? 'Era IBM — cobertura de prensa tecnológica sobre NetVista e innovaciones de productos IBM' : 'Era IBM — cobertura de imprensa tecnológica sobre NetVista e inovações de produtos IBM' },
            ],
            impactTitle: language === 'en' ? 'Closed 18-Point Gap on Compaq · #2 Branded PC in LatAm' : language === 'es' ? 'Cerró Brecha de 18 Puntos vs Compaq · #2 PC de Marca en LatAm' : 'Fechou Gap de 18 Pontos vs Compaq · #2 PC de Marca na LatAm',
            revenue: language === 'en' ? '#2 Branded PC · LatAm' : '#2 PC de Marca · LatAm',
            timeframe: language === 'en' ? 'Fortune 500 Era' : 'Era Fortune 500',
            context: language === 'en'
                ? [
                    'The late 1990s. The PC wars in Latin America were ruthless. Compaq held the dominant position in the branded PC market — enjoying an 18 percentage-point lead in market share. IBM was a respected name, but in the corporate desktop segment, Compaq was the default choice. The mission was clear and daunting: close the gap.',
                    'Rodrigo was appointed Product Manager for the IBM NetVista line across Latin America — a vertical tower desktop built for enterprise, with IBM\'s legendary build quality and reliability. The product was solid. The opportunity was real. What was missing was a sharp go-to-market strategy that could match Compaq\'s distribution muscle with IBM\'s brand depth.',
                    'The strategic bet was a new positioning architecture — repositioning IBM NetVista not merely as a reliable machine, but as the smart enterprise choice: the PC that the decision-maker trusts when the stakes are real. This repositioning was then operationalized through the channel. Rodrigo structured a partner enablement framework that gave resellers across Brazil, Mexico, Argentina, Chile, and Colombia the tools, the story, and the incentive architecture to carry that positioning into every sales conversation. The same channel leverage approach Rodrigo would later refine at Intel — where aligned channel incentives drove 5X mobile growth — was first battle-tested here.',
                    'By the end of the campaign, IBM NetVista had closed the market share gap from 18 percentage points to within 3 points of Compaq — becoming the #2 Branded PC in Latin America. In a market where every point of share means millions of units, this was a seismic shift.'
                  ]
                : language === 'es'
                ? [
                    'Finales de los 90. Las guerras de PC en América Latina eran despiadadas. Compaq sostenía la posición dominante en el mercado de PCs de marca — con una ventaja de 18 puntos porcentuales de participación de mercado. IBM era un nombre respetado, pero en el segmento de escritorios corporativos, Compaq era la opción por defecto. La misión era clara y desafiante: cerrar la brecha.',
                    'Rodrigo fue nombrado Product Manager para la línea IBM NetVista en América Latina — un escritorio vertical construido para entornos empresariales, con la legendaria calidad de construcción y confiabilidad de IBM. El producto era sólido. La oportunidad era real. Lo que faltaba era una estrategia go-to-market precisa que pudiera igualar el músculo de distribución de Compaq con la profundidad de marca de IBM.',
                    'La apuesta estratégica fue una nueva arquitectura de posicionamiento — reposicionando IBM NetVista no simplemente como una máquina confiable, sino como la elección empresarial inteligente: la PC en la que el tomador de decisiones confía cuando las apuestas son reales. Este reposicionamiento se operacionalizó a través del canal. Rodrigo estructuró un marco de habilitación de socios que dio a los revendedores en Brasil, México, Argentina, Chile y Colombia las herramientas, la narrativa y la arquitectura de incentivos para llevar ese posicionamiento a cada conversación de ventas. El mismo enfoque de apalancamiento de canal que Rodrigo perfeccionaría más tarde en Intel — donde incentivos de canal alineados impulsaron un crecimiento móvil de 5X — fue probado en batalla por primera vez aquí.',
                    'Al final de la campaña, IBM NetVista había cerrado la brecha de participación de mercado de 18 puntos porcentuales a menos de 3 puntos de Compaq — convirtiéndose en la #2 PC de Marca en América Latina. En un mercado donde cada punto de participación significa millones de unidades, esto fue un cambio sísmico.'
                  ]
                : [
                    'Final dos anos 1990. As guerras de PC na América Latina eram implacáveis. A Compaq mantinha a posição dominante no mercado de PCs de marca — com uma vantagem de 18 pontos percentuais de market share. A IBM era um nome respeitado, mas no segmento de desktops corporativos, a Compaq era a escolha padrão. A missão era clara e desafiadora: fechar o gap.',
                    'Rodrigo foi nomeado Product Manager para a linha IBM NetVista na América Latina — um desktop vertical construído para ambientes corporativos, com a lendária qualidade de construção e confiabilidade da IBM. O produto era sólido. A oportunidade era real. O que faltava era uma estratégia go-to-market precisa que pudesse igualar o músculo de distribuição da Compaq com a profundidade de marca da IBM.',
                    'A aposta estratégica foi uma nova arquitetura de posicionamento — reposicionando o IBM NetVista não apenas como uma máquina confiável, mas como a escolha corporativa inteligente: o PC em que o tomador de decisão confia quando os riscos são reais. Esse reposicionamento foi operacionalizado através do canal. Rodrigo estruturou um framework de habilitação de parceiros que deu aos revendedores no Brasil, México, Argentina, Chile e Colômbia as ferramentas, a narrativa e a arquitetura de incentivos para levar esse posicionamento a cada conversa de vendas. A mesma abordagem de alavancagem de canal que Rodrigo refinaria mais tarde na Intel — onde incentivos de canal alinhados impulsionaram crescimento 5X no segmento mobile — foi testada em batalha pela primeira vez aqui.',
                    'Ao final da campanha, o IBM NetVista havia fechado o gap de market share de 18 pontos percentuais para menos de 3 pontos da Compaq — tornando-se o #2 PC de Marca na América Latina. Em um mercado onde cada ponto de participação significa milhões de unidades, isso foi uma mudança sísmica.'
                  ],
            quote: language === 'en'
                ? "Closing a gap from 18 points down to 3 — in a market where every decimal point means millions of units — isn't luck. It's architecture. The architecture of positioning, of channel, and of the exact story you tell at the exact moment of decision."
                : language === 'es'
                ? "Cerrar una brecha de 18 puntos a 3 — en un mercado donde cada decimal significa millones de unidades — no es suerte. Es arquitectura. La arquitectura del posicionamiento, del canal, y de la historia exacta que cuentas en el momento exacto de la decisión."
                : "Fechar um gap de 18 pontos para 3 — em um mercado onde cada decimal significa milhões de unidades — não é sorte. É arquitetura. A arquitetura do posicionamento, do canal, e da história exata que você conta no momento exato da decisão.",
            milestones: language === 'en'
                ? [
                    { year: '1997', title: 'Appointed Product Manager · IBM NetVista LatAm', desc: 'Took ownership of the IBM NetVista product line across the Latin American region. Compaq had an 18-point market share lead.' },
                    { year: '1998', title: 'Multi-Country Go-to-Market Launch', desc: 'Designed and executed simultaneous launch strategy across Brazil, Mexico, Argentina, Chile, and Colombia — aligning channel partners and enterprise messaging.' },
                    { year: '1999', title: 'Channel Momentum Builds', desc: 'IBM NetVista gains significant distribution strength. The gap to Compaq begins closing as IBM\'s brand trust narrative takes hold in corporate buying cycles.' },
                    { year: '2000', title: '#2 Branded PC in Latin America', desc: 'IBM NetVista closes the market share gap from 18 percentage points to within 3 points of Compaq — establishing IBM as a genuine challenger and the clear #2 branded PC in the region.' },
                  ]
                : language === 'es'
                ? [
                    { year: '1997', title: 'Nombrado Product Manager · IBM NetVista LatAm', desc: 'Asumió la responsabilidad de la línea de productos IBM NetVista en toda la región de América Latina. Compaq tenía una ventaja de 18 puntos en participación de mercado.' },
                    { year: '1998', title: 'Lanzamiento Go-to-Market Multi-País', desc: 'Diseñó y ejecutó estrategia de lanzamiento simultáneo en Brasil, México, Argentina, Chile y Colombia — alineando socios de canal y mensajería empresarial.' },
                    { year: '1999', title: 'El Impulso del Canal Crece', desc: 'IBM NetVista gana fuerza de distribución significativa. La brecha con Compaq comienza a cerrarse a medida que la narrativa de confianza de la marca IBM se establece en los ciclos de compra corporativa.' },
                    { year: '2000', title: '#2 PC de Marca en América Latina', desc: 'IBM NetVista cierra la brecha de participación de mercado de 18 puntos porcentuales a menos de 3 puntos de Compaq — estableciendo a IBM como un verdadero challenger y el claro #2 en la región.' },
                  ]
                : [
                    { year: '1997', title: 'Nomeado Product Manager · IBM NetVista LatAm', desc: 'Assumiu a responsabilidade pela linha de produtos IBM NetVista em toda a região da América Latina. A Compaq tinha uma vantagem de 18 pontos de market share.' },
                    { year: '1998', title: 'Lançamento Go-to-Market Multi-País', desc: 'Projetou e executou estratégia de lançamento simultâneo no Brasil, México, Argentina, Chile e Colômbia — alinhando parceiros de canal e mensagens corporativas.' },
                    { year: '1999', title: 'O Impulso do Canal Cresce', desc: 'O IBM NetVista ganha força de distribuição significativa. O gap com a Compaq começa a fechar à medida que a narrativa de confiança da marca IBM se estabelece nos ciclos de compra corporativa.' },
                    { year: '2000', title: '#2 PC de Marca na América Latina', desc: 'O IBM NetVista fecha o gap de market share de 18 pontos percentuais para menos de 3 pontos da Compaq — estabelecendo a IBM como um verdadeiro challenger e o claro #2 PC de marca na região.' },
                  ],
            challenge: language === 'en'
                ? [
                    'Compaq held an 18 percentage-point market share lead in Latin American branded PCs — a dominant position reinforced by strong channel relationships and household brand recognition',
                    'IBM NetVista needed a differentiated identity in a rapidly commoditizing product category, where price pressure was eroding brand distinctions',
                    'Simultaneous multi-country execution required coordinating five different markets — Brazil, Mexico, Argentina, Chile, Colombia — each with unique buyer dynamics and distribution ecosystems'
                  ]
                : language === 'es'
                ? [
                    'Compaq tenía una ventaja de 18 puntos porcentuales de participación de mercado en PCs de marca en América Latina — una posición dominante reforzada por fuertes relaciones de canal y reconocimiento de marca generalizado',
                    'IBM NetVista necesitaba una identidad diferenciada en una categoría de producto en rápida comoditización, donde la presión de precios erosionaba las distinciones de marca',
                    'La ejecución simultánea multi-país requería coordinar cinco mercados diferentes — Brasil, México, Argentina, Chile, Colombia — cada uno con dinámicas de comprador únicas y ecosistemas de distribución distintos'
                  ]
                : [
                    'A Compaq tinha uma vantagem de 18 pontos percentuais de market share em PCs de marca na América Latina — uma posição dominante reforçada por fortes relacionamentos de canal e reconhecimento de marca generalizado',
                    'O IBM NetVista precisava de uma identidade diferenciada em uma categoria de produto em rápida comoditização, onde a pressão de preços erosava as distinções de marca',
                    'A execução simultânea multi-país exigia coordenar cinco mercados diferentes — Brasil, México, Argentina, Chile, Colômbia — cada um com dinâmicas de compradores únicas e ecossistemas de distribuição distintos'
                  ],
            solution: language === 'en'
                ? [
                    'Led the full IBM NetVista product strategy across Latin America as Product Manager — repositioning the vertical desktop not as a commodity box, but as the enterprise-grade, IBM-trusted choice for corporate IT buyers who could not afford to bet wrong',
                    'Built and executed localized go-to-market plans in 5 countries simultaneously — aligning channel incentives, partner enablement programs, and enterprise messaging to IBM\'s irreplaceable asset: institutional trust built over decades',
                    'Drove IBM NetVista from an 18-point deficit behind Compaq to within 3 points of the market leader — closing the gap to become the clear #2 Branded PC in Latin America, a shift worth millions of units across the region'
                  ]
                : language === 'es'
                ? [
                    'Lideró la estrategia completa de productos IBM NetVista en América Latina como Product Manager — reposicionando el escritorio vertical no como una caja commodity, sino como la opción de grado empresarial y confianza IBM para compradores corporativos de TI que no podían permitirse apostar mal',
                    'Construyó y ejecutó planes go-to-market localizados en 5 países simultáneamente — alineando incentivos de canal, programas de habilitación de socios y mensajería empresarial con el activo irremplazable de IBM: confianza institucional construida durante décadas',
                    'Llevó IBM NetVista de un déficit de 18 puntos detrás de Compaq a menos de 3 puntos del líder del mercado — cerrando la brecha para convertirse en el claro #2 PC de Marca en América Latina, un cambio equivalente a millones de unidades en toda la región'
                  ]
                : [
                    'Liderou a estratégia completa de produtos IBM NetVista na América Latina como Product Manager — reposicionando o desktop vertical não como uma caixa commodity, mas como a escolha de grau empresarial e confiança IBM para compradores corporativos de TI que não podiam se dar ao luxo de apostar errado',
                    'Construiu e executou planos go-to-market localizados em 5 países simultaneamente — alinhando incentivos de canal, programas de habilitação de parceiros e mensagens corporativas com o ativo insubstituível da IBM: confiança institucional construída ao longo de décadas',
                    'Levou o IBM NetVista de um déficit de 18 pontos atrás da Compaq para menos de 3 pontos do líder de mercado — fechando o gap para se tornar o claro #2 PC de Marca na América Latina, uma mudança equivalente a milhões de unidades em toda a região'
                  ],
            roiBoost: '-15pts',
            stats: [
                { value: '#2', label: language === 'en' ? 'Branded PC · LatAm Region' : '#2 PC de Marca · LatAm' },
                { value: '18→3', label: language === 'en' ? 'Point Gap Closed vs Compaq' : 'Pontos de Gap Fechados' },
                { value: '5', label: language === 'en' ? 'Countries Launched Simultaneously' : 'Países Lançados Simultâneo' }
            ]
        },
        'intel-latam': {
            title: 'Intel · Product Manager → Product Director LatAm',
            images: [
                { src: '/assets/intel/intel-hero.png', caption: 'Intel LatAm — Product Manager to Product Director, Loyalty & Marketing Operations' },
                { src: '/assets/intel/rodrigo-intel-presentation.png', caption: language === 'en' ? 'Rodrigo presenting Intel channel strategy — "Descuento en los Distribuidores"' : language === 'es' ? 'Rodrigo presentando estrategia de canal Intel — "Descuento en los Distribuidores"' : 'Rodrigo apresentando estratégia de canal Intel — "Descuento en los Distribuidores"' },
                { src: '/assets/intel/intel-recognition-letter.png', caption: language === 'en' ? 'Intel recognition letter from Executive Vice President — outstanding manager and highest PRT results' : language === 'es' ? 'Carta de reconocimiento Intel del Vicepresidente Ejecutivo — gerente destacado y mejores resultados PRT' : 'Carta de reconhecimento Intel do Vice-Presidente Executivo — gerente destaque e melhores resultados PRT' },
                { src: '/assets/intel/intel-division-award.png', caption: language === 'en' ? 'Intel Division Recognition Award — Q2 2008 — instrumental in driving mobile sales ramp and BTO notebook growth' : language === 'es' ? 'Premio de Reconocimiento de División Intel — Q2 2008 — instrumental en impulsar ventas móviles y notebooks BTO' : 'Prêmio de Reconhecimento de Divisão Intel — Q2 2008 — instrumental no crescimento de vendas mobile e notebooks BTO' },
                { src: '/assets/intel/datamation-cover.png', caption: language === 'en' ? 'Datamation Magazine — VIP "Nosotros... los protagonistas" — Top Professional recognition' : language === 'es' ? 'Revista Datamation — VIP "Nosotros... los protagonistas" — reconocimiento Top Professional' : 'Revista Datamation — VIP "Nosotros... los protagonistas" — reconhecimento Top Professional' },
                { src: '/assets/intel/intel-newspaper-wireless.png', caption: language === 'en' ? '"Conectado, pero sin hilos" — Rodrigo\'s newspaper column on wireless technology and the Centrino era' : language === 'es' ? '"Conectado, pero sin hilos" — columna de Rodrigo sobre tecnología inalámbrica y la era Centrino' : '"Conectado, pero sin hilos" — coluna de Rodrigo sobre tecnologia wireless e a era Centrino' },
            ],
            impactTitle: language === 'en' ? 'Intel Honors Award · 3X Outstanding Manager · 5X Mobile Growth · Datamation Top Pro' : language === 'es' ? 'Intel Honors Award · 3X Gerente Destacado · 5X Móvil · Datamation Top Pro' : 'Intel Honors Award · 3X Gerente Destaque · 5X Mobile · Datamation Top Pro',
            revenue: language === 'en' ? 'Intel Honors Award' : 'Intel Honors Award',
            timeframe: language === 'en' ? '7+ Years LatAm' : '7+ Anos LatAm',
            context: language === 'en'
                ? [
                    'Rodrigo joined Intel as a Product Manager — and the company noticed fast. He was invited to Intel headquarters in the United States, where he gained direct exposure to how Intel operated at the global level: the strategic planning cadence, the product roadmaps, the precision of a company that set the pace for an entire industry. That invitation wasn\'t ceremonial — it was Intel investing in someone they saw as a future leader for the region.',
                    'From HQ, Rodrigo traveled to Taiwan — the beating heart of the OEM and ODM ecosystem. He visited factories, met manufacturing partners, and developed a deep understanding of how the supply chain actually worked: from silicon to finished product, from design house to retail shelf. That knowledge became leverage. Back in Latin America, he used those relationships with ODMs from China and Taiwan to accelerate local OEM growth in the mobile segment — connecting the dots between global supply and regional demand in ways no one else in the region was doing.',
                    'As Rodrigo moved into Marketing Operations, he transformed the way Intel planned and executed across Latin America. He designed a rigorous annual planning methodology where each target audience was analyzed individually, the responsible lead for each audience presented their plans, and the entire strategy was audited and aligned at the Latin America region level. Everyone committed together. Everyone executed together. It was structured, collaborative, and accountable — and it became the standard for how Intel LatAm operated.',
                    'During this period, Rodrigo became passionate about something most marketers at the time ignored: data. He built dashboards, tracked KPIs obsessively, and developed metrics frameworks that turned marketing from art into science. Every campaign had measurable outcomes. Every channel investment had a return calculation. Every loyalty initiative was tracked by behavioral indicators. This data-driven approach was years ahead of what the industry was doing — and it drove results that made the numbers impossible to ignore.',
                    'Intel\'s LatAm Loyalty Program became the crown achievement. It wasn\'t a points system — it was behavioral architecture. By studying how dealers actually made decisions and restructuring incentives around those real patterns, Rodrigo drove a 5X growth in the mobile segment at a moment when the industry was still fixated on desktops. The channel didn\'t just shift — it transformed.',
                    'Rodrigo also had his first experience as a people manager at Intel, and he took it seriously. He invested deeply in developing his leadership skills, and the results showed: he was recognized three times as an Outstanding Manager — a distinction that reflected not just team performance, but his ability to develop talent and build high-performing teams. The industry recognized him too: Datamation named him Top Professional 2001. And Intel awarded him the Intel Honors Award — the company\'s highest internal recognition for outstanding contribution and performance impact.'
                  ]
                : language === 'es'
                ? [
                    'Rodrigo ingresó a Intel como Product Manager — y la empresa lo notó rápido. Fue invitado a la sede de Intel en Estados Unidos, donde obtuvo exposición directa a cómo Intel operaba a nivel global: la cadencia de planificación estratégica, los roadmaps de producto, la precisión de una compañía que marcaba el ritmo de toda una industria. Esa invitación no fue ceremonial — fue Intel invirtiendo en alguien que veían como un futuro líder para la región.',
                    'Desde la sede, Rodrigo viajó a Taiwán — el corazón palpitante del ecosistema OEM y ODM. Visitó fábricas, conoció socios de manufactura y desarrolló un entendimiento profundo de cómo realmente funcionaba la cadena de suministro: desde el silicio hasta el producto terminado, desde la casa de diseño hasta el estante de retail. Ese conocimiento se convirtió en palanca. De regreso en América Latina, usó esas relaciones con ODMs de China y Taiwán para acelerar el crecimiento de OEMs locales en el segmento móvil — conectando los puntos entre oferta global y demanda regional de formas que nadie más en la región estaba haciendo.',
                    'Cuando Rodrigo pasó a Operaciones de Marketing, transformó la forma en que Intel planificaba y ejecutaba en América Latina. Diseñó una metodología rigurosa de planificación anual donde cada audiencia objetivo era analizada individualmente, el responsable de cada audiencia presentaba sus planes, y toda la estrategia era auditada y alineada a nivel de la región de América Latina. Todos se comprometían juntos. Todos ejecutaban juntos. Era estructurado, colaborativo y con rendición de cuentas — y se convirtió en el estándar de cómo operaba Intel LatAm.',
                    'Durante este período, Rodrigo se apasionó por algo que la mayoría de los marketeros de la época ignoraban: los datos. Construyó dashboards, rastreó KPIs obsesivamente y desarrolló frameworks de métricas que convirtieron el marketing de arte en ciencia. Cada campaña tenía resultados medibles. Cada inversión de canal tenía un cálculo de retorno. Cada iniciativa de lealtad era rastreada por indicadores de comportamiento. Este enfoque basado en datos estaba años adelante de lo que la industria hacía — y generó resultados que hicieron los números imposibles de ignorar.',
                    'El Programa de Lealtad Intel LatAm se convirtió en el logro máximo. No era un sistema de puntos — era arquitectura de comportamiento. Al estudiar cómo los distribuidores realmente tomaban decisiones y reestructurar los incentivos alrededor de esos patrones reales, Rodrigo impulsó un crecimiento 5X en el segmento móvil en un momento en que la industria aún estaba fijada en el escritorio. El canal no solo cambió — se transformó.',
                    'Rodrigo también tuvo su primera experiencia como gerente de personas en Intel, y la tomó en serio. Invirtió profundamente en desarrollar sus habilidades de liderazgo, y los resultados lo demostraron: fue reconocido tres veces como Gerente Destacado — una distinción que reflejaba no solo el rendimiento del equipo, sino su capacidad para desarrollar talento y construir equipos de alto rendimiento. La industria también lo reconoció: Datamation lo nombró Top Professional 2001. E Intel le otorgó el Intel Honors Award — el mayor reconocimiento interno de la empresa por contribución sobresaliente e impacto en el rendimiento.'
                  ]
                : [
                    'Rodrigo ingressou na Intel como Product Manager — e a empresa percebeu rápido. Foi convidado para a sede da Intel nos Estados Unidos, onde teve exposição direta a como a Intel operava no nível global: a cadência de planejamento estratégico, os roadmaps de produto, a precisão de uma empresa que ditava o ritmo de toda uma indústria. Esse convite não foi cerimonial — foi a Intel investindo em alguém que enxergavam como um futuro líder para a região.',
                    'Da sede, Rodrigo viajou para Taiwan — o coração pulsante do ecossistema OEM e ODM. Visitou fábricas, conheceu parceiros de manufatura e desenvolveu um entendimento profundo de como a cadeia de suprimentos realmente funcionava: do silício ao produto acabado, da casa de design à prateleira do varejo. Esse conhecimento virou alavanca. De volta à América Latina, usou essas relações com ODMs da China e Taiwan para acelerar o crescimento de OEMs locais no segmento mobile — conectando os pontos entre oferta global e demanda regional de formas que ninguém mais na região fazia.',
                    'Quando Rodrigo assumiu Operações de Marketing, transformou a forma como a Intel planejava e executava na América Latina. Desenhou uma metodologia rigorosa de planejamento anual onde cada público-alvo era analisado individualmente, o responsável por cada audiência apresentava seus planos, e toda a estratégia era auditada e alinhada no nível regional da América Latina. Todos se comprometiam juntos. Todos executavam juntos. Era estruturado, colaborativo e com prestação de contas — e se tornou o padrão de como a Intel LatAm operava.',
                    'Durante esse período, Rodrigo se apaixonou por algo que a maioria dos profissionais de marketing da época ignorava: dados. Construiu dashboards, rastreou KPIs obsessivamente e desenvolveu frameworks de métricas que transformaram o marketing de arte em ciência. Cada campanha tinha resultados mensuráveis. Cada investimento de canal tinha um cálculo de retorno. Cada iniciativa de fidelidade era rastreada por indicadores comportamentais. Essa abordagem orientada por dados estava anos à frente do que a indústria fazia — e gerou resultados que tornaram os números impossíveis de ignorar.',
                    'O Programa de Fidelidade Intel LatAm se tornou a conquista máxima. Não era um sistema de pontos — era arquitetura comportamental. Ao estudar como os distribuidores realmente tomavam decisões e reestruturar os incentivos em torno desses padrões reais, Rodrigo impulsionou um crescimento 5X no segmento mobile em um momento em que a indústria ainda estava fixada no desktop. O canal não apenas mudou — se transformou.',
                    'Rodrigo também teve sua primeira experiência como gestor de pessoas na Intel, e levou isso a sério. Investiu profundamente no desenvolvimento de suas habilidades de liderança, e os resultados apareceram: foi reconhecido três vezes como Gerente Destaque — uma distinção que refletia não apenas o desempenho da equipe, mas sua capacidade de desenvolver talentos e construir equipes de alto desempenho. A indústria também o reconheceu: a Datamation o nomeou Top Professional 2001. E a Intel lhe concedeu o Intel Honors Award — o maior reconhecimento interno da empresa por contribuição extraordinária e impacto de performance.'
                  ],
            quote: language === 'en'
                ? "I became obsessed with turning marketing into a science. Dashboards, KPIs, behavioral metrics — every dollar had to prove its impact. That mindset is what drove 5X mobile growth. You don't change a market with advertising. You change it by changing the incentive architecture."
                : language === 'es'
                ? "Me obsesioné con convertir el marketing en ciencia. Dashboards, KPIs, métricas de comportamiento — cada dólar tenía que demostrar su impacto. Esa mentalidad es lo que impulsó el crecimiento 5X en móvil. No cambias un mercado con publicidad. Lo cambias cambiando la arquitectura de incentivos."
                : "Fiquei obcecado em transformar marketing em ciência. Dashboards, KPIs, métricas comportamentais — cada dólar tinha que provar seu impacto. Essa mentalidade é o que impulsionou o crescimento 5X em mobile. Você não muda um mercado com publicidade. Você muda mudando a arquitetura de incentivos.",
            milestones: language === 'en'
                ? [
                    { year: 'Year 1', title: 'Product Manager · Invited to Intel HQ', desc: 'Joined Intel as Product Manager for Latin America. Invited to Intel headquarters in the US — gaining direct exposure to global strategic planning, product roadmaps, and the precision of a Fortune 500 at full scale.' },
                    { year: 'Year 2', title: 'Taiwan · OEM/ODM Industry Immersion', desc: 'Traveled to Taiwan to visit factories and ODM partners. Developed deep knowledge of the supply chain from silicon to finished product — and used those relationships to accelerate local OEM growth in mobile with ODMs from China and Taiwan.' },
                    { year: 'Year 3', title: 'Marketing Operations · Annual Planning Architecture', desc: 'Designed and led a rigorous annual planning methodology: each target audience analyzed, plans presented by responsible leads, strategies audited at the LatAm region level, and collective commitment to execute together.' },
                    { year: 'Year 4', title: 'KPI Transformation · Marketing as Science', desc: 'Built dashboards and metrics frameworks that turned marketing into a measurable discipline. Every campaign, channel investment, and loyalty initiative was tracked by behavioral indicators and ROI calculations.' },
                    { year: 'Year 5', title: '5X Mobile Growth · Loyalty Program Redesign', desc: 'Redesigned the Intel LatAm Loyalty Program using behavioral architecture — aligning dealer incentives with Intel\'s mobile strategy to deliver 5X growth in the mobile segment.' },
                    { year: 'Year 6', title: '3X Outstanding Manager · People Leadership', desc: 'First experience as a people manager. Invested deeply in leadership development and was recognized three times as an Outstanding Manager — building high-performing teams and developing talent across the region.' },
                    { year: 'Year 7', title: 'Intel Honors Award · Datamation Top Pro', desc: 'Awarded Intel\'s highest internal recognition — the Intel Honors Award. Named Datamation Top Professional 2001 by the Latin American technology industry. Promoted to Product Director for the full LatAm portfolio.' },
                  ]
                : language === 'es'
                ? [
                    { year: 'Año 1', title: 'Product Manager · Invitado a Intel HQ', desc: 'Ingresó a Intel como Product Manager para América Latina. Invitado a la sede de Intel en EE.UU. — con exposición directa a planificación estratégica global, roadmaps de producto y la precisión de una Fortune 500 a escala completa.' },
                    { year: 'Año 2', title: 'Taiwán · Inmersión Industrial OEM/ODM', desc: 'Viajó a Taiwán para visitar fábricas y socios ODM. Desarrolló conocimiento profundo de la cadena de suministro — y usó esas relaciones para acelerar el crecimiento de OEMs locales en móvil con ODMs de China y Taiwán.' },
                    { year: 'Año 3', title: 'Operaciones de Marketing · Planificación Anual', desc: 'Diseñó y lideró una metodología rigurosa de planificación anual: cada audiencia analizada, planes presentados por responsables, estrategias auditadas a nivel regional LatAm, y compromiso colectivo de ejecución.' },
                    { year: 'Año 4', title: 'Transformación KPI · Marketing como Ciencia', desc: 'Construyó dashboards y frameworks de métricas que convirtieron el marketing en una disciplina medible. Cada campaña, inversión de canal e iniciativa de lealtad rastreada por indicadores conductuales y cálculos de ROI.' },
                    { year: 'Año 5', title: 'Crecimiento 5X Móvil · Rediseño Programa Lealtad', desc: 'Rediseñó el Programa de Lealtad Intel LatAm usando arquitectura conductual — alineando incentivos de distribuidores con la estrategia móvil de Intel para lograr crecimiento 5X en el segmento móvil.' },
                    { year: 'Año 6', title: '3X Gerente Destacado · Liderazgo de Personas', desc: 'Primera experiencia como gerente de personas. Inversión profunda en desarrollo de liderazgo, reconocido tres veces como Gerente Destacado — construyendo equipos de alto rendimiento y desarrollando talento en la región.' },
                    { year: 'Año 7', title: 'Intel Honors Award · Datamation Top Pro', desc: 'Recibió el mayor reconocimiento interno de Intel — el Intel Honors Award. Nombrado Datamation Top Professional 2001. Promovido a Director de Producto para el portfolio completo de LatAm.' },
                  ]
                : [
                    { year: 'Ano 1', title: 'Product Manager · Convidado à Intel HQ', desc: 'Ingressou na Intel como Product Manager para América Latina. Convidado à sede da Intel nos EUA — com exposição direta a planejamento estratégico global, roadmaps de produto e a precisão de uma Fortune 500 em escala total.' },
                    { year: 'Ano 2', title: 'Taiwan · Imersão Industrial OEM/ODM', desc: 'Viajou a Taiwan para visitar fábricas e parceiros ODM. Desenvolveu conhecimento profundo da cadeia de suprimentos — e usou essas relações para acelerar o crescimento de OEMs locais em mobile com ODMs da China e Taiwan.' },
                    { year: 'Ano 3', title: 'Operações de Marketing · Planejamento Anual', desc: 'Desenhou e liderou uma metodologia rigorosa de planejamento anual: cada público-alvo analisado, planos apresentados por responsáveis, estratégias auditadas no nível regional LatAm, e compromisso coletivo de execução.' },
                    { year: 'Ano 4', title: 'Transformação KPI · Marketing como Ciência', desc: 'Construiu dashboards e frameworks de métricas que transformaram marketing em disciplina mensurável. Cada campanha, investimento de canal e iniciativa de fidelidade rastreada por indicadores comportamentais e cálculos de ROI.' },
                    { year: 'Ano 5', title: 'Crescimento 5X Mobile · Redesign Programa Fidelidade', desc: 'Redesenhou o Programa de Fidelidade Intel LatAm usando arquitetura comportamental — alinhando incentivos de distribuidores com a estratégia mobile da Intel para entregar crescimento 5X no segmento mobile.' },
                    { year: 'Ano 6', title: '3X Gerente Destaque · Liderança de Pessoas', desc: 'Primeira experiência como gestor de pessoas. Investimento profundo em desenvolvimento de liderança, reconhecido três vezes como Gerente Destaque — construindo equipes de alto desempenho e desenvolvendo talentos na região.' },
                    { year: 'Ano 7', title: 'Intel Honors Award · Datamation Top Pro', desc: 'Recebeu o maior reconhecimento interno da Intel — o Intel Honors Award. Nomeado Datamation Top Professional 2001. Promovido a Diretor de Produto para o portfolio completo da LatAm.' },
                  ],
            challenge: language === 'en'
                ? [
                    'The mobile segment was critically underperforming across Latin America — dealers defaulted to desktop configurations because incentive structures weren\'t aligned with Intel\'s mobile growth strategy, and the supply chain connections between global ODMs and local OEMs were underdeveloped',
                    'Marketing across the region lacked structure and accountability — there was no unified planning methodology, no audience-specific strategies, and no systematic way to audit and align execution across diverse markets like Brazil, Mexico, Argentina, Chile, and Colombia',
                    'Marketing was still treated as an art, not a science — campaigns were launched without measurable KPIs, channel investments had no return calculations, and there was no data infrastructure to track what was actually working across the loyalty program and channel initiatives'
                  ]
                : language === 'es'
                ? [
                    'El segmento móvil tenía un rendimiento críticamente bajo en América Latina — los distribuidores priorizaban configuraciones de escritorio porque las estructuras de incentivos no estaban alineadas con la estrategia de crecimiento móvil de Intel, y las conexiones de cadena de suministro entre ODMs globales y OEMs locales estaban subdesarrolladas',
                    'El marketing en la región carecía de estructura y rendición de cuentas — no había una metodología de planificación unificada, ni estrategias específicas por audiencia, ni una forma sistemática de auditar y alinear la ejecución en mercados diversos como Brasil, México, Argentina, Chile y Colombia',
                    'El marketing aún se trataba como arte, no como ciencia — las campañas se lanzaban sin KPIs medibles, las inversiones de canal no tenían cálculos de retorno, y no había infraestructura de datos para rastrear qué realmente funcionaba en el programa de lealtad y las iniciativas de canal'
                  ]
                : [
                    'O segmento mobile tinha desempenho criticamente baixo na América Latina — distribuidores priorizavam configurações desktop porque as estruturas de incentivos não estavam alinhadas com a estratégia de crescimento mobile da Intel, e as conexões da cadeia de suprimentos entre ODMs globais e OEMs locais eram subdesenvolvidas',
                    'O marketing na região não tinha estrutura nem prestação de contas — não havia metodologia de planejamento unificada, nem estratégias específicas por público-alvo, nem forma sistemática de auditar e alinhar a execução em mercados diversos como Brasil, México, Argentina, Chile e Colômbia',
                    'O marketing ainda era tratado como arte, não como ciência — campanhas eram lançadas sem KPIs mensuráveis, investimentos de canal não tinham cálculos de retorno, e não havia infraestrutura de dados para rastrear o que realmente funcionava no programa de fidelidade e nas iniciativas de canal'
                  ],
            solution: language === 'en'
                ? [
                    'Leveraged Intel HQ and Taiwan immersion to build direct relationships with ODMs from China and Taiwan — then used that global supply chain knowledge to accelerate local OEM growth in the mobile segment across Latin America, connecting global manufacturing to regional market demand',
                    'Designed a rigorous annual planning methodology for Marketing Operations — each target audience analyzed individually, responsible leads presenting their plans, strategies audited at the Latin America region level, and collective commitment to execute. Built dashboards, KPI frameworks, and behavioral metrics that turned marketing from art into science, with every campaign and channel investment tracked by measurable outcomes',
                    'Redesigned the Intel LatAm Loyalty Program as behavioral architecture — aligning dealer incentives with Intel\'s actual strategic priorities to drive 5X mobile segment growth. Simultaneously developed as a people leader: recognized three times as Outstanding Manager while building high-performing teams. Awarded the Intel Honors Award and named Datamation Top Professional 2001'
                  ]
                : language === 'es'
                ? [
                    'Aprovechó la inmersión en Intel HQ y Taiwán para construir relaciones directas con ODMs de China y Taiwán — luego usó ese conocimiento de cadena de suministro global para acelerar el crecimiento de OEMs locales en el segmento móvil en América Latina, conectando manufactura global con demanda de mercado regional',
                    'Diseñó una metodología rigurosa de planificación anual para Operaciones de Marketing — cada audiencia objetivo analizada individualmente, líderes responsables presentando planes, estrategias auditadas a nivel regional de América Latina, y compromiso colectivo de ejecución. Construyó dashboards, frameworks de KPIs y métricas conductuales que convirtieron el marketing de arte en ciencia',
                    'Rediseñó el Programa de Lealtad Intel LatAm como arquitectura conductual — alineando incentivos de distribuidores con las prioridades estratégicas reales de Intel para impulsar crecimiento 5X en móvil. Simultáneamente se desarrolló como líder de personas: reconocido tres veces como Gerente Destacado. Recibió el Intel Honors Award y fue nombrado Datamation Top Professional 2001'
                  ]
                : [
                    'Alavancou a imersão na Intel HQ e Taiwan para construir relações diretas com ODMs da China e Taiwan — depois usou esse conhecimento de cadeia de suprimentos global para acelerar o crescimento de OEMs locais no segmento mobile na América Latina, conectando manufatura global à demanda de mercado regional',
                    'Desenhou uma metodologia rigorosa de planejamento anual para Operações de Marketing — cada público-alvo analisado individualmente, líderes responsáveis apresentando planos, estratégias auditadas no nível regional da América Latina, e compromisso coletivo de execução. Construiu dashboards, frameworks de KPIs e métricas comportamentais que transformaram marketing de arte em ciência',
                    'Redesenhou o Programa de Fidelidade Intel LatAm como arquitetura comportamental — alinhando incentivos de distribuidores com as prioridades estratégicas reais da Intel para impulsionar crescimento 5X em mobile. Simultaneamente se desenvolveu como líder de pessoas: reconhecido três vezes como Gerente Destaque. Recebeu o Intel Honors Award e foi nomeado Datamation Top Professional 2001'
                  ],
            roiBoost: '5X',
            stats: [
                { value: '5X', label: language === 'en' ? 'Mobile Segment Growth' : language === 'es' ? 'Crecimiento Segmento Móvil' : 'Crescimento Segmento Mobile' },
                { value: '3X', label: language === 'en' ? 'Outstanding Manager Awards' : language === 'es' ? 'Premios Gerente Destacado' : 'Prêmios Gerente Destaque' },
                { value: '🏆', label: language === 'en' ? 'Intel Honors Award' : 'Intel Honors Award' },
            ]
        },
        'ibm-intel-era': {
            title: 'Enterprise Era',
            impactTitle: language === 'en' ? 'Fortune 500 Marketing Leadership' : language === 'es' ? 'Liderazgo de Marketing Fortune 500' : 'Liderança de Marketing Fortune 500',
            revenue: language === 'en' ? 'Fortune 500 Scale' : 'Escala Fortune 500',
            timeframe: language === 'en' ? '10+ Years' : '10+ Anos',
            challenge: language === 'en'
                ? ['Complex multi-market campaign orchestration across Latin America', 'Bridging Fortune 500 global standards with regional market agility', 'Building high-performance teams in fast-growing emerging markets']
                : language === 'es'
                ? ['Orquestación compleja de campañas en múltiples mercados de América Latina', 'Conectar estándares globales Fortune 500 con agilidad de mercado regional', 'Construir equipos de alto rendimiento en mercados emergentes de rápido crecimiento']
                : ['Orquestração complexa de campanhas em múltiplos mercados da América Latina', 'Conectar padrões globais Fortune 500 com agilidade de mercado regional', 'Construir equipes de alta performance em mercados emergentes de rápido crescimento'],
            solution: language === 'en'
                ? ['Led enterprise-level marketing operations for IBM across Latin America', 'Drove high-performance campaigns for Intel LatAm — precision at Fortune 500 scale', 'Built deep corporate expertise in data-driven marketing, channel architecture, and team leadership at global scale']
                : language === 'es'
                ? ['Lideró operaciones de marketing de nivel empresarial para IBM en América Latina', 'Impulsó campañas de alto rendimiento para Intel LatAm — precisión a escala Fortune 500', 'Construyó experiencia corporativa profunda en marketing basado en datos, arquitectura de canal y liderazgo de equipos a escala global']
                : ['Liderou operações de marketing de nível empresarial para a IBM na América Latina', 'Impulsou campanhas de alta performance para a Intel LatAm — precisão em escala Fortune 500', 'Construiu expertise corporativa profunda em marketing orientado por dados, arquitetura de canal e liderança de equipes em escala global'],
            roiBoost: 'F500',
            stats: [
                { value: 'IBM', label: language === 'en' ? 'Marketing Leadership LatAm' : 'Liderança Marketing LatAm' },
                { value: 'Intel', label: language === 'en' ? 'Marketing Leadership LatAm' : 'Liderança Marketing LatAm' },
                { value: '10+', label: language === 'en' ? 'Years Enterprise Scale' : 'Anos em Escala Enterprise' }
            ]
        },
        'emdrc-covid': {
            title: 'EMDRC · Emergency Website',
            impactTitle: language === 'en' ? 'Emergency COVID Website — Built in 5 Hours' : language === 'es' ? 'Sitio Web de Emergencia COVID — Construido en 5 Horas' : 'Site de Emergência COVID — Construído em 5 Horas',
            revenue: language === 'en' ? 'Live in 5 Hours' : 'No Ar em 5 Horas',
            timeframe: language === 'en' ? '5 Hours · COVID Crisis' : '5 Horas · Crise COVID',
            context: language === 'en'
                ? 'When COVID-19 hit, the EMDRC needed a fully functional emergency information website — fast. No time for lengthy planning. No room for delays. Rodrigo built and launched the complete site in under 5 hours, ensuring critical emergency information reached the public at the exact moment it was needed most.'
                : language === 'es'
                ? 'Cuando COVID-19 llegó, EMDRC necesitaba un sitio web de información de emergencia completamente funcional — rápido. Sin tiempo para planificación prolongada. Sin margen para demoras. Rodrigo construyó y lanzó el sitio completo en menos de 5 horas, asegurando que la información crítica de emergencia llegara al público en el momento exacto en que más se necesitaba.'
                : 'Quando o COVID-19 chegou, o EMDRC precisava de um site de informações de emergência totalmente funcional — rápido. Sem tempo para planejamento prolongado. Sem margem para atrasos. Rodrigo construiu e lançou o site completo em menos de 5 horas, garantindo que informações críticas de emergência chegassem ao público no exato momento em que mais eram necessárias.',
            challenge: language === 'en'
                ? [
                    'COVID-19 created an immediate public health communication crisis — EMDRC needed a digital presence within hours, not weeks',
                    'Zero existing digital infrastructure — had to build from blank page to live under extreme time pressure',
                    'Content, design, hosting, and launch all needed to happen simultaneously in real-time crisis conditions'
                  ]
                : language === 'es'
                ? [
                    'COVID-19 creó una crisis inmediata de comunicación de salud pública — EMDRC necesitaba presencia digital en horas, no semanas',
                    'Cero infraestructura digital existente — construir desde página en blanco hasta live bajo presión de tiempo extrema',
                    'Contenido, diseño, hosting y lanzamiento necesitaban ocurrir simultáneamente en condiciones de crisis en tiempo real'
                  ]
                : [
                    'O COVID-19 criou uma crise imediata de comunicação de saúde pública — o EMDRC precisava de presença digital em horas, não semanas',
                    'Zero infraestrutura digital existente — construir do zero até o ar sob pressão de tempo extrema',
                    'Conteúdo, design, hospedagem e lançamento precisavam acontecer simultaneamente em condições de crise em tempo real'
                  ],
            solution: language === 'en'
                ? [
                    'Executed a full emergency website build in under 5 hours — from zero to live — serving critical COVID-19 public health information to the EMDRC community',
                    'Prioritized information architecture for clarity under panic: symptoms, protocols, emergency contacts, and live updates structured for rapid comprehension',
                    'Proved that when lives are on the line, speed and precision are not opposites — the same systematic approach that builds lasting brands also delivers in crisis conditions'
                  ]
                : language === 'es'
                ? [
                    'Ejecutó una construcción completa del sitio web de emergencia en menos de 5 horas — de cero a live — sirviendo información crítica de salud pública COVID-19 a la comunidad EMDRC',
                    'Priorizó la arquitectura de información para claridad bajo pánico: síntomas, protocolos, contactos de emergencia y actualizaciones en vivo estructuradas para comprensión rápida',
                    'Demostró que cuando las vidas están en juego, velocidad y precisión no son opuestos — el mismo enfoque sistemático que construye marcas duraderas también entrega en condiciones de crisis'
                  ]
                : [
                    'Executou uma construção completa do site de emergência em menos de 5 horas — do zero ao ar — servindo informações críticas de saúde pública COVID-19 à comunidade EMDRC',
                    'Priorizou a arquitetura de informação para clareza sob pânico: sintomas, protocolos, contatos de emergência e atualizações ao vivo estruturadas para compreensão rápida',
                    'Provou que quando vidas estão em jogo, velocidade e precisão não são opostos — a mesma abordagem sistemática que constrói marcas duradouras também entrega em condições de crise'
                  ],
            roiBoost: '5h',
            stats: [
                { value: '5h', label: language === 'en' ? 'Zero to Live — Full Build' : 'Zero ao Ar — Build Completo' },
                { value: '100%', label: language === 'en' ? 'Emergency Delivery' : 'Entrega de Emergência' },
                { value: 'COVID', label: language === 'en' ? 'Crisis Response Built' : 'Resposta à Crise' }
            ]
        },
        '4u-planner-mvp': {
            title: '4U Planner MVP',
            impactTitle: language === 'en' ? 'Full Product MVP Built — Goal & Protocol System' : language === 'es' ? 'MVP de Producto Completo — Sistema de Metas y Protocolos' : 'MVP de Produto Completo — Sistema de Metas e Protocolos',
            revenue: language === 'en' ? 'Full MVP Built' : language === 'es' ? 'MVP Completo' : 'MVP Completo',
            timeframe: language === 'en' ? 'Product Build' : language === 'es' ? 'Construcción del Producto' : 'Construção do Produto',
            context: language === 'en'
                ? [
                    'Most productivity systems fail for the same reason: they\'re built around tasks, not behavior. They give you lists, calendars, and reminders — but they don\'t give you architecture. They don\'t understand how high-performance individuals actually move from intention to execution, from quarterly vision to daily protocol.',
                    'The 4U Planner was born from a simple frustration: Rodrigo had spent years building marketing systems that drove predictable revenue for brands — yet the tools available for personal and professional execution planning were shallow, disconnected, and built for average outputs. The gap between vision and traction had nothing to do with motivation. It had everything to do with architecture.',
                    'The 4U Planner MVP was designed from the ground up as a behavioral execution system — not a to-do app. The core architecture is built around quarterly sprints with clear OKRs, broken down into weekly protocols and daily execution blocks. Each layer feeds the next. Vision becomes strategy. Strategy becomes protocol. Protocol becomes daily motion.',
                    'The MVP was built and shipped as a working mobile application — functional, testable, and deployable. Every screen, every flow, and every interaction was designed around one question: does this move the user closer to executing at their highest level, or does it just give them more to manage? The answer to that question is what separates a planner from a performance system.',
                    'The 4U Planner is the distillation of everything Rodrigo has learned building commercial systems — applied to the most important system of all: the one that runs your own execution.'
                  ]
                : language === 'es'
                ? [
                    'La mayoría de los sistemas de productividad fallan por la misma razón: están construidos en torno a tareas, no al comportamiento. Te dan listas, calendarios y recordatorios — pero no te dan arquitectura. No entienden cómo los individuos de alto rendimiento realmente pasan de la intención a la ejecución, de la visión trimestral al protocolo diario.',
                    'El 4U Planner nació de una simple frustración: Rodrigo había pasado años construyendo sistemas de marketing que generaban ingresos predecibles para marcas — pero las herramientas disponibles para la planificación de ejecución personal y profesional eran superficiales, desconectadas y construidas para resultados promedio. La brecha entre visión y tracción no tenía nada que ver con la motivación. Tenía todo que ver con la arquitectura.',
                    'El MVP del 4U Planner fue diseñado desde cero como un sistema de ejecución conductual — no una app de tareas. La arquitectura central está construida en torno a sprints trimestrales con OKRs claros, desglosados en protocolos semanales y bloques de ejecución diaria. Cada capa alimenta a la siguiente. La visión se convierte en estrategia. La estrategia en protocolo. El protocolo en movimiento diario.',
                    'El MVP fue construido y lanzado como una aplicación móvil funcional — funcional, testeable y desplegable. Cada pantalla, cada flujo y cada interacción fue diseñado en torno a una pregunta: ¿esto acerca al usuario a ejecutar en su nivel más alto, o solo le da más cosas que gestionar? La respuesta a esa pregunta es lo que separa un planificador de un sistema de rendimiento.',
                    'El 4U Planner es la destilación de todo lo que Rodrigo ha aprendido construyendo sistemas comerciales — aplicado al sistema más importante de todos: el que gestiona tu propia ejecución.'
                  ]
                : [
                    'A maioria dos sistemas de produtividade falha pelo mesmo motivo: são construídos em torno de tarefas, não de comportamento. Eles oferecem listas, calendários e lembretes — mas não oferecem arquitetura. Não entendem como indivíduos de alta performance realmente passam da intenção para a execução, da visão trimestral ao protocolo diário.',
                    'O 4U Planner nasceu de uma frustração simples: Rodrigo havia passado anos construindo sistemas de marketing que geravam receita previsível para marcas — mas as ferramentas disponíveis para planejamento de execução pessoal e profissional eram rasas, desconectadas e construídas para resultados medianos. A lacuna entre visão e tração não tinha nada a ver com motivação. Tinha tudo a ver com arquitetura.',
                    'O MVP do 4U Planner foi projetado do zero como um sistema de execução comportamental — não um app de tarefas. A arquitetura central é construída em torno de sprints trimestrais com OKRs claros, decompostos em protocolos semanais e blocos de execução diária. Cada camada alimenta a próxima. Visão vira estratégia. Estratégia vira protocolo. Protocolo vira movimento diário.',
                    'O MVP foi construído e entregue como uma aplicação mobile funcional — operacional, testável e implantável. Cada tela, cada fluxo e cada interação foi projetado em torno de uma pergunta: isso aproxima o usuário de executar no seu nível mais alto, ou apenas dá mais coisas para gerenciar? A resposta a essa pergunta é o que separa um planejador de um sistema de performance.',
                    'O 4U Planner é a destilação de tudo que Rodrigo aprendeu construindo sistemas comerciais — aplicado ao sistema mais importante de todos: o que roda a sua própria execução.'
                  ],
            quote: language === 'en'
                ? "Every high-performance system I've ever built — for IBM, for Intel, for brands — followed the same logic: vision, architecture, protocol, execution. The 4U Planner is that logic, built into a tool."
                : language === 'es'
                ? "Cada sistema de alto rendimiento que he construido — para IBM, para Intel, para marcas — siguió la misma lógica: visión, arquitectura, protocolo, ejecución. El 4U Planner es esa lógica, construida en una herramienta."
                : "Todo sistema de alta performance que construí — para a IBM, para a Intel, para marcas — seguiu a mesma lógica: visão, arquitetura, protocolo, execução. O 4U Planner é essa lógica, construída em uma ferramenta.",
            challenge: language === 'en'
                ? [
                    'Existing productivity tools are task managers dressed as planners — they don\'t bridge the gap between quarterly strategy and daily execution behavior',
                    'High-performance individuals need a system that reflects how real execution actually works: layered, behavioral, and tied to a larger vision architecture',
                    'Building a full mobile MVP from concept to working product required product thinking, UX design, and development execution all aligned under one framework'
                  ]
                : language === 'es'
                ? [
                    'Las herramientas de productividad existentes son gestores de tareas disfrazados de planificadores — no cierran la brecha entre la estrategia trimestral y el comportamiento de ejecución diaria',
                    'Los individuos de alto rendimiento necesitan un sistema que refleje cómo funciona realmente la ejecución: en capas, conductual y vinculado a una arquitectura de visión más amplia',
                    'Construir un MVP móvil completo desde el concepto hasta un producto funcional requería pensamiento de producto, diseño UX y ejecución de desarrollo alineados bajo un solo framework'
                  ]
                : [
                    'As ferramentas de produtividade existentes são gerenciadores de tarefas disfarçados de planejadores — não fazem a ponte entre a estratégia trimestral e o comportamento de execução diária',
                    'Indivíduos de alta performance precisam de um sistema que reflita como a execução real funciona: em camadas, comportamental e vinculado a uma arquitetura de visão maior',
                    'Construir um MVP mobile completo do conceito ao produto funcional exigiu pensamento de produto, design de UX e execução de desenvolvimento alinhados sob um único framework'
                  ],
            solution: language === 'en'
                ? [
                    'Designed and built the full 4U Planner MVP — a behavioral execution system organized around quarterly OKR sprints, weekly protocols, and daily execution blocks, all connected in a single flow',
                    'Engineered the product architecture around performance psychology: each layer of the system is designed to reduce the cognitive load of staying on strategy, and increase the behavioral momentum of daily execution',
                    'Shipped a fully functional mobile application — from concept to working MVP — validating the core thesis that the gap between vision and traction is an architecture problem, not a motivation problem'
                  ]
                : language === 'es'
                ? [
                    'Diseñó y construyó el MVP completo del 4U Planner — un sistema de ejecución conductual organizado en torno a sprints de OKR trimestrales, protocolos semanales y bloques de ejecución diaria, todo conectado en un único flujo',
                    'Diseñó la arquitectura del producto en torno a la psicología del rendimiento: cada capa del sistema está diseñada para reducir la carga cognitiva de mantenerse en estrategia y aumentar el impulso conductual de la ejecución diaria',
                    'Entregó una aplicación móvil completamente funcional — del concepto al MVP funcional — validando la tesis central de que la brecha entre visión y tracción es un problema de arquitectura, no de motivación'
                  ]
                : [
                    'Projetou e construiu o MVP completo do 4U Planner — um sistema de execução comportamental organizado em torno de sprints de OKR trimestrais, protocolos semanais e blocos de execução diária, tudo conectado em um único fluxo',
                    'Projetou a arquitetura do produto em torno da psicologia de performance: cada camada do sistema é projetada para reduzir a carga cognitiva de manter-se na estratégia e aumentar o momentum comportamental da execução diária',
                    'Entregou uma aplicação mobile totalmente funcional — do conceito ao MVP funcional — validando a tese central de que a lacuna entre visão e tração é um problema de arquitetura, não de motivação'
                  ],
            milestones: language === 'en'
                ? [
                    { year: 'Phase 1', title: 'Product Architecture', desc: 'Defined the core behavioral framework — quarterly OKRs → weekly protocols → daily execution blocks. The architecture that makes the product different from every other planner.' },
                    { year: 'Phase 2', title: 'UX Design & Flow', desc: 'Designed every screen and interaction around one principle: reduce friction between strategy and execution. Each feature had to earn its place by moving the user forward.' },
                    { year: 'Phase 3', title: 'MVP Build', desc: 'Developed the full mobile application — from design to functional code. Every component was built to validate the behavioral architecture, not just demonstrate the concept.' },
                    { year: 'Phase 4', title: 'MVP Shipped', desc: 'Full 4U Planner MVP deployed and functional. Quarterly sprint system, weekly protocol builder, and daily execution engine — all connected, all running.' },
                  ]
                : language === 'es'
                ? [
                    { year: 'Fase 1', title: 'Arquitectura del Producto', desc: 'Definió el framework conductual central — OKRs trimestrales → protocolos semanales → bloques de ejecución diaria. La arquitectura que hace diferente al producto de cualquier otro planificador.' },
                    { year: 'Fase 2', title: 'Diseño UX y Flujo', desc: 'Diseñó cada pantalla e interacción en torno a un principio: reducir la fricción entre estrategia y ejecución. Cada función tuvo que ganarse su lugar haciendo avanzar al usuario.' },
                    { year: 'Fase 3', title: 'Construcción del MVP', desc: 'Desarrolló la aplicación móvil completa — del diseño al código funcional. Cada componente fue construido para validar la arquitectura conductual, no solo demostrar el concepto.' },
                    { year: 'Fase 4', title: 'MVP Lanzado', desc: 'MVP completo del 4U Planner desplegado y funcional. Sistema de sprint trimestral, constructor de protocolo semanal y motor de ejecución diaria — todos conectados, todos en marcha.' },
                  ]
                : [
                    { year: 'Fase 1', title: 'Arquitetura do Produto', desc: 'Definiu o framework comportamental central — OKRs trimestrais → protocolos semanais → blocos de execução diária. A arquitetura que torna o produto diferente de todos os outros planejadores.' },
                    { year: 'Fase 2', title: 'Design UX e Fluxo', desc: 'Projetou cada tela e interação em torno de um princípio: reduzir a fricção entre estratégia e execução. Cada recurso precisava se justificar movendo o usuário para frente.' },
                    { year: 'Fase 3', title: 'Construção do MVP', desc: 'Desenvolveu a aplicação mobile completa — do design ao código funcional. Cada componente foi construído para validar a arquitetura comportamental, não apenas demonstrar o conceito.' },
                    { year: 'Fase 4', title: 'MVP Entregue', desc: 'MVP completo do 4U Planner implantado e funcional. Sistema de sprint trimestral, construtor de protocolo semanal e motor de execução diária — todos conectados, todos rodando.' },
                  ],
            roiBoost: 'MVP',
            stats: [
                { value: 'MVP', label: language === 'en' ? 'Full Product Shipped' : language === 'es' ? 'Producto Completo Entregado' : 'Produto Completo Entregue' },
                { value: '4', label: language === 'en' ? 'Execution Layers Built' : language === 'es' ? 'Capas de Ejecución' : 'Camadas de Execução' },
                { value: '0→1', label: language === 'en' ? 'Concept to Working App' : language === 'es' ? 'Concepto a App Funcional' : 'Conceito a App Funcional' }
            ]
        }
    };

    const details = caseData[id] || caseData['fitkel-sensuale'];

    return (
        <>
            <Helmet>
                <title>{details.title} — Marketing Case Study | Rod Ezquerra</title>
                <meta name="description" content={`How ${details.title} achieved ${details.revenue} in ${details.timeframe} with Rod Ezquerra's marketing architecture. Real results, full breakdown.`} />
                <meta name="keywords" content={`${details.title} case study, marketing results, CRM strategy, brand architecture, Rod Ezquerra, ${details.revenue}`} />
                <meta property="og:title" content={`${details.title} — Marketing Case Study | Rod Ezquerra`} />
                <meta property="og:description" content={`How ${details.title} achieved ${details.revenue} with Rod Ezquerra's systematic marketing architecture.`} />
                <meta property="og:image" content="https://4upact.com/assets/fitkel/dashboard-hero.png" />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": `${details.title} — Marketing Case Study`,
                    "description": `How ${details.title} achieved ${details.revenue} in ${details.timeframe} with 4U Pact.`,
                    "author": { "@type": "Organization", "name": "4U Pact" },
                    "publisher": { "@type": "Organization", "name": "4U Pact", "url": "https://4upact.com" }
                })}</script>
            </Helmet>

            <header className="sticky top-0 z-[110] bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-6 flex items-center justify-between">
                <Link to={`/${language}/portfolio`} className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                    <ChevronLeft size={20} />
                </Link>
                <div className="flex flex-col items-center">
                    <span className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Case Study Analysis</span>
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-600">
                    <Share2 size={18} />
                </button>
            </header>

            <main className="pb-40 bg-[#fdfbf7]">
                <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-10 border border-primary/20">
                        Performance Breakdown
                    </div>
                    <h1 className="font-display text-4xl md:text-7xl font-black leading-[1] mb-10 text-slate-900 tracking-tighter">
                        {language === 'en' ? 'How ' : language === 'es' ? 'Cómo ' : 'Como '}<span className="text-primary">{details.title}</span>{language === 'en' ? ' Achieved ' : language === 'es' ? ' Alcanzó ' : ' Alcançou '}<span className="underline decoration-orange/30 decoration-8">{details.revenue}</span>{language === 'en' ? ' with 4UPact.' : language === 'es' ? ' con 4UPact.' : ' com a 4UPact.'}
                    </h1>
                    <p className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto italic">
                        {language === 'en'
                            ? `A deep dive into the infrastructure rebuild that transformed the business in ${details.timeframe}.`
                            : language === 'es'
                            ? `Un análisis profundo de la reconstrucción de infraestructura que transformó el negocio en ${details.timeframe}.`
                            : `Um olhar profundo sobre a reconstrução de infraestrutura que transformou o negócio em ${details.timeframe}.`
                        }
                    </p>
                    {/* External links row */}
                    {details.links && (
                        <div className="flex items-center justify-center gap-6 mt-8">
                            {details.links.map(link => (
                                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary text-xs font-black uppercase tracking-widest transition-all border border-slate-200 hover:border-primary/20">
                                    <ExternalLink size={12} /> {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </section>

                {/* Context block — the "real story" intro */}
                {details.context && (
                    <section className="max-w-4xl mx-auto px-6 mb-12">
                        <div className="bg-slate-950 text-white rounded-[3rem] p-12 border border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-teal mb-6">
                                {language === 'en' ? 'The Real Story' : language === 'es' ? 'La Historia Real' : 'A História Real'}
                            </p>
                            {Array.isArray(details.context)
                                ? details.context.map((para, i) => (
                                    <p key={i} className={`text-xl font-bold italic leading-relaxed text-slate-300 ${i < details.context.length - 1 ? 'mb-6' : ''}`}>{para}</p>
                                ))
                                : <p className="text-xl font-bold italic leading-relaxed text-slate-300">{details.context}</p>
                            }
                        </div>
                    </section>
                )}

                {/* Pull Quote */}
                {details.quote && (
                    <section className="max-w-4xl mx-auto px-6 mb-12">
                        <div className="border-l-[6px] border-orange pl-10 py-2">
                            <p className="text-2xl md:text-3xl font-black italic text-slate-800 leading-relaxed">"{details.quote}"</p>
                            <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mt-5">— Rodrigo Ezquerra · Founder, 4U Pact</p>
                        </div>
                    </section>
                )}

                <section className="max-w-4xl mx-auto px-6 mb-20">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">Total Impact</p>
                            <p className="text-4xl font-black text-slate-900 tracking-tight">{details.revenue}</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">Timeframe</p>
                            <p className="text-4xl font-black text-slate-900 tracking-tight">{details.timeframe}</p>
                        </div>
                    </div>
                </section>

                {/* Photo carousel — shown when case has images */}
                {details.images && (
                    <PhotoCarousel images={details.images} title={details.title} />
                )}

                <section className="max-w-4xl mx-auto px-6 space-y-8 mb-20">
                    <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-sm">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                                <AlertCircle size={32} />
                            </div>
                            <h2 className="font-black text-2xl text-slate-900 uppercase tracking-tighter">
                                {language === 'en' ? 'The Challenge' : language === 'es' ? 'El Desafío' : 'O Desafio'}
                            </h2>
                        </div>
                        <ul className="space-y-6">
                            {details.challenge.map(item => (
                                <li key={item} className="flex items-center gap-4 font-bold text-slate-600">
                                    <LucideX className="text-red-400" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white border-2 border-primary/20 rounded-[3rem] p-12 shadow-2xl shadow-primary/5">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white">
                                <Zap size={32} />
                            </div>
                            <h2 className="font-black text-2xl text-slate-900 uppercase tracking-tighter text-primary">
                                {language === 'en' ? 'The Solution' : language === 'es' ? 'La Solución' : 'A Solução'}
                            </h2>
                        </div>
                        <ul className="space-y-6">
                            {details.solution.map(item => (
                                <li key={item} className="flex items-center gap-4 font-black text-slate-900">
                                    <CheckCircle2 className="text-teal" size={24} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Milestones Timeline */}
                {details.milestones && (
                    <section className="max-w-4xl mx-auto px-6 mb-12">
                        <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12">
                            <h3 className="font-black text-xl text-slate-900 uppercase tracking-tighter mb-10">
                                {language === 'en' ? 'Key Milestones' : language === 'es' ? 'Hitos Clave' : 'Marcos Principais'}
                            </h3>
                            <div className="space-y-6 relative before:absolute before:left-[3.5rem] before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
                                {details.milestones.map((m, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="text-xs font-black text-white bg-primary px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 z-10 shadow-sm">{m.year}</div>
                                        <div className="pt-1">
                                            <p className="font-black text-slate-900 text-sm uppercase tracking-wider">{m.title}</p>
                                            <p className="text-slate-500 font-bold italic text-sm mt-1 leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="max-w-4xl mx-auto px-6 mb-20">
                    <div className="bg-primary rounded-[3rem] p-12 relative overflow-hidden text-white shadow-2xl shadow-primary/30">
                        <div className="flex justify-between items-start mb-16">
                            <div>
                                <h3 className="text-primary-light font-black text-xs uppercase tracking-[0.3em] mb-4">Growth Metric</h3>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-8xl font-black leading-none">{details.roiBoost}</span>
                                    <span className="text-teal font-black text-xl uppercase italic">Impact Scalability</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between h-64 gap-4">
                            {[20, 35, 45, 60, 80, 100].map((h, i) => (
                                <Motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    className="flex-1 bg-gradient-to-t from-teal/20 to-teal rounded-t-2xl shadow-lg shadow-teal/20"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-8 text-[11px] font-black text-primary-light uppercase tracking-[0.3em]">
                            <span>Month 1</span>
                            <span>Scale Phase</span>
                        </div>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {details.stats.map((stat, i) => (
                        <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm text-center">
                            <TrendingUp className="text-teal w-8 h-8 mx-auto mb-6" />
                            <div className="text-3xl font-black text-slate-900 mb-2">{stat.value}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </section>
            </main>

            <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-100 p-8 z-[120]">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
                    <Link to={`/${language}/contact`} className="w-full bg-orange text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl shadow-orange/30 active:scale-[0.98] transition-all uppercase tracking-widest text-sm">
                        {language === 'en' ? 'Book a Diagnosis for the Same Results' : language === 'es' ? 'Agendar Diagnóstico Para los Mismos Resultados' : 'Agendar Diagnóstico Para os Mesmos Resultados'}
                        <Calendar size={20} />
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                            {language === 'en' ? '3 diagnosis slots available this month' : language === 'es' ? '3 slots de diagnóstico disponibles este mes' : '3 slots de diagnóstico disponíveis este mês'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudy;
