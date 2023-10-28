import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import { Cards } from './Cards';

import './Products.scss';

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

const Products = () => {
  const phrase
    = 'We can customize our cookies right for your needs. Just imagine it.';
  const description = useRef(null);
  const isInView = useInView(description);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '200vh',
          end: '1000vh',
        },
      })
      .to('#products', {
        top: '-230px',
        duration: 2,
      });
  }, []);

  return (
    <section
      className="products"
      id="products"
    >
      <div className="products__top">
        <h2 className="products__title">
          What we bake
        </h2>

        <p ref={description}>
          {phrase.split(' ').map((word, index) => (
            <span
              key={word}
              className="products__text-mask"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
                key={word}
                className="products__text-word"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>

      <div className="products__cards">
        <Cards />
      </div>
    </section>
  );
};

export default Products;
