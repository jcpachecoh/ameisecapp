import React from 'react';

import { StylesMenuToogle, StylesMenu } from './styles.js';
import { mainMenu } from '../../constants/index.js';
import shoppingcar from '../../../public/assets/shoppingcar.png';
import Icon from '../Icon/index.js';

export default function HamburgerMenu() {
  const handleClick = (evt) => {
    console.log('evt', evt.target.getAttribute('data-key'));
  }

  const handleLogin = () => {
    console.log('lgin');
  }

  return (
    <StylesMenuToogle>
      <div>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <StylesMenu>
          {mainMenu.map((item, idx) => {
            return <li onClick={handleClick} data-key={idx} key={idx}>{item.label}</li>
          }
          )}
        </StylesMenu>
      </div>
      <Icon image={shoppingcar} size={'small'} onClick={handleClick} />
    </StylesMenuToogle>
  );
}
