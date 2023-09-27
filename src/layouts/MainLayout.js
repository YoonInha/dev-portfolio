import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// Components
import Header from './Header';
// hooks
import useDarkMode from '../hooks/useDarkMode';

// -----------------------------------------------------------

export default function MainLayout({ children, meta }) {
  const { darkModeEnabled, toggleMode } = useDarkMode();
  // 우클릭 이벤트 처리 함수
  const preventRightClick = (e) => {
    e.preventDefault(); // 기본 우클릭 동작 막기
    // alert('우클릭이 비활성화되었습니다.');
  };

  return (
    <>
      <Head>{meta}</Head>

      <Header darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />

      <main className="overflow-x-hidden" onContextMenu={preventRightClick}>{children}</main>
    </>
  );
}

// ---------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
};
