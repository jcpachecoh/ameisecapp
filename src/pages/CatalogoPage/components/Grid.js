import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';
import { StyledGrid } from './styles';

function Grid({ products }) {
  return (
    <StyledGrid>
      {products &&
        products.map((item, idx) => {
          return <GridItem item={item} key={idx} />;
        })}
    </StyledGrid>
  );
}

Grid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Grid;
