import React from 'react';

import lana2 from '../../../public/assets/lana2.jpg';
import Banner from '../../components/Banner';
import { StyledFullBanner } from '../CatalogoPage/components/styles';
import MainBanner from '../HomePage/components/MainBanner';
import HamburgerMenu from '../../components/HamburgerMenu';

function DotacionesBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={lana2}>
        <HamburgerMenu />
        <MainBanner message={'!Todo para dotaciones en cuarto frio!'} />
      </Banner>
    </StyledFullBanner>
  );
}

export default DotacionesBanner;
