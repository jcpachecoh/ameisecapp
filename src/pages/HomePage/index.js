import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import GridFeatures from '../../components/GridFeatures';

import PrincipalBanner from './components/PrincipalBanner';
import DotacionesBanner from './components/DotacionesBanner';
export function HomePage() {
  return (
    <Fragment>
      <PrincipalBanner />
      <GridFeatures />
      <DotacionesBanner />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
