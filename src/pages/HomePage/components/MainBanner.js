import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../../components/Button';

import { StylesContainer } from '../styles';

export default function MainBanner() {
  let history = useHistory();

  function handleClick() {
    history.push("/hombre");
  }

  return (
    <StylesContainer>
      <span>!Nueva Colección de Hombre!</span>
      <Button onClick={handleClick} value="Descubrela"  zIndex={10} />
    </StylesContainer>
  );
}
