import React from 'react';
import ProjectPage, { Figure, FigureRow } from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const IMG = '/imgsrc/CDNResource/Estelayer';

const overview = `
  ## 사용 기술, 환경, 언어
  - 환경: Unreal 5
  - 언어: C++, Blueprint
  - 사용 툴: Blender

  ## 특징
  - 비극적인 스토리와 반전이 존재하는 메카닉 액션 RPG
  - AAA급 퀄리티 지향

  ## 비고
  - 개발 중
`;

export default function PrgEstelayer() {
  return (
    <ProjectPage projectId="estelayer">
      <Markdown>{overview}</Markdown>
      <Figure src={`${IMG}/eeeee.jpg`} caption="중세 기사 풍 메카닉 디자인" />
      <FigureRow>
        <Figure src={`${IMG}/GOM_k1eIw12Nud.gif`} caption="스타일리시한 액션 · 공격" />
        <Figure src={`${IMG}/GOM_wha0z8omfD.gif`} caption="스타일리시한 액션 · 스텝" />
      </FigureRow>
      <Figure src={`${IMG}/GOM_LnVRmRf0IJ.gif`} caption="스토리 컷씬" />
      <Figure src={`${IMG}/chrome_wBQCzro1Ig.jpg`} caption="히로인" />
    </ProjectPage>
  );
}
