import { useState, useEffect } from 'react';
import { MOBILE_THRESHOLD } from '../assets/constants';

export const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    if (isMobile === undefined) {
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    }
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setIsMobile(window.innerWidth <= MOBILE_THRESHOLD);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, isMobile };
};