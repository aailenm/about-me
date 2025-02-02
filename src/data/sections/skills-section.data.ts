import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  relay,
  aws,
  redux,
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
  express,
  datadog,
  vscode,
  retool,
  jira,
  heroku,
  trello,
  shopify,
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
      title: `Technologies I've used`,
      skills: [
        react({
          level: 4,
        }),
        node({ level: 4 }),
        postgreSql({ level: 4 }),
        graphQl({ level: 4 }),
        express({ level: 4 }),
        typescript({
          level: 3,
        }),
        jest({ level: 4 }),

        aws({ level: 3, description: 'Services: SQS, SNS, Lambdas, S3' }),
        redux({ level: 3 }),
        java({ level: 3 }),
        mongoDb({ level: 2 }),
        docker({ level: 2 }),
        relay({ level: 2 }),
        angularJs({ level: 2 }),
        hibernate({ level: 3 }),
        sequelize({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
        }),
      ],
    },
    {
      title: `Tools I've worked with`,
      skills: [datadog(), vscode(), retool(), jira(), heroku(), trello(), shopify()],
    },
    {
      title: 'Languages I manage',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:it', name: 'Italian  - A2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
