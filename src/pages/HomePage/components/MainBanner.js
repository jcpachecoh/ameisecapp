import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import { StylesContainer } from '../styles';

export default function MainBanner({ message, redirect }) {
  let history = useHistory();

  function handleClick() {
    history.push(redirect);
  }

  return (
    <StylesContainer>
      <span>{message}</span>
      {redirect && <Button onClick={handleClick} value="Descubrela" zIndex={10} />}
    </StylesContainer>
  );
}

MainBanner.propTypes = {
  message: PropTypes.string.isRequired,
  redirect: PropTypes.string,
};
