import { SkillLevel } from '@prisma/client';

export const initialSkills = [
  { name: 'JavaScript', level: SkillLevel.INTERMEDIATE },
  { name: 'HTML', level: SkillLevel.INTERMEDIATE },
  { name: 'Node.js', level: SkillLevel.INTERMEDIATE },
  { name: 'MongoDB', level: SkillLevel.INTERMEDIATE },
  { name: 'TypeScript', level: SkillLevel.INTERMEDIATE },
  { name: 'CSS3', level: SkillLevel.INTERMEDIATE },
  { name: 'Git', level: SkillLevel.INTERMEDIATE },
  { name: 'React', level: SkillLevel.INTERMEDIATE },
  { name: 'Vue3', level: SkillLevel.INTERMEDIATE },
  { name: 'MySQL', level: SkillLevel.BASIC },
  { name: 'Docker Compose', level: SkillLevel.BASIC },
  { name: 'NestJS', level: SkillLevel.INTERMEDIATE },
  { name: 'Prisma', level: SkillLevel.INTERMEDIATE },
  { name: 'GraphQL', level: SkillLevel.INTERMEDIATE },
];

export const initialExperience = [
  {
    company: 'Alt Studio',
    position: 'Programmer',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2025-07-31'),
    achievements: [
      'Разработка и поддержка веб-приложений',
      'Работа с клиентской и серверной частью приложений',
      'Интеграция сторонних сервисов и API',
    ],
  },
];

export const initialProjects = [
  {
    name: 'Yandex Map',
    url: 'https://github.com/1MaXmEd1/Yandex-Map',
  },
  {
    name: 'Digital Business Card',
    url: 'https://github.com/1MaXmEd1/digital-business-card',
  },
];
