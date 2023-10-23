import React from 'react';
import './Footer.scss';
import { Logo } from '../../components/Logo';
import { LinksList } from './LinksList';
import { Socials } from '../../components/Socials/Socials';

export const Footer = () => (
  <div className="footer">
    <div className="footer__content container">
      <div className="footer__logo">
        <Logo white />
      </div>

      <LinksList
        title="Menu"
        links="menu"
      />

      <h2>
        Contact us
      </h2>

      <LinksList
        title="Call us"
        links="contacts"
        blockLink={false}
      />

      <div className="footer__email">
        <h3 className="footer__email-title">
          Email us
        </h3>

        <a href="mailto:bakerlab@example.com">
          bakerlab@example.com
        </a>
      </div>

      <Socials />

      <p className="footer__bottom">
        @Bakerlab 2022
      </p>
    </div>
  </div>
);
