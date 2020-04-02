import React from 'react';

import dama1_1 from '../../../../public/assets/photos/dama1_1.jpg';
import Banner from '../../../components/Banner';

import { StyledFullBanner } from './styles';

export default function MainBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={dama1_1}>
        <h2>Catalogo</h2>
      </Banner>
    </StyledFullBanner>
  );
}
