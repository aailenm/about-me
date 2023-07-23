import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  eslint,
  heroku,
  jest,
  node,
  postgreSql,
  prettier,
  react,
  redux,
  shopify,
  typescript,
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
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'Small website to sell customized balance boards. The app allows customers to choose the shape, the design and the extras to add to their purchase.',
      tagsList: {
        title: 'Technologies',
        tags: [ react()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Savorease Therapeutic Foods',
      image: import('@/assets/logos/savorease-logo.jpeg'),
      dates: [new Date('2019-11'), null],
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
        `Savorease Therapeutic Foods is a food manufacturer start-up of savory crackers for people with dysphagia, feeding pediatric disorders, and babies transitioning to solid foods. The projects I work on involve the following tasks:  
        - E-commerce development and mantainance (on Shopify)
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
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description:
        'Website to explain quantum therapy and contact one',
      tagsList: {
        title: 'Technologies',
        tags: [react(), node(), heroku()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
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
        { label: 'Demo', value: '', url: '#' },
      ],
      description:
        `Internal tool used to present topics where participants can discuss, react using their mobile or computer
        Main features I worked on: 
        - Topic presentation, discussion room, and management, reaction charts (Full-stack development)
        - Pipeline, Deploy, Review apps
        Other tasks: 
        - Part of the Product discovery, Kick-off, and MVP Technical planning
        - The tool was used as an internal product for the apprenticeship program. I participated as Product owner and Technical Leader.
        `,
      tagsList: {
        title: 'Technologies',
        tags: [node(), jest(), react(), redux(), postgreSql()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
