import React from 'react';

import lana1 from '../../../../public/assets/lana1.jpg';
import Banner from '../../../components/Banner';

import { StyledFullBanner } from './styles';

export default function MainBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={lana1}>
        <h2>Catalogo</h2>
      </Banner>
    </StyledFullBanner>
  );
}
