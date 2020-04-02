import React from 'react';
import { Link } from 'react-router-dom';

import { mainMenu } from '../../constants/index.js';

import { StylesMenuToogle, StylesMenu } from './styles.js';
import ShopCarIcon from './ShopCarIcon.js';

export default function HamburgerMenu() {
  return (
    <StylesMenuToogle>
      <div>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <StylesMenu>
          {mainMenu.map((item, idx) => {
            return (
              <li data-key={idx} key={idx}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </StylesMenu>
      </div>
      <Link to="/">RS</Link>
      <ShopCarIcon />
    </StylesMenuToogle>
  );
}
