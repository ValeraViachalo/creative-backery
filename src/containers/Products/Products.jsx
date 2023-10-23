import React from 'react';
import { Cards } from './Cards';

import './Products.scss';

export const Products = () => (
  <section className="products" id="products">
    <div className="products__top">
      <h2 className="products__title">
        What we bake
      </h2>

      <p>
        We can customize our cookies right for your needs. Just imagine it
      </p>
    </div>

    <div className="products__cards">
      <Cards />
    </div>
  </section>
);
