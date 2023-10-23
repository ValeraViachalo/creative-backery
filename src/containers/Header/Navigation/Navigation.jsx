import React from 'react';
import MenuContent from '../../../components/MenuContent/MenuContent.json';
import { getLink } from '../../../components/MenuContent/getLink';
import { getTitle } from '../../../components/MenuContent/getTitle';
import { Link } from '../../../components/Link';

import './Navigation.scss';

export const Navigation = () => (
  <ul className="navigation">
    {MenuContent
      .slice(0, 3)
      .map(currentLink => (
        <li
          key={currentLink}
        >
          <a
            href={`#${getLink(currentLink)}`}
            className="navigation__link"
          >
            {getTitle(currentLink)}
          </a>
        </li>
      ))}

    <div className="header-menu--button">
      <Link
        title="Contact Us"
        to="#/"
        phone
      />
    </div>
  </ul>
);
