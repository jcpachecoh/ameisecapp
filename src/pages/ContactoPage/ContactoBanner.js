import React from 'react';

import { StyledFullBanner } from '../CatalogoPage/components/styles';
import Banner from '../../components/Banner';
import lana3 from '../../../public/assets/lana3.jpg';

function ContactoBanner() {
  return (
    <StyledFullBanner>
      <Banner bgImage={lana3}>
        <span>Contactanos</span>
      </Banner>
    </StyledFullBanner>
  );
}

export default ContactoBanner;
