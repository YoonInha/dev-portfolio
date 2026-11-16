import React from 'react';
import ProjectPage from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const content = `
  유저 권한, 프로젝트, 파일을 관리하고 클라이언트에서 원하는 프로젝트의 파일을 다운로드하는 일련의 전체 시스템입니다. (예: Steam launcher, Epic launcher)

  ## 프로젝트 구성 요소

  ### Auth Server (User Data Server)
  - REST API
  - Node.js server

  ### Project Server (Project Data & File Server)
  - REST API
  - Node.js server
  - 수평 확장 및 로드밸런싱을 위해 Redis 적용

  ### Admin Page
  - React 기반 프론트엔드 페이지
  - 유저 등록 및 권한 부여, 프로젝트 생성 및 관리 등 서버 관련 작업을 하는 GUI 페이지

  ### Client Launcher
  - Unreal 엔진 기반 다운로드 런처
  - Unreal을 주로 사용하는 기업에서 유지보수가 원활하도록 Unreal로 제작

  ## 개발 환경 및 기술 스택

  | 분류 | 기술 |
  |------|------|
  | OS | Linux |
  | 언어 | JavaScript, Python |
  | 사용 모듈 | Node.js, Redis, React |
  | DB | PostgreSQL |
  | FrontEnd | Unreal |
`;

export default function PrgDownloadSystem() {
  return (
    <ProjectPage projectId="download-launcher">
      <Markdown>{content}</Markdown>
    </ProjectPage>
  );
}
