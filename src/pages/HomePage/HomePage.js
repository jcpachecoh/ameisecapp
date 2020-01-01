import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Dashboard from './Dashboard';

import ReactPageScroller from 'react-page-scroller';
import PrincipalBanner from './components/PrincipalBanner';
import ContactUsBanner from './components/ContactUsBanner';
import UsBanner from './components/UsBanner';
import DotacionesBanner from './components/DotacionesBanner';
import HamburgerMenu from '../../components/HamburgerMenu';

export function HomePage() {
  const isLogged = useSelector(state => state.user.isLogged);
  const pageNumber = useSelector(state => state.app.pageNumber);

  const handlePageChange = (evt) => {
    console.log(evt);
  }

  if (isLogged) {
    return <Dashboard />;
  }

  return (
    <Fragment>
      <HamburgerMenu />
      <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={pageNumber}
      >
        <PrincipalBanner />
        <ContactUsBanner />
        <UsBanner />
        <DotacionesBanner />
      </ReactPageScroller>
    </Fragment>
  );
}

export default HomePage;
