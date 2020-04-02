import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../Image';

import { StyledArticleImage } from './styles';

function ArticleImage({ images }) {
  return (
    <StyledArticleImage>
      <Image src={images[0].src} name={images.name} size={'48px'} />
    </StyledArticleImage>
  );
}

ArticleImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.any,
    }),
  ),
};

export default ArticleImage;
