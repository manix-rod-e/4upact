import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
    const { language } = useLanguage();

    // ─── CONTENT ────────────────────────────────────────────────────────────
    const content = {
        en: {
            meta_title: 'Terms of Service | 4U Pact',
            meta_desc: 'Terms of Service for 4U Pact consulting services — service scope, intellectual property, cancellation policy, and governing law.',
            badge: 'Legal · Terms',
            title: 'Terms of Service',
            updated: 'Last updated: March 16, 2026',
            effective: 'Effective date: March 16, 2026',
            intro: 'These Terms of Service ("Terms") govern your access to and use of the website at 4upact.com and any consulting or marketing automation services provided by 4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "we", "us", "our"). By accessing our site or engaging our services, you agree to these Terms.',
            sections: [
                {
                    title: '1. Company Information',
                    body: 'Legal name: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nRegistered address: Rua Itapiru 572, São Paulo, SP, 04143-010, Brazil\nCommercial email: sales@4upact.com\nGeneral inquiries: info@4upact.com\nPhone: +1 (646) 531-1313\nWebsite: https://4upact.com'
                },
                {
                    title: '2. Services Description',
                    body: '4U Pact provides consulting and implementation services in the following areas:\n• CRM architecture and configuration (primarily GoHighLevel)\n• Marketing automation: flows, pipelines, follow-up sequences\n• Paid advertising management (Meta Ads, Google Ads)\n• Brand strategy and digital identity\n• Website design, development, and performance optimisation\n• Analytics setup and reporting dashboards\n• Training and ongoing marketing system support\n\nSpecific deliverables, timelines, fees, and payment terms are defined in individual Service Agreements or Proposals agreed in writing with each client. These Terms apply in addition to any such Agreement.'
                },
                {
                    title: '3. Acceptance of Terms',
                    body: 'By (a) accessing or using our website, (b) submitting a contact or booking form, or (c) signing a Service Agreement or Proposal, you confirm that you:\n• Are at least 18 years of age\n• Have the authority to bind the company you represent (if applicable)\n• Have read, understood, and agree to these Terms\n• Have read and accepted our Privacy Policy'
                },
                {
                    title: '4. Intellectual Property',
                    body: 'All original content on 4upact.com — including text, images, graphics, logo, brand identity, and software code — is the exclusive property of 4U Pact and is protected by Brazilian intellectual property law (Law 9,279/1996 and Law 9,610/1998), as well as applicable international copyright treaties.\n\nWork Product: Upon full payment, 4U Pact transfers to the client ownership of the final creative and technical deliverables specifically produced for that client under the relevant Service Agreement. 4U Pact retains ownership of underlying frameworks, templates, methodologies, and tools developed independently.\n\nYou may not reproduce, distribute, or create derivative works from 4U Pact\'s proprietary materials without prior written consent.'
                },
                {
                    title: '5. Client Obligations',
                    body: 'To enable 4U Pact to deliver services effectively, clients agree to:\n• Provide accurate, complete, and timely information and materials requested\n• Grant necessary access to platforms, accounts, and tools as agreed\n• Designate a primary point of contact for communication\n• Respond to requests and approve deliverables within agreed timeframes\n• Make payments on schedule as specified in the Service Agreement\n\nDelays caused by the client\'s failure to meet these obligations may extend project timelines without additional cost to 4U Pact.'
                },
                {
                    title: '6. Payment Terms',
                    body: 'Fees and payment schedules are specified in each Service Agreement. General terms:\n• Invoices are due within the period stated on the invoice (typically 7 days)\n• Late payments may incur monthly interest of 1% (SELIC rate) plus a fine of 2%, as permitted by the Brazilian Civil Code\n• 4U Pact reserves the right to pause services in the event of outstanding invoices\n• All prices are in the currency stated in the Service Agreement (BRL or USD)\n\nElectronic transfers, PIX (Brazil), and other agreed payment methods are accepted.'
                },
                {
                    title: '7. Cooling-Off Period (Brazilian Consumers — CDC Art. 49)',
                    body: 'In compliance with Brazil\'s Consumer Protection Code (CDC), Article 49, if you are an individual consumer (not a business) and you contracted our services remotely (online or by telephone), you have the right to withdraw from the contract within 7 (seven) calendar days of signing, without penalty and with a full refund of any amounts already paid.\n\nTo exercise this right, send a written notice to info@4upact.com within the 7-day period. Refunds will be processed within 10 business days.\n\nNote: This right applies to natural persons contracting as consumers (B2C). It does not apply to legal entities (B2B contracts).'
                },
                {
                    title: '8. Cancellation & Refund Policy',
                    body: 'Beyond the 7-day cooling-off period (B2C):\n\n• Cancellation before project kick-off: 80% refund of any advance payment.\n• Cancellation after kick-off but before 50% completion: 50% refund of the remaining balance, proportional to work not yet delivered.\n• Cancellation after 50% completion: No refund is due. Work completed to date will be delivered.\n• Monthly retainer services: Either party may cancel with 30 days\' written notice. Fees for the current month are non-refundable.\n\nAll cancellation requests must be submitted in writing to info@4upact.com.'
                },
                {
                    title: '9. Limitation of Liability',
                    body: '4U Pact\'s total liability to you for any claim arising out of or related to these Terms or the services shall not exceed the total fees paid by you to 4U Pact in the 3 months preceding the claim.\n\n4U Pact is not liable for:\n• Indirect, incidental, special, or consequential damages\n• Loss of profits, revenue, data, or business opportunities\n• Results of third-party platforms (GoHighLevel, Meta, Google) — we are not responsible for changes to their APIs, algorithms, or terms of service\n• Force majeure events (natural disasters, pandemics, internet outages, etc.)\n\nNothing in these Terms limits liability for fraud or gross negligence.'
                },
                {
                    title: '10. Confidentiality',
                    body: 'Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business strategies, client lists, technical systems, and pricing. This obligation survives termination of the service relationship for 2 years.\n\nNote: Confidentiality is maintained by mutual agreement under these Terms — not by NDA. If a formal NDA is required, it must be agreed and signed separately.'
                },
                {
                    title: '11. Data Processing',
                    body: 'In providing our services, 4U Pact may process personal data on your behalf (as a data processor under LGPD). The terms of such processing are governed by our Privacy Policy and, where applicable, a separate Data Processing Agreement (DPA). By engaging our services, you agree to the data processing practices described in our Privacy Policy.'
                },
                {
                    title: '12. Website Use',
                    body: 'You agree not to use 4upact.com to:\n• Violate any applicable law or regulation\n• Transmit malicious code, spam, or unsolicited communications\n• Attempt to gain unauthorised access to our systems or data\n• Scrape, copy, or republish our content without permission\n• Impersonate 4U Pact or its representatives\n\n4U Pact reserves the right to block access to users who violate these conditions.'
                },
                {
                    title: '13. Third-Party Links & Integrations',
                    body: 'Our website and services may contain links to third-party websites or integrate with third-party platforms (GoHighLevel, Meta, Google, etc.). These are provided for convenience only. 4U Pact is not responsible for the content, privacy practices, or terms of any third-party service. Use of third-party platforms is subject to their own terms and privacy policies.'
                },
                {
                    title: '14. Disclaimer of Warranties',
                    body: 'Our services are provided "as is" and "as available". While we strive for excellence, 4U Pact does not warrant that:\n• Results (e.g. revenue growth, lead volume) will meet specific targets\n• The website will be uninterrupted or error-free\n• Any specific advertising ROI will be achieved\n\nMarketing performance depends on many factors outside our control, including market conditions, client-side execution, and platform algorithm changes.'
                },
                {
                    title: '15. Modifications to Terms',
                    body: 'We may update these Terms from time to time. Material changes will be communicated via a notice on our website and, where applicable, by email. Continued use of our services after changes take effect constitutes acceptance of the updated Terms. The most current version is always available at 4upact.com/terms.'
                },
                {
                    title: '16. Governing Law & Dispute Resolution',
                    body: 'These Terms are governed by and construed in accordance with the laws of Brazil (Federative Republic of Brazil).\n\nDispute Resolution:\n1. Good Faith Negotiation: Both parties agree to first attempt to resolve disputes through good-faith direct negotiation within 30 days of written notice.\n2. Mediation: If negotiation fails, the parties agree to attempt mediation before any litigation.\n3. Jurisdiction: If mediation fails, any legal proceedings shall be filed in the courts of Brasília, DF, Brazil, which the parties irrevocably consent to as the exclusive forum.\n\nFor international clients: these Terms do not waive any mandatory consumer or commercial law protections in your local jurisdiction that cannot be waived by contract.'
                },
                {
                    title: '17. Contact',
                    body: 'For questions about these Terms:\n\n4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nEmail: info@4upact.com\nPhone: +1 (646) 531-1313\nAddress: [Brasília, DF, Brazil — to be filled]'
                }
            ]
        },
        pt: {
            meta_title: 'Termos de Serviço | 4U Pact',
            meta_desc: 'Termos de Serviço da 4U Pact — escopo dos serviços, propriedade intelectual, política de cancelamento e legislação aplicável.',
            badge: 'Legal · Termos',
            title: 'Termos de Serviço',
            updated: 'Última atualização: 16 de março de 2026',
            effective: 'Data de vigência: 16 de março de 2026',
            intro: 'Estes Termos de Serviço ("Termos") regem o acesso e o uso do site 4upact.com e de quaisquer serviços de consultoria ou automação de marketing prestados pela 4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "nós"). Ao acessar nosso site ou contratar nossos serviços, você concorda com estes Termos.',
            sections: [
                {
                    title: '1. Informações da Empresa',
                    body: 'Razão social: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nEndereço: Rua Itapiru 572, São Paulo, SP, 04143-010, Brasil\nE-mail comercial: sales@4upact.com\nInformações gerais: info@4upact.com\nTelefone: +1 (646) 531-1313\nSite: https://4upact.com'
                },
                {
                    title: '2. Descrição dos Serviços',
                    body: 'A 4U Pact oferece serviços de consultoria e implementação nas seguintes áreas:\n• Arquitetura e configuração de CRM (principalmente GoHighLevel)\n• Automação de marketing: fluxos, pipelines, sequências de follow-up\n• Gestão de tráfego pago (Meta Ads, Google Ads)\n• Estratégia de marca e identidade digital\n• Design e desenvolvimento de sites de alta performance\n• Configuração de analytics e dashboards\n• Treinamento e suporte contínuo ao sistema de marketing\n\nEntregáveis específicos, prazos, honorários e condições de pagamento são definidos em Contratos ou Propostas individuais acordados por escrito com cada cliente.'
                },
                {
                    title: '3. Aceitação dos Termos',
                    body: 'Ao (a) acessar ou usar nosso site, (b) preencher um formulário de contato ou agendamento, ou (c) assinar um Contrato ou Proposta, você confirma que:\n• Tem pelo menos 18 anos de idade\n• Tem autoridade para vincular a empresa que representa (se aplicável)\n• Leu, compreendeu e concorda com estes Termos\n• Leu e aceitou nossa Política de Privacidade'
                },
                {
                    title: '4. Propriedade Intelectual',
                    body: 'Todo o conteúdo original em 4upact.com — incluindo textos, imagens, logotipo, identidade de marca e código — é propriedade exclusiva da 4U Pact, protegida pela Lei de Propriedade Industrial (Lei 9.279/1996) e Lei de Direitos Autorais (Lei 9.610/1998).\n\nEntregáveis: Após o pagamento integral, a 4U Pact transfere ao cliente a propriedade dos entregáveis finais específicos produzidos para aquele cliente. A 4U Pact retém a propriedade de frameworks, modelos, metodologias e ferramentas desenvolvidas de forma independente.\n\nÉ proibida a reprodução ou criação de obras derivadas sem autorização escrita prévia.'
                },
                {
                    title: '5. Obrigações do Cliente',
                    body: 'Para que a 4U Pact preste os serviços com eficácia, o cliente concorda em:\n• Fornecer informações e materiais precisos, completos e dentro do prazo\n• Conceder acesso às plataformas, contas e ferramentas conforme acordado\n• Designar um ponto de contato principal\n• Responder a solicitações e aprovar entregáveis dentro dos prazos acordados\n• Efetuar pagamentos conforme o Contrato de Serviços\n\nAtrasos causados pelo cliente podem estender os prazos do projeto sem custo adicional para a 4U Pact.'
                },
                {
                    title: '6. Condições de Pagamento',
                    body: 'Honorários e cronogramas de pagamento são especificados em cada Contrato de Serviços. Condições gerais:\n• Faturas vencem no prazo indicado (normalmente 7 dias)\n• Atrasos sujeitam ao pagamento de juros mensais de 1% (SELIC) mais multa de 2%, conforme Código Civil Brasileiro\n• A 4U Pact pode pausar serviços em caso de inadimplência\n• Os preços são na moeda indicada no Contrato (BRL ou USD)\n\nTED, PIX e outros métodos de pagamento acordados são aceitos.'
                },
                {
                    title: '7. Direito de Arrependimento (CDC — Art. 49)',
                    body: 'Em conformidade com o Código de Defesa do Consumidor (CDC), Art. 49, se você é uma pessoa física (consumidor) e contratou nossos serviços à distância (online ou por telefone), você tem o direito de desistir do contrato no prazo de 7 (sete) dias corridos a contar da assinatura, sem custo e com devolução integral dos valores eventualmente pagos.\n\nPara exercer esse direito, envie notificação escrita para info@4upact.com dentro do prazo de 7 dias. O reembolso será processado em até 10 dias úteis.\n\nObs.: Este direito aplica-se a pessoas físicas contratando como consumidores (B2C). Não se aplica a pessoas jurídicas (contratos B2B).'
                },
                {
                    title: '8. Política de Cancelamento e Reembolso',
                    body: 'Após o período de arrependimento de 7 dias (B2C):\n\n• Cancelamento antes do início do projeto: reembolso de 80% de qualquer adiantamento.\n• Cancelamento após o início, antes de 50% de conclusão: reembolso de 50% do saldo restante, proporcional ao trabalho não entregue.\n• Cancelamento após 50% de conclusão: sem reembolso. O trabalho concluído até a data será entregue.\n• Serviços mensais (retainer): qualquer parte pode cancelar com 30 dias de aviso prévio por escrito. Os honorários do mês corrente não são reembolsáveis.\n\nTodas as solicitações de cancelamento devem ser enviadas por escrito para info@4upact.com.'
                },
                {
                    title: '9. Limitação de Responsabilidade',
                    body: 'A responsabilidade total da 4U Pact por qualquer reclamação relacionada a estes Termos ou aos serviços não excederá o total de honorários pagos nos 3 meses anteriores à reclamação.\n\nA 4U Pact não é responsável por:\n• Danos indiretos, incidentais, especiais ou consequenciais\n• Perda de lucros, receita ou oportunidades de negócio\n• Resultados de plataformas de terceiros (GoHighLevel, Meta, Google)\n• Eventos de força maior\n\nNada nestes Termos limita a responsabilidade por fraude ou negligência grave.'
                },
                {
                    title: '10. Confidencialidade',
                    body: 'Ambas as partes concordam em manter a confidencialidade das informações proprietárias compartilhadas durante o engajamento — incluindo estratégias de negócio, listas de clientes, sistemas técnicos e precificação. Essa obrigação persiste por 2 anos após o encerramento da relação de serviço.\n\nObs.: A confidencialidade é mantida por acordo mútuo sob estes Termos — não por NDA. Se um NDA formal for necessário, deve ser acordado e assinado separadamente.'
                },
                {
                    title: '11. Tratamento de Dados',
                    body: 'Na prestação dos serviços, a 4U Pact pode tratar dados pessoais em seu nome (como operadora nos termos da LGPD). Os termos de tal tratamento são regidos pela nossa Política de Privacidade e, quando aplicável, por um Acordo de Processamento de Dados (DPA) separado.'
                },
                {
                    title: '12. Uso do Site',
                    body: 'Você concorda em não usar o 4upact.com para:\n• Violar qualquer lei ou regulamento aplicável\n• Transmitir código malicioso, spam ou comunicações não solicitadas\n• Tentar acesso não autorizado aos nossos sistemas\n• Raspar, copiar ou republicar nosso conteúdo sem permissão\n• Personificar a 4U Pact ou seus representantes'
                },
                {
                    title: '13. Links e Integrações de Terceiros',
                    body: 'Nosso site pode conter links para sites de terceiros ou integrar-se com plataformas externas (GoHighLevel, Meta, Google, etc.). A 4U Pact não é responsável pelo conteúdo, práticas de privacidade ou termos de qualquer serviço de terceiros.'
                },
                {
                    title: '14. Isenção de Garantias',
                    body: 'Nossos serviços são fornecidos "no estado em que se encontram". Embora busquemos a excelência, a 4U Pact não garante:\n• Que resultados (crescimento de receita, volume de leads) atenderão metas específicas\n• Que o site funcionará sem interrupções\n• Que um ROI específico em publicidade será alcançado\n\nO desempenho de marketing depende de fatores fora do nosso controle, incluindo condições de mercado e alterações nos algoritmos das plataformas.'
                },
                {
                    title: '15. Modificações dos Termos',
                    body: 'Podemos atualizar estes Termos periodicamente. Mudanças relevantes serão comunicadas via aviso no site e, quando aplicável, por e-mail. A versão mais atual está sempre disponível em 4upact.com/terms.'
                },
                {
                    title: '16. Legislação Aplicável e Resolução de Disputas',
                    body: 'Estes Termos são regidos pelas leis da República Federativa do Brasil.\n\nResolução de Disputas:\n1. Negociação de Boa-fé: as partes concordam em tentar resolver disputas por negociação direta em até 30 dias após notificação escrita.\n2. Mediação: se a negociação falhar, as partes concordam em tentar a mediação antes de qualquer litígio.\n3. Foro: se a mediação falhar, os processos judiciais serão ajuizados no Foro de Brasília, DF, Brasil.\n\nPara clientes internacionais: estes Termos não renunciam a proteções obrigatórias de direito do consumidor na sua jurisdição local que não possam ser renunciadas contratualmente.'
                },
                {
                    title: '17. Contato',
                    body: 'Para dúvidas sobre estes Termos:\n\n4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nE-mail: info@4upact.com\nTelefone: +1 (646) 531-1313\nEndereço: [Brasília, DF, Brasil — a preencher]'
                }
            ]
        },
        es: {
            meta_title: 'Términos de Servicio | 4U Pact',
            meta_desc: 'Términos de Servicio de 4U Pact — alcance de los servicios, propiedad intelectual, política de cancelación y ley aplicable.',
            badge: 'Legal · Términos',
            title: 'Términos de Servicio',
            updated: 'Última actualización: 16 de marzo de 2026',
            effective: 'Fecha de vigencia: 16 de marzo de 2026',
            intro: 'Estos Términos de Servicio ("Términos") rigen el acceso y uso del sitio web 4upact.com y de cualquier servicio de consultoría o automatización de marketing prestado por 4U Pact Consultoria em Marketing Digital Ltda. ("4U Pact", "nosotros"). Al acceder a nuestro sitio o contratar nuestros servicios, aceptas estos Términos.',
            sections: [
                {
                    title: '1. Información de la Empresa',
                    body: 'Razón social: 4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nDirección registrada: Rua Itapiru 572, São Paulo, SP, 04143-010, Brasil\nCorreo comercial: sales@4upact.com\nConsultas generales: info@4upact.com\nTeléfono: +1 (646) 531-1313\nSitio web: https://4upact.com'
                },
                {
                    title: '2. Descripción de los Servicios',
                    body: 'La 4U Pact ofrece servicios de consultoría e implementación en las siguientes áreas:\n• Arquitectura y configuración de CRM (principalmente GoHighLevel)\n• Automatización de marketing: flujos, pipelines, secuencias de seguimiento\n• Gestión de publicidad paga (Meta Ads, Google Ads)\n• Estrategia de marca e identidad digital\n• Diseño y desarrollo de sitios web de alto rendimiento\n• Configuración de analítica y dashboards\n• Formación y soporte continuo del sistema de marketing\n\nLos entregables específicos, plazos, honorarios y condiciones de pago se definen en Contratos o Propuestas individuales acordados por escrito con cada cliente.'
                },
                {
                    title: '3. Aceptación de los Términos',
                    body: 'Al (a) acceder o usar nuestro sitio web, (b) enviar un formulario de contacto o reserva, o (c) firmar un Contrato o Propuesta, confirmas que:\n• Tienes al menos 18 años\n• Tienes autoridad para vincular a la empresa que representas (si aplica)\n• Has leído, comprendido y aceptas estos Términos\n• Has leído y aceptado nuestra Política de Privacidad'
                },
                {
                    title: '4. Propiedad Intelectual',
                    body: 'Todo el contenido original en 4upact.com — incluyendo textos, imágenes, logotipo, identidad de marca y código — es propiedad exclusiva de 4U Pact y está protegido por la ley brasileña de propiedad intelectual (Ley 9.279/1996 y Ley 9.610/1998) y los tratados internacionales de derechos de autor aplicables.\n\nEntregables: Una vez realizado el pago íntegro, 4U Pact transfiere al cliente la propiedad de los entregables finales específicos producidos para ese cliente. 4U Pact retiene la propiedad de los marcos de trabajo, plantillas, metodologías y herramientas desarrolladas de manera independiente.'
                },
                {
                    title: '5. Obligaciones del Cliente',
                    body: 'Para que 4U Pact preste los servicios de manera efectiva, el cliente se compromete a:\n• Proporcionar información y materiales precisos, completos y oportunos\n• Conceder el acceso necesario a plataformas, cuentas y herramientas según lo acordado\n• Designar un punto de contacto principal para la comunicación\n• Responder a las solicitudes y aprobar entregables dentro de los plazos acordados\n• Realizar los pagos según el Contrato de Servicios\n\nLos retrasos causados por el incumplimiento de estas obligaciones por parte del cliente pueden extender los plazos del proyecto sin costo adicional para 4U Pact.'
                },
                {
                    title: '6. Condiciones de Pago',
                    body: 'Los honorarios y cronogramas de pago se especifican en cada Contrato de Servicios. Condiciones generales:\n• Las facturas vencen en el plazo indicado (normalmente 7 días)\n• Los pagos tardíos pueden generar intereses mensuales del 1% (tasa SELIC) más una multa del 2%\n• 4U Pact se reserva el derecho de pausar los servicios ante facturas impagas\n• Todos los precios están en la moneda indicada en el Contrato (BRL o USD)'
                },
                {
                    title: '7. Derecho de Desistimiento (Consumidores Brasileños — CDC Art. 49)',
                    body: 'En cumplimiento del Código de Defensa del Consumidor de Brasil (CDC), Artículo 49, si eres un consumidor individual (no una empresa) y contrataste nuestros servicios de forma remota, tienes derecho a desistir del contrato dentro de los 7 (siete) días calendario a partir de la firma, sin penalización y con el reembolso total de los montos ya pagados.\n\nPara ejercer este derecho, envía una notificación por escrito a info@4upact.com dentro del plazo de 7 días. Los reembolsos se procesarán en un plazo de 10 días hábiles.'
                },
                {
                    title: '8. Política de Cancelación y Reembolso',
                    body: 'Más allá del período de desistimiento de 7 días (B2C):\n\n• Cancelación antes del inicio del proyecto: reembolso del 80% de cualquier anticipo.\n• Cancelación tras el inicio, antes del 50% de ejecución: reembolso del 50% del saldo restante, proporcional al trabajo no entregado.\n• Cancelación tras el 50% de ejecución: sin reembolso. El trabajo completado hasta la fecha se entregará.\n• Servicios mensuales (retainer): cualquiera de las partes puede cancelar con 30 días de aviso por escrito. Los honorarios del mes en curso no son reembolsables.\n\nTodas las solicitudes de cancelación deben enviarse por escrito a info@4upact.com.'
                },
                {
                    title: '9. Limitación de Responsabilidad',
                    body: 'La responsabilidad total de 4U Pact por cualquier reclamación no excederá el total de honorarios pagados en los 3 meses anteriores a la reclamación.\n\n4U Pact no es responsable por:\n• Daños indirectos, incidentales, especiales o consecuentes\n• Pérdida de beneficios, ingresos u oportunidades de negocio\n• Resultados de plataformas de terceros (GoHighLevel, Meta, Google)\n• Eventos de fuerza mayor\n\nNada en estos Términos limita la responsabilidad por fraude o negligencia grave.'
                },
                {
                    title: '10. Confidencialidad',
                    body: 'Ambas partes acuerdan mantener la confidencialidad de la información propietaria compartida durante el compromiso, incluyendo estrategias de negocio, listas de clientes y sistemas técnicos. Esta obligación persiste durante 2 años tras la finalización de la relación de servicio.'
                },
                {
                    title: '11. Tratamiento de Datos',
                    body: 'Al prestar los servicios, 4U Pact puede tratar datos personales en tu nombre (como encargado del tratamiento bajo la LGPD). Los términos de dicho tratamiento están regulados por nuestra Política de Privacidad y, cuando corresponda, por un Acuerdo de Procesamiento de Datos (DPA) separado.'
                },
                {
                    title: '12. Uso del Sitio Web',
                    body: 'Aceptas no usar 4upact.com para:\n• Violar cualquier ley o regulación aplicable\n• Transmitir código malicioso, spam o comunicaciones no solicitadas\n• Intentar acceder de forma no autorizada a nuestros sistemas\n• Copiar o republicar nuestro contenido sin permiso\n• Hacerse pasar por 4U Pact o sus representantes'
                },
                {
                    title: '13. Enlaces e Integraciones de Terceros',
                    body: 'Nuestro sitio web puede contener enlaces a sitios de terceros o integrarse con plataformas externas. 4U Pact no es responsable del contenido, prácticas de privacidad ni términos de ningún servicio de terceros.'
                },
                {
                    title: '14. Exención de Garantías',
                    body: 'Nuestros servicios se proporcionan "tal como están". Si bien nos esforzamos por la excelencia, 4U Pact no garantiza que los resultados de marketing alcancen objetivos específicos, ya que el rendimiento depende de factores fuera de nuestro control, como las condiciones del mercado y los cambios en los algoritmos de las plataformas.'
                },
                {
                    title: '15. Modificaciones a los Términos',
                    body: 'Podemos actualizar estos Términos periódicamente. Los cambios relevantes se comunicarán mediante un aviso en nuestro sitio web. La versión más actual siempre estará disponible en 4upact.com/terms.'
                },
                {
                    title: '16. Ley Aplicable y Resolución de Disputas',
                    body: 'Estos Términos se rigen por las leyes de la República Federativa de Brasil.\n\nResolución de Disputas:\n1. Negociación de buena fe: las partes intentarán resolver disputas por negociación directa en un plazo de 30 días.\n2. Mediación: si la negociación fracasa, las partes intentarán la mediación antes de cualquier litigio.\n3. Jurisdicción: si la mediación fracasa, los procedimientos legales se presentarán ante los tribunales de Brasilia, DF, Brasil.\n\nPara clientes internacionales: estos Términos no renuncian a las protecciones obligatorias de la ley del consumidor en tu jurisdicción local.'
                },
                {
                    title: '17. Contacto',
                    body: 'Para preguntas sobre estos Términos:\n\n4U Pact Consultoria em Marketing Digital Ltda.\nCNPJ: 51.336.978/0001-60\nCorreo: info@4upact.com\nTeléfono: +1 (646) 531-1313\nDirección: [Brasilia, DF, Brasil — por completar]'
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
                <link rel="canonical" href={`https://4upact.com/${language}/terms`} />
            </Helmet>

            {/* Hero */}
            <section className="pt-40 pb-20 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-5 py-2 mb-8">
                            <FileText size={14} className="text-orange" />
                            <span className="text-orange text-xs font-black uppercase tracking-[0.3em]">{c.badge}</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                            {c.title}
                        </h1>
                        <p className="text-slate-500 text-sm font-mono">{c.updated}</p>
                        <p className="text-slate-600 text-xs font-mono mt-1">{c.effective}</p>
                    </Motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-orange pl-6">{c.intro}</p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {c.sections.map((section, i) => (
                        <Motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.04 }}
                            className="border-b border-slate-100 pb-12 last:border-0"
                        >
                            <h2 className="text-xl font-black text-slate-900 mb-4 font-display tracking-tight">
                                {section.title}
                            </h2>
                            <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
                                {section.body}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Mail size={32} className="text-orange mx-auto mb-6" />
                    <h3 className="text-white font-display font-black text-2xl mb-4">
                        {language === 'en' ? 'Questions about these Terms?' : language === 'pt' ? 'Dúvidas sobre os Termos?' : '¿Preguntas sobre los Términos?'}
                    </h3>
                    <p className="text-slate-400 mb-6 text-sm">
                        {language === 'en' ? 'We respond within 5 business days.' : language === 'pt' ? 'Respondemos em até 5 dias úteis.' : 'Respondemos en 5 días hábiles.'}
                    </p>
                    <a
                        href="mailto:info@4upact.com"
                        className="inline-flex items-center gap-2 bg-orange text-white font-black px-8 py-4 rounded-2xl hover:bg-orange/90 transition-colors text-sm uppercase tracking-widest"
                    >
                        <Mail size={16} />
                        info@4upact.com
                    </a>
                </div>
            </section>
        </>
    );
};

export default Terms;
