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
  role: 'Senior Software Engineer',
  details: [
    { label: 'Email', value: 'ailenmunozz@gmail.com', url: 'mailto:ailenmunozz@gmail.com' },
    { label: 'From', value: 'Buenos Aires, Argentina' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'ailenmunozz@gmail.com' },
    { label: 'LinkedIn', value: '/in/ailenm', url: 'https://www.linkedin.com' },
    { label: 'GitHub', value: '/aailenm', url: 'https://github.com' },
    { label: 'Website', value: 'ailenmunoz.com', url: '/', fullRow: true },
  ],
  description: `I’m a Full Stack Software Engineer with strong experience in designing and building scalable web applications, backend integrations, and modern APIs. My background includes working across startups and mature product teams, consistently delivering high-impact solutions. I thrive in collaborative environments, enjoy solving real-world problems with clean code, and bring a product-oriented mindset to every team I join.`,
  tags: [],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ailen_Munoz.pdf',
  },
  links: [github({ url: 'https://github.com/aailenm' }), linkedin({ url: 'https://www.linkedin.com/in/ailenm' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
