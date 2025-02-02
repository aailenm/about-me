import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const node = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#003f8c',
  url: 'https://nodejs.org/',
});

export const graphQl = createSkillFactory({
  name: 'GraphQL',
  icon: 'simple-icons:graphql',
  iconColor: '#f6009c',
  url: 'https://graphql.org/',
});

export const relay = createSkillFactory({
  name: 'Relay',
  icon: 'simple-icons:relay',
  iconColor: '#f26b00',
  url: 'https://relay.dev/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#232F3E',
  url: 'https://aws.amazon.com/es/',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

export const angularJs = createSkillFactory({
  name: 'AngularJS',
  icon: 'simple-icons:angularjs',
  iconColor: '#E23237',
  url: 'https://angularjs.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:java',
  iconColor: '#3a75b0',
  url: 'https://www.java.com/es/',
});

export const hibernate = createSkillFactory({
  name: 'Hibernate',
  icon: 'simple-icons:hibernate',
  iconColor: '#59666C',
  url: 'https://hibernate.org/',
});

export const sequelize = createSkillFactory({
  name: 'Sequelize',
  icon: 'simple-icons:sequelize',
  iconColor: '#52B0E7',
  url: 'https://sequelize.org/',
});

export const express = createSkillFactory({
  name: 'Express',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const prisma = createSkillFactory({
  name: 'Prisma',
  icon: 'simple-icons:prisma',
  iconColor: '#2D3748',
  url: 'https://www.prisma.io/',
});

export const grafana = createSkillFactory({
  name: 'Grafana',
  icon: 'simple-icons:grafana',
  iconColor: '#F46800',
  url: 'https://grafana.com/',
});

export const fastify = createSkillFactory({
  name: 'Fastify',
  icon: 'simple-icons:fastify',
  iconColor: '#000000',
  url: 'https://fastify.dev/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#FF4438',
  url: 'https://redis.io/',
});

/** Tools */

export const datagrip = createSkillFactory({
  name: 'DataGrip',
  icon: 'simple-icons:datagrip',
  iconColor: '#000000',
  url: 'https://www.jetbrains.com/datagrip/',
});

export const intellij = createSkillFactory({
  name: 'IntelliJ',
  icon: 'simple-icons:intellijidea',
  iconColor: '#000000',
  url: 'https://www.jetbrains.com/datagrip/',
});

export const vscode = createSkillFactory({
  name: 'VS Code',
  icon: 'simple-icons:visualstudiocode',
  iconColor: '#007ACC',
  url: 'https://code.visualstudio.com/',
});

export const datadog = createSkillFactory({
  name: 'Datadog',
  icon: 'simple-icons:datadog',
  iconColor: '#632CA6',
  url: 'https://www.datadoghq.com/',
});

export const retool = createSkillFactory({
  name: 'Retool',
  // @ts-expect-error
  icon: 'simple-icons:retool',
  iconColor: '#3776AB',
  url: 'https://retool.com/',
});

export const sisspack = createSkillFactory({
  name: 'SSIS',
  // @ts-expect-error
  icon: 'simple-icons:ssis',
  iconColor: '#3776AB',
  url: 'https://learn.microsoft.com/en-us/sql/integration-services/integration-services-ssis-projects-and-solutions?view=sql-server-ver16',
});

export const localstack = createSkillFactory({
  name: 'LocalStack',
  // @ts-expect-error
  icon: 'simple-icons:localstack',
  iconColor: '#3776AB',
  url: 'https://localstack.cloud/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#0052CC',
  url: 'https://www.atlassian.com/software/jira',
});

export const heroku = createSkillFactory({
  name: 'Heroku',
  icon: 'simple-icons:heroku',
  iconColor: '#430098',
  url: 'https://dashboard.heroku.com/',
});

export const trello = createSkillFactory({
  name: 'Trello',
  icon: 'simple-icons:trello',
  iconColor: '#0052CC',
  url: 'www.trello.com',
});

export const shopify = createSkillFactory({
  name: 'Shopify',
  icon: 'simple-icons:shopify',
  iconColor: '#7AB55C',
  url: 'www.shopify.com',
});

export const javascript = createSkillFactory({
  name: 'Javascript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://lenguajejs.com/javascript/',
});

export const pentaho = createSkillFactory({
  name: 'Pentaho',
  // @ts-expect-error
  icon: 'simple-icons:pentaho',
  iconColor: '#F7DF1E',
  url: 'www.pentaho.com',
});

export const sqlServer = createSkillFactory({
  name: 'SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'www.pentaho.com',
});

export const powerbi = createSkillFactory({
  name: 'PowerBI',
  icon: 'simple-icons:powerbi',
  iconColor: '#F2C811',
  url: 'www.pentaho.com',
});

export const ember = createSkillFactory({
  name: 'Ember.js',
  icon: 'simple-icons:emberdotjs',
  iconColor: '#E04E39',
  url: 'https://emberjs.com/',
});
