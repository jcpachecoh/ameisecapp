import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import Icon from '../Icon';

import { StyledGridFeatureItem } from './styles';

function GridFeatureItem({ image, text, primary }) {
  return (
    <ScrollAnimation delay={100} animateIn="fadeIn">
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
    </ScrollAnimation>
  );
}

GridFeatureItem.propTypes = {
  image: PropTypes.string,
  primary: PropTypes.bool,
  text: PropTypes.string,
};

export default GridFeatureItem;
