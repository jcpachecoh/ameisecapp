import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';

import Image from '../../../components/Image';
import { isDesktop } from '../../../utils';

import { StyledGridItem } from './styles';
import Price from './Price';
import ProductTitle from './ProductTitle';

function GridItem({ item }) {
  let history = useHistory();
  const handleSetItemData = () => {
    history.push('/producto/' + item.category + '/' + item.id);
  };

  const isDesktopDevice = isDesktop();
  return (
    <StyledGridItem>
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
    category: PropTypes.string,
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
export default withRouter(GridItem);
