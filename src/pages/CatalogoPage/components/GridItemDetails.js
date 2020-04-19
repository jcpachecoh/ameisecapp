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

function GridItemDetails({ itemData, onClose, onSelectSize, handleAddItem }) {
  return (
    <>
      {itemData && (
        <StyledGridItemDetails>
          <Icon image={cancelIcon} size={'24px'} onClick={onClose} />
          <ImageSlider images={itemData.images} />
          <ProductTitle title={name} />
          {itemData.description && <Description value={itemData.description} />}
          <Price value={itemData.price} />
          <Dropdown items={itemData.inventory} onSelectSize={onSelectSize} />
          <Button onClick={handleAddItem} value={'Agregar al carrito'} />
        </StyledGridItemDetails>
      )}
    </>
  );
}

GridItemDetails.propTypes = {
  handleAddItem: PropTypes.func,
  itemData: PropTypes.shape({
    description: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
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
    price: PropTypes.number,
  }),

  onClose: PropTypes.func,
  onSelectSize: PropTypes.func,
};

export default GridItemDetails;
