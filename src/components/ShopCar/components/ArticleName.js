import React from 'react';
import PropTypes from 'prop-types';

import { StyledArticleName } from './styles';

function ArticleName({ name, size }) {
  return (
    <StyledArticleName>
      <div>{name}</div>
      <div>Talla: {size}</div>
    </StyledArticleName>
  );
}

ArticleName.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
};

export default ArticleName;
