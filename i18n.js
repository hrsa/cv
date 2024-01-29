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
                            url: 'https://anton.eco/cv/fr_cv_anton_cherednichenko.pdf',
                            icon: '/download.webp',
                        },
                    ],
                    experience: 'Experience',
                    education: 'Education',
                    skills: 'Skills',
                    about: {
                        tech: {
                            title: 'Tech stack',
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
                                    description: [
                                        {
                                            icon: 'tech',
                                            content: 'Re-written and improved the CD/CI pipelines, added code quality checks and testing',
                                        },
                                    ],
                                },
                                {
                                    id: 8,
                                    name: 'Linux server administration',
                                    type: 'tech',
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
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Design and follow-up of the marketing strategy (campaign, events, visual identity) and operational plan, budget management (20 000 000 €), definition, monitoring and reporting of KPIs',
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Negotiations and partnerships',
                                        type: 'business',
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Prospection and establishment of partnerships with high-level representatives from 170 countries, "big deals" negotiation',
                                            },
                                        ],
                                    },
                                ],
                        }
                        ,
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
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Successful lobbying and signature of the Franco-Russian cooperation strategy in the innovations domain',
                                            },
                                        ],
                                    },
                                ],
                        }
                        ,
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
                        }
                        ,
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
                        }
                        ,
                        {
                            id: 7,
                            logo:
                                '/logo/uralsib.webp',
                            dates:
                                '2007 - 208',
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
                                        name: 'Business process mapping',
                                        description: [
                                            {
                                                icon: 'business',
                                                content: 'Business process mapping in the digital form (ARIS) to facilitate the integration of the ERP system',
                                            },
                                        ],
                                    },
                                ],
                        }
                        ,
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
                }
            },
            fr: {
                translation: {
                    firstname: 'George',
                    lastname:
                        'Washington',
                    // here we will place our translations...
                }
            }
        }
    })
;

export default function (app) {
    app.use(I18NextVue, {i18next})
    return app
}
