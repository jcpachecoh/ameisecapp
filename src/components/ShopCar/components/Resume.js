import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Title from '../../Title';
import Button from '../../Button';

import { StyledItemsContainer, StyledUserData } from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';

function Resume({ iva, total }) {
  const articles = useSelector(state => state.shopCar.articles);
  const userData = useSelector(state => state.user.userData);

  const { firstName, lastName, email, address, city } = userData;
  const handleConfirm = () => {
    console.log('confirm');
  };
  return (
    <>
      <Title value={`Resumen de Pedido`} />
      <hr />
      <StyledItemsContainer>
        {articles.map((item, idx) => {
          return <ShopCarItem item={item} key={idx} idx={idx} />;
        })}
      </StyledItemsContainer>
      <ShopCarSummary total={total} iva={iva} />
      <Title value={`Datos de usuario`} />
      <StyledUserData>
        <div>
          <b>Nombre</b>: {firstName} {lastName}
        </div>
        <div>
          <b>email</b>: {email}
        </div>
        <div>
          <b>Ciudad</b>: {city}
        </div>
        <div>
          <b>Direccion</b>: {address}
        </div>
      </StyledUserData>
      <Button value={'Confirmar'} width={'50%'} onClick={handleConfirm} />
    </>
  );
}

Resume.propTypes = {
  iva: PropTypes.number,
  total: PropTypes.number,
};

export default Resume;
