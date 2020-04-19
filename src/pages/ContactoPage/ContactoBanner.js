import React from 'react';

import { StyledFullBanner } from '../CatalogoPage/components/styles';
import Banner from '../../components/Banner';
import lana3 from '../../../public/assets/lana3.jpg';
import HamburgerMenu from '../../components/HamburgerMenu';
import MainBanner from '../HomePage/components/MainBanner';

function ContactoBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={lana3}>
        <HamburgerMenu />
        <MainBanner message={'Contactanos para brindarte el mejor servicio'} />
      </Banner>
    </StyledFullBanner>
  );
}

export default ContactoBanner;
