/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

import './Link.scss';

export const Link = ({
  to,
  title,
  customClass = false,
  isButton = false,
  isArrow = false,
  phone = false,
}) => (
  <a
    href={to}
    className={classNames(
      'link',
      {
        'link--without-border': !isButton,
        'link--without-border-phone': phone,
        'link--without-border-arrow': isArrow,
      },
      { 'link--button': isButton },
      { [customClass]: customClass },
    )}
  >
    {title}
  </a>
);
