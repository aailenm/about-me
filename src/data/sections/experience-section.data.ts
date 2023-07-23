import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter, website, } from '../helpers/links';
import {
  react,
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
  docker,
  javascript,
  pentaho,
  sqlServer,
  sisspack,
  powerbi,
  ember,
  hibernate,
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
        tags: [react(), node(), postgreSql(), docker()],
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
      links: [],
    },
    {
      role: 'Trainee full stack developer',
      company: '10Pines',
      image: import('@/assets/logos/10Pines-logo.png'),
      dates: [new Date('2018-07'), new Date('2022-02')],
      description: `
      10Pines is a company that provides software development services. Given its horizontal organizational structure, I worked for external clients as well as internal tools and internal management areas of the company. During the first three months, I worked on a internship and contributed to an internal tool: 
      Roots votation: An application that is used to propose, vote, and get action items about 10Pines decision topics. Main features I worked on: 
      - Application redesign
      - Topics reproposal and classification
      - Email notifications
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ember(), java(), hibernate(), postgreSql()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'BI Analyst and developer',
      company: 'General Directorate of Justice',
      image: import('@/assets/logos/pj-logo.jpg'),
      dates: [new Date('2017-08'), new Date('2018-06')],
      description: `
      A system used to clean and analyze social media and telephone data
      Tasks
      - Reports about timing and workflow of the area
      - Macros y ETLs to extract and clean data provided for external services
      - Request, process, and analysis of provided data 
      Technologies: SSIS Package, Tools: Maltego, Excel, Microsoft SQL Server, PowerBI.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [sisspack(), sqlServer(), powerbi()],
      },
      links: [],
    },
    {
      role: 'BI Analyst and developer',
      company: 'National Tecnological University',
      image: import('@/assets/logos/utn-logo.jpg'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
      University internal area
      Tasks
      - Reports about aspirants, students, deserter and graduated people
      - Reports about timing and workflow on solving different types of university internal paperwork.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [javascript(), sqlServer(), pentaho(), sisspack()],
      },
      links: [],
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
