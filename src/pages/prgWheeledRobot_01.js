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
  # 나무늘보 (sloth): 지능형 주행 로봇 프로젝트
  
  나무늘보(sloth)는 ROS2의 turtle bot을 일부 대체하는 기본 주행 봇 플랫폼 프로젝트입니다.
  ---
  
  ## 프로젝트 구성 요소
  
  ### Sloth Core
  * ROS2 기반 통신 및 시스템 아키텍처
  * PyTorch 및 OpenCV를 활용한 딥러닝 인터페이스
  * 카메라 기반 거리 인식 및 영상 처리
  
  ### Sloth HW
  - 바퀴를 이용한 주행 로봇 (+ 로봇 팔 or 집게 예정)
  - 중추 신경에 해당하는 
  - 1대의 RGB 카메라 사용 (추후 depth camera 적용 예정)
  - 포맥스와 알루미늄을 이용한 mock up 제작 (3D print로 대체 예정)
  
  ### Sloth Ops
  - Unity 엔진 기반 가상 환경 시뮬레이션 및 데이터 수집
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
  
  - 강화학습 기반 로봇 목표 지향 지능 부여
  - Tesla 방식 모노 RGB Camera를 통한 공간 인식
  - Unity 시뮬레이터 ↔ ROS2 연동 가속화
  
  > “이 프로젝트는 단순한 로봇 제어가 아니라,  
  > **AI + Vision + Simulation**이 융합된 지능형 물리 AI의 출발점입니다.”
  `;
  

  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='Sloth Robot' />
      <div className="container mx-auto mt-16 text-left sm:mt-10">
      {/* <img src = "https://drive.google.com/uc?export=view&id=12wZKILdB-JNdycqu3oz-ijTrqOzTDNp8" alt='estelayer' style={{ width: '120%', height: 'auto' }}/> */}
      <img src = "/imgsrc/CDNResource/WheeledRobot_01/005.jpg" alt='estelayer' style={{ width: '120%', height: 'auto' }}/>
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
         <img src = "/imgsrc/CDNResource/WheeledRobot_01/wheelAni_01.gif" alt='singi' style={{ width: '70%', height: 'auto' }}/>
         <p>Robot remote control Movement and remote display from robot's camera </p>
         <br/>
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

