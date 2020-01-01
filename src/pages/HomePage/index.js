import React, { Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from './Dashboard';

import ReactPageScroller from 'react-page-scroller';
import PrincipalBanner from './components/PrincipalBanner';
import ContactUsBanner from './components/ContactUsBanner';
import UsBanner from './components/UsBanner';
import DotacionesBanner from './components/DotacionesBanner';
import { reduxActions } from '../../constants';

export function HomePage() {
  const isLogged = useSelector(state => state.user.isLogged);
  const pageNumber = useSelector(state => state.app.pageNumber);
  const dispatch = useDispatch();

  const handlePageChange = useCallback((pageNumber) => {
    dispatch({ type: reduxActions.UPDATE_PAGE_VIEW, payload: pageNumber });
  }, [dispatch]);

  if (isLogged) {
    return <Dashboard />;
  }

  return (
    <Fragment>
      <ReactPageScroller
        renderAllPagesOnFirstRender
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
