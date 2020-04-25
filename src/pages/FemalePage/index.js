import React, { Fragment } from 'react';

import { productsFemale } from '../../api/products';
import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';
import Breadcrump from '../../components/BreadCrump';

import FemaleBanner from './FemaleBanner';

const listBreadrump = [
  {
    active: true,
    label: 'Inicio',
    link: '/',
  },
  {
    active: false,
    label: 'Dama',
    link: '/dama',
  },
];

function FemalePage() {
  return (
    <Fragment>
      <FemaleBanner />
      <Breadcrump listBreadrump={listBreadrump} />
      <Grid products={productsFemale} />
      <Footer />
    </Fragment>
  );
}

export default FemalePage;
