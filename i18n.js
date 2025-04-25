// noinspection UnnecessaryLabelJS,CommaExpressionJS

import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    languages: {
                        en: 'English',
                        fr: 'French',
                    },
                    firstname: 'Anton',
                    lastname: 'Cherednichenko',
                    post: 'CTO',
                    links: [
                        {
                            name: 'LinkedIn',
                            url: 'https://www.linkedin.com/in/hrsart/',
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
                            url: 'https://anton.eco/cv/en_cv_anton_cherednichenko.pdf',
                            icon: '/download.webp',
                        },
                    ],
                    experience: 'Experience',
                    education: 'Education',
                    skills: 'Skills',
                    about: {
                        tech: {
                            title: 'Skills',
                            languages: ['PHP', 'Javascript', 'Typescript', 'Python', 'SQL', 'GraphQL', 'HTML', 'CSS'],
                            love: ['Tinkerwell', 'Ray', 'Expose', 'Ngrok', 'PHPUnit', 'Pest', 'Cypress'],
                            frameworks: ['Laravel', 'Livewire', 'FastAPI', 'Flask', 'Express.js', 'Vue.js', 'React', 'React Native', 'Inertia.js', 'Tailwind'],
                            tools: ['IntelliJ Idea', 'PhpStorm', 'PyCharm', 'DataGrip', 'Git', 'Postman', 'Bruno', 'Figma', 'Docker'],
                            crm: ['Hubspot', 'ClickUp', 'Trello', 'Asana', 'Jira'],
                            sales: ['Waalaxy', 'CaptainData', 'BreakCold', 'LaGrowthMachine'],
                            adobe: ['Photoshop', 'Illustrator', 'Lightroom', 'Premiere', 'After Effects'],
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
                            id: 1,
                            logo: '/logo/legalcheck.webp',
                            dates: '2024 - Present',
                            company: 'LegalCheck',
                            title: 'Co-Founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Technology roadmap",
                                    type: 'tech',
                                    data: 1,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created the technology roadmap for LegalCheck, an automated AI assistant for legal teams.',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Established the product’s vision, architecture, and delivery plan.',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 2,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Selected and implemented the tech stack to deliver real-time interactivity and scalable API architecture',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "CI/CD pipelines",
                                    type: 'tech',
                                    data: 3,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Introduced CI/CD pipelines to enable efficient iteration and future feature expansion',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 4,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created the app architecture with a React Native frontend and FastAPI on the backend',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/friendstonight.webp',
                            dates: '2024 - Present',
                            company: 'Friends Tonight',
                            title: 'Founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Technology roadmap",
                                    type: 'tech',
                                    data: 5,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created the technology roadmap for Friends Tonight, a custom meetup app for international communities.',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Established the product’s vision, architecture, and delivery plan.',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 6,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Selected and implemented the tech stack to deliver real-time interactivity and scalable API architecture',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 7,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created the app architecture with a Flutter frontend and Express.js on the backend',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
                            logo: '/logo/calendize.webp',
                            dates: '2024 - Present',
                            company: 'Calendize.it',
                            title: 'Founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Technology roadmap",
                                    type: 'tech',
                                    data: 8,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created the technology roadmap for Calendize, a micro-SaaS project to streamline scheduling workflows.',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Established the product’s vision, architecture, and delivery plan.',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 9,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Selected and implemented the tech stack to deliver real-time interactivity and scalable API architecture',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "CI/CD pipelines",
                                    type: 'tech',
                                    data: 10,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Introduced CI/CD pipelines to enable efficient iteration and future feature expansion',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 11,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Built a foundation for long-term scalability while ensuring seamless collaboration with early adopters',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - 2024',
                            company: 'ImpactMaker.ai',
                            title: 'CTO, Co-founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Architecture',
                                    type: 'tech',
                                    data: 12,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Organized the architecture design process for a real-time OpenAI-powered chatbot, using an appropriate tech stack to ensure scalability and performance',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Stack used: Vue.js, Tailwind CSS with a Laravel API connected via websockets)',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Team management',
                                    type: 'business',
                                    data: 13,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Built and managed a small high-performing development team, establishing workflows and processes to deliver the MVP on schedule',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Delivery optimization',
                                    type: ['business', 'success'],
                                    data: 14,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Translated business needs into technical solutions, overseeing the full-stack development and delivering a product that enhanced user engagement and company impact',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 5,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - 2024',
                            company: 'GlobeDreamers',
                            title: 'CTO, Co-founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Organizational scaling',
                                    type: ['business', 'success'],
                                    data: 15,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Scaled the company over five years, increasing total funds raised by 1,700% from €72,000 to €1,300,000.'
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Grew the platform\'s user base by 350%, from 4,000 to over 14,000 active users.',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Expanded the technical team from 2 to 18 members',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Agile and Shape Up Implementation',
                                    type: 'business',
                                    data: 16,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Implemented Agile and Shape Up methodologies, optimizing workflows and delivering key features faster, resulting in increased platform adoption and engagement',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'AI-driven feature',
                                    type: ['tech', 'success'],
                                    data: 17,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Integrated AI-driven features, transforming platform capabilities and attracting new corporate partners, growing the total number of partnerships from 90 to over 800',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Tech stack',
                                    type: 'tech',
                                    data: 18,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Modernized the tech stack with extensive codebase refactoring, API optimization, and CI/CD implementation, reducing operational costs while improving scalability and system performance',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 6,
                            logo:
                                '/logo/expo.webp',
                            dates:
                                '2017 - 2019',
                            company:
                                'Russia World Expo-2025 Bid Committee',
                            title:
                                'Director of international development',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Operations management',
                                        type: 'business',
                                        data: 19,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Led the international strategy for Russia\'s bid for Expo 2025, managing a team of 12 in Paris',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Directed global outreach and partnership negotiations with representatives from over 170 countries.',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Development strategy',
                                        type: 'business',
                                        data: 20,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Designed and executed a comprehensive development strategy while managing a €20M budget and ensuring its alignment with the KPIs',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Negotiations and partnerships',
                                        type: ['business', 'success'],
                                        data: 21,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Established high-impact partnerships and conducted "big deal" negotiations with international stakeholders',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'Team management',
                                        type: 'business',
                                        data: 22,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Fostered team collaboration and streamlined operations to deliver results under tight deadlines, showcasing adaptability and leadership in high-pressure international contexts',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 7,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2012 - 2017',
                            company:
                                'Trade Delegation of the Russian Federation in France',
                            title:
                                'Deputy Trade Division Director',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Operations management',
                                        type: 'business',
                                        data: 23,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Managed the 15-person division, responsible for advising senior executives of Russian and French companies in their international development strategies',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Team performance',
                                        type: ['business', 'success'],
                                        data: 24,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Developed and implemented processes for team coordination and project prioritization, improving efficiency and enabling the division to exceed targets by 260% in signed contract value (€130M vs. €50M goal)',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Team management',
                                        type: 'business',
                                        data: 25,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Mentored and empowered team members to drive performance and achieve objectives, building a culture of accountability and growth',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Strategic partnerships',
                                        id: 4,
                                        type: ['business', 'success'],
                                        data: 26,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Oversaw strategic partnerships and market development efforts, facilitating 86 new international contracts across sectors such as aviation, IT, energy, and public safety',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 8,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2010 - 2012',
                            company:
                                'Trade Delegation of the Russian Federation in France',
                            title:
                                'International partnerships manager',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Operations management',
                                        type: 'business',
                                        data: 27,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Management of a 3-person team, responsible for OECD adhesion projects management',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Negotiations',
                                        type: 'business',
                                        data: 28,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Daily political and commercial negotiations with representatives of more than 150 countries',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Research and reporting',
                                        type: 'business',
                                        data: 29,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Collection of information, analysis of relevant legislation, reporting to the relevant ministries',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'International treaties signed',
                                        type: ['business', 'success'],
                                        data: 30,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Participated in the negotiation of international treaties:'
                                            },
                                            {
                                                icon: 'sublist',
                                                content: '<li>Convention on Combating Bribery of Foreign Public Officials in International Business Transactions</li>' +
                                                    '<li>Convention on Mutual Administrative Assistance in Tax Matters</li>',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 9,
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
                                        type: 'tech',
                                        data: 31,
                                        name: 'SAP R/3 implementation',
                                        description: [
                                            {
                                                icon: 'tech',
                                                content: 'ERP system integration (SAP R/3)',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Harmonization of the operational processes of the oil company "Rosneft"',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Assistance during the acquisition offer of "British Petroleum"',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 10,
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
                                        type: 'tech',
                                        data: 32,
                                        name: 'Business process mapping',
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Business process mapping in the digital form (ARIS) to facilitate the integration of the ERP system',
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
                    lastname: 'Cherednichenko',
                    post: 'CTO',
                    links: [
                        {
                            name: 'LinkedIn',
                            url: 'https://www.linkedin.com/in/hrsart/',
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
                            url: 'https://anton.eco/cv/fr_cv_anton_cherednichenko.pdf',
                            icon: '/download.webp',
                        },
                    ],
                    experience: 'Expérience',
                    education: 'Formations',
                    skills: 'Compétences',
                    about: {
                        tech: {
                            title: "Compétences",
                            languages: ['PHP', 'Javascript', 'Typescript', 'Python', 'SQL', 'GraphQL', 'HTML', 'CSS'],
                            love: ['Tinkerwell', 'Ray', 'Expose', 'Ngrok', 'PHPUnit', 'Pest', 'Cypress'],
                            frameworks: ['Laravel', 'Livewire', 'FastAPI', 'Flask', 'Express.js', 'Vue.js', 'React', 'React Native', 'Inertia.js', 'Tailwind'],
                            tools: ['IntelliJ Idea', 'PhpStorm', 'PyCharm', 'DataGrip', 'Git', 'Postman', 'Bruno', 'Figma', 'Docker'],
                            crm: ['Hubspot', 'ClickUp', 'Trello', 'Asana', 'Jira'],
                            sales: ['Waalaxy', 'CaptainData', 'BreakCold', 'LaGrowthMachine'],
                            adobe: ['Photoshop', 'Illustrator', 'Lightroom', 'Premiere', 'After Effects'],
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
                            id: 1,
                            logo: '/logo/legalcheck.webp',
                            dates: '2024 - Présent',
                            company: 'LegalCheck',
                            title: 'Co-fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Roadmap technologique",
                                    type: 'tech',
                                    data: 1,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Établi la roadmap technologique pour LegalCheck, un assistant IA automatisé pour les équipes juridiques',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Défini la vision du produit, son architecture et son plan de livraison',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 2,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Sélectionné et implementé la tech stack pour offrir une interactivité en temps réel et une architecture API évolutive',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "CI/CD pipelines",
                                    type: 'tech',
                                    data: 3,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Introduit des pipelines CI/CD pour permettre des itérations efficaces et une expansion future des fonctionnalités',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 4,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: "Création de l'architecture de l'application avec un frontend React Native et FastAPI sur le backend",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/friendstonight.webp',
                            dates: '2024 - Présent',
                            company: 'Friends Tonight',
                            title: 'Fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Roadmap technologique",
                                    type: 'tech',
                                    data: 5,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Établi la roadmap technologique pour Friends Tonight, une application de rencontre personnalisée pour les communautés internationales',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Défini la vision du produit, son architecture et son plan de livraison',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 6,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Sélectionné et implementé la tech stack pour offrir une interactivité en temps réel et une architecture API évolutive',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 7,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: "Création de l'architecture de l'application avec un frontend Flutter et Express.js sur le backend",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
                            logo: '/logo/calendize.webp',
                            dates: '2024 - Présent',
                            company: 'Calendize.it',
                            title: 'Fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Roadmap technologique",
                                    type: 'tech',
                                    data: 8,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Établi la roadmap technologique pour Calendize, un projet micro-SaaS, afin d’optimiser les workflows de planification.',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Défini la vision du produit, son architecture et son plan de livraison.',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: "Tech stack",
                                    type: 'tech',
                                    data: 9,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Sélectionné et implementé la tech stack pour offrir une interactivité en temps réel et une architecture API évolutive',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: "Pipelines CI/CD",
                                    type: 'tech',
                                    data: 10,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Introduit des pipelines CI/CD pour permettre des itérations efficaces et une expansion future des fonctionnalités',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: "Architecture",
                                    type: ['tech', 'success'],
                                    data: 11,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Construit une base solide pour les évolutions à venir, en assurant une collaboration fluide avec les premiers utilisateurs.',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - 2024',
                            company: 'ImpactMaker.ai',
                            title: 'CTO, Co-fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Architecture',
                                    type: 'tech',
                                    data: 12,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Conçu l’architecture d’un chatbot en temps réel basé sur OpenAI, avec une tech stack pensée pour garantir performance et évolutivité',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Stack utilisée: Vue.js, Tailwind CSS avec API Laravel connecté via websockets)',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Gestion d\'équipe',
                                    type: 'business',
                                    data: 13,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Monté et encadré une petite équipe de développeurs performants, en définissant des workflows et les processus clairs pour livrer le MVP dans les délais définis',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Supervision du développement full-stack',
                                    type: ['business', 'success'],
                                    data: 14,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Transformé les besoins d’entreprise en solutions concrètes, supervisé le développement full-stack et livré un produit qui booste l’engagement des utilisateurs et l’impact des entreprises',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 5,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - 2024',
                            company: 'GlobeDreamers',
                            title: 'CTO, Co-fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Gestion de la croissance',
                                    type: ['business', 'success'],
                                    data: 15,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Fait évoluer l’entreprise sur cinq ans, en augmentant les fonds levés de 1700%, passant de 72000€ à 1300000€.'
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Croissance de la base d’utilisateurs de la plateforme de 350%, de 4000 à plus de 14000 utilisateurs actifs.',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Agrandi l’effectif de l’équipe technique de 2 à 18.',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Implémentation Agile and Shape Up',
                                    type: 'business',
                                    data: 16,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Mis en place les méthodologies Agile et Shape Up, optimisant les workflows et accélérant la livraison des fonctionnalités principales, ce qui a contribué à l’adoption et l’engagement sur la plateforme',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Fonctionnalités IA',
                                    type: ['tech', 'success'],
                                    data: 17,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Intégré des fonctionnalités basées sur l’IA, améliorant la plateforme et attirant de nouveaux partenaires corporatifs, faisant passer le nombre total de partenariats de 90 à plus de 800',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Tech stack',
                                    type: 'tech',
                                    data: 18,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Modernisé la tech stack grâce à un refactoring approfondi du code, une optimisation de l’API et la mise en place de pipelines CI/CD, réduisant les coûts opérationnels et améliorant la scalabilité et les performances',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 6,
                            logo:
                                '/logo/expo.webp',
                            dates:
                                '2017 - 2019',
                            company:
                                'Comité de candidature de Russie pour l\'EXPO 2025',
                            title:
                                'Directeur du développement international',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Gestion des opérations',
                                        type: 'business',
                                        data: 19,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Piloté la stratégie internationale pour la candidature de la Russie à l’Expo 2025, en gérant une équipe de 12 à Paris.',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Responsable de rayonnement global, négocié des partenariats avec des représentants de 170 pays.',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Stratégie de développement',
                                        type: 'business',
                                        data: 20,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Développé et exécuté une stratégie complète tout en gérant un budget de 20 M€, avec un suivi précis des KPI pour assurer les résultats',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Négotiations et partenariats',
                                        type: ['business', 'success'],
                                        data: 21,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Établi des partenariats stratégiques clés et négocié des accords majeurs avec des acteurs internationaux',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'Gestion de l\'équipe',
                                        type: 'business',
                                        data: 22,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Favorisé la collaboration au sein de l’équipe et rationalisé les opérations pour livrer des résultats dans des délais serrés, démontrant une grande capacité d’adaptation et un leadership solide sous pression dans des contextes internationaux',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 7,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2012 - 2017',
                            company:
                                'Délégation Économique de Russie en France',
                            title:
                                'Directeur adjoint de la division commerciale',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Gestion des opérations',
                                        type: 'business',
                                        data: 23,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Géré une division de 15 personnes, chargée de conseiller les cadres des entreprises russes et françaises dans leurs stratégies de développement international',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Performance de l\'équipe',
                                        type: ['business', 'success'],
                                        data: 24,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Mis en place et optimisé des processus de coordination d’équipe et de priorisation des projets, améliorant l’efficacité et permettant à la division de dépasser ses objectifs de 260 % en valeur de contrats signés (130 M€ contre un objectif de 50 M€)',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Gestion de l\'équipe',
                                        type: 'business',
                                        data: 25,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Encadré et responsabilisé les membres de l’équipe pour améliorer leurs performances et atteindre leurs objectifs, tout en instaurant une culture d’excellence et de l’entraide',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Partenariats strategiques',
                                        id: 4,
                                        type: ['business', 'success'],
                                        data: 26,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Supervisé les partenariats stratégiques et les efforts de développement de marché, facilitant la signature de 86 nouveaux contrats internationaux dans des secteurs comme l’aviation, l’informatique, l’énergie et la sécurité publique',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 8,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2010 - 2012',
                            company:
                                'Délégation Économique de Russie en France',
                            title:
                                'Responsable des partenariats internationaux',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Gestion des opérations',
                                        type: 'business',
                                        data: 27,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Management de l’équipe de 3 personnes, chargée de gestion des projets d’adhésion à l’OCDE',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Négotiations',
                                        type: 'business',
                                        data: 28,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Négociations politiques et commerciales quotidiennes avec les représentants de plus de 150 pays',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Recherche et reporting',
                                        type: 'business',
                                        data: 29,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Collecte d’information, analyse de législation pertinente, reporting auprès des ministères',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'Traités internationaux signés',
                                        type: ['business', 'success'],
                                        data: 30,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Participation à la négociation de traités internationaux :'
                                            },
                                            {
                                                icon: 'sublist',
                                                content: '<li>Convention on Combating Bribery of Foreign Public Officials in International Business Transactions</li>' +
                                                    '<li>Convention on Mutual Administrative Assistance in Tax Matters</li>',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 9,
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
                                        type: 'tech',
                                        data: 31,
                                        name: 'Implémentation de SAP R/3',
                                        description: [
                                            {
                                                icon: 'tech',
                                                content: 'ERP system intégration (SAP R/3)',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Harmonisation des processus opérationnels de l\'entreprise pétroliere “Rosneft”',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Préparation d’offre d’acquisition de "British Petroleum"',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 10,
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
                                        type: 'tech',
                                        data: 32,
                                        name: 'Mapping de processus opérationnels',
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Mise en correspondance de processus opérationnels dans la forme digitale (ARIS) pour faciliter l’intégration du système ERP (SAP/R3)',
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
