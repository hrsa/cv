// noinspection UnnecessaryLabelJS,CommaExpressionJS

import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    languages: {
                        en: 'English',
                        fr: 'French',
                    },
                    firstname: 'Anton',
                    lastname: 'Cher',
                    post: 'Applied AI at Mistral',
                    links: [
                        {
                            name: 'LinkedIn',
                            url: 'https://www.linkedin.com/in/anton-cher/',
                            icon: '/linkedin.webp',
                        },
                        {
                            name: 'GitHub',
                            url: 'https://www.github.com/hrsa/',
                            icon: '/github.webp',
                        },
                        {
                            name: 'Email',
                            url: 'mailto:anton@anton.eco',
                            icon: '/email.webp',
                        },
                        {
                            name: 'Download CV',
                            url: 'https://anton.eco/cv/Anton Cher EN.pdf',
                            icon: '/download.webp',
                        },
                    ],
                    summary: "Using executive experience and tech expertise, I help companies turn product-market " +
                        "fit into a scalable reality, owning the entire lifecycle, from initial architecture to cloud deployment.<p class='mt-2'>" +
                        "I am as comfortable in the boardroom discussing P&L and strategy as I am with the engineering team," +
                        "architecting distributed systems or conducting deep-dive code reviews.",
                    experience: 'Experience',
                    education: 'Education',
                    skills: 'Skills',
                    about: {
                        tech: {
                            title: 'Skills',
                            tech: ['Python (FastAPI)',
                                'TypeScript (React, Node.js)',
                                'PHP (Laravel)',
                                'AI/RAG & LangChain',
                                'AWS & Kubernetes',
                                'Docker & CI/CD',
                                'Microservices',
                                'PostgreSQL & Vector DBs'],
                            business: ['Product Strategy',
                                'Agile & Shape Up',
                                'Team Leadership',
                                'MVP-to-Scale',
                                'Budget Management',
                                'Stakeholder Management'],
                            frameworks: [],
                            tools: [],
                            crm: [],
                            sales: [],
                            adobe: [],
                        },
                        languages: {
                            title: 'Languages',
                            list: [
                                {
                                    name: 'English',
                                    level: 4,
                                    mastery: 'Native',
                                    icon: '/flags/gb.svg',
                                },
                                {
                                    name: 'French',
                                    level: 4,
                                    mastery: 'Native',
                                    icon: '/flags/fr.svg',
                                },
                                {
                                    name: 'Russian',
                                    level: 4,
                                    mastery: 'Native',
                                    icon: '/flags/ru.svg',
                                },
                                {
                                    name: 'Italian',
                                    level: 3,
                                    mastery: 'Intermediate',
                                    icon: '/flags/it.svg',
                                },
                                {
                                    name: 'Spanish',
                                    level: 3,
                                    mastery: 'Intermediate',
                                    icon: '/flags/es.svg',
                                },
                                {
                                    name: 'German',
                                    level: 3,
                                    mastery: 'Intermediate',
                                    icon: '/flags/de.svg',
                                },
                                {
                                    name: 'Portuguese',
                                    level: 2,
                                    mastery: 'Elementary',
                                    icon: '/flags/pt.svg',
                                },
                                {
                                    name: 'Dutch',
                                    level: 2,
                                    mastery: 'Elementary',
                                    icon: '/flags/nl.svg',
                                },
                                {
                                    name: 'Japanese',
                                    level: 1,
                                    mastery: 'Beginner',
                                    icon: '/flags/jp.svg',
                                },
                                {
                                    name: 'Arabic',
                                    level: 1,
                                    mastery: 'Beginner',
                                    icon: '/flags/arab.svg',
                                },
                                {
                                    name: 'Greek',
                                    level: 1,
                                    mastery: 'Beginner',
                                    icon: '/flags/gr.svg',
                                },
                                {
                                    name: 'Icelandic',
                                    level: 1,
                                    mastery: 'Beginner',
                                    icon: '/flags/is.svg',
                                },
                                // {
                                //     name: 'Lithuanian',
                                //     level: 1,
                                //     mastery: 'Beginner',
                                //     icon: '/flags/lt.svg',
                                // },
                            ],
                        },

                    },
                    jobs: [
                        {
                            id: 7,
                            logo: '/logo/mistral.webp',
                            dates: '2026 - Present',
                            company: 'Mistral AI',
                            title: 'Applied AI',
                            city: 'Paris',
                            summary: 'Delivering production-grade AI applications for strategic customers on Mistral frontier models',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Customer AI delivery',
                                    subtitle: 'End-to-end delivery for a strategic insurance account',
                                    type: null,
                                    data: 16,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Lead end-to-end delivery of an AI advisor assistant for a leading insurer: from discovery workshops and solution design to a production-grade POC',
                                        },
                                        {
                                            icon: null,
                                            content: 'Run the delivery cadence with the customer: daily stand-ups, build-room sessions, specification workshops, sprint and steering preparation, up to the demo milestone',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Multimodal AI features',
                                    subtitle: 'Speech, document intelligence and structured output on Mistral models',
                                    type: null,
                                    data: 17,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Build the live advisor experience: client meeting preparation, real-time interview support with speech-to-text (Voxtral), coverage-gap analysis and automated follow-up material',
                                        },
                                        {
                                            icon: null,
                                            content: 'Extract structured client facts from insurance documents with Mistral OCR, integrated with CRM and DMS data around Mistral Medium 3.5 as the core LLM',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Agents, connectors & guardrails',
                                    subtitle: 'MCP connectors, workflows, evaluation and security',
                                    type: null,
                                    data: 18,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Develop agent workflows and custom on-prem connectors (FastMCP, OIDC/OAuth) bridging the AI stack with customer systems',
                                        },
                                        {
                                            icon: null,
                                            content: 'Define guardrails and evaluation frameworks, including simulated-interview testing, to keep outputs reliable in production',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Secure enterprise deployment',
                                    subtitle: 'Kubernetes, SSO and compliance',
                                    type: null,
                                    data: 19,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Architect the customer-hosted deployment on Kubernetes (AKS): Helm, GitLab CI/CD, Postgres/pgvector, secret management and phased dev/non-prod/prod rollout',
                                        },
                                        {
                                            icon: null,
                                            content: 'Own security and compliance requirements: Entra ID SSO, audit logging, data retention, consent and DPO review',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Internal AI automation',
                                    subtitle: 'Internal agent for delivery operations',
                                    type: null,
                                    data: 20,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Built and rolled out an internal automation agent on Mistral workflows and managed deployments: LLM-based data quality checks, notification integrations and workflow automation, with logging and testing through to production',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 1,
                            logo: ['/logo/calendize.webp', '/logo/legalcheck.webp', '/logo/friendstonight.webp', '/logo/icemelter.webp'],
                            dates: '2024 - 2026',
                            company: 'Interim CTO',
                            title: '',
                            city: 'Paris',
                            summary: 'Acting as a technical partner for early-stage ventures and building high-performance SaaS products',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Calendize",
                                    subtitle: 'SaaS scheduling platform',
                                    type: null,
                                    data: 1,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Designed, built, and launched a feature-rich SaaS application from concept to market, including CI/CD pipelines for efficient iteration and a scalable architecture for early adopters',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "LegalCheck",
                                    subtitle: 'Automated AI assistant for legal teams featuring advanced analysis and RAG capabilities',
                                    type: null,
                                    data: 2,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Created and deployed a mobile/web application integrating AI features with complex data processing',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "Friends Tonight",
                                    subtitle: 'Facilitate connections within international communities through a custom meetup platform',
                                    type: null,
                                    data: 3,
                                    description: [
                                        {
                                            icon: null,
                                            content: '•\tDeveloped and launched a cross-platform mobile application (iOS & Android) with a robust backend, enabling users to organize and discover local events',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "IceMelter",
                                    subtitle: 'Cross-platform card game experience to help strangers build deeper connections',
                                    type: null,
                                    data: 4,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Built and launched a mobile/web card game, establishing the technology roadmap, product vision, and implementing infrastructure for user engagement and future expansion',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - 2024',
                            company: 'ImpactMaker.ai',
                            title: 'CTO',
                            summary: 'Overseeing the entire product lifecycle from concept to MVP',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'MVP creation',
                                    type: null,
                                    data: 5,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Built an MVP using PHP/Laravel, later refactoring core algorithms for data processing',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Team management',
                                    type: null,
                                    data: 6,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Built and managed a lean team of 3 engineers and 1 designer, establishing workflows and processes to deploy the product on schedule',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Business model validation',
                                    type: null,
                                    data: 7,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Successfully onboarded initial B2B clients and validated the business model',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - 2024',
                            company: 'GlobeDreamers',
                            title: 'CTO & Co-founder',
                            summary: 'Led the technical vision and engineering team for a global crowdfunding platform',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Team management',
                                    type: null,
                                    data: 8,
                                    description: [
                                        {
                                            content: 'Built and managed a cross-functional team of 18 engineers (Front, Back, QA, DevOps)'
                                        },{
                                            content: 'Implemented Agile/Scrum and Shape Up'
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Architecture migration',
                                    type: null,
                                    data: 9,
                                    description: [
                                        {
                                            content: 'Migrated a legacy monolithic system to a modern microservices architecture (Laravel/React/AWS), resulting in a 300% increase in platform stability and performance',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Business strategy',
                                    type: null,
                                    data: 10,
                                    description: [
                                        {
                                            content: 'Collaborated with the CEO on fundraising and business strategy, translating investor requirements into technical milestones',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            logo:
                                ['/logo/oecd.webp', '/logo/trade-delegation.webp', '/logo/expo.webp'],
                            dates:
                                '2010 - 2019',
                            company:
                                'International organizations',
                            title:
                                'Technology-Driven Leadership & Operations',
                            summary: 'Senior-level management roles in international development and strategic operations',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Operations management',
                                        type: null,
                                        data: 11,
                                        description: [
                                            {
                                                content: 'Managed a €20M+ budget and led a 15-person cross-functional team, fostering a culture of high accountability and mentorship',
                                            }
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Data reporting modernization',
                                        type: null,
                                        data: 12,
                                        description: [
                                            {
                                                content: 'Drove the modernization of data-reporting systems',
                                            },
                                            {
                                                content: 'Translated business needs into technical requirements to automate manual administrative processes',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'C-level negotiations and partnerships',
                                        type: null,
                                        data: 13,
                                        description: [
                                            {
                                                content: 'Managed relationships with government and corporate representatives (150+ countries)',
                                            },
                                            {
                                                content: 'This background enables me to effectively manage expectations and negotiate priorities with C-level executives',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 5,
                            logo:
                                '/logo/bearingpoint.webp',
                            dates:
                                '2009 - 2010',
                            company:
                                'Bearingpoint',
                            title:
                                'Business intelligence analyst',
                            city:
                                'Moscow',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        type: null,
                                        data: 14,
                                        name: 'SAP R/3 implementation',
                                        description: [
                                            {
                                                content: 'ERP system integration (SAP R/3)',
                                            },
                                            {
                                                content: 'Harmonization of the operational processes for major energy client',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 6,
                            logo:
                                '/logo/uralsib.webp',
                            dates:
                                '2007 - 2008',
                            company:
                                'Uralsib',
                            title:
                                'Business process analyst',
                            city:
                                'Moscow',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        type: null,
                                        data: 15,
                                        name: 'Business process mapping',
                                        description: [
                                            {
                                                content: 'Executed complex business process mapping (ARIS) for core banking system integrations',
                                            },
                                        ],
                                    },
                                ],
                        },
                    ],
                    diplomas: [
                        {
                            date: '2019',
                            title: 'Executive MBA',
                            comment: '<div>Winner of 3 scholarships:</div>' +
                                '<div>“Emerging and Developing Markets”, “High Potential”, “International Experience”</div>',
                            school: [
                                {
                                    name: 'ESSEC Business School',
                                    city: 'Paris',
                                    logo: '/logo/essec.webp',
                                },
                                {
                                    name: 'Mannheim Business School',
                                    city: 'Mannheim',
                                    logo: '/logo/mbs.webp',
                                },
                                {
                                    name: 'Georgetown University\'s McCourt School of Public Policy',
                                    city: 'Washington DC',
                                    logo: '/logo/mcspp.webp',
                                },
                                {
                                    name: 'Waseda Business School',
                                    city: 'Tokyo',
                                    logo: '/logo/waseda.webp',
                                },
                                {
                                    name: 'ESSEC Asia-Pacific',
                                    city: 'Singapore',
                                    logo: '/logo/essec.webp',
                                },
                            ],
                        },
                        {
                            date: '2017',
                            title: 'Leadership, team spirit and managing difficult situations',
                            school: [
                                {
                                    name: 'Écoles de Saint-Cyr Coëtquidan',
                                    city: 'Guer',
                                    logo: '/logo/stcyr.webp',
                                },
                            ],
                        },
                        {
                            date: '2010',
                            title: 'Master of Economics and International Politics',
                            school: [
                                {
                                    name: 'Higher School of Economics',
                                    city: 'Moscow',
                                    logo: '/logo/hse.webp',
                                },
                            ],
                        },
                    ],
                    courses: "Lifelong learning",
                    lifelong: [
                        {
                            id: 1,
                            name: 'Laracasts',
                            logo: '/logo/laracasts.webp',
                        },
                        {
                            id: 2,
                            name: 'Laravel Daily',
                            logo: '/logo/laravel-daily.webp',
                        },
                        {
                            id: 3,
                            name: 'Vue School',
                            logo: '/logo/vue-school.webp',
                        },
                        {
                            id: 4,
                            name: 'Spatie',
                            logo: '/logo/spatie.webp',
                        },
                    ],
                }
            },
            fr: {
                translation: {
                    languages: {
                        en: 'Anglais',
                        fr: 'Français',
                    },
                    firstname: 'Anton',
                    lastname: 'Cher',
                    post: 'Applied AI chez Mistral',
                    links: [
                        {
                            name: 'LinkedIn',
                            url: 'https://www.linkedin.com/in/anton-cher/',
                            icon: '/linkedin.webp',
                        },
                        {
                            name: 'GitHub',
                            url: 'https://www.github.com/hrsa/',
                            icon: '/github.webp',
                        },
                        {
                            name: 'Email',
                            url: 'mailto:anton@anton.eco',
                            icon: '/email.webp',
                        },
                        {
                            name: 'Télécharger le CV',
                            url: 'https://anton.eco/cv/Anton Cher FR.pdf',
                            icon: '/download.webp',
                        },
                    ],
                    summary: "Fort d'une expérience de direction et d'une expertise technique approfondie, " +
                        "j'accompagne les entreprises pour transformer leur product-market fit en réalité scalable. " +
                        "Je maîtrise l'ensemble du cycle de vie du produit, de l'architecture initiale au déploiement.<p class='mt-2'>" +
                        "Aussi à l'aise en comité de direction pour discuter P&L et stratégie qu'avec l'équipe technique pour architecturer des systèmes distribués ou réaliser des revues de code.\n",
                    experience: 'Expérience',
                    education: 'Formations',
                    skills: 'Compétences',
                    about: {
                        tech: {
                            title: 'Skills',
                            tech: ['Python (FastAPI)',
                                'TypeScript (React, Node.js)',
                                'PHP (Laravel)',
                                'AI/RAG & LangChain',
                                'AWS & Kubernetes',
                                'Docker & CI/CD',
                                'Microservices',
                                'PostgreSQL & Vector DBs'],
                            business: ['Product Strategy',
                                'Agile & Shape Up',
                                'Team Leadership',
                                'MVP-to-Scale',
                                'Budget Management',
                                'Stakeholder Management'],
                            frameworks: [],
                            tools: [],
                            crm: [],
                            sales: [],
                            adobe: [],
                        },
                        languages: {
                            title: 'Langues',
                            list: [
                                {
                                    name: 'Anglais',
                                    level: 4,
                                    mastery: 'Trilingue',
                                    icon: '/flags/gb.svg',
                                },
                                {
                                    name: 'Français',
                                    level: 4,
                                    mastery: 'Trilingue',
                                    icon: '/flags/fr.svg',
                                },
                                {
                                    name: 'Russe',
                                    level: 4,
                                    mastery: 'Trilingue',
                                    icon: '/flags/ru.svg',
                                },
                                {
                                    name: 'Italien',
                                    level: 3,
                                    mastery: 'Intermédiaire',
                                    icon: '/flags/it.svg',
                                },
                                {
                                    name: 'Espagnol',
                                    level: 3,
                                    mastery: 'Intermédiaire',
                                    icon: '/flags/es.svg',
                                },
                                {
                                    name: 'Allemand',
                                    level: 3,
                                    mastery: 'Intermédiaire',
                                    icon: '/flags/de.svg',
                                },
                                {
                                    name: 'Portugais',
                                    level: 2,
                                    mastery: 'Débutant',
                                    icon: '/flags/pt.svg',
                                },
                                {
                                    name: 'Néerlandais',
                                    level: 2,
                                    mastery: 'Débutant',
                                    icon: '/flags/nl.svg',
                                },
                                {
                                    name: 'Japonais',
                                    level: 1,
                                    mastery: 'Notions',
                                    icon: '/flags/jp.svg',
                                },
                                {
                                    name: 'Arabe',
                                    level: 1,
                                    mastery: 'Notions',
                                    icon: '/flags/arab.svg',
                                },
                                {
                                    name: 'Greque',
                                    level: 1,
                                    mastery: 'Notions',
                                    icon: '/flags/gr.svg',
                                },
                                {
                                    name: 'Islandais',
                                    level: 1,
                                    mastery: 'Notions',
                                    icon: '/flags/is.svg',
                                },
                                // {
                                //     name: 'Lithuanien',
                                //     level: 1,
                                //     mastery: 'Notions',
                                //     icon: '/flags/lt.svg',
                                // },
                            ],
                        },

                    },
                    jobs: [
                        {
                            id: 7,
                            logo: '/logo/mistral.webp',
                            dates: '2026 - Présent',
                            company: 'Mistral AI',
                            title: 'Applied AI',
                            summary: 'Livrer des applications IA de niveau production pour des clients stratégiques sur les modèles frontier de Mistral',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Livraison IA client',
                                    subtitle: 'Delivery de bout en bout pour un client stratégique de l\'assurance',
                                    type: null,
                                    data: 16,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Piloter de bout en bout le delivery d\'un assistant IA de conseil pour un assureur de premier plan : des ateliers de découverte et de la conception de la solution jusqu\'à un POC de niveau production',
                                        },
                                        {
                                            icon: null,
                                            content: 'Animer la cadence de livraison avec le client : stand-ups quotidiens, sessions build-room, ateliers de spécification, préparation des sprints et des comités de pilotage, jusqu\'au jalon de démo',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Fonctionnalités IA multimodales',
                                    subtitle: 'Speech, intelligence documentaire et sortie structurée sur les modèles Mistral',
                                    type: null,
                                    data: 17,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Construire l\'expérience conseiller en direct : préparation des rendez-vous clients, support d\'interview en temps réel avec speech-to-text (Voxtral), analyse des lacunes de couverture et matériel de suivi automatisé',
                                        },
                                        {
                                            icon: null,
                                            content: 'Extraire des faits clients structurés de documents d\'assurance avec Mistral OCR, intégrés aux données CRM et DMS autour de Mistral Medium 3.5 comme LLM principal',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Agents, connecteurs & garde-fous',
                                    subtitle: 'Connecteurs MCP, workflows, évaluation et sécurité',
                                    type: null,
                                    data: 18,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Développer des workflows d\'agents et des connecteurs on-prem sur mesure (FastMCP, OIDC/OAuth) reliant la stack IA aux systèmes du client',
                                        },
                                        {
                                            icon: null,
                                            content: 'Définir les garde-fous et les frameworks d\'évaluation, dont des tests d\'interview simulés, pour des sorties fiables en production',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Déploiement entreprise sécurisé',
                                    subtitle: 'Kubernetes, SSO et conformité',
                                    type: null,
                                    data: 19,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Architecturer le déploiement chez le client sur Kubernetes (AKS) : Helm, CI/CD GitLab, Postgres/pgvector, gestion des secrets et rollout progressif dev/non-prod/prod',
                                        },
                                        {
                                            icon: null,
                                            content: 'Porter les exigences de sécurité et de conformité : SSO Entra ID, journaux d\'audit, rétention des données, consentement et revue DPO',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Automatisation IA interne',
                                    subtitle: 'Un agent interne pour les opérations de delivery',
                                    type: null,
                                    data: 20,
                                    description: [
                                        {
                                            icon: null,
                                            content: 'Construit et mis en production un agent d\'automatisation interne sur les workflows Mistral et les déploiements managés : contrôles qualité des données par LLM, intégrations de notification et automatisation de workflows, avec logging et tests jusqu\'à la production',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 1,
                            logo: ['/logo/calendize.webp', '/logo/legalcheck.webp', '/logo/friendstonight.webp', '/logo/icemelter.webp'],
                            dates: '2024 - 2026',
                            company: 'Interim CTO',
                            title: '',
                            summary: 'Partenaire technique pour startups Early-stage et développement de produits SaaS haute performance',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Calendize",
                                    subtitle: 'SaaS de planification',
                                    type: null,
                                    data: 1,
                                    description: [
                                        {
                                            content: 'Conception et lancement "de zéro au marché" d\'une application riche en fonctionnalités',
                                        },
                                        {
                                            content: 'Mise en place de pipelines CI/CD pour une itération rapide et d\'une architecture scalable',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "LegalCheck",
                                    subtitle: 'Assistant IA automatisé pour équipes juridiques, doté de fonctionnalités d\'analyse avancée et RAG',
                                    type: null,
                                    data: 2,
                                    description: [
                                        {
                                            content: 'Création et déploiement d\'une application web/mobile intégrant des fonctionnalités d\'IA avancées (RAG) pour l\'analyse juridique automatisée',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "Friends Tonight",
                                    subtitle: 'Faciliter les connexions au sein des communautés internationales via une plateforme personnalisée',
                                    type: null,
                                    data: 3,
                                    description: [
                                        {
                                            content: 'Développement et lancement d\'une application mobile cross-platform (iOS & Android) avec un backend robuste pour faciliter l\'organisation d\'événements locaux',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "IceMelter",
                                    subtitle: 'Expérience de jeu de cartes cross-platform pour aider des inconnus à tisser des liens profonds',
                                    type: null,
                                    data: 4,
                                    description: [
                                        {
                                            content: "Définition de la roadmap technologique et de la vision produit",
                                        },{
                                            content: "Implémentation de l'infrastructure pour assurer l'engagement utilisateur et l'évolutivité future",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - 2024',
                            company: 'ImpactMaker.ai',
                            title: 'CTO',
                            summary: "Supervision du cycle de vie complet du produit, du concept au MVP",
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Creation du MVP',
                                    type: null,
                                    data: 5,
                                    description: [
                                        {
                                            content: 'Développement d\'un MVP en PHP/Laravel, incluant la refactorisation des algorithmes cœurs pour le traitement des données',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Gestion d\'équipe',
                                    type: null,
                                    data: 6,
                                    description: [
                                        {
                                            content: 'Constitution et management d\'une équipe Agile (3 ingénieurs, 1 designer) : mise en place des workflows pour assurer les livraisons dans les délais',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Validation du modèle économique',
                                    type: null,
                                    data: 7,
                                    description: [
                                        {
                                            content: 'Onboarding réussi des premiers clients B2B et validation du modèle économique',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - 2024',
                            company: 'GlobeDreamers',
                            title: 'CTO & Co-fondateur',
                            summary: 'Pilotage de la vision technique et de l\'équipe d\'ingénierie pour une plateforme globale de crowdfunding',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Gestion d\'équipe',
                                    type: null,
                                    data: 8,
                                    description: [
                                        {
                                            content: 'Direction d\'une équipe pluridisciplinaire de 18 personnes (Front, Back, QA, DevOps)'
                                        },
                                        {
                                            content: 'Implémentation des méthodologies Agile/Scrum et Shape Up',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Migration d\'architecture',
                                    type: null,
                                    data: 9,
                                    description: [
                                        {
                                            content: 'Migration d\'un système monolithique hérité vers une architecture microservices moderne (Laravel/React/AWS), générant une augmentation de 300% de la stabilité et des performances',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Stratégie business',
                                    type: null,
                                    data: 10,
                                    description: [
                                        {
                                            content: 'Collaboration directe avec le CEO sur la stratégie de levée de fonds, traduisant les exigences des investisseurs en milestones techniques',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            logo:
                                ['/logo/oecd.webp', '/logo/trade-delegation.webp', '/logo/expo.webp'],
                            dates:
                                '2010 - 2019',
                            company:
                                'Organisations internationales',
                            title:
                                'Tech-driven Leadership & Operations',
                            summary: "Postes « C-level » dans le développement international et les opérations stratégiques",
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Gestion des opérations',
                                        type: null,
                                        data: 11,
                                        description: [
                                            {
                                                content: 'Gestion d\'un budget de plus de 20 M€ et direction d\'une équipe de 15 personnes',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Modernisation des systèmes de reporting',
                                        type: null,
                                        data: 12,
                                        description: [
                                            {
                                                content: 'Pilotage de la modernisation des systèmes de reporting et automatisation des processus administratifs manuels',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Négotiations et partenariats C-level',
                                        type: null,
                                        data: 13,
                                        description: [
                                            {
                                                content: 'Gestion des relations institutionnelles (gouvernements et entreprises dans +150 pays), renforçant ma capacité à négocier avec des interlocuteurs C-level',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 5,
                            logo:
                                '/logo/bearingpoint.webp',
                            dates:
                                '2009 - 2010',
                            company:
                                'Bearingpoint',
                            title:
                                'Analyste business intelligence',
                            city:
                                'Moscow',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        data: 14,
                                        name: 'Implémentation de SAP R/3',
                                        description: [
                                            {
                                                content: 'Intégration du système ERP (SAP R/3)',
                                            },
                                            {
                                                content: 'Harmonisation des processus opérationnels pour un client majeur du secteur de l\'énergie',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 6,
                            logo:
                                '/logo/uralsib.webp',
                            dates:
                                '2007 - 2008',
                            company:
                                'Uralsib',
                            title:
                                'Analyste de processus opérationnels',
                            city:
                                'Moscow',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        data: 15,
                                        name: 'Mapping de processus opérationnels',
                                        description: [
                                            {
                                                content: 'Cartographie complexe des processus métier  (ARIS) pour l\'intégration de systèmes Core Banking',
                                            },
                                        ],
                                    },
                                ],
                        },
                    ],
                    diplomas: [
                        {
                            date: '2019',
                            title: 'Executive MBA',
                            comment: '<div>Lauréat de 3 bourses de mérite :</div>' +
                                '<div>“Emerging and Developing Markets”, “High Potential”, “International Experience”</div>',
                            school: [
                                {
                                    name: 'ESSEC Business School',
                                    city: 'Paris',
                                    logo: '/logo/essec.webp',
                                },
                                {
                                    name: 'Mannheim Business School',
                                    city: 'Mannheim',
                                    logo: '/logo/mbs.webp',
                                },
                                {
                                    name: 'Georgetown University\'s McCourt School of Public Policy',
                                    city: 'Washington DC',
                                    logo: '/logo/mcspp.webp',
                                },
                                {
                                    name: 'Waseda Business School',
                                    city: 'Tokyo',
                                    logo: '/logo/waseda.webp',
                                },
                                {
                                    name: 'ESSEC Asia-Pacific',
                                    city: 'Singapour',
                                    logo: '/logo/essec.webp',
                                },
                            ],
                        },
                        {
                            date: '2017',
                            title: 'Leadership, team spirit and managing difficult situations',
                            school: [
                                {
                                    name: 'Écoles de Saint-Cyr Coëtquidan',
                                    city: 'Guer',
                                    logo: '/logo/stcyr.webp',
                                },
                            ],
                        },
                        {
                            date: '2010',
                            title: 'Master - économie et politique internationale',
                            school: [
                                {
                                    name: 'Haute École des Sciences Économiques',
                                    city: 'Moscou',
                                    logo: '/logo/hse.webp',
                                },
                            ],
                        },
                    ],
                    courses: "Lifelong learning",
                    lifelong: [
                        {
                            id: 1,
                            name: 'Laracasts',
                            logo: '/logo/laracasts.webp',
                        },
                        {
                            id: 2,
                            name: 'Laravel Daily',
                            logo: '/logo/laravel-daily.webp',
                        },
                        {
                            id: 3,
                            name: 'Vue School',
                            logo: '/logo/vue-school.webp',
                        },
                        {
                            id: 4,
                            name: 'Spatie',
                            logo: '/logo/spatie.webp',
                        },
                    ],
                }
            },
        }
    })
;

export default function (app) {
    app.use(I18NextVue, {i18next})
    return app
}
