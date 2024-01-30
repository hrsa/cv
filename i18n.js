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
                    post: 'CTO/COO, Co-founder',
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
                            languages: ['PHP', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
                            love: ['Tinkerwell', 'Ray', 'Expose'],
                            frameworks: ['Laravel', 'Livewire', 'Vue.js', 'Tailwind'],
                            tools: ['IntelliJ Idea', 'PhpStorm', 'PyCharm', 'DataGrip', 'Git', 'Postman', 'Bruno', 'Figma', 'Docker', 'OpenServer'],
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
                                    mastery: 'Avancé',
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
                                {
                                    name: 'Lithuanian',
                                    level: 1,
                                    mastery: 'Beginner',
                                    icon: '/flags/lt.svg',
                                },
                            ],
                        },

                    },
                    jobs: [
                        {
                            id: 1,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - Present',
                            company: 'ImpactMaker.ai',
                            title: 'CTO, Co-founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Architecture planning and full-stack development',
                                    type: 'tech',
                                    data: 1,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Created, built and improved the Impact Maker app (a customisable real-time OpenAI-powered chatbot that helps users and companies find the best volunteering opportunities',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Stack used: Vue.js, Tailwind CSS with a Laravel API connected via websockets)',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - Present',
                            company: 'GlobeDreamers',
                            title: 'COO/CTO, Co-founder',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Global strategy and innovation',
                                    type: 'business',
                                    data: 2,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Design and implementation of the company\'s development strategy (commercial, organizational, technical, search for investors)'
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Design and execution of commercial offers strategy for businesses, schools and media, contributing to significant growth of the platform',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Strategic partnerships',
                                    type: 'business',
                                    data: 3,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Initiation and management of partnerships with renowned entities such as the UN and the Red Cross, strengthening impact and international reach',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Leadership and management',
                                    type: 'business',
                                    data: 4,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Financial, operational and human management',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Organization of teamwork, prioritization according to strategy, employee empowerment',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Engagement and networking',
                                    type: 'business',
                                    data: 5,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Active participation in B For Good Leaders, a global cooperative of leaders working for a regenerative economy',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Technological and operational leadership',
                                    type: 'tech',
                                    data: 6,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'In charge of the technological aspect of the platform and optimizing operational and financial processes'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Choice of technologies, implementation of CI/CD, full-stack development, supervision of an agile team of subcontractor developers'
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    name: 'Architecture planning',
                                    type: 'tech',
                                    data: 7,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Re-planned and built the 3-app GlobeDreamers platform (api, frontend and backoffice apps)',
                                        },
                                    ],
                                },
                                {
                                    id: 7,
                                    name: 'DevOps strategy',
                                    type: 'tech',
                                    data: 8,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Re-written and improved the CD/CI pipelines, added code quality checks and testing',
                                        },
                                    ],
                                },
                                {
                                    id: 8,
                                    name: 'Linux server management',
                                    type: 'tech',
                                    data: 9,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Updated staging and production servers (Ubuntu upgrades, new PHP versions, nginx settings, certificates updates, etc)',
                                        },
                                    ],
                                },
                                {
                                    id: 9,
                                    name: 'Refactoring and upgrades',
                                    type: ['tech', 'success'],
                                    data: 10,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Refactored the codebase (75% rewritten from scratch) for 3 projects: API, Frontend and Backoffice',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'PHP update (5.6 to 8.3)'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Laravel update (5.7 to 10.41)'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Vue3 and Livewire integration for Frontend and Backoffice apps'
                                        },
                                    ],
                                },
                                {
                                    id: 10,
                                    name: 'API improvements',
                                    type: ['tech', 'success'],
                                    data: 11,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Planned, re-written, cleaned and improved the platform architecture, the database structure and its organization',
                                        },
                                        {
                                            icon: 'sublist',
                                            content: "<li>Separation of concerns</li>" +
                                                "<li>Re-planned and re-organised models and classes structure</li>" +
                                                "<li>Refactoring of “fat” controllers into Requests, Services and Jobs</li>" +
                                                "<li>Introduced API versioning</li>" +
                                                "<li>Cleaned out hundreds of N+1 queries</li>" +
                                                "<li>Ensured proper Eloquent use and eager resources loading</li>",
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Increased codebase coverage from 0% to 98% with 670 feature and 12 unit tests, later refactored from PHPUnit to Pest, kept test coverage constant while developing new code',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Integrated 3rd party APIs: Google Maps, Mangopay, ClickUp, Calendly, Hubspot, Brevo, LaGrowthMachine, Typeform, OpenAI…',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Realtime sync between API and frontend via Websockets',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Invoice PDF auto generation',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'AI chatbot',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'And many more...',
                                        },
                                    ],
                                },
                                {
                                    id: 11,
                                    name: 'Frontend and Backoffice improvements',
                                    type: ['tech', 'success'],
                                    data: 12,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Rewritten two frontend apps integrally to increase its dynamic responsiveness and integrate AI features, as well as new models'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Replaced the deprecated mix of Bootstrap, SCSS and CSS with Tailwind'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Refactored obsolete Blade/jQuery interfaces to :'
                                        },
                                        {
                                            icon: 'sublist',
                                            content: '<li>Frontend  – Vue.js SPA (Vue3 Composition API)</li>' +
                                                '<li>Backoffice – Livewire app</li>',
                                        },
                                    ],
                                },
                                {
                                    id: 12,
                                    name: 'Growth and Impact',
                                    type: ['business', 'success'],
                                    data: 13,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Fundraising by the platform increased from €72\u00A0000 to €1\u00A0300\u00A0000',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Growth of user base from 4k to 12k users',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'New corporate partners - growth from 90 to 800, with key partnerships like the Orange Foundation, Outdoor Sports Valley, and others',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
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
                                        data: 14,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Operations management of the 12-person branch office in Paris',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Marketing and budget strategy',
                                        type: 'business',
                                        data: 15,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Design and follow-up of the marketing strategy (campaign, events, visual identity) and operational plan',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Budget management (20\u00A0000\u00A0000\u00A0€)',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Definition, monitoring and reporting of KPIs',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Negotiations and partnerships',
                                        type: 'business',
                                        data: 16,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Prospection and establishment of partnerships with high-level representatives from 170 countries, "big deals" negotiation',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 4,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2012 - 2017',
                            company:
                                'Trade Delegation of the Russian Federation in France',
                            title:
                                'Deputy Commercial Director',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Operations management',
                                        type: 'business',
                                        data: 17,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Operations management of a 15-person division, responsible for advising senior executives of Russian and French companies in their international development strategies',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Strategic partnerships',
                                        type: 'business',
                                        data: 18,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'New market development',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Establishment of strategic partnerships',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Promotion of international cooperation',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Definition, monitoring and reporting of KPIs',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Network development',
                                        type: 'business',
                                        data: 19,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Creation of a network of partners in France and Russia',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: '86 new international contracts signed',
                                        type: ['business', 'success'],
                                        data: 20,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: '86 new international contracts signed (SMEs and large companies) in various sectors: aviation, composite materials, IT, microelectronics, mass distribution, public safety, robotics, tourism, energy, transport'
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Surpassed the goals by 260% on signed contracts value (130\u00A0000\u00A0000€ instead of 50\u00A0000\u00A0000€)'
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: 'Inter-ministry lobbying',
                                        type: ['business', 'success'],
                                        data: 21,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Successful lobbying and signature of the Franco-Russian cooperation strategy in the innovations domain',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 5,
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
                                        data: 22,
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
                                        data: 23,
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
                                        data: 24,
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
                                        data: 25,
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
                            id: 6,
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
                                        data: 26,
                                        name: 'SAP R/3 implementation',
                                        description: [
                                            {
                                                icon: 'business',
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
                            id: 7,
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
                                        data: 27,
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
                    post: 'CTO/COO, Co-fondateur',
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
                            languages: ['PHP', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
                            love: ['Tinkerwell', 'Ray', 'Expose'],
                            frameworks: ['Laravel', 'Livewire', 'Vue.js', 'Tailwind'],
                            tools: ['IntelliJ Idea', 'PhpStorm', 'PyCharm', 'DataGrip', 'Git', 'Postman', 'Bruno', 'Figma', 'Docker', 'OpenServer'],
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
                                {
                                    name: 'Lithuanien',
                                    level: 1,
                                    mastery: 'Notions',
                                    icon: '/flags/lt.svg',
                                },
                            ],
                        },

                    },
                    jobs: [
                        {
                            id: 1,
                            logo: '/logo/impactmaker.webp',
                            dates: '2023 - Présent',
                            company: 'ImpactMaker.ai',
                            title: 'CTO, Co-fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: "Planification de l'architecture et développement full-stack",
                                    type: 'tech',
                                    data: 1,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Création, construction et amélioration de l\'application Impact Maker (un chatbot personnalisable en temps réel alimenté par OpenAI qui aide les utilisateurs à trouver les meilleures opportunités de bénévolat',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Stack utilisé: Vue.js, Tailwind CSS avec l\'API Laravel connecté via websockets)',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 2,
                            logo: '/logo/globedreamers.webp',
                            dates: '2019 - Présent',
                            company: 'GlobeDreamers',
                            title: 'COO/CTO, Co-fondateur',
                            city: 'Paris',
                            responsibilities: [
                                {
                                    id: 1,
                                    name: 'Stratégie globale et innovation',
                                    type: 'business',
                                    data: 2,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: "Conception et mise en œuvre de la stratégie de développement de l'entreprise (commerciale, organisationnelle, technique, recherche d'investisseurs)",
                                        },
                                        {
                                            icon: 'business',
                                            content: "Conception et création d'offres commerciales pour les entreprises, les écoles et les médias, contribuant à la croissance significative de la plateforme",
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Partenariats stratégiques',
                                    type: 'business',
                                    data: 3,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: "Initiation et gestion de partenariats avec des entités de renom telles que l'ONU et la Croix Rouge, renforçant l'impact et la portée internationale",
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Leadership et management',
                                    type: 'business',
                                    data: 4,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Gestion financière, opérationnelle et humaine',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Organisation du travail en équipe, priorisation selon la stratégie, responsabilisation des collaborateurs',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Engagement et networking',
                                    type: 'business',
                                    data: 5,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Participation active à B For Good Leaders, une coopérative mondiale de dirigeants œuvrant pour une économie régénérative',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Leadership technologique et opérationnel',
                                    type: 'tech',
                                    data: 6,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'En charge de l\'aspect technologique de la plateforme et de l\'optimisation des processus opérationnels et financiers'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Choix des technologies, mise en place du CI/CD, développement full-stack, encadrement d\'une équipe agile de développeurs sous-traitants'
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    name: 'Planification de l\'architecture',
                                    type: 'tech',
                                    data: 7,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Construction de l\'intégralité de la plateforme GlobeDreamers (applications api, frontend et backoffice)',
                                        },
                                    ],
                                },
                                {
                                    id: 7,
                                    name: 'Stratégie DevOps',
                                    type: 'tech',
                                    data: 8,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Réécriture et amélioration des pipelines CD/CI, ajout de contrôles de qualité du code et de tests fonctionnels et unitaires',
                                        },
                                    ],
                                },
                                {
                                    id: 8,
                                    name: 'Gestion des serveurs Linux',
                                    type: 'tech',
                                    data: 9,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Mise à jour des serveurs de staging et de production (mises à niveau Ubuntu, nouvelles versions de PHP, paramètres nginx, mises à jour de certificats, etc.)',
                                        },
                                    ],
                                },
                                {
                                    id: 9,
                                    name: 'Refactoring et mises à jour',
                                    type: ['tech', 'success'],
                                    data: 10,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Refactoring de la base de code (réécrite à 75% à partir de zéro) pour 3 projets : API, Frontend, Back-office',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Mise à jour de PHP (5.6 à 8.3)'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Mise ) jour de Laravel (5.7 à 10.41)'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Intégration Vue3 et Livewire pour les applications Frontend et Backoffice'
                                        },
                                    ],
                                },
                                {
                                    id: 10,
                                    name: 'Évolution d\'API',
                                    type: ['tech', 'success'],
                                    data: 11,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Planifié, réécrit, nettoyé et amélioré l\'architecture de la plateforme, la structure de la base de données et son organisation.',
                                        },
                                        {
                                            icon: 'sublist',
                                            content: '<li>"Separation of concerns"</li>' +
                                                "<li>Planification et organisation des modèles et des classes</li>" +
                                                '<li>Refactoring des "gros" Controllers en Requests, Services et Jobs</li>' +
                                                '<li>Versionnement des API</li>' +
                                                "<li>Nettoyage de centaines de requêtes N+1</li>" +
                                                "<li>Refactoring pour utilisation appropriée d’Eloquent et un chargement pre emptif (eager loading) des ressources</li>",
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Couverture de la base de code (0% à 98%) avec 670 tests fonctionnels et 12 tests unitaires, refactorisés ultérieurement de PHPUnit vers Pest',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Maintient de la couverture des tests constante tout en développant du nouveau code',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'API tierces intégrées : Google Maps, Mangopay, ClickUp, Calendly, Hubspot, Brevo, LaGrowthMachine, Typeform, OpenAI…',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Synchronisation en temps réel entre l\'API et le frontend via Websockets',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Génération automatique des factures en PDF',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Chatbot IA',
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Et beaucoup plus...',
                                        },
                                    ],
                                },
                                {
                                    id: 11,
                                    name: 'Évolution de Frontend et Backoffice',
                                    type: ['tech', 'success'],
                                    data: 12,
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Réécriture intégrale de deux apps pour augmenter la réactivité dynamique et intégrer des fonctionnalités d\'IA, ainsi que de nouveaux modèles'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Mélange obsolète de Bootstrap, SCSS et CSS remplacé par Tailwind'
                                        },
                                        {
                                            icon: 'tech',
                                            content: 'Refactoring de l’interface obsolète Blade/jQuery en :'
                                        },
                                        {
                                            icon: 'sublist',
                                            content: '<li>Frontend  – une SPA Vue.js (Vue3 Composition API)</li>' +
                                                '<li>Backoffice – une application Livewire</li>',
                                        },
                                    ],
                                },
                                {
                                    id: 12,
                                    name: 'Croissance et impact',
                                    type: ['business', 'success'],
                                    data: 13,
                                    description: [
                                        {
                                            icon: 'business',
                                            content: 'Collecte de fonds par la plateforme augmentée de €72\u00A0000 à €1\u00A0300\u00A0000',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Croissance de la base d\'utilisateurs de 4\u00A0000 à 12\u00A0000',
                                        },
                                        {
                                            icon: 'business',
                                            content: 'Nouveaux partenaires commerciaux - croissance de 90 à 800, avec des partenariats clés comme la Fondation Orange, Outdoor Sports Valley, etc',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 3,
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
                                        data: 14,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Gestion des opérations du comité à Paris (12 personnes)',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Stratégie marketing et budgétaire',
                                        type: 'business',
                                        data: 15,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Conception et suivi de la stratégie marketing (campagne, événements, identité visuelle) et du plan opérationnel',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Gestion du budget (20\u00A0000\u00A0000\u00A0€)',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Définition, suivi et reporting des KPI',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Négociations et partenariats',
                                        type: 'business',
                                        data: 16,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Prospection et mise en place de partenariats avec les hauts représentants de 170 pays, négociation des "big deals"',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 4,
                            logo:
                                '/logo/trade-delegation.webp',
                            dates:
                                '2012 - 2017',
                            company:
                                'Délégation Économique de Russie en France',
                            title:
                                'Directeur commercial adjoint',
                            city:
                                'Paris',
                            responsibilities:
                                [
                                    {
                                        id: 1,
                                        name: 'Gestion des opérations',
                                        type: 'business',
                                        data: 17,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Gestion des opérations de l\'équipe de 15 personnes, chargée de conseil aux cadres supérieurs des entreprises russes et françaises dans leur stratégies de développement international',
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Partenariats stratégiques',
                                        type: 'business',
                                        data: 18,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Prospection de nouveaux marchés',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Mise en place de partenariats stratégiques',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Promotion de la coopération internationale',
                                            },
                                            {
                                                icon: 'business',
                                                content: 'Définition, suivi et reporting des KPI',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Développement du réseau',
                                        type: 'business',
                                        data: 19,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Création du réseau de partenaires en France et en Russie',
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: '86 nouveaux contrats internationaux signés',
                                        type: ['business', 'success'],
                                        data: 20,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: '86 nouveaux contrats internationaux signés (PME et grands comptes) dans les secteurs variés : aviation, matériaux composites, informatique, microélectronique, grande distribution, sécurité publique, robotique, tourisme, énergie, transportation'
                                            },
                                            {
                                                icon: 'business',
                                                content: '+260% sur objectif des contrats signés (130\u00A0000\u00A0000€ au lieu de 50\u00A0000\u00A0000€)'
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: 'Lobbying interministériel',
                                        type: ['business', 'success'],
                                        data: 21,
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Lobbying réussi et signature de la stratégie de coopération franco-russe dans le domaine de l\'innovation',
                                            },
                                        ],
                                    },
                                ],
                        },
                        {
                            id: 5,
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
                                        data: 22,
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
                                        data: 23,
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
                                        data: 24,
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
                                        data: 25,
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
                            id: 6,
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
                                        data: 26,
                                        name: 'Implémentation de SAP R/3',
                                        description: [
                                            {
                                                icon: 'business',
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
                            id: 7,
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
                                        data: 27,
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
