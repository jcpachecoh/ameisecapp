import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import check from '../../../../public/assets/check.png';
import Image from '../../Image';
import Title from '../../Title';
import Button from '../../Button';
import daviplata from '../../../../public/assets/daviplata.png';
import nequi from '../../../../public/assets/nequi.jpg';
import transferencia from '../../../../public/assets/transferencia.jpeg';
import efecty from '../../../../public/assets/efecty.jpeg';
import pago_contra_entrega from '../../../../public/assets/pago_contra_entrega.png';

import { StyledSummary } from './styles';
import PaymentDetails from './PaymentDetails';

function Summary({ orderData }) {
  const history = useHistory();

  const handleConfirm = () => {
    history.push('/');
  };

  const getLogo = () => {
    switch (orderData?.paymentmethod) {
      case 'daviplata':
        return daviplata;
      case 'nequi':
        return nequi;
      case 'transferencia':
        return transferencia;
      case 'efecty':
        return efecty;
      case 'pago_contra_entrega':
        return pago_contra_entrega;
      default:
        return null;
    }
  };

  return (
    <StyledSummary>
      <Title
        value={`Felicidades la orden numero RS0000${orderData.order} fue registrada con exito`}
      />
      <Image src={check} size={'128px'} />
      <span>
        Por favor complete la transaccion usando el metodo escogido <b>{orderData.paymentmethod}</b>
      </span>
      <Image src={getLogo()} size={'260px'} />
      <PaymentDetails paymentmethod={orderData?.paymentmethod} />
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
