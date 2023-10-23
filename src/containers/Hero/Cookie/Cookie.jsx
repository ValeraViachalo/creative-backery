import React, { useEffect } from 'react';

import './Cookie.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line arrow-body-style
export const Cookie = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#wrapper',
          scrub: 0.2,
          start: '0',
          end: '160px',
        },
      })
      .to('.cookie', {
        rotation: 30,
        duration: 2,
      });
  }, []);

  return (
    <div id="wrapper">
      <div className="cookie" />
    </div>
  );
};
