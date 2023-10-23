import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.scss';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer/Footer';

import { Hero } from './containers/Hero';
import { Products } from './containers/Products';

gsap.registerPlugin(ScrollTrigger);

export const App = () => (
  <div className="app" id="scroll__wrapper">
    <div id="scroll__content">
      <div className="container">
        <header className="app__header">
          <Header />
        </header>

        <main className="app__main">
          <Hero />

          <Products />
          <div style={{
            marginBottom: '1050px',
          }}
          />
        </main>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </div>
);
