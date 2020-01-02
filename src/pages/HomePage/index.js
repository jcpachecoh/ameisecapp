import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import PrincipalBanner from './components/PrincipalBanner';
import ContactUsBanner from './components/ContactUsBanner';
import UsBanner from './components/UsBanner';
import DotacionesBanner from './components/DotacionesBanner';
import Footer from '../../components/Footer';

export function HomePage() {
  const isLogged = useSelector(state => state.user.isLogged);

  return (
    <Fragment>
      <PrincipalBanner />
      <ContactUsBanner />
      <UsBanner />
      <DotacionesBanner />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
