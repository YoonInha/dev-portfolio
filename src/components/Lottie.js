import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactLottie from 'lottie-react';

export default function Lottie({ animationDataFile }) {
  const lottieRef = useRef(null);
  useEffect(() => {
    // Lottie 인스턴스 생성 및 설정
    const animation = lottieRef.current;
    if (animation) {
      animation.setAnimationData(animationDataFile);
      animation.loop = true;
      animation.play();
    }

    return () => {
      // 컴포넌트 언마운트 시 Lottie 인스턴스 정리
      if (animation) {
        animation.destroy();
      }
      animationDataFile = null;
    };
  }, [animationDataFile]);
  return <ReactLottie className='lottieAnim' ref={lottieRef} animationData={animationDataFile}/>;
}

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};