/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-shorthand */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import './Title.scss';

export const Title = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.20,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1,
      },
      x: '-100px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    gsap.set(fourdText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="title">
      <h1 className="title--for-desktop">
        Creative backery
      </h1>

      <div ref={slider} className="title__slider">
        <h2 className="title__slider-title" ref={firstText}>
          Creative backery -
        </h2>
        <h2 className="title__slider-title" ref={secondText}>
          Creative backery -
        </h2>
        <h2 className="title__slider-title" ref={thirdText}>
          Creative backery -
        </h2>
        <h2 className="title__slider-title" ref={fourdText}>
          Creative backery -
        </h2>
      </div>
    </div>
  );
};
