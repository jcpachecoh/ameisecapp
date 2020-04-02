import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Image from '../Image';

import { StyledImageSlider } from './styles';

function ImageSlider({ images }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <StyledImageSlider>
      <Slider {...settings}>
        {images.map((item, idx) => {
          return <Image src={item.src} alt={item.idx} size={'300px'} key={idx} />;
        })}
      </Slider>
    </StyledImageSlider>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
};

export default ImageSlider;
