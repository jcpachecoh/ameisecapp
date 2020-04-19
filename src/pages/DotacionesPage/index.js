import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import Grid from '../CatalogoPage/components/Grid';
import { productsFemale } from '../../utils';

import DotacionesBanner from './DotacionesBanner';

function DotacionesPage() {
  return (
    <Fragment>
      <DotacionesBanner />
      <Grid products={productsFemale} />
      <Footer />
    </Fragment>
  );
}

export default DotacionesPage;
