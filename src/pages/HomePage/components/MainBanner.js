import React from 'react';

import Button from '../../../components/Button';

import { StylesContainer } from '../styles';

export default function MainBanner() {
  function handleClick() {
    console.log('more is');
  }

  return (
    <StylesContainer>
      <div>loSunt culpa officia deserunt non non pariatur fugiat anim nisi.</div>
      <Button onClick={handleClick} value="More Info ...!" />
    </StylesContainer>
  );
}
