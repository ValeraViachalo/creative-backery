/* eslint-disable react/prop-types */
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import React, { useEffect, useRef } from 'react';

import './TextSplit.scss';

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

export const TextSplit = ({ phrase, onInView }) => {
  const description = useRef(null);
  const isInView = useInView(description, { triggerOnce: true });

  useEffect(() => {
    if (isInView && onInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <p
      ref={description}
      className="text-split"
    >
      {phrase.split(' ').map((word, index) => (
        <span
          key={word}
          className="text-split__mask"
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
  );
};