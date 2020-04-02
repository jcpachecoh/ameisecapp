import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../../components/Image';
import OverlayModal from '../../../components/OverlayModal';
import { reduxActions } from '../../../constants';

import { StyledGridItem } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';
import GridItemDetails from './GridItemDetails';

function GridItem({ item }) {
  const showOverlay = useSelector(state => state.app.showItemDetails);
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState(item);

  const handleSetItemData = useCallback(() => {
    dispatch({ payload: itemData, type: reduxActions.SHOW_ITEM_DETAILS });
  }, [dispatch, itemData]);

  const onSelectSize = e => {
    const sizeValue = e.target.value;
    const articleData = { ...showOverlay, size: sizeValue };
    setItemData(articleData);
  };

  const handleCloseOverlay = useCallback(() => {
    dispatch({ payload: null, type: reduxActions.SHOW_ITEM_DETAILS });
  }, [dispatch]);

  const handleAddItem = useCallback(() => {
    dispatch({ payload: itemData, type: reduxActions.ADD_ITEM });
  }, [itemData, dispatch]);

  return (
    <StyledGridItem>
      <OverlayModal showOverlay={showOverlay} animationDirection={'animatetop'}>
        <GridItemDetails
          onSelectSize={onSelectSize}
          onClose={handleCloseOverlay}
          handleAddItem={handleAddItem}
        />
      </OverlayModal>
      <Image
        src={item.images[0].src}
        name={item.images.name}
        onClick={handleSetItemData}
        size={'120px'}
      />
      <ProductTitle title={item.name} />
      <Price value={item.price} />
    </StyledGridItem>
  );
}

GridItem.propTypes = {
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
export default GridItem;
