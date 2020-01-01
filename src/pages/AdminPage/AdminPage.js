import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Wrapper from '../../layouts/Wrapper';
import HamburgerMenu from '../../components/HamburgerMenu';

export function AdminPage() {
  const pageView = useSelector(state => state.view.pageView);
  return (
    <div>
      <HamburgerMenu />
      {pageView}
      <Link to="/">Home page</Link>
      <Wrapper>
        <span>This is the Admin page mis perros</span>
      </Wrapper>
    </div>
  );
}

export default AdminPage;
