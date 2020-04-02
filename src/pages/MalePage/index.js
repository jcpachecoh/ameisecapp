import React, { Fragment } from 'react';

import { productsMale } from '../../utils';
import Footer from '../../components/Footer';
import HamburgerMenu from '../../components/HamburgerMenu';
import Grid from '../CatalogoPage/components/Grid';

import MaleBanner from './MaleBanner';

function MalePage() {
  return (
    <Fragment>
      <HamburgerMenu />
      <MaleBanner />
      <Grid products={productsMale} />
      <Footer />
    </Fragment>
  );
}

export default MalePage;
