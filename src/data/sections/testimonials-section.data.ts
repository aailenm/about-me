import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Trainings',
    slug: 'trainings',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/logos/10pines-logo.png'),
      author: 'TDD & Advanced TDD',
      relation: '10Pines',
      content:
        'March 2020 - April 2020',
      links: [website({ url: 'https://academia.10pines.com/courses/198-test-driven-development-avanzado' })],
    },
    {
      image: import('@/assets/logos/10pines-logo.png'),
      author: 'Design Patterns II',
      relation: '10Pines',
      content:
        'October 2019',
      links: [website({ url: 'https://academia.10pines.com/courses/199-diseno-avanzado-de-software-con-objetos-ii' })],
    },
    {
      image: import('@/assets/logos/10pines-logo.png'),
      author: 'Design Patterns I',
      relation: '10Pines',
      content:
        'August 2019',
      links: [website({ url: 'https://academia.10pines.com/courses/197-diseno-avanzado-de-software-con-objetos-i' })],
    },
    {
      image: import('@/assets/logos/educacion-it-logo.jpeg'),
      author: 'Ethical Hacking',
      relation: 'EducacionIT',
      content:
        'March 2018',
      links: [website({ url: 'https://www.educacionit.com/curso-de-ethical-hacking' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
