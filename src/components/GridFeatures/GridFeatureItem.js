import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import Icon from '../Icon';

import { StyledGridFeatureItem } from './styles';

function GridFeatureItem({ image, text, primary }) {
  return (
    <StyledGridFeatureItem>
      {primary && (
        <Fragment>
          <Icon image={image} size={'128px'} />
          <span>{text}</span>
        </Fragment>
      )}
      {!primary && (
        <Fragment>
          <span>{text}</span>
          <Icon image={image} size={'128px'} />
        </Fragment>
      )}
    </StyledGridFeatureItem>
  );
}

GridFeatureItem.propTypes = {
  image: PropTypes.string,
  primary: PropTypes.bool,
  text: PropTypes.string,
};

export default GridFeatureItem;
