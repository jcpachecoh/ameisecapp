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

function ProductPage({ match, createSnackbar }) {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState(null);
  const { id } = match?.params;
  const { category } = match?.params;

  const products = category == 'hombre' ? productsMale : productsFemale;

  const productDetails = products.find(item => item.id == id);
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
    const articleData = { ...productDetails, size: sizeValue };
    setItemData(articleData);
  };

  const handleAddItem = useCallback(() => {
    dispatch({ payload: itemData, type: reduxActions.ADD_ITEM });
    createSnackbar({
      message: 'Articulo adicionado exitosamente',
      theme: 'success',
    });
    // this.props.enqueueSnackbar('Articulo adicionado extisotamente');
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
            <ProductTitle title={productDetails.name} />
            {productDetails.description && <Description value={productDetails.description} />}
            <Price value={productDetails.price} />
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
