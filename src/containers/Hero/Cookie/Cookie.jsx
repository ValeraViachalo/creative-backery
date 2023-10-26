import React, { useEffect } from 'react';

import './Cookie.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const Cookie = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '100px',
          end: '1000vh',
        },
      })
      .to('.cookie', {
        rotation: 50,
        top: '-130px',
        duration: 2,
      });
  }, []);

  return (
    <div id="wrapper">
      <div className="cookie" />
    </div>
  );
};
