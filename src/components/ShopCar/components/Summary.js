import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import check from '../../../../public/assets/check.png';
import Image from '../../Image';
import Title from '../../Title';
import Button from '../../Button';

import { StyledSummary } from './styles';

function Summary({ orderData }) {
  const history = useHistory();

  const handleConfirm = () => {
    history.push('/');
  };

  return (
    <StyledSummary>
      <Title
        value={`Felicidades la orden numero RS0000${orderData.order} fur registrada con exito`}
      />
      <Image src={check} size={'128px'} />
      <span>
        Por favor complete la transaccion usando el metodo escogido <b>{orderData.paymentmethod}</b>
      </span>
      <hr />
      <Button value={'Volver a la tienda'} width={'50%'} onClick={handleConfirm} />
    </StyledSummary>
  );
}

Summary.propTypes = {
  orderData: PropTypes.shape({
    iva: PropTypes.number,
    order: PropTypes.number,
    paymentmethod: PropTypes.string,
    products: PropTypes.any,
    total: PropTypes.number,
    user: PropTypes.any,
  }),
};

export default Summary;
