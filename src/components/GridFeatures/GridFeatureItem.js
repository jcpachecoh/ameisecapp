import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { StyledGridFeatureItem } from './styles';
import Icon from '../Icon';

function GridFeatureItem({ image, text, primary } ) {
    return (
        <StyledGridFeatureItem>
            {primary && (
                <Fragment>
                    <Icon image={image} size={'128px'} />
                    <span>{text}</span>
                </Fragment>
            )
            }
            {!primary && (
                <Fragment>
                    <span>{text}</span>
                    <Icon image={image} size={'128px'} />
                </Fragment>
            )}
        </StyledGridFeatureItem>
    )
}

GridFeatureItem.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    primary: PropTypes.bool
};

export default GridFeatureItem
