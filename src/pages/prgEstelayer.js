import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from'@emotion/styled';
import MainLayout from '../layouts/MainLayout';
// import Iconify from '../Iconify'; // 필요한 경우 주석 해제
import { useRouter } from 'next/router';
import { documentTitle } from '../mock/profile';
import ContentForm from '../layouts/ContentForm';
import ReactCompareImage from "react-compare-image";

export default function PrgEstelayer() {
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
  # Estelayer
    - 개요
    - 사용 기술, 환경, 언어
        - 환경 : Unreal5
        - 언어 : C++, Blueprint
    - 특징
        - 비극적인 스토리와 반전이 존재하는 메카닉 액션 RPG
        - AAA급 퀄리티 지향
    - 비고
        - 개발 중
  `;

  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='Estelayer' />
      <div className="container mx-auto mt-16 text-left sm:mt-10">
        <MarkDownStyle>
         <ReactMarkdown>{context_01}</ReactMarkdown>
         <br/>
         <img src = "https://drive.google.com/uc?export=view&id=1XAAafM9Zwn8kpG5qjURrL_PnHG8ONH6B" alt='singi' style={{ width: '120%', height: 'auto' }}/>
         <br/>
         <img src = "https://drive.google.com/uc?export=view&id=162HFZ0j43nLvRQpXf_Laz12DuT4RDFZS" alt='singi' style={{ width: '100%', height: 'auto' }}/>
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

