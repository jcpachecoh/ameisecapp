import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { isDesktop } from '../../utils';

import { StyledBreadcrump } from './styles';

function Breadcrump({ listBreadrump }) {
  const isDesktopDevice = isDesktop();
  return (
    <StyledBreadcrump isDesktopDevice={isDesktopDevice}>
      {listBreadrump &&
        listBreadrump.map((item, idx) => {
          return (
            <li key={idx}>
              <Link to={item.link}>{item.label}</Link>
              {item.active && <span aria-hidden="true">&gt;</span>}
            </li>
          );
        })}
    </StyledBreadcrump>
  );
}

Breadcrump.propTypes = {
  listBreadrump: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};

export default Breadcrump;
