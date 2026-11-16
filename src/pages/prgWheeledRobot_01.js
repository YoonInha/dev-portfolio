import React from 'react';
import ProjectPage, { Figure } from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const IMG = '/imgsrc/CDNResource/WheeledRobot_01';

const overview = `
  나무늘보(Sloth)는 ROS2의 TurtleBot을 일부 대체하는 기본 주행 봇 플랫폼 프로젝트입니다.

  ## 프로젝트 구성 요소

  ### Sloth Core
  - ROS2 기반 통신 및 시스템 아키텍처
  - PyTorch 및 OpenCV를 활용한 딥러닝 인터페이스
  - 카메라 기반 거리 인식 및 영상 처리

  ### Sloth HW
  - 바퀴를 이용한 주행 로봇 (로봇 팔 또는 집게 추가 예정)
  - 이미지 전송, 각 운동 모듈 제어 등 중추 신경에 해당하는 processor unit은 Raspberry Pi, 모터 제어나 단순 센서 수집 등 말초 신경에 해당하는 processor unit은 AVR 계열 사용
  - 1대의 RGB 카메라 사용 (추후 depth camera 적용 예정)
  - 포맥스와 알루미늄을 이용한 mock-up 제작 (3D 프린트로 대체 예정)

  ### Sloth Ops
  - Unity 엔진 기반 가상 환경 시뮬레이션 및 데이터 수집
  - 실제 하드웨어와 연결되는 원격 제어 및 테스트 환경
`;

const stack = `
  ## 개발 환경 및 기술 스택

  | 분류 | 기술 |
  |------|------|
  | 하드웨어 | Raspberry Pi 4, ATmega128 board (or Arduino), 커스텀 보드, 3D 프린터 |
  | 언어 | C, C++, C#, Python |
  | 통신 및 제어 | ROS2, Serial (UART), Bluetooth |
  | 시뮬레이션, 수동 컨트롤 | Unity (C#) |
  | AI/비전 | OpenCV, PyTorch |

  ## 향후 계획

  - 강화학습 기반 로봇 목표 지향 지능 부여
  - Tesla 방식 모노 RGB 카메라를 통한 공간 인식
  - Unity 시뮬레이터 ↔ ROS2 연동 가속화

  > 이 프로젝트는 단순한 로봇 제어가 아니라, **AI + Vision + Simulation**이 융합된 지능형 물리 AI의 출발점입니다.
`;

export default function PrgWheeledRobot01() {
  return (
    <ProjectPage projectId="sloth" hero={`${IMG}/005.jpg`}>
      <Markdown>{overview}</Markdown>
      <Figure src={`${IMG}/wheelAni_01.gif`} caption="Remote control movement and live view from the robot's camera" />
      <Markdown>{stack}</Markdown>
    </ProjectPage>
  );
}
