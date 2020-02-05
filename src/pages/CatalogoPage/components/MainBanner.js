import React from 'react';
import dama1_1 from '../../../../public/assets/photos/dama1_1.jpg';

import { StyledFullBanner } from './styles';
import Banner from '../../../components/Banner';

export default function MainBanner() {
  return (
    <StyledFullBanner>
        <Banner bgImage={Dama_1_1}>
            <h2>Catalogo</h2>
        </Banner>
    </StyledFullBanner>
  );
}
