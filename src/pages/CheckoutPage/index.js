import React from 'react';

import Footer from '../../components/Footer';
import ShopCar from '../../components/ShopCar/components/ShopCar';
import Breadcrump from '../../components/BreadCrump';
import HamburgerMenu from '../../components/HamburgerMenu';

import { StyledCheckout } from './styles';

function CheckoutPage() {
  const listBreadrump = [
    {
      active: true,
      label: 'Inicio',
      link: '/',
    },
    {
      active: false,
      label: 'Checkout',
      link: '/',
    },
  ];

  return (
    <StyledCheckout>
      <HamburgerMenu colorBackground />
      <Breadcrump listBreadrump={listBreadrump} />
      <ShopCar />
      <Footer />
    </StyledCheckout>
  );
}

export default CheckoutPage;
