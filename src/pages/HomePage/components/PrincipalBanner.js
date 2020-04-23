import React from 'react';

import hombre4_1 from '../../../../public/assets/photos/hombre4_1.jpg';
import Banner from '../../../components/Banner';
import HamburgerMenu from '../../../components/HamburgerMenu';

import MainBanner from './MainBanner';
import { StylesFullBanner } from './styles';

export default function PrincipalBanner() {
  return (
    <StylesFullBanner>
      <Banner bgImage={hombre4_1}>
        <HamburgerMenu />
        <MainBanner
          message={'!Nueva Coleccion de hombre!'}
          redirect={'/hombre'}
          buttonLabel={'Descubrela'}
        />
      </Banner>
    </StylesFullBanner>
  );
}
