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
    // imgSrc: 'https://drive.google.com/uc?export=view&id=1DU6rb8CaZ5Nhhc85n67E_Jgm4tc47vWf',
    imgSrc: '/imgsrc/CDNResource/SchoolOfHorror/Screenshot_20170613-051922.png',
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
    imgSrc: '/imgsrc/CDNResource/Estelayer/eeeee.jpg',
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
    imgSrc: '/imgsrc/CDNResource/LumenStyler/UnrealEditor_y5a0zU51OO.jpg',
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
  {
    imgSrc: '/imgsrc/CDNResource/DownloadLauncher/mainThumb.jpg',
    title: 'Download Launcher System',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unreal'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C++'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `다운로드 런처 시스템 (어드민, DB, 백엔드, 클라이언트)`,
    repoLink: '',
    sourceLink: '',
    routeLink: '/prgDownloadSystem',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/imgsrc/CDNResource/WheeledRobot_01/mainThumb.jpg',
    title: 'wheeled robot',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unreal'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C++'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `ROS2 연동 확장성이 있는 주행형 로봇 플랫폼`,
    repoLink: 'https://github.com/YoonInha/InhaPhysiAI-lab',
    sourceLink: '',
    routeLink: '/prgWheeledRobot_01',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/imgsrc/CDNResource/RobotArm_01/robot_01.jpg',
    title: 'Robot arm',
    techIcons: [
      getSkillByLabel(ThreeDimention_SKILLS, 'Unreal'),
      getSkillByLabel(ThreeDimention_SKILLS, 'C++'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `Physical AI 로봇 팔 프로젝트`,
    repoLink: 'https://github.com/YoonInha/LumenStyler',
    sourceLink: '',
    routeLink: '/prgRobotArm_01',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
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
