import React, { useRef } from 'react';
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
  // eslint-disable-next-line max-len
  const phrase = 'We can customize our cookies right for your needs. Just imagine it.';
  const description = useRef(null);
  const isInView = useInView(description);

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
