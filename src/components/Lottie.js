import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// ReactLottie를 dynamic import하여 SSR 비활성화
const ReactLottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Lottie({ url }) {
  const [animationDataFile, setAnimationDataFile] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // 서버에서 실행 방지

    axios.get(url)
      .then(({ data }) => setAnimationDataFile(data))
      .catch((error) => console.error('Lottie JSON 로드 오류:', error));
  }, [url]);

  return animationDataFile ? (
    <ReactLottie className="lottieAnim" animationData={animationDataFile} loop autoplay />
  ) : null;
}

Lottie.propTypes = {
  url: PropTypes.string.isRequired, // URL을 필수값으로 설정
};
