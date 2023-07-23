import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Trainings',
    slug: 'trainings',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/testimonial-1.jpeg'),
      author: 'TDD & Advanced TDD',
      relation: '10Pines',
      content:
        'In nec mattis sem. Morbi purus lorem, euismod ac varius at, aliquet vitae augue. Pellentesque ut facilisis felis. In sed dui blandit, aliquet odio eu, elementum leo. In facilisis dapibus tortor ac volutpat. Cras cursus nec odio maximus elementum.',
      links: [github({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      image: import('@/assets/testimonials/testimonial-2.jpeg'),
      author: 'Basic Object Patterns & Advanced Object Patterns',
      relation: '10Pines',
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
      links: [linkedin({ url: '#' })],
    },
    {
      image: import('@/assets/testimonials/testimonial-3.jpeg'),
      author: 'Ethical Hacking',
      relation: 'EducacionIT',
      content:
        'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.',
      links: [github({ url: '#' }), website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
