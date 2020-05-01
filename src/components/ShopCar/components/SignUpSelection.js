import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Login from '../../Login';
import SignUp from '../../SignUp';
import Button from '../../Button';
import Title from '../../Title';

import { StyledSignUpSelection, StyledSignUpSelectionItem } from './styles';

function SignUpSelection({ backFn, moveToResume }) {
  const [showedItem, setshowedItem] = useState('login');

  const handleChangeForm = step => {
    setshowedItem(step);
  };
  return (
    <>
      <Button width={'10%'} value={'< Volver'} onClick={backFn} />
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
    </>
  );
}

SignUpSelection.propTypes = {
  backFn: PropTypes.func,
  moveToResume: PropTypes.func,
};

export default SignUpSelection;
