import React from 'react';
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
  const handleLinkClick = () => {
    // 다른 페이지로 이동
    // router.push('/');
    window.location.replace('/');
  };
  return (
    <MainLayout meta={meta}>
      <ContentForm contentTitle='학교괴담 (하얀 진혼곡)'/>
      <div className="container mx-auto mt-16 text-left sm:mt-10">
        <h2>PrgSchoolOfHorror 페이지</h2>
        <p>이 페이지는 PrgSchoolOfHorror 페이지입니다.</p>
        <button classes="text-2xl" icon="iconoir:open-new-window" onClick={handleLinkClick} className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300">
              go to home
              {/* <Iconify classes="text-2xl" icon="iconoir:open-new-window" /> */}
        </button>
      </div>
    </MainLayout>
  );
};