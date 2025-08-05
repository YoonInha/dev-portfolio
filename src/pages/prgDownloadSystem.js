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
  # 다운로드 런처 시스템
  
  * 유저 권한 및 프로젝트와 파일을 관리하고, 클라이언트에서 원하는 프로젝트의 파일을 다운로드하는 일련의 전체 시스템 (예시 : Steam launcher, epic launcher)
  ---
  
  ## 프로젝트 구성 요소
  
  ### Auth Server (User Data Server)
  - RESTAPI
  - nodejs server
  
  ### Project Server (Project Data & File Server)
  - RESTAPI
  - nodejs server
  - 수평확장 및 로드밸런싱을 위해 Redis 적용
  
  ### Admin Page
  - React 기반 프론트 엔드 페이지
  - 유저 등록 및 권한 부여, 프로젝트 생성 및 관리 등 전반적인 서버관련 작업을 할 수 있는 GUI 페이지
  
  ### Client Launcher
  - Unreal 엔진 기반 다운로드 런처
  - Unreal을 주로 사용중인 기업에서 유지보수 원활히 하기 위해 Unreal로 제작
  
  ---
  
  ## 개발 환경 및 기술 스택
  
  | 분류 | 기술 |
  |------|------|
  | OS | Linux |
  | 언어 | JavaScript, Python |
  | 사용 모듈 | Nodejs, Redis, React |
  | DB | Postgresql |
  | FrontEnd | Unreal |
  
  ---
  `;
  

  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='File Download Launcher System' />
      <div className="container mx-auto mt-16 text-left sm:mt-10">
      {/* <img src = "https://drive.google.com/uc?export=view&id=12wZKILdB-JNdycqu3oz-ijTrqOzTDNp8" alt='estelayer' style={{ width: '120%', height: 'auto' }}/> */}
      <img src = "/imgsrc/CDNResource/DownloadLauncher/mainThumb.jpg" alt='estelayer' style={{ width: '120%', height: 'auto' }}/>
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
         {/* <img src = "/imgsrc/CDNResource/WheeledRobot_01/wheelAni_01.gif" alt='singi' style={{ width: '70%', height: 'auto' }}/>
         <p>Robot remote control Movement and remote display from robot's camera </p> */}
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

