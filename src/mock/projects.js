import { BACKEND_DESCRIPTIONS, BACKEND_SKILLS, FRONTEND_SKILLS, ThreeDimention_SKILLS } from './tech-skills';
import Image from 'next/image';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://drive.google.com/uc?export=view&id=1DU6rb8CaZ5Nhhc85n67E_Jgm4tc47vWf',
    title: '학교괴담 (하얀 진혼곡)',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unity'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C#'),
      getSkillByLabel(BACKEND_SKILLS, 'SQLite'),
    ],
    description: `모바일용 3D 호러 어드벤처 게임`,
    repoLink: '',
    sourceLink: '',
    routeLink: '/prgSchoolOfHorror',
    category: [PROJECT_CATEGORY.ALL],
  },
  {
    imgSrc: 'https://drive.google.com/uc?export=view&id=1XAAafM9Zwn8kpG5qjURrL_PnHG8ONH6B',
    title: 'Estelayer',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unreal'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C++'),
    ],
    description: `메카닉 액션 RPG`,
    repoLink: '',
    sourceLink: '',
    routeLink: '/prgEstelayer',
    category: [PROJECT_CATEGORY.ALL],
  },
  {
    imgSrc: 'https://drive.google.com/uc?export=view&id=1OaWjiVhO17oxH9v7tkkaGGIQrh54_-Bc',
    title: 'LumenStyler',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unreal'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C++'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `가구 및 조명의 동적 로딩이 가능한, 실시간 광선추적 홈디자인 시뮬레이터`,
    repoLink: 'https://github.com/YoonInha/LumenStyler',
    sourceLink: '',
    routeLink: '/prgLumenStyler',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  // {
  //   imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
  //   title: 'Acteria.com - Security Compliance Tool',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     // getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
  //     // getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
  //     getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
  //     // getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
  //   ],
  //   description: `Unified Regulations Simplified Compliance tool. Acteria Strengthens the Governance Over Regulations, And Helps Organizations Achieve Compliance Easily.`,
  //   repoLink: '',
  //   sourceLink: 'https://acteria.com',
  //   category: [PROJECT_CATEGORY.FULL_STACK],
  // },
  // {
  //   imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
  //   title: 'Flipkart Clone - E-Commerce Project',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     // getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
  //     // getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
  //     getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
  //     // getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
  //   ],
  //   description:
  //     'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It is build with React Js, Node Js.',
  //   repoLink: 'https://github.com/dhavalCode/flipkart-clone',
  //   sourceLink: 'https://flipkart-web.vercel.app/',
  //   category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  // },
  // {
  //   imgSrc: 'https://images2.imgbox.com/b5/bb/6f5g9QBE_o.png',
  //   title: 'Developer Portfolio',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
  //   ],
  //   description:
  //     'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
  //   repoLink: 'https://github.com/dhavalCode/dev-portfolio',
  //   sourceLink: 'https://dhavalcode.com/',
  //   category: [PROJECT_CATEGORY.OPEN_SOURCE],
  // },
  // {
  //   imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
  //   title: 'Kitchen Store  - E-Commerce',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
  //     // getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
  //     {
  //       label: 'Java',
  //       icon: 'logos:java',
  //     },
  //     // getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
  //   ],
  //   description:
  //     'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
  //   repoLink: 'https://github.com/dhavalcode/ecommerce-java-project',
  //   sourceLink: '',
  //   category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  // },

  // {
  //   imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
  //   title: 'Netflix Clone - TMDB API Project',
  //   techIcons: [
  //     getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
  //     getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
  //     getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
  //   ],
  //   description: 'Netflix clone using react Js. Proving movies details using TMDB API.',
  //   repoLink: 'https://github.com/dhavalcode/netflix-clone',
  //   sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
  //   category: [PROJECT_CATEGORY.OPEN_SOURCE],
  // },
  {
    imgSrc: '/overview.jpg',
    title: 'Portfolio page',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Github'),
      getSkillByLabel(BACKEND_SKILLS, 'Vercel'),
    ],
    description: 'portfolio using react Js.',
    repoLink: '',
    sourceLink: '',
    routeLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
