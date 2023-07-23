import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website, } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  python,
  node,
  postgreSql,
  relay,
  graphQl,
  jest,
  sequelize,
  aws,
  redux,
  angularJs,
  java,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Semi-Senior full-stack developer',
      company: 'Grow BI',
      image: import('@/assets/logos/grow-logo.jpeg'),
      dates: [new Date('2022-03'), new Date('2022-09')],
      description: `
      Grow is a no-code full-stack business intelligence (BI) platform. I was part of the Integrations team. Main features I worked on: 
      - New integrations with CRMs and Social Media platforms
      - Maintenance of Integrations. 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), node(), postgreSql()],
      },
      links: [website({ url: 'https://www.grow.com/' }), linkedin({ url: 'https://www.linkedin.com/company/grow-dashboards/' })],
    },
    {
      role: 'Semi-senior full-stack developer',
      company: 'Lattice HR (as a 10Pines contractor)',
      image: import('@/assets/logos/lattice-logo.png'),
      dates: [new Date('2019-12'), new Date('2022-03')],
      description: `
      Lattice is a people management platform to create high-performing and committed teams.
      Main features I worked on: 
      - Re-architecture of "Demo & Trial accounts creation"
      - OAuth server 
      - MS Teams integration (Lattice bot), Personio and Gusto integrations to import users into Lattice
      - SCIM standard implementation
      - Custom attributes import from HRIS platforms
      - ADP integration to import users into Lattice.
      - Other tasks: 
      - Complex project planning and execution, which requires coordination with other teams
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), relay(), graphQl(), node(), typescript(), jest(), sequelize(), postgreSql(), aws()],
      },
      links: [website({ url: 'https://lattice.com/' }), linkedin({ url: 'https://www.linkedin.com/company/lattice-hq/' })],
    },
    {
      role: 'Junior front-end developer',
      company: 'Gloud (as a 10Pines contractor)',
      image: import('@/assets/logos/gloud-logo.jpeg'),
      dates: [new Date('2018-10'), new Date('2019-08')],
      description: `
      Turner Digital Media’s cloud gaming platform. Multitenant Gaming client.
      Main features I worked on: 
      - Support multiple profiles
      - Subscription management (Integrations w/ Vindicia and Personal) 
      - Website embedded on a desktop client. Front-end development of login, catalog, search, categories, and multiple profiles. Support and synchronization of keyboard and gamepad input eventd
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), redux(), angularJs(), java(), aws()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Full-stack developer',
      company: 'Savorease',
      image: import('@/assets/logos/savorease-logo.jpeg'),
      dates: [new Date('2021-11'), null],
      description: `
      Savorease Therapeutic Foods is a food manufacturer start-up of savory crackers for people with dysphagia, feeding pediatric disorders, and babies transitioning to solid foods. The projects I work on involve the following tasks:  
      - E-commerce development and mantainance (on Shopify)
      - Email automations
      - Marketing campaigns 
      - Community Manager
      - Ad campaigns
      
      Tools: Google Ads, Meta Ads, Instagram, Facebook, LinkedIn, Twitter, Canva, Shopify, Freshworks, Pagefly
      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [website({ url: 'https://savorease.com/' }), linkedin({ url: 'https://www.linkedin.com/company/savorease/' })],
    },
    {
      role: 'Trainee full stack developer',
      company: '10Pines',
      image: import('@/assets/logos/10Pines-logo.png'),
      dates: [new Date('2018-07'), new Date('2022-02')],
      description: `
      10Pines is a company that provides software development services. Given its horizontal organizational structure, I worked for external clients as well as internal tools and internal management areas of the company. You'll find the projects I worked below
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'BI Analyst and developer',
      company: 'General Directorate of Justice',
      image: import('@/assets/logos/pj-logo.jpg'),
      dates: [new Date('2017-08'), new Date('2018-06')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'BI Analyst and developer',
      company: 'National Tecnological University',
      image: import('@/assets/logos/utn-logo.jpg'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), tailwindCss(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'CX Support',
      company: 'Lambda',
      image: import('@/assets/logos/lambda-logo.png'),
      dates: [new Date('2015-07'), new Date('2016-07')],
      description: `
        Library management software:
       
        Main tasks I worked on: 
        - Customer support of Fierro software.
        - Website mantainance
        - Invoice template design

      `,
      tagsList: {
        title: 'Technologies',
        tags: [python()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
