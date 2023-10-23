import React, { useLayoutEffect } from 'react';

import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import './App.scss';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer/Footer';

import { Hero } from './containers/Hero';
import { Products } from './containers/Products';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const App = () => {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      wrapper: '#scroll__wrapper',
      content: '#scroll__content',
    });
  }, []);

  return (
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
};
