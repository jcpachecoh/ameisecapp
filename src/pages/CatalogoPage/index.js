import React, { Fragment } from 'react';

import HamburgerMenu from '../../components/HamburgerMenu';
import Footer from '../../components/Footer';

import MainBanner from './components/MainBanner';
import Grid from './components/Grid';

function CatalogoPage() {
  return (
    <Fragment>
      <HamburgerMenu />
      <MainBanner />
      <Grid />
      <Footer />
    </Fragment>
  );
}

export default CatalogoPage;
