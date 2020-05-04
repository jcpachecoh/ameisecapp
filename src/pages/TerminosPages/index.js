import React from 'react';

import HamburgerMenu from '../../components/HamburgerMenu';
import Breadcrump from '../../components/BreadCrump';
import Footer from '../../components/Footer';

import MainText from './MainText';

export default function TerminosPage() {
  const listBreadrump = [
    {
      active: true,
      label: 'Inicio',
      link: '/',
    },
    {
      active: false,
      label: 'Terminos y Condiciones',
      link: '/',
    },
  ];
  return (
    <>
      <HamburgerMenu colorBackground />
      <Breadcrump listBreadrump={listBreadrump} />
      <MainText />
      <Footer />
    </>
  );
}
