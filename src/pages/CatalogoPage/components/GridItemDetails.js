import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import cancelIcon from '../../../../public/assets/cancelIcon.png';
import ImageSlider from '../../../components/ImageSlider';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Icon from '../../../components/Icon';

import { StyledGridItemDetails } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';
import Description from './Description';

function GridItemDetails({ onClose, onSelectSize, handleAddItem }) {
  const showOverlayData = useSelector(state => state.app.showItemDetails);

  return (
    <>
      {showOverlayData && (
        <StyledGridItemDetails>
          <Icon image={cancelIcon} size={'24px'} onClick={onClose} />
          <ImageSlider images={showOverlayData.images} />
          <ProductTitle title={name} />
          {showOverlayData.description && <Description value={showOverlayData.description} />}
          <Price value={showOverlayData.price} />
          <Dropdown items={showOverlayData.inventory} onSelectSize={onSelectSize} />
          <Button onClick={handleAddItem} value={'Agregar al carrito'} type={'secondary'} />
        </StyledGridItemDetails>
      )}
    </>
  );
}

GridItemDetails.propTypes = {
  handleAddItem: PropTypes.func,
  onClose: PropTypes.func,
  onSelectSize: PropTypes.func,
};

export default GridItemDetails;
