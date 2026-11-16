// 프로젝트 데이터. 카테고리는 Robotics / Game & Software 두 가지.
// Robotics 항목은 specs(하드웨어 스펙)를 가지며 홈과 상세 페이지에서 스펙 시트로 표시된다.

export const CATEGORY = {
  ROBOTICS: 'robotics',
  GAME_SOFTWARE: 'game-software',
};

export const CATEGORIES = [
  {
    id: CATEGORY.ROBOTICS,
    label: 'Robotics',
    folder: 'Robotics',
    blurb: '하드웨어를 직접 설계하고, 시뮬레이션과 AI로 움직입니다. Physical AI로 가는 핵심 작업들입니다.',
  },
  {
    id: CATEGORY.GAME_SOFTWARE,
    label: 'Game & Software',
    folder: 'GameAndSoftware',
    blurb: '게임 엔진 기반 콘텐츠, 실시간 렌더링 시뮬레이터, 그리고 이를 받쳐주는 서버 시스템.',
  },
];

export const PROJECTS = [
  // ------------------------------------------------------------------ Robotics
  {
    id: 'neuro-arm',
    category: CATEGORY.ROBOTICS,
    title: 'Neuro Arm',
    subtitle: 'Physical AI 로봇 팔',
    description:
      'AI 학습, ROS2 통신, Unity 시뮬레이션을 통합한 5자유도 로봇 팔. 직접 제작한 3D 프린팅 하드웨어에 스테레오 카메라를 달아 실제 환경에서 데이터를 수집합니다.',
    cover: '/imgsrc/CDNResource/RobotArm_01/robot_01.jpg',
    status: 'In development',
    specs: [
      ['DOF', '5 + Gripper'],
      ['Actuator', '서보 ×6 (MG90S 등)'],
      ['Vision', 'Stereo RGB ×2 (Depth)'],
      ['Controller', 'Arduino Mega 2560'],
      ['Comm', 'ROS2 · Serial · Bluetooth'],
      ['Sim / XR', 'Unity 디지털 트윈 · Meta Quest'],
      ['AI', 'PyTorch · OpenCV'],
    ],
    stack: ['ROS2', 'Python', 'C/C++', 'C#', 'Unity', 'Meta XR', 'PyTorch', 'OpenCV', '3D Print'],
    repoLink: 'https://github.com/YoonInha/InhaPhysiAI-lab',
    routeLink: '/prgRobotArm_01',
  },
  {
    id: 'sloth',
    category: CATEGORY.ROBOTICS,
    title: 'Sloth',
    subtitle: 'ROS2 주행형 로봇 플랫폼',
    description:
      'ROS2 TurtleBot을 일부 대체하는 기본 주행 로봇 플랫폼. 상위 판단은 Raspberry Pi, 모터 제어와 센서 수집은 AVR이 맡는 2단 구조로 설계했습니다.',
    cover: '/imgsrc/CDNResource/WheeledRobot_01/mainThumb.jpg',
    status: 'In development',
    specs: [
      ['Drive', 'Wheeled'],
      ['Main CPU', 'Raspberry Pi 4'],
      ['MCU', 'ATmega128 (AVR)'],
      ['Vision', 'RGB ×1'],
      ['Comm', 'ROS2 · UART · Bluetooth'],
      ['Simulation', 'Unity (C#)'],
    ],
    stack: ['ROS2', 'Python', 'C/C++', 'C#', 'Unity', 'PyTorch', 'OpenCV'],
    repoLink: 'https://github.com/YoonInha/SlothAMR',
    routeLink: '/prgWheeledRobot_01',
  },

  // ---------------------------------------------------------- Game & Software
  {
    id: 'lumen-styler',
    category: CATEGORY.GAME_SOFTWARE,
    title: 'LumenStyler',
    subtitle: '실시간 광선추적 홈디자인 시뮬레이터',
    description: '가구와 조명을 런타임에 동적으로 불러오고, Lumen 실시간 레이트레이싱으로 즉시 편집 결과를 확인하는 시뮬레이터.',
    cover: '/imgsrc/CDNResource/LumenStyler/UnrealEditor_y5a0zU51OO.jpg',
    type: 'Simulator',
    engine: 'Unreal 5',
    stack: ['Unreal 5', 'Blueprint', 'Node.js', 'Express', 'REST API'],
    repoLink: 'https://github.com/YoonInha/LumenStyler',
    routeLink: '/prgLumenStyler',
  },
  {
    id: 'estelayer',
    category: CATEGORY.GAME_SOFTWARE,
    title: 'Estelayer',
    subtitle: '메카닉 액션 RPG',
    description: '비극적인 스토리와 반전이 있는 메카닉 액션 RPG. AAA급 퀄리티를 목표로 개발 중입니다.',
    cover: '/imgsrc/CDNResource/Estelayer/chrome_zkl0qMuY8N.jpg',
    type: 'Game',
    engine: 'Unreal 5',
    stack: ['Unreal 5', 'C++', 'Blueprint', 'Blender'],
    status: 'In development',
    repoLink: '',
    routeLink: '/prgEstelayer',
  },
  {
    id: 'download-launcher',
    category: CATEGORY.GAME_SOFTWARE,
    title: 'Download Launcher',
    subtitle: '파일 배포 런처 시스템',
    description: '유저 권한, 프로젝트, 파일을 관리하고 클라이언트가 원하는 빌드를 내려받는 전체 시스템 (어드민 · DB · 백엔드 · 클라이언트).',
    cover: '/imgsrc/CDNResource/DownloadLauncher/mainThumb.jpg',
    type: 'System',
    engine: 'Unreal',
    stack: ['Node.js', 'Redis', 'PostgreSQL', 'React', 'Unreal'],
    repoLink: '',
    routeLink: '/prgDownloadSystem',
  },
  {
    id: 'school-of-horror',
    category: CATEGORY.GAME_SOFTWARE,
    title: '학교괴담',
    subtitle: '하얀 진혼곡 · 모바일 3D 호러 어드벤처',
    description: '2D 비주얼 노벨 파트와 3D 어드벤처 파트로 진행되는 멀티 엔딩 호러 게임.',
    cover: '/imgsrc/CDNResource/SchoolOfHorror/Screenshot_20170613-051922.png',
    type: 'Mobile game',
    engine: 'Unity',
    stack: ['Unity', 'C#', 'SQLite'],
    status: 'Service ended',
    repoLink: '',
    routeLink: '/prgSchoolOfHorror',
  },
];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
export const getCategory = (id) => CATEGORIES.find((c) => c.id === id);
export const projectsIn = (categoryId) => PROJECTS.filter((p) => p.category === categoryId);
