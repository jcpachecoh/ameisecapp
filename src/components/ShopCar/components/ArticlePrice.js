import React from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../utils/commonFunctions';

import { StyledArticlePrice } from './styles';

function ArticlePrice({ price }) {
  return <StyledArticlePrice>${formatMoney(price)}</StyledArticlePrice>;
}

ArticlePrice.propTypes = {
  price: PropTypes.number,
};

export default ArticlePrice;
