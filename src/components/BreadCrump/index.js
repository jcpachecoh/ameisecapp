import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledBreadcrump } from './styles';

function Breadcrump({ listBreadrump }) {
  return (
    <StyledBreadcrump>
      {listBreadrump &&
        listBreadrump.map((item, idx) => {
          return (
            <li key={idx}>
              {item.active ? <Link to={item.link}>{item.label}</Link> : item.label}
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
