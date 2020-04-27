import React, { Fragment, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { wrapComponent } from 'react-snackbar-alert';

import { productsMale, productsFemale } from '../../api/products';
import Footer from '../../components/Footer';
import HamburgerMenu from '../../components/HamburgerMenu';
import ImageSlider from '../../components/ImageSlider';
import Price from '../CatalogoPage/components/Price';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import ProductTitle from '../CatalogoPage/components/ProductTitle';
import Description from '../CatalogoPage/components/Description';
import Breadcrump from '../../components/BreadCrump';
import { reduxActions } from '../../constants';

import { StyledProductContainer, StyledProductDescription, StyledSlider } from './styles';
import ProductColors from './ProductColors';

function ProductPage({ match, createSnackbar }) {
  const dispatch = useDispatch();

  const { id } = match?.params;
  const { category } = match?.params;

  const products = category == 'hombre' ? productsMale : productsFemale;

  const productDetails = products.find(item => item.id == id);
  const [itemData, setItemData] = useState({
    ...productDetails,
    color: '',
    priceUnt: productDetails.price,
    size: '',
  });
  const listBreadrump = [
    {
      active: true,
      label: 'Inicio',
      link: '/',
    },
    {
      active: true,
      label: 'Hombre',
      link: '/hombre',
    },
    {
      active: false,
      label: productDetails.name,
      link: '/',
    },
  ];

  const onSelectSize = e => {
    const sizeValue = e.target.value;
    const articleData = {
      ...itemData,
      quantity: 1,
      size: sizeValue,
    };
    setItemData(articleData);
  };

  const onSelectColor = e => {
    const colorValue = e.target.getAttribute('data-color');
    const articleData = { ...itemData, color: colorValue };
    setItemData(articleData);
  };

  const handleAddItem = useCallback(() => {
    dispatch({ payload: itemData, type: reduxActions.ADD_ITEM });
    createSnackbar({
      message: 'Articulo adicionado exitosamente',
      theme: 'success',
    });
  }, [itemData, dispatch]);

  return (
    <Fragment>
      <HamburgerMenu />
      <Breadcrump listBreadrump={listBreadrump} />
      <StyledProductContainer>
        <>
          <StyledSlider>
            <ImageSlider images={productDetails.images} />
          </StyledSlider>
          <StyledProductDescription>
            <ProductTitle title={productDetails.name} textAlign={'left'} />
            {productDetails.description && <Description value={productDetails.description} />}
            {productDetails.colors && (
              <ProductColors
                colors={productDetails.colors}
                onSelectColor={onSelectColor}
                selected={itemData.color}
              />
            )}
            <Price value={productDetails.price} showIva />
            <Dropdown items={productDetails.inventory} onSelectSize={onSelectSize} />
            <Button onClick={handleAddItem} value={'Agregar al carrito'} width="100%" />
          </StyledProductDescription>
        </>
      </StyledProductContainer>

      <Footer />
    </Fragment>
  );
}

ProductPage.propTypes = {
  createSnackbar: PropTypes.any,
  match: PropTypes.shape({
    params: PropTypes.shape({ category: PropTypes.string, id: PropTypes.string }),
  }),
};

export default wrapComponent(ProductPage);
