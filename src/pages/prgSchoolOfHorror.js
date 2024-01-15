import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from'@emotion/styled';
import MainLayout from '../layouts/MainLayout';
// import Iconify from '../Iconify';
import { useRouter } from 'next/router';
import { documentTitle } from '../mock/profile';
import ContentForm from '../layouts/ContentForm';

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

  const content_01 = `
  # 학교괴담

    - 개요
        - 스토리 진행형 호러 어드벤처 게임
    - 사용 기술, 환경, 언어
        - 환경 : Unity, SQLite
        - 언어 : C#
    - 특징
        - 2D 비주얼 노벨 파트와 3D 어드벤처 파트로 진행되는 어드벤처 게임
    - 비고
        - 서비스 종료
  `;
  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='학교괴담 (하얀 진혼곡)'/>
      <div className="container mx-auto mt-16 text-left sm:mt-10">
      <img src = "https://drive.google.com/uc?export=view&id=15KJvAFeq8LXTxTdqB569ZQ8kU-Xx-UzF" alt='singi' style={{ width: '120%', height: 'auto' }}/>
        <MarkDownStyle>
         <ReactMarkdown>{content_01}</ReactMarkdown>
         <br/>
         <br/>
        </MarkDownStyle>
        {/* <img src = "https://drive.google.com/uc?export=view&id=19x2-VuQ-IKOjcLd0Gkjy88chVDJ_FV3r" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>멀티 엔딩의 시나리오가 존재</p>
        <br/>
        <img src = "https://drive.google.com/uc?export=view&id=1DU6rb8CaZ5Nhhc85n67E_Jgm4tc47vWf" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "https://drive.google.com/uc?export=view&id=1VX5hNK7bXLVK2MgJq5z-o7D-jbfXj-4Y" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>비주얼 노벨 파트에서 선택지에 의한 분기</p>
        <br/>
        <img src = "https://drive.google.com/uc?export=view&id=1EnPBrCunLXxRgH-HtdeB2ESM7EwebsWn" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "https://drive.google.com/uc?export=view&id=1CY3DBRUCEFpE_v8BK1d3QbB2K5vqksBm" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "https://drive.google.com/uc?export=view&id=1m66W-iQa6t4ZEZ7OQNKgh-586AvkzwYn" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>학교 전체를 배경으로 하는 3D 어드벤처 파트</p> */}
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/f6d5e8366ebbdfec17cfbdec2be00c2c.jpg" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>멀티 엔딩의 시나리오가 존재</p>
        <br/>
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/Screenshot_20170613-052008.png" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/schoolOfHorror_001.jpg" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>비주얼 노벨 파트에서 선택지에 의한 분기</p>
        <br/>
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/3.png" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/6.png" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <img src = "/imgsrc/CDNResource/SchoolOfHorror/2016_06_09_15_09_11_552.mp4_000009798.jpg" alt='image' style={{ width: '70%', height: 'auto' }}/>
        <p>학교 전체를 배경으로 하는 3D 어드벤처 파트</p>
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