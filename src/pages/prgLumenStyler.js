import React from 'react';
import ReactCompareImage from 'react-compare-image';
import YouTube from 'react-youtube';
import ProjectPage, { Figure, SectionTitle } from '../layouts/ProjectPage';
import { Markdown } from '../layouts/MarkDownWrapper';

const IMG = '/imgsrc/CDNResource/LumenStyler';
const VIDEO_ID = 'VfN-y2auq3o';

const overview = `
  ## 사용 기술, 환경, 언어
  - 기술: Runtime Ray Tracing (Lumen), REST API, Express
  - 환경: Unreal 5
  - 언어: Blueprint, JavaScript

  ## 특징
  - 외부 API로 건물 및 애셋 리스트를 동적으로 받고, 외부 스토리지의 glTF 파일을 런타임에 임포트
  - 실시간 광선 추적을 이용해 극사실적이면서 즉각적인 편집 가능

  ## 비고
  - 실시간 레이트레이싱에 대한 기술 제안 및 검증을 위해 제작
  - 현실과의 비교를 위해 자택을 모델로 애셋 제작
  - AWS 서버를 사용하다가 비용 문제로 로컬 서버로 변경
`;

export default function PrgLumenStyler() {
  return (
    <ProjectPage projectId="lumen-styler">
      <Markdown>{overview}</Markdown>

      <SectionTitle>시간대에 따른 시각적 변화</SectionTitle>
      <p className="mb-4 font-mono text-xs text-editor-muted">슬라이더를 좌우로 드래그해 비교해 보세요.</p>
      <div className="flex flex-col gap-4 overflow-hidden rounded-md">
        <ReactCompareImage leftImage={`${IMG}/UnrealEditor_GFi8hviiSx.jpg`} rightImage={`${IMG}/UnrealEditor_y5a0zU51OO.jpg`} />
        <ReactCompareImage leftImage={`${IMG}/UnrealEditor_orKPbP0RA1.jpg`} rightImage={`${IMG}/UnrealEditor_n1NXRXpVJx.jpg`} />
      </div>

      <Figure src={`${IMG}/UnrealEditor_iIXtlLcaRA.jpg`} caption="Blueprint node" />

      <SectionTitle>시연 영상</SectionTitle>
      <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border border-editor-line bg-editor-view">
        <YouTube
          videoId={VIDEO_ID}
          className="h-full w-full"
          iframeClassName="h-full w-full"
          opts={{ width: '100%', height: '100%', playerVars: { autoplay: 0, modestbranding: 1 } }}
        />
      </div>
    </ProjectPage>
  );
}
