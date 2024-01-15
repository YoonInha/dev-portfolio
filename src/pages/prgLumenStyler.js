import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from'@emotion/styled';
import MainLayout from '../layouts/MainLayout';
// import Iconify from '../Iconify';
import { useRouter } from 'next/router';
import { documentTitle } from '../mock/profile';
import ContentForm from '../layouts/ContentForm';
import ReactCompareImage from "react-compare-image";
import YouTube from 'react-youtube';

export default function PrgSchoolOfHorror() {
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

  const youtubeOpts = {
    height: '780',
    width: '1280',
    playerVars: {
      // YouTube 영상 재생 관련 옵션을 설정합니다.
      autoplay: 0, // 자동 재생 여부 (0 또는 1)
      modestbranding: 1,
    },
  };

  const content_01 = `
  # Lumen Styler

    - 개요
    - 사용 기술, 환경, 언어
        - 기술 : Runtime Ray Tracing (Lumen), RESTApi, Express
        - 환경 : Unreal5
        - 언어 : Blueprint, Javascript
    - 특징
        - 동적으로 외부 환경에서 건물 및 애셋 리스트를 API을 사용하여 받고, 외부 스토리지의 gltf 파일을 런타임에 임포트
        - 실시간 광선 추적을 이용하여 극 사실적이면서 즉각적인 편집 가능
    - 비고
        - 실시간 레이트레이싱에 대한 기술제안 및 검증을 위해 제작
        - 현실과의 비교를 위해 자택을 모델로 애셋 제작
        - Aws 서버를 사용하다가 비용 발생 문제로 로컬 서버로 변경
  `;
  // const before_01 =
  // "https://drive.google.com/uc?export=view&id=1B4Tc6L7V6iDrY4EcaG3A7r2VUq8o9AgM";
  // const after_01 =
  // "https://drive.google.com/uc?export=view&id=1OaWjiVhO17oxH9v7tkkaGGIQrh54_-Bc";
  // const before_02 =
  // "https://drive.google.com/uc?export=view&id=1-3XcQ7CyZu6zMpHSF8A5tlkltMnEGGnf";
  // const after_02 =
  // "https://drive.google.com/uc?export=view&id=1Mi-MUdWYYSrVy_X0rzTnZBErpGnzu_Oh";
  const before_01 =
  "/imgsrc/CDNResource/LumenStyler/UnrealEditor_GFi8hviiSx.jpg";
  const after_01 =
  "/imgsrc/CDNResource/LumenStyler/UnrealEditor_y5a0zU51OO.jpg";
  const before_02 =
  "/imgsrc/CDNResource/LumenStyler/UnrealEditor_orKPbP0RA1.jpg";
  const after_02 =
  "/imgsrc/CDNResource/LumenStyler/UnrealEditor_n1NXRXpVJx.jpg";
  const videoId = 'VfN-y2auq3o';
  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='Lumen Styler'/>
      <div className="container mx-auto mt-16 text-left sm:mt-10">
        <MarkDownStyle>
         <ReactMarkdown>{content_01}</ReactMarkdown>
         <br/>
         <ReactCompareImage leftImage={before_01} rightImage={after_01} />
         <ReactCompareImage leftImage={before_02} rightImage={after_02} />
         <p>시간대에 따른 시각적 변화</p>
         <br/>
         <img src = "/imgsrc/CDNResource/LumenStyler/UnrealEditor_iIXtlLcaRA.jpg" alt='blueprint' style={{ width: '120%', height: 'auto' }}/>
         <p>BluePrint node</p>
         <br/>
        </MarkDownStyle>
        <br/>
        <br/>
        <YouTube videoId={videoId} opts={youtubeOpts} onEnd={(e)=>{e.target.stopVideo(0);}} />
        <p>시연영상</p>
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
};