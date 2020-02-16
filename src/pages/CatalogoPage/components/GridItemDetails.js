import React from 'react';
import PropTypes from 'prop-types';

import cancelIcon from '../../../../public/assets/cancelIcon.png';
import ImageSlider from '../../../components/ImageSlider';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Icon from '../../../components/Icon';

import { StyledGridItemDetails } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';
import Description from './Description';

function GridItemDetails({ images, name, price, description, inventory, onClose }) {
  const handleAddItem = e => {
    console.log('add item', e.target.value);
  };

  return (
    <StyledGridItemDetails>
      <Icon image={cancelIcon} size={'24px'} onClick={onClose} />
      <ImageSlider images={images} />
      <ProductTitle title={name} />
      {description && <Description value={description} />}
      <Price value={price} />
      <Dropdown items={inventory} />
      <Button onClick={handleAddItem} value={'Agregar al carrito'} type={'secondary'} />
    </StyledGridItemDetails>
  );
}

GridItemDetails.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.any,
    }),
  ),
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.oneOf(['S', 'M', 'L', 'XL']),
    }),
  ),
  name: PropTypes.string,
  onClose: PropTypes.func,
  price: PropTypes.number,
};

export default GridItemDetails;
