import React from 'react';

import Banner from '../../components/Banner';
import hombre5_1 from '../../../public/assets/photos/hombre5_1.jpg';
import { StyledFullBanner } from '../CatalogoPage/components/styles';
import HamburgerMenu from '../../components/HamburgerMenu';
import MainBanner from '../HomePage/components/MainBanner';

export default function MaleBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={hombre5_1}>
        <HamburgerMenu />
        <MainBanner message={'!Nueva coleccion hombre!'} />
      </Banner>
    </StyledFullBanner>
  );
}
