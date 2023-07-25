import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/me.jpeg'),
  fullName: 'Ailén Magalí Muñoz',
  role: 'Senior Full Stack Developer',
  details: [
    { label: 'Phone', value: '+54 11 6593 2228', url: 'tel:+541165932228' },
    { label: 'Email', value: 'ailenmunozz@gmail.com', url: 'mailto:ailenmunozz@gmail.com' },
    { label: 'From', value: 'Buenos Aires, Argentina' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+54 11 6593 2228' },
    { label: 'Email', value: 'ailenmunozz@gmail.com' },
    { label: 'LinkedIn', value: '/in/ailenm', url: 'https://www.linkedin.com' },
    { label: 'GitHub', value: '/aailenm', url: 'https://github.com' },
    { label: 'Website', value: 'ailenmunoz.com', url: '/', fullRow: true },
  ],
  description:
    `I am a software engineer, graduated in 2019, dedicated to full-stack development with a specialization in backend integrations with third-party systems using Node.js. My primary motivators are projects with a social/environmental impact, when possible, fostering cooperative teamwork, and overseeing end-to-end project management - from technical planning to release.`,
  tags: [{ name: 'Open for freelance' }, { name: 'Open for relocation (UE Passport)' }, { name: 'Open to work remotely' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ailen_Munoz.pdf',
  },
  links: [github({ url: 'https://github.com/aailenm' }), linkedin({ url: 'https://www.linkedin.com/in/ailenm' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
