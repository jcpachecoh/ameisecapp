import React, { Fragment } from 'react';

import { products } from '../../api/products';
import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';
import Title from '../../components/Title';
import Breadcrump from '../../components/BreadCrump';
import HamburgerMenu from '../../components/HamburgerMenu';

import MaleBanner from './MaleBanner';

const listBreadrump = [
  {
    active: true,
    label: 'Inicio',
    link: '/',
  },
  {
    active: false,
    label: 'Hombre',
    link: '/hombre',
  },
];

function MalePage() {
  const productsMale = products.filter(item => item.category === 'hombre');
  return (
    <Fragment>
      <HamburgerMenu colorBackground />
      <MaleBanner />
      <Breadcrump listBreadrump={listBreadrump} />
      <Title value={'!Nueva Coleccion de hombre!'} />
      <Grid products={productsMale} />
      <Footer />
    </Fragment>
  );
}

export default MalePage;
