import React from 'react';
import ProjectPage, { Figure, FigureRow } from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const IMG = '/imgsrc/CDNResource/SchoolOfHorror';

const overview = `
  ## 개요
  - 스토리 진행형 호러 어드벤처 게임

  ## 사용 기술, 환경, 언어
  - 환경: Unity, SQLite
  - 언어: C#

  ## 특징
  - 2D 비주얼 노벨 파트와 3D 어드벤처 파트로 진행되는 어드벤처 게임

  ## 비고
  - 서비스 종료
`;

export default function PrgSchoolOfHorror() {
  return (
    <ProjectPage projectId="school-of-horror" hero={`${IMG}/schoolOfHorror_001.jpg`}>
      <Markdown>{overview}</Markdown>
      <Figure src={`${IMG}/f6d5e8366ebbdfec17cfbdec2be00c2c.jpg`} caption="멀티 엔딩의 시나리오가 존재" />
      <FigureRow>
        <Figure src={`${IMG}/Screenshot_20170613-052008.png`} caption="비주얼 노벨 파트 · 선택지 분기" />
        <Figure src={`${IMG}/Screenshot_20170613-051922.png`} caption="비주얼 노벨 파트" />
      </FigureRow>
      <FigureRow>
        <Figure src={`${IMG}/3.png`} caption="3D 어드벤처 파트" />
        <Figure src={`${IMG}/6.png`} caption="3D 어드벤처 파트" />
      </FigureRow>
      <Figure src={`${IMG}/2016_06_09_15_09_11_552.mp4_000009798.jpg`} caption="학교 전체를 배경으로 하는 3D 어드벤처 파트" />
    </ProjectPage>
  );
}
