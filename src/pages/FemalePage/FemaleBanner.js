import React from 'react';

import dama1_1 from '../../../public/assets/products/dama1_1.jpg';
import Banner from '../../components/Banner';
import { StyledFullBanner } from '../CatalogoPage/components/styles';
import HamburgerMenu from '../../components/HamburgerMenu';
import MainBanner from '../HomePage/components/MainBanner';

export default function FemaleBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={dama1_1}>
        <HamburgerMenu />
        <MainBanner message={'!La mejor moda para tus dotaciones femeninas!'} />
      </Banner>
    </StyledFullBanner>
  );
}
