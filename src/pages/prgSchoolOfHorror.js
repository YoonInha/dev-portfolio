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
        <MarkDownStyle>
         <ReactMarkdown>{content_01}</ReactMarkdown>
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
};