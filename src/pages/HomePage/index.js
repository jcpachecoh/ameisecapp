import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import PrincipalBanner from './components/PrincipalBanner';
import DotacionesBanner from './components/DotacionesBanner';
import Footer from '../../components/Footer';
import GridFeatures from '../../components/GridFeatures';
import Title from '../../components/Title/Title';

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
