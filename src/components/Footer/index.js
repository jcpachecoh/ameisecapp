import React from 'react';

import EmailPromotion from '../EmailPromotion';
import SocialBanner from '../SocialBanner';
import Copyright from '../Copyright';

import { StyledFooter } from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <EmailPromotion />
      <SocialBanner />
      <Copyright />
    </StyledFooter>
  );
}
