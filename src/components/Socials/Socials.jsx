/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import SocialsContent from './SocialsContent/SocialsContent.json';
import logoFacebook from '../../images/socials/facebook.svg';
import logoInstagram from '../../images/socials/instagram.svg';
import logoTwitter from '../../images/socials/twitter.svg';

import './Socials.scss';

function getIcon(icon) {
  switch (icon) {
    case 'facebook':
      return logoFacebook;

    case 'instagram':
      return logoInstagram;

    default:
      return logoTwitter;
  }
}

export const Socials = () => (
  <ul className="socials">
    {SocialsContent.map(({ social, link }) => (
      <li key={social}>
        <a
          href={link}
          target="_blank"
        >
          <img
            className="socials__link"
            src={getIcon(social)}
            alt={social}
          />
        </a>
      </li>
    ))}
  </ul>
);
