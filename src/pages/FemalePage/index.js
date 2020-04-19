import React, { Fragment } from 'react';

import { productsFemale } from '../../utils';
import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';

import FemaleBanner from './FemaleBanner';

function FemalePage() {
  return (
    <Fragment>
      <FemaleBanner />
      <Grid products={productsFemale} />
      <Footer />
    </Fragment>
  );
}

export default FemalePage;
