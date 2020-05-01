import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';
import { products } from '../../api/products';
import Breadcrump from '../../components/BreadCrump';
import HamburgerMenu from '../../components/HamburgerMenu';

import DotacionesBanner from './DotacionesBanner';

function DotacionesPage() {
  const listBreadrump = [
    {
      active: true,
      label: 'Inicio',
      link: '/',
    },
    {
      active: false,
      label: 'Dotaciones',
      link: '/',
    },
  ];
  const productsDotaciones = products.filter(item => item.category === 'dotaciones');
  return (
    <Fragment>
      <HamburgerMenu colorBackground />
      <DotacionesBanner />
      <Breadcrump listBreadrump={listBreadrump} />
      <Grid products={productsDotaciones} />
      <Footer />
    </Fragment>
  );
}

export default DotacionesPage;
