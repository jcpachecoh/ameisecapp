import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StylesMenuToogle, StylesMenu } from './styles.js';
import { mainMenu, reduxActions } from '../../constants/index.js';
import Button from '../Button/index.js';

export default function HamburgerMenu() {
  const dispatch = useDispatch();

  const handleClick = useCallback((event) => {
    const pageNumber = parseInt(event.target.getAttribute('data-key'), 10);
    dispatch({ type: reduxActions.UPDATE_PAGE_VIEW, payload: pageNumber });
  }, [dispatch]);

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
      <div>
        <Button onClick={handleLogin} value={'Logga in'} type={'secondary'}></Button>
      </div>
    </StylesMenuToogle>
  );
}
