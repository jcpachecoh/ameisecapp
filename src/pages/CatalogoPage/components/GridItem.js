import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';

import Image from '../../../components/Image';
import OverlayModal from '../../../components/OverlayModal';
import { reduxActions } from '../../../constants';
import { isDesktop } from '../../../utils';

import { StyledGridItem } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';
import GridItemDetails from './GridItemDetails';

function GridItem({ item, createSnackbar }) {
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const [itemData, setItemData] = useState(null);

  const handleSetItemData = () => {
    setItemData(item);
    setShowOverlay(!showOverlay);
  };

  const onSelectSize = e => {
    const sizeValue = e.target.value;
    const articleData = { ...itemData, size: sizeValue };
    setItemData(articleData);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleAddItem = useCallback(() => {
    dispatch({ payload: itemData, type: reduxActions.ADD_ITEM });
    createSnackbar({
      message: 'Articulo adicionado exitosamente',
      theme: 'success',
    });
    // this.props.enqueueSnackbar('Articulo adicionado extisotamente');
  }, [itemData, dispatch]);

  const isDesktopDevice = isDesktop();
  const modalWidth = isDesktopDevice ? '50%' : '80%';
  const modalTop = isDesktopDevice ? '0' : '70px';
  return (
    <StyledGridItem>
      <OverlayModal
        showOverlay={showOverlay}
        animationDirection={'animatetop'}
        width={modalWidth}
        top={modalTop}>
        <GridItemDetails
          itemData={itemData}
          onSelectSize={onSelectSize}
          onClose={handleCloseOverlay}
          handleAddItem={handleAddItem}
        />
      </OverlayModal>
      <Image
        src={item.images[0].src}
        name={item.images.name}
        onClick={handleSetItemData}
        size={isDesktopDevice ? '320px' : '120px'}
        highLight
      />
      <ProductTitle title={item.name} />
      <Price value={item.price} />
    </StyledGridItem>
  );
}

GridItem.propTypes = {
  createSnackbar: PropTypes.any,
  item: PropTypes.shape({
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
};
export default wrapComponent(GridItem);
