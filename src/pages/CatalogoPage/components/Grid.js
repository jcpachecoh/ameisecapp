import React from 'react'
import GridItem from './GridItem';
import PropTypes from 'prop-types';
import { StyledGrid } from './styles';

function Grid( { products }) {
    return (
        <StyledGrid>
            {products && products.map((item, idx) => {
                return <GridItem item={item} key={idx} />
            })}
        </StyledGrid>
    )
}

GridItem.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}


export default Grid;
