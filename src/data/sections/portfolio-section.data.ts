import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, repository, website } from '../helpers/links';
import {
  heroku,
  jest,
  node,
  postgreSql,
  react,
  redux,
  shopify,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Savorease Therapeutic Foods',
      image: import('@/assets/logos/savorease-logo.jpeg'),
      dates: [new Date('2021-11'), null],
      details: [
        { label: 'Team size', value: '6 people' },
        { label: 'My role', value: ['Shopify Developer', 'Community Manager', 'Marketing'] },
        { label: 'Company', value: 'Savorease Therapeutic Foods' },
        { label: 'Category', value: ['Web app', 'Marketing'] },
      ],
      pdfDetails: [
        { label: 'Live web', value: 'https://savorease.com/', url: 'https://savorease.com/' },
        { label: 'LinkedIn', value: 'https://www.linkedin.com/company/savorease/', url: 'https://www.linkedin.com/company/savorease/' },
      ],
      description:
        `Savorease Therapeutic Foods is a food manufacturer start-up specializing in savory crackers for people with dysphagia, feeding pediatric disorders, and babies transitioning to solid foods. The projects I work on involve the following tasks:
        - E-commerce development and maintenance (on Shopify)
        - Email automations
        - Marketing campaigns
        - Community Manager
        - Ad campaigns

        Tools: Google Ads, Meta Ads, Instagram, Facebook, LinkedIn, Twitter, Canva, Shopify, Freshworks, Pagefly
  `,
      tagsList: {
        title: 'Technologies',
        tags: [shopify()],
      },
      links: [website({ url: 'https://savorease.com/' })],
    },
    {
      name: 'Andrea Terapeuta',
      image: import('@/assets/logos/andrea-terapeuta-logo.png'),
      dates: [new Date('2023-07'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Full stack Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://andrea-terapeuta-q2ej.vercel.app/', url: 'https://andrea-terapeuta-q2ej.vercel.app/' },
        { label: 'Repository', value: 'https://github.com/aailenm/andrea-terapeuta', url: 'https://github.com/aailenm/andrea-terapeuta' },
      ],
      description:
        'Website to introduce quantum therapy',
      tagsList: {
        title: 'Technologies',
        tags: [react(), node(), heroku()],
      },
      links: [website({ url: 'https://andrea-terapeuta-q2ej.vercel.app' }), github({ url: 'https://github.com/aailenm/andrea-terapeuta' })],
    },
    {
      name: 'Moke Boards',
      image: import('@/assets/logos/moke-logo.jpg'),
      dates: [new Date('2020-07'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Full Stack Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: '', url: '#' },
        { label: 'Repository', value: 'https://github.com/aailenm/moke-boards', url: 'https://github.com/aailenm/moke-boards' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'A small website selling customized balance boards. The app allows customers to choose the shape, design, and extras to add to their purchase.',
      tagsList: {
        title: 'Technologies',
        tags: [ react()],
      },
      links: [repository({ url: 'https://github.com/aailenm/moke-boards' }), demo({ url: '#' })],
    },
    {
      name: 'Ruth',
      image: import('@/assets/logos/10Pines-logo.png'),
      dates: [new Date('2019-09'), new Date('2020-05')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: 'Backend developer' },
        { label: 'Company', value: '10Pines' },
        { label: 'Category', value: ['Mobile app', 'Web app'] },
      ],
      pdfDetails: [
        { label: 'Mockups', value: '', url: '#' },
      ],
      description:
        `An internal tool designed for presenting topics, allowing participants to engage in discussions and reactions using their mobile or computer.
        Main features I worked on: 
        - Full-stack development for topic presentation, discussion rooms, and management, as well as reaction charts.
        - Implemented pipeline, deployment, and review apps.
        Other tasks: 
        - Played a key role in product discovery, kick-off, and MVP technical planning.
        - Acted as Product Owner and Technical Leader for the tool, which served as an internal product for the apprenticeship program        `,
      tagsList: {
        title: 'Technologies',
        tags: [node(), jest(), react(), redux(), postgreSql()],
      },
      links: [mockups({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
