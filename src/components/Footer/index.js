import React from 'react';

import Copyright from '../Copyright';
import EmailPromotion from '../EmailPromotion';
import { isDesktop } from '../../utils';
import SocialBanner from '../SocialBanner';

import { StyledFooter } from './styles';
import FooterGrid from './FooterGrid';
import SafePay from './SafePay';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  const isDesktopDevice = isDesktop();
  return (
    <StyledFooter>
      <EmailPromotion />
      <FooterGrid />
      {!isDesktopDevice && <SocialBanner />}
      <PaymentMethods />
      <hr />
      <SafePay />
      <Copyright />
    </StyledFooter>
  );
}
