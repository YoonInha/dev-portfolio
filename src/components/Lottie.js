import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactLottie from 'lottie-react';
import axios from 'axios';

export default function Lottie({ url }) {
  const [animationDataFile, setAnimationDataFile] = useState(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!lottieRef?.current) return;
    axios.get(url).then(({data}) => data).then(setAnimationDataFile);
    return () => {
      lottieRef?.current?.destroy();
    }
  }, [lottieRef]);

  return <ReactLottie className='lottieAnim' lottieRef={lottieRef} animationData={animationDataFile} loop autoplay/>;
}

Lottie.propTypes = {
  url: PropTypes.string
};