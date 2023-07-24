import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter, website, } from '../helpers/links';
import {
  react,
  typescript,
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
  express,
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
      role: 'Semi-Senior Full Stack Developer',
      company: 'Grow BI',
      image: import('@/assets/logos/grow-logo.jpeg'),
      dates: [new Date('2022-03'), new Date('2022-09')],
      description: `
      Grow is a no-code full-stack business intelligence (BI) platform. As part of the Integrations team at Grow, I contributed to the following main features:
      - New integrations with CRMs and Social Media platforms through REST APIs.
      - Maintenance of existing integrations.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), node(), jest(), postgreSql(), express(), docker()],
      },
      links: [website({ url: 'https://www.grow.com/' }), linkedin({ url: 'https://www.linkedin.com/company/grow-dashboards/' })],
    },
    {
      role: 'Semi-Senior Full Stack Developer',
      company: 'Lattice HR (as a 10Pines contractor)',
      image: import('@/assets/logos/lattice-logo.png'),
      dates: [new Date('2019-12'), new Date('2022-03')],
      description: `
      At Lattice, a people management platform focused on creating high-performing teams, I contributed to the following projects:
      - Re-architecture of "Demo & Trial accounts creation": Conducted research, planned, and implemented the re-architecture of the tool used for sales. This tool creates accounts with up-to-date data and charts for product demonstrations to potential customers.
      - HRIS Integrations: Researched, planned, and implemented APIs to integrate with third-party platforms like Personio, Gusto, ADP, Rippling, and Zenefits. These integrations enabled the import of user data.
      - Courier Integration & Migration: Consolidated all notifications to be sent through Courier, a platform used to send notifications through different channels.
      - MS Teams Bot: Conducted research, planned, and implemented a bot to send notifications through MS Teams. The goal was to deliver updates on upcoming meetings, goals, or action items to every user within a company.
      - Notification Management: Developed a feature that allows admin users and end users to customize their notification channel preferences.
      - Slack: Migrated to the new version to ensure seamless continued delivery of Slack notifications.
      - SCIM: Developed a REST API following the SCIM standard, enabling third parties to export Lattice user data.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), relay(), graphQl(), node(), express(), typescript(), jest(), sequelize(), postgreSql(), aws()],
      },
      links: [website({ url: 'https://lattice.com/' }), linkedin({ url: 'https://www.linkedin.com/company/lattice-hq/' })],
    },
    {
      role: 'Junior Front End Developer',
      company: 'Gloud (as a 10Pines contractor)',
      image: import('@/assets/logos/gloud-logo.jpeg'),
      dates: [new Date('2018-10'), new Date('2019-08')],
      description: `
      Turner Digital Media's cloud gaming platform allowed users to play games in the cloud. During the project, I worked on the following tasks:
      - Support of multiple profiles: Created, updated, and deleted profiles to enhance user customization.
      - Subscription management: Integrated with Vindicia and Personal for billing purposes, ensuring seamless subscription handling.
      - New design of the website embedded on a desktop client: Led the front-end development of login, catalog, search, categories, and multiple profiles to enhance user experience.
      - Support and synchronization of keyboard and gamepad input events: Ensured smooth and responsive gaming experiences by handling input events effectively.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), redux(), angularJs(), java(), aws(), jest()],
      },
      links: [],
    },
    {
      role: 'Trainee Full Stack Developer',
      company: '10Pines',
      image: import('@/assets/logos/10Pines-logo.png'),
      dates: [new Date('2018-07'), new Date('2018-10')],
      description: `
      10Pines is a company that provides software development services. Due to its horizontal organizational structure, I had the opportunity to work with both external clients and internal tools, contributing to various management areas of the company, such as environment impact and recruiting. During the first three months, I participated in an internship and made contributions to an internal tool called 'Roots Votation.' This application is used to propose, vote, and manage action items related to 10Pines' decision topics. Main features I worked on include:
      - Application redesign
      - Topics reproposal and classification
      - Email notifications: Integration with Sendgrid
      `,
      tagsList: {
        title: 'Technologies',
        tags: [ember(), java(), hibernate(), postgreSql()],
      },
      links: [website({ url: 'https://www.10pines.com/' })],
    },
    {
      role: 'BI Analyst and Developer',
      company: 'General Directorate of Justice',
      image: import('@/assets/logos/pj-logo.jpg'),
      dates: [new Date('2017-08'), new Date('2018-06')],
      description: `
      A system used to clean and analyze social media and mobile-related data. Tasks:
      - Generating reports about the timing and workflow of the area.
      - Developing Excel Macros and ETLs to extract and clean data provided for third parties.
      - Requesting, processing, and analyzing provided data.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [sisspack(), sqlServer(), powerbi()],
      },
      links: [],
    },
    {
      role: 'BI Analyst and Developer',
      company: 'National Tecnological University',
      image: import('@/assets/logos/utn-logo.jpg'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
      University internal area. Tasks I worked on:
      - Generating reports about aspirants, students, dropouts, and graduates.
      - Preparing reports on timing and workflow for resolving various types of university internal paperwork.
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
      Library management software. Main tasks I worked on:
      - Customer support for Fierro software.
      - Website maintenance
      - Invoice template design
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python()],
      },
      links: [website({ url: 'https://www.lambdasi.com.ar/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
