import React from 'react';

import facebook from '../../../public/assets/facebook.png';
import twitter from '../../../public/assets/twitter.png';
import instagram from '../../../public/assets/instagram.png';
import Icon from '../Icon';

import { StyledSocialBanner } from './styles';
function SocialBanner() {
  const handleSocial = evt => {
    console.log(evt);
  };

  return (
    <StyledSocialBanner>
      <Icon image={facebook} size={'64px'} onClick={handleSocial} />
      <Icon image={twitter} size={'64px'} onClick={handleSocial} />
      <Icon image={instagram} size={'64px'} onClick={handleSocial} />
    </StyledSocialBanner>
  );
}

export default SocialBanner;
