import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';
import md5 from 'md5';

import Title from '../../Title';
import Button from '../../Button';
import RadioButton from '../../RadioButton';
import daviplata from '../../../../public/assets/daviplata.png';
import nequi from '../../../../public/assets/nequi.jpg';
import transferencia from '../../../../public/assets/transferencia.jpeg';
import efecty from '../../../../public/assets/efecty.jpeg';
import payu_logo from '../../../../public/assets/payu_logo.png';
import pago_contra_entrega from '../../../../public/assets/pago_contra_entrega.png';
import loadingIcon from '../../../../public/assets/loadingIcon.gif';
import httpClient from '../../../api/services/axios-client';
import Image from '../../Image';
import { reduxActions } from '../../../constants';

import {
  StyledItemsContainer,
  StyledUserDataTable,
  StyledMethodelector,
  StyledConfirmButton,
} from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';

function Resume({ backFn, createSnackbar, iva, total, goToSummary }) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.shopCar.articles);
  const userData = JSON.parse(localStorage.getItem('user'));
  const articleImportantData = articles.map(item => {
    const newObject = {};
    const { color, quantity, size, name, id, ref } = item;
    return {
      ...newObject,
      color,
      id,
      name,
      quantity,
      ref,
      size,
    };
  });

  const initialState = {
    iva: iva.toString(),
    paymentmethod: null,
    products: articleImportantData,
    total: total.toString(),
    useremail: userData.email,
  };
  const [resumeData, setresumeData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState();

  const { firstName, lastName, email, address, city } = userData;

  useEffect(() => {
    httpClient
      .get('orders')
      .then(response => {
        if (response.status === 200) {
          if (response.data) {
            const orderNumber = response.data.length + 1;
            setOrderNumber(orderNumber);
            localStorage.setItem('order', orderNumber);
            localStorage.setItem('products', JSON.stringify(resumeData.products));
          } else {
            createSnackbar({
              message: 'Error en la creacion de su orden',
              theme: 'error',
            });
          }
        }
      })
      .catch(error => {
        console.error(error);
        createSnackbar({
          message: 'Un error ha ocurrido por favor intenta otra vez, mas tarde',
          theme: 'error',
        });
      });
  });

  const saveOrder = orderNumber => {
    const orderData = { ...resumeData, order: orderNumber };
    httpClient
      .post('orders', orderData)
      .then(response => {
        if (response.status === 201) {
          setLoading(false);
          dispatch({ type: reduxActions.DELETE_ALL });
          goToSummary(orderData);
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

  const getSignature = () => {
    const apiKey = '486h7WJ5y69O4Pw7X3x90WcSa6';
    const merchantId = '856237';
    const refCode = `RS0000${orderNumber}`;
    const currency = 'COP';

    return md5(apiKey + '~' + merchantId + '~' + refCode + '~' + total + '~' + currency);
  };
  const handleConfirm = () => {
    if (!resumeData.paymentmethod) {
      createSnackbar({
        message: 'Por favor, seleccione un metodo de pago para continuar',
        theme: 'error',
      });
      return;
    }
    setLoading(true);
    saveOrder(orderNumber);
  };

  const handleMethod = e => {
    setresumeData({ ...resumeData, paymentmethod: e.target.value });
  };
  return (
    <>
      {loading ? (
        <Image src={loadingIcon} size={'128px'} />
      ) : (
        <>
          <Title value={`!Hola ${firstName}!`} />
          <hr />
          <Title value={`Resumen de Pedido`} />
          <hr />
          <StyledItemsContainer>
            {articles.map((item, idx) => {
              return <ShopCarItem item={item} key={idx} idx={idx} />;
            })}
          </StyledItemsContainer>
          <ShopCarSummary total={total} iva={iva} />
          <hr />
          <Title value={`Datos de usuario`} />
          <StyledUserDataTable>
            <tr>
              <td>
                <b>Nombre: </b>
              </td>

              <td>
                {firstName} {lastName}
              </td>
            </tr>
            <tr>
              <td>
                <b>Email:</b>
              </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>
                <b>Ciudad:</b>
              </td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>
                <b>Direccion:</b>
              </td>
              <td>{address}</td>
            </tr>
          </StyledUserDataTable>
          <hr />
          <Title value={`Metodos de Pago`} />
          <StyledMethodelector>
            <RadioButton
              name={'metodoPago'}
              value={'payu'}
              id={'payu'}
              image={payu_logo}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'payu'}
            />
            <RadioButton
              name={'metodoPago'}
              value={'daviplata'}
              id={'daviplata'}
              image={daviplata}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'daviplata'}
            />
            <RadioButton
              name={'metodoPago'}
              value={'nequi'}
              id={'nequi'}
              image={nequi}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'nequi'}
            />
            <RadioButton
              name={'metodoPago'}
              value={'transferencia'}
              id={'transferencia'}
              image={transferencia}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'transferencia'}
            />
            <RadioButton
              name={'metodoPago'}
              value={'efecty'}
              id={'efecty'}
              image={efecty}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'efecty'}
            />
            <RadioButton
              name={'metodoPago'}
              value={'pago_contra_entrega'}
              id={'pago_contra_entrega'}
              image={pago_contra_entrega}
              onClick={handleMethod}
              selectedItem={resumeData.paymentmethod === 'pago_contra_entrega'}
            />
          </StyledMethodelector>
          <hr />
          {resumeData.paymentmethod === 'payu' ? (
            <form
              method="post"
              action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
              style={{ textAlign: 'center' }}>
              <input name="accountId" type="hidden" value="863791" />
              <input name="merchantId" type="hidden" value="856237" />
              <input name="description" type="hidden" value="Pedido Rossys Sweaters" />
              <input name="referenceCode" type="hidden" value={`RS0000${orderNumber}`} />
              <input name="amount" type="hidden" value={total} />
              <input name="tax" type="hidden" value={iva} />
              <input name="taxReturnBase" type="hidden" value={total - iva} />
              <input name="currency" type="hidden" value="COP" />
              <input name="signature" type="hidden" value={getSignature()} />
              <input name="buyerEmail" type="hidden" value={email} />
              <input name="shippingAddress" type="hidden" value={address} />
              <input name="shippingCity" type="hidden" value="Bogota" />
              <input name="shippingCountry" type="hidden" value="CO" />
              <input
                name="responseUrl"
                type="hidden"
                value="https://www.sweatersrossys.com/response"
              />
              <input
                name="confirmationUrl"
                type="hidden"
                value="https://www.sweatersrossys.com//confirm/"
              />
              <StyledConfirmButton type="submit" name="Submit" value="Confirmar" width={'50%'} />
            </form>
          ) : (
            <Button value={'Confirmar'} width={'50%'} onClick={handleConfirm} />
          )}

          <Button value={'Volver'} width={'50%'} onClick={backFn} type={'secondary'} />
        </>
      )}
    </>
  );
}

Resume.propTypes = {
  backFn: PropTypes.func,
  createSnackbar: PropTypes.any,
  goToSummary: PropTypes.func,
  iva: PropTypes.number,
  total: PropTypes.number,
};

export default wrapComponent(Resume);
