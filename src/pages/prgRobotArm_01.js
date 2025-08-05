import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from'@emotion/styled';
import MainLayout from '../layouts/MainLayout';
// import Iconify from '../Iconify'; // 필요한 경우 주석 해제
import { useRouter } from 'next/router';
import { documentTitle } from '../mock/profile';
import ContentForm from '../layouts/ContentForm';
import ReactCompareImage from "react-compare-image";
import MarkdownWrapper from '../layouts/MarkDownWrapper'

export default function PrgRobotArm01() {
  const router = useRouter();
  const meta = (
    <>
      <title>{documentTitle}</title>
    </>
  );

  const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  `;

  const context_01 = `
  # Neuro Arm: 지능형 로봇 팔 프로젝트
  
  Neuro Arm은 단순한 하드웨어 제어를 넘어서, **AI 기반 학습**과 **ROS2 통신**, 그리고 **Unity 기반 시뮬레이션**을 통합한 로봇 팔 프로젝트입니다.  
  직접 제작한 3D 프린팅 하드웨어에 센서와 카메라를 장착하여, 실제 물리 환경 속에서 데이터를 수집하고 처리할 수 있도록 설계했습니다.
  
  ---
  
  ## 프로젝트 구성 요소
  
  ### Neuro Arm Core
  * ROS2 기반 통신 및 시스템 아키텍처
  * PyTorch 및 OpenCV를 활용한 딥러닝 인터페이스
  * 카메라 기반 거리 인식 및 영상 처리
  
  ### Neuro Arm HW
  - 5자유도(5 DOF) + 그리퍼 포함 로봇 팔
  - 2대의 RGB 카메라로 스테레오 뎁스 인식 가능
  - 3D 프린팅 기반 커스텀 하드웨어 설계
  
  ### Neuro Arm Ops
  - Unity 엔진 기반 가상 환경 시뮬레이션
  - 실제 하드웨어와 연결되는 원격 제어 및 테스트 환경
  
  ---
  
  ## 개발 환경 및 기술 스택
  
  | 분류 | 기술 |
  |------|------|
  | 하드웨어 | Arduino, 커스텀 보드, 3D 프린터 |
  | 언어 | C, C++, C#, Python |
  | 통신 및 제어 | ROS2, Serial, Bluetooth |
  | 시뮬레이션 | Unity (C#) |
  | AI/비전 | OpenCV, PyTorch |
  
  ---
  
  ## 향후 계획
  
  - 강화학습 기반 로봇 행동 최적화 적용
  - Depth Camera 대체용 스테레오 뎁스 맵 정밀화
  - Unity 시뮬레이터 ↔ ROS2 연동 가속화
  
  > “이 프로젝트는 단순한 로봇 제어가 아니라,  
  > **AI + Vision + Simulation**이 융합된 지능형 물리 AI의 출발점입니다.”
  `;
  

  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='Neuro Arm Robot' />
      <div className="container mx-auto mt-16 text-left sm:mt-10">
      {/* <img src = "https://drive.google.com/uc?export=view&id=12wZKILdB-JNdycqu3oz-ijTrqOzTDNp8" alt='estelayer' style={{ width: '120%', height: 'auto' }}/> */}
      <img src = "/imgsrc/CDNResource/RobotArm_01/robot_01.jpg" alt='estelayer' style={{ width: '120%', height: 'auto' }}/>
      <br/>
        <MarkDownStyle>
        <MarkdownWrapper>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {context_01}
          </ReactMarkdown>
        </MarkdownWrapper>
         <br/>
         <br/>
         {/* <img src = "https://drive.google.com/uc?export=view&id=1XAAafM9Zwn8kpG5qjURrL_PnHG8ONH6B" alt='singi' style={{ width: '70%', height: 'auto' }}/>
         <p>중세 기사 풍 메카닉 디자인</p>
         <br/>
         <img src = "https://drive.google.com/uc?export=view&id=13hujURYHaXKPSFfhGN3NhGfDtT92d6u1" alt='attackmotion' style={{ width: '50%', height: 'auto' }}/>
         <img src = "https://drive.google.com/uc?export=view&id=1OZ9f6qOSedi7-6dUrTfvO4d8wpKeMpZo" alt='stepmotion' style={{ width: '50%', height: 'auto' }}/>
         <p>스타일리쉬한 액션</p>
         <br/>
         <img src = "https://drive.google.com/uc?export=view&id=1ezIKWnLlj8Gl0-ruDMrfNoEOR_lxIXLU" alt='cutscene' style={{ width: '50%', height: 'auto' }}/>
         <p>스토리 컷씬</p>
         <br/>
         <img src = "https://drive.google.com/uc?export=view&id=109M3aFVvcfX9dKtZFKRIar7M4EGfjYlb" alt='heroine' style={{ width: '70%', height: 'auto' }}/> */}
         <img src = "/imgsrc/CDNResource/RobotArm_01/robot_02.jpg" alt='singi' style={{ width: '70%', height: 'auto' }}/>
      
         <p>Process unit and regulator and servo & Sensor's interface</p>

         <img src = "/imgsrc/CDNResource/RobotArm_01/robotAnim_01.gif" alt='singi' style={{ width: '70%', height: 'auto' }}/>
         <p>Robot Arm Movement</p>
         <br/>
         <img src = "/imgsrc/CDNResource/RobotArm_01/robot_03.jpg" alt='attackmotion' style={{ width: '50%', height: 'auto' }}/>
         <p>Two RGB camera for computer visioning & depth map</p>
         <br/>

         <img src = "/imgsrc/CDNResource/RobotArm_01/robotAnim_02.gif" alt='singi' style={{ width: '70%', height: 'auto' }}/>
         <p>Detph map from two RGB camera </p>
        </MarkDownStyle>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </MainLayout>
  );
}

