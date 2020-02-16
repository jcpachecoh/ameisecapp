import React from 'react';
import { useHistory } from 'react-router-dom';

import Banner from '../../../components/Banner';
import Button from '../../../components/Button';
import lana from '../../../../public/assets/lana.jpg';

import { StylesFullBanner } from './styles';
export default function DotacionesBanner() {
  let history = useHistory();

  function handleClick() {
    history.push('/dotaciones');
  }

  return (
    <StylesFullBanner>
      <Banner bgImage={lana}>
        <span>!Dotaciones Para Trabajo en frio!</span>
        <Button onClick={handleClick} value="Saber mas" zIndex={10} />
      </Banner>
    </StylesFullBanner>
  );
}
