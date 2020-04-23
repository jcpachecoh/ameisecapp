import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import { StylesContainer } from '../styles';

export default function MainBanner({ message, redirect, buttonLabel }) {
  let history = useHistory();

  function handleClick() {
    history.push(redirect);
  }

  return (
    <StylesContainer>
      <span>{message}</span>
      {redirect && <Button onClick={handleClick} value={buttonLabel} zIndex={10} width={'50%'} />}
    </StylesContainer>
  );
}

MainBanner.propTypes = {
  buttonLabel: PropTypes.string,
  message: PropTypes.string.isRequired,
  redirect: PropTypes.string,
};
