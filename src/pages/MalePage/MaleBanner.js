import React from 'react';

import Banner from '../../components/Banner';
import hombre5_1 from '../../../public/assets/photos/hombre5_1.jpg';
import MainBanner from '../HomePage/components/MainBanner';

export default function MaleBanner() {
  return (
    <Banner bgImage={hombre5_1}>
      <MainBanner message={'!Nueva coleccion hombre!'} />
    </Banner>
  );
}
