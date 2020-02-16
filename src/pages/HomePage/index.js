import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import GridFeatures from '../../components/GridFeatures';
import Title from '../../components/Title/Title';

import PrincipalBanner from './components/PrincipalBanner';
import DotacionesBanner from './components/DotacionesBanner';
export function HomePage() {
  return (
    <Fragment>
      <PrincipalBanner />
      <Title value={'!Aprovecha nuestras grandes caracteristicas!'} />
      <GridFeatures />
      <DotacionesBanner />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
