import React, { useState, useEffect } from 'react';
import { wrapComponent } from 'react-snackbar-alert';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getParams } from '../../../utils';
import httpClient from '../../../api/services/axios-client';
import { reduxActions } from '../../../constants';
import Button from '../../Button';
import Image from '../../Image';
import Title from '../../Title';
import HamburgerMenu from '../../HamburgerMenu';
import Footer from '../../Footer';
import check from '../../../../public/assets/check.png';
import error from '../../../../public/assets/error.png';
import pending from '../../../../public/assets/pending.png';
import loadingIcon from '../../../../public/assets/loadingIcon.gif';

import { StyledSummary } from './styles';

const Confirmation = ({ createSnackbar }) => {
  const history = useHistory();
  const params = getParams(window.location.href);
  const { lapTransactionState, TX_VALUE, TX_TAX, referenceCode, buyerEmail } = params;
  const articleImportantData = JSON.parse(localStorage.getItem('products'));
  const order = localStorage.getItem('order');

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const resumeData = {
    iva: TX_TAX,
    paymentmethod: null,
    products: articleImportantData,
    total: TX_VALUE,
    useremail: buyerEmail,
  };

  useEffect(() => {
    setLoading(true);
    if (lapTransactionState === 'APPROVED' || lapTransactionState === 'PENDING') {
      saveOrder();
    }
  }, [lapTransactionState]);

  const saveOrder = () => {
    const orderData = { ...resumeData, order: parseInt(order) };
    httpClient
      .post('orders', orderData)
      .then(response => {
        if (response.status === 201) {
          setLoading(false);
          dispatch({ type: reduxActions.DELETE_ALL });
          createSnackbar({
            message: 'Tu pedido fue creado exitosamente',
            theme: 'success',
          });
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        createSnackbar({
          message: 'Un error ha ocurrido por favor intenta otra vez, mas tarde',
          theme: 'error',
        });
      });
  };

  const handleConfirm = () => {
    localStorage.removeItem('products');
    localStorage.removeItem('order');
    history.push('/');
  };

  const messageToShow = () => {
    switch (lapTransactionState) {
      case 'APPOVED':
        return (
          <StyledSummary>
            <Title
              value={`Felicidades la orden numero ${referenceCode} fue registrada con exito`}
            />
            <Image src={check} size={'128px'} />
            <Button value={'Volver a la tienda'} width={'50%'} onClick={handleConfirm} />
          </StyledSummary>
        );
      case 'PENDING':
        return (
          <StyledSummary>
            <Title
              value={`Tu pedido se encuentra en estado pendiente, por favor envia el comprobante para enviar el pedido`}
            />
            <Image src={pending} size={'128px'} />
            <Button value={'Volver a la tienda'} width={'50%'} onClick={handleConfirm} />
          </StyledSummary>
        );
      default:
        return (
          <StyledSummary>
            <Title
              value={`Ha habido un problema con el pago, por favor completa con la compra con otro medio`}
            />
            <Image src={error} size={'128px'} />
            <Button value={'Volver a la tienda'} width={'50%'} onClick={handleConfirm} />
          </StyledSummary>
        );
    }
  };
  return (
    <>
      <HamburgerMenu colorBackground />
      {loading ? <Image src={loadingIcon} size={'128px'} /> : messageToShow()}
      <br />
      <Footer />
    </>
  );
};

Confirmation.propTypes = {
  createSnackbar: PropTypes.any,
};

export default wrapComponent(Confirmation);
