import React from 'react';

import lana2 from '../../../public/assets/lana2.jpg';
import Banner from '../../components/Banner';
import MainBanner from '../HomePage/components/MainBanner';

function DotacionesBanner() {
  return (
    <Banner bgImage={lana2}>
      <MainBanner message={'!Todo para dotaciones en cuarto frio!'} />
    </Banner>
  );
}

export default DotacionesBanner;
