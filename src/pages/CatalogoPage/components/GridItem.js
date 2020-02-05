import React from 'react'
import PropTypes from 'prop-types';
import { StyledGridItem } from './styles';
import Image from '../../../components/Image';
import Price from './Price';
import ProductTitle from './ProductTitle';

function GridItem({ item }) {
    return (
      <StyledGridItem>
        <Image src={item.images[0].src} name={item.images.name} />
        <ProductTitle title={item.name} />
        <Price value={item.price} />
      </StyledGridItem>
    )
}

GridItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    gender: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.any,
      name: PropTypes.string
    })),
    inventory: PropTypes.arrayOf(PropTypes.shape({
      size: PropTypes.oneOf(['S', 'M', 'L', 'XL']),
      quantity: PropTypes.number
    }))
  }),
};
export default GridItem
