import React from 'react';

import faaa from '../../../public/assets/faaa.png';
import whatsapp_1 from '../../../public/assets/whatsapp_1.png';
import instagram_1 from '../../../public/assets/instagram_1.png';
import Icon from '../Icon';

import { StyledSocialBanner, StyledTitle } from './styles';

function SocialBanner() {
  const handleSocial = evt => {
    const dataUrl = evt.currentTarget.getAttribute('data-url');
    window.open(dataUrl, '_blank');
  };

  return (
    <>
      <StyledTitle>Siguenos</StyledTitle>
      <StyledSocialBanner>
        <Icon
          image={faaa}
          size={'64px'}
          onClick={handleSocial}
          dataUrl={'https://www.facebook.com/rossys.sweaters'}
        />
        <Icon
          image={whatsapp_1}
          size={'64px'}
          onClick={handleSocial}
          dataUrl={'https://wa.me/573104392240'}
        />
        <Icon
          image={instagram_1}
          size={'64px'}
          onClick={handleSocial}
          dataUrl={'https://instagram.com/dpachecolosal?igshid=18b12w4esynlh'}
        />
      </StyledSocialBanner>
    </>
  );
}

export default SocialBanner;
