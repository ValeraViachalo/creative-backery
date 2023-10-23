/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-shorthand */
/* eslint-disable no-return-assign */
import React from 'react';
import './Hero.scss';

import { Link } from '../../components/Link';
import { Title } from './Title/Title';
import { Cookie } from './Cookie';

export const Hero = () => (
  <section className="hero container">
    <p className="hero__top">
      We bake your fantasies — croissants, cakes, cookies, and cupcakes.
    </p>

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
