import React, { useState, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import Login from '../../Login';
import SignUp from '../../SignUp';
import Button from '../../Button';
import Title from '../../Title';
import { isDesktop } from '../../../utils';

import { StyledSignUpSelection, StyledSignUpSelectionItem } from './styles';

function SignUpSelection({ backFn, moveToResume }) {
  const [showedItem, setshowedItem] = useState('login');

  const handleChangeForm = step => {
    setshowedItem(step);
  };

  const isDesktopDevice = isDesktop();
  return (
    <Fragment>
      <Button width={isDesktopDevice ? '10%' : '30%'} value={'< Volver'} onClick={backFn} />
      <StyledSignUpSelection>
        <StyledSignUpSelectionItem>
          <Title value={'Bienvenido, logueate'} />
          <Login
            showForm={showedItem === 'login'}
            backFn={() => handleChangeForm('login')}
            moveToResume={moveToResume}
          />
        </StyledSignUpSelectionItem>
        <StyledSignUpSelectionItem>
          <Title value={'Soy Nuevo'} />
          <SignUp showForm={showedItem === 'signup'} backFn={() => handleChangeForm('signup')} />
        </StyledSignUpSelectionItem>
      </StyledSignUpSelection>
    </Fragment>
  );
}

SignUpSelection.propTypes = {
  backFn: PropTypes.func,
  moveToResume: PropTypes.func,
};

export default SignUpSelection;
