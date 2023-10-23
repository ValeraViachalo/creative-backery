/* eslint-disable react/prop-types */
import React from 'react';
import { getLink } from '../../../components/MenuContent/getLink';
import { getTitle } from '../../../components/MenuContent/getTitle';

import Menu from '../../../components/MenuContent/MenuContent.json';
import Contacts from '../ContactsContent/ContactsContent.json';

import './LinksList.scss';

export const LinksList = ({
  title,
  links,
  blockLink = true,
}) => {
  let array = [];

  if (links === 'menu') {
    array = Menu;
  } else if (links === 'contacts') {
    array = Contacts;
  }

  return (
    <div className="links-list">
      <h3 className="links-list__title">
        {title}
      </h3>

      <ul className="links-list__list">
        {array.map(currentLink => (
          <li key={currentLink}>
            <a
              href={`
                ${blockLink
            ? `#${getLink(currentLink)}`
            : `tel:${currentLink}`}`
              }
            >
              {blockLink ? getTitle(currentLink) : currentLink}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
