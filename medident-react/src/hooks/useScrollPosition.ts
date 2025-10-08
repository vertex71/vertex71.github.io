import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updatePosition = throttle(() => {
      setScrollPosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    }, 100);

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};