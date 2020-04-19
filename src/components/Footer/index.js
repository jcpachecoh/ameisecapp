import React from 'react';

import Copyright from '../Copyright';
import EmailPromotion from '../EmailPromotion';
import { isDesktop } from '../../utils';
import SocialBanner from '../SocialBanner';

import { StyledFooter } from './styles';
import FooterGrid from './FooterGrid';

export default function Footer() {
  const isDesktopDevice = isDesktop();
  return (
    <StyledFooter>
      <EmailPromotion />
      <FooterGrid />
      {!isDesktopDevice && <SocialBanner />}
      <Copyright />
    </StyledFooter>
  );
}
