import React from 'react';
import PropTypes from 'prop-types';

import { StyledArticleName } from './styles';

function ArticleName({ color, name, size }) {
  return (
    <StyledArticleName>
      <div>{name}</div>
      {size && <div>Talla: {size}</div>}
      {color && <div>Color: {color}</div>}
    </StyledArticleName>
  );
}

ArticleName.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default ArticleName;
