import React from 'react';

import Banner from '../../components/Banner';
import notFound from '../../../public/assets/notFound.jpg';
import { StyledFullBanner } from '../CatalogoPage/components/styles';
import HamburgerMenu from '../../components/HamburgerMenu';
import MainBanner from '../HomePage/components/MainBanner';

export default function NotFoundBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={notFound}>
        <HamburgerMenu />
        <MainBanner message={'!Pagina no encontrada!'} redirect={'/'} buttonLabel={'Ir al home'} />
      </Banner>
    </StyledFullBanner>
  );
}
