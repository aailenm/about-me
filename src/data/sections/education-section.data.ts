import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Software Engineer',
      institution: 'National Technological University',
      image: import('@/assets/logos/utn-logo.jpg'),
      dates: [new Date('2014.03'), new Date('2019.08')],
      description: 'Master degree. Specialization in software development.',
      links: [website({ url: 'https://www4.frm.utn.edu.ar/ingenieria-en-sistemas-informacion/' })],
    },
    {
      title: 'High School in Human Science',
      institution: 'Holy Face Institute',
      image: import('@/assets/logos/santa-faz-logo.png'),
      dates: [new Date('2008.03'), new Date('2013.12')],
      description: "Bachelor's degree. Specialization in human science.",
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
