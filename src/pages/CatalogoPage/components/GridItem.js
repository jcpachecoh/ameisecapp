import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../../components/Image';
import OverlayModal from '../../../components/OverlayModal';

import { StyledGridItem } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';
import GridItemDetails from './GridItemDetails';

function GridItem({ item }) {
  const [showOverlay, setshowOverlay] = useState(false);
  const handleClickImage = () => {
    setshowOverlay(!showOverlay);
  };
  return (
    <StyledGridItem>
      <OverlayModal showOverlay={showOverlay}>
        <GridItemDetails
          images={item.images}
          name={item.name}
          price={item.price}
          inventory={item.inventory}
          onClose={handleClickImage}
        />
      </OverlayModal>
      <Image
        src={item.images[0].src}
        name={item.images.name}
        onClick={handleClickImage}
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
