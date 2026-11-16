import React from 'react';
import ProjectPage, { Figure, FigureRow, KeyFacts, PartTitle } from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const IMG = '/imgsrc/CDNResource/RobotArm_01';

const intro = `
  Neuro Arm은 단순한 하드웨어 제어를 넘어서, **AI 기반 학습**과 **ROS2 통신**, 그리고 **Unity 기반 시뮬레이션**을 통합한 로봇 팔 프로젝트입니다.
  직접 제작한 3D 프린팅 하드웨어에 센서와 카메라를 장착하여, 실제 물리 환경 속에서 데이터를 수집하고 처리할 수 있도록 설계했습니다.

  프로젝트는 세 부분으로 나뉩니다.

  - **HW** · 로봇 팔 본체와 제어 보드, 전원부
  - **Core** · 스테레오 비전과 AI 인터페이스, ROS2 통신
  - **Ops** · 실제 로봇과 1:1로 연결되는 Unity 디지털 트윈과 VR 원격 조작
`;

const hw = `
  ### 구조
  - 5자유도(Base · Shoulder · Elbow · Wrist Pitch · Wrist Yaw) + 그리퍼
  - 팔 관절은 MG90S 메탈 기어 서보로 구동하고, 회전축에 베어링을 넣어 처짐과 유격을 줄였습니다.
  - 프레임은 3D 프린팅으로 출력해 조립했으며, 같은 구성으로 **두 대**를 제작했습니다.
`;

const hwBoard = `
  ### 제어부와 전원
  - **Arduino Mega 2560**이 PC에서 시리얼로 받은 관절 각도를 각 서보의 PWM 신호로 변환합니다.
  - 서보는 순간 전류가 크기 때문에 **DC-DC 강압 컨버터**로 전원을 분리해 공급하고, 만능기판으로 서보 커넥터 인터페이스를 따로 구성했습니다.
  - 베이스 회전축은 서보를 직결하지 않고 **기어 감속 + 베어링** 구조로 만들어, 위쪽 팔 전체의 하중을 서보가 직접 받지 않도록 했습니다.
`;

const core = `
  - ROS2 기반 통신 및 시스템 아키텍처
  - PyTorch 및 OpenCV를 활용한 딥러닝 인터페이스
  - 카메라 기반 거리 인식 및 영상 처리

  ### 스테레오 비전
  별도의 뎁스 카메라 없이, **RGB 카메라 모듈 2개**를 3D 프린팅 브래킷에 일정한 간격(베이스라인)으로 고정했습니다.
  두 영상의 시차(disparity)로 뎁스 맵을 계산해, 저가 부품만으로 물체까지의 거리를 추정하는 것이 목표입니다.
`;

const ops = `
  실제 로봇과 똑같은 관절 구조를 가진 **Unity 디지털 트윈**입니다. 시뮬레이션 화면에서 움직인 그대로 실제 로봇이 따라 움직입니다.

  ### 관절 리그와 가동 범위
  - 3D 모델을 실제 로봇과 같은 계층(root → b1 → b2 → b3 → b4)으로 리깅하고, 관절마다 Dynamic Joint를 설정했습니다.
  - 각 관절의 **회전 한계**(약 ±82°~92°)를 실제 서보 가동 범위에 맞춰 지정해, 시뮬레이션에서 하드웨어가 못 가는 자세가 나오지 않도록 했습니다.
  - **IK 타깃**을 옮기면 역기구학으로 각 관절 각도가 계산됩니다.
`;

