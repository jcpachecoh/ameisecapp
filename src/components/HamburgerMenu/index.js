import React from 'react';
import { Link, useHistory } from "react-router-dom";

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

  const handleHome = () => {
    console.log('juan')
    let history = useHistory();
    history.push('../')
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
            return (
              <li onClick={handleClick} data-key={idx} key={idx}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            )
            }
          )}
        </StylesMenu>
      </div>
      <Link to="/">RS</Link>
      <Icon image={shoppingcar} size={'32px'} onClick={handleClick} />
    </StylesMenuToogle>
  );
}
