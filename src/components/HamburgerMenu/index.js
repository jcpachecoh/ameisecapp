import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Image from '../Image/index.js';
import logo from '../../../public/assets/logo.png';
import { isDesktop } from '../../utils/index.js';
import { mainMenu } from '../../constants/index.js';

import ShopCarIcon from './ShopCarIcon.js';
import { StylesMenuToogle, StylesMenu, StyledNav } from './styles.js';

export default function HamburgerMenu({ colorBackground }) {
  const isDesktopDevice = isDesktop();
  return (
    <>
      {isDesktopDevice ? (
        <StyledNav colorBackground={colorBackground}>
          <div className="container">
            <div className="logo">
              <Link to={'/'}>
                <Image src={logo} alt={'logo'} size={'128px'} />
              </Link>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks">
                {mainMenu.map((item, idx) => {
                  return (
                    <li data-key={idx} key={idx}>
                      <Link to={item.link}>{item.label}</Link>
                    </li>
                  );
                })}
                <ShopCarIcon isDesktop={isDesktopDevice} />
              </ul>
            </div>
            <span className="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </StyledNav>
      ) : (
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
          <Link to="/">
            <Image src={logo} alt={'logo'} size={'64px'} />
          </Link>
          <ShopCarIcon isDesktop={isDesktopDevice} />
        </StylesMenuToogle>
      )}
    </>
  );
}

HamburgerMenu.propTypes = {
  colorBackground: PropTypes.bool,
};
