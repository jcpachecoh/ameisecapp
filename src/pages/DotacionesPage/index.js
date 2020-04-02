import React, { Fragment } from 'react';

import HamburgerMenu from '../../components/HamburgerMenu';
import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';
import { productsFemale } from '../../utils';

import DotacionesBanner from './DotacionesBanner';

function DotacionesPage() {
  return (
    <Fragment>
      <HamburgerMenu />
      <DotacionesBanner />
      <Grid products={productsFemale} />
      <Footer />
    </Fragment>
  );
}

export default DotacionesPage;
