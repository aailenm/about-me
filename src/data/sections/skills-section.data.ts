import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  relay,
  aws,
  redux,
  sqitch,
  graphQl,
  eslint,
  mongoDb,
  jest,
  angularJs,
  java,
  hibernate,
  postgreSql,
  prettier,
  react,
  docker,
  node,
  typescript,
  sequelize,
  express
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 4,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        node({ level: 4 }),
        postgreSql({ level: 4 }),
        graphQl({ level: 4 }),
        express({ level: 4 }),
        typescript({
          level: 3,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        mongoDb({ level: 2 }),
        docker({ level: 2 }),
        relay({ level: 2}), 
        jest({level: 4 }),
        aws({ level: 3 }),
        redux({ level: 3 }),
        sqitch({level: 3}),
        angularJs({ level: 2}),
        java({ level: 2 }),
        hibernate({ level: 3}),
        sequelize({level: 3}),
        prettier({ level: 5 }),
        eslint({
          level: 4        }),
      ],
    },
    {
      title: 'Tools I worked with',
      //datadog(), vsCode(), retool(), localStack(), jira(), postico(), heroku(), powerBi(), trello(), shopify(), googleAds(), facebookAds()
      skills: [ ],
    },
    {
      title: 'I want to learn',
      skills: [apolloGraphql()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:it', name: 'Italian  - A2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