const opsVr = `
  ### 제어 UI와 VR 원격 조작
  - **6축 슬라이더**(BaseRotation · ShoulderPitch · ElbowPitch · WristPitch · WristYaw · Gripper)로 각 관절을 직접 조작합니다.
  - **Dual Serial Manager**가 시리얼 포트 두 개(Port A / B)를 동시에 관리해 로봇 두 대를 각각 제어할 수 있습니다.
  - **Servo Trim**으로 실제 서보와 3D 모델 사이의 각도 오차를 관절별로 보정합니다.
  - **Home Pose**를 저장해 두고 언제든 기준 자세로 복귀시킬 수 있습니다.
  - **Meta Quest(OpenXR) VR 리그**를 연결하면, VR 공간에서 손으로 타깃을 잡아 옮기는 방식으로 로봇 팔을 원격 조작(텔레오퍼레이션)할 수 있습니다.
`;

const stack = `
  ## 개발 환경 및 기술 스택

  | 분류 | 기술 |
  |------|------|
  | 하드웨어 | Arduino Mega 2560, 서보(MG90S 등), DC-DC 강압 컨버터, 3D 프린터 |
  | 언어 | C, C++, C#, Python |
  | 통신 및 제어 | ROS2, Serial, Bluetooth |
  | 시뮬레이션 | Unity 2022.3 (C#), Dynamic Joint, IK |
  | XR | Meta XR SDK, OpenXR (Meta Quest) |
  | AI/비전 | OpenCV, PyTorch |

  ## 향후 계획

  - 강화학습 기반 로봇 행동 최적화 적용
  - Isaac Sim 기반 시뮬레이션 환경 구축 및 학습용 데이터 생성
  - Depth Camera 대체용 스테레오 뎁스 맵 정밀화
  - Unity 시뮬레이터 ↔ ROS2 연동 가속화

  > 이 프로젝트는 단순한 로봇 제어가 아니라, **AI + Vision + Simulation**이 융합된 지능형 물리 AI의 출발점입니다.
`;

export default function PrgRobotArm01() {
  return (
    <ProjectPage projectId="neuro-arm">
      <KeyFacts
        items={[
          ['DOF', '5 + Gripper'],
          ['Vision', 'Stereo RGB ×2'],
          ['Digital twin', 'Unity 6-axis'],
          ['Teleop', 'Meta Quest VR'],
        ]}
      />
      <Markdown>{intro}</Markdown>

      <PartTitle tag="HW">Neuro Arm HW</PartTitle>
      <Markdown>{hw}</Markdown>
      <Figure src={`${IMG}/robotAnim_01.gif`} caption="관절별 서보 구동 테스트" />
      <Markdown>{hwBoard}</Markdown>
      <Figure
        src={`${IMG}/robot_02.jpg`}
        caption="베이스 내부 · Arduino Mega 2560, 서보 인터페이스 기판, DC-DC 강압 컨버터, 기어 감속 베이스 회전부"
        width={4032}
        height={3024}
      />

      <PartTitle tag="CORE">Neuro Arm Core</PartTitle>
      <Markdown>{core}</Markdown>
      <FigureRow>
        <Figure src={`${IMG}/robot_03.jpg`} caption="RGB 카메라 2개를 고정한 스테레오 브래킷" width={5712} height={4284} />
        <Figure src={`${IMG}/robotAnim_02.gif`} caption="두 카메라 영상으로 계산한 뎁스 맵" />
      </FigureRow>

      <PartTitle tag="OPS">Neuro Arm Ops</PartTitle>
      <Markdown>{ops}</Markdown>
      <Figure
        src={`${IMG}/Unity_joint.png`}
        caption="Unity 관절 리그 · 관절별 회전 한계(Limit)와 실제 로봇과 같은 계층 구조(Hierarchy)"
        width={2637}
        height={1281}
      />
      <Markdown>{opsVr}</Markdown>
      <Figure src={`${IMG}/Unity_VrSimulator.gif`} caption="NeuroArm-OPS · 6축 슬라이더 제어, Dual Serial 설정, Servo Trim, VR 리그 연동" />
      <Figure src={`${IMG}/Unity_VrSimulator_02.gif`} caption="NeuroArm-OPS · VR 컨트롤러를 이용한 로봇팔 제어" />
      <Markdown>{stack}</Markdown>
    </ProjectPage>
  );
}
