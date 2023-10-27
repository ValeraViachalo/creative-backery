/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-shorthand */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import './Hero.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { Link } from '../../components/Link';
import { Title } from './Title/Title';
import { Cookie } from './Cookie';

const slideUp = {
  initial: {
    y: '100%',
  },
  open: i => ({
    y: '0%',
    transition: {
      duration: 0.5,
      delay: 0.01 * i,
    },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};

export const Hero = () => {
  const phrase = 'We bake your fantasies — croissants, cakes, cookies, and cupcakes.';
  const description = useRef(null);
  const isInView = useInView(description);

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
      .to('.hero__button', {
        top: '-130px',
        duration: 2,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '100px',
          end: '1000vh',
        },
      })
      .to('.hero__top', {
        top: '-360px',
        duration: 2,
      });
  }, []);

  return (
    <section
      className="hero container"
      id="hero"
    >
      <div className="hero__top" ref={description}>
        <p>
          {phrase.split(' ').map((word, index) => (
            <span
              key={word}
              className="hero__text-mask"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
                key={word}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>

      <Title />

      <Cookie />

      <div className="hero__button">
        <Link
          to="#/"
          title="Learn More"
          isButton
        />
      </div>
    </section>
  );
};
