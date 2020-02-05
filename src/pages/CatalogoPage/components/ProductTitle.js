import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledProductTitle } from './styles';

function ProductTitle( { title }) {
    return (
        <StyledProductTitle>
            {title}
        </StyledProductTitle>
    )
}

ProductTitle.propTypes = {
    title: PropTypes.string
}

export default ProductTitle;
