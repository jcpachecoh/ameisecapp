import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { wrapComponent } from 'react-snackbar-alert';

import Title from '../../Title';
import Button from '../../Button';
import RadioButton from '../../RadioButton';
import daviplata from '../../../../public/assets/daviplata.png';
import nequi from '../../../../public/assets/nequi.jpg';
import transferencia from '../../../../public/assets/transferencia.jpeg';
import efecty from '../../../../public/assets/efecty.jpeg';
import pago_contra_entrega from '../../../../public/assets/pago_contra_entrega.png';
import loadingIcon from '../../../../public/assets/loadingIcon.gif';
import httpClient from '../../../api/services/axios-client';
import Image from '../../Image';
import { reduxActions } from '../../../constants';

import { StyledItemsContainer, StyledUserDataTable, StyledMethodelector } from './styles';
import ShopCarItem from './ShopCarItem';
import ShopCarSummary from './ShopCarSummary';

function Resume({ backFn, createSnackbar, iva, total, goToSummary }) {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.shopCar.articles);
  const userData = useSelector(state => state.user.userData);
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

  const { firstName, lastName, email, address, city } = userData;

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
  const handleConfirm = () => {
    if (!resumeData.paymentmethod) {
      createSnackbar({
        message: 'Por favor, seleccione un metodo de pago para continuar',
        theme: 'error',
      });
      return;
    }
    setLoading(true);
    httpClient
      .get('orders')
      .then(response => {
        if (response.status === 200) {
          if (response.data) {
            const orderNumber = response.data.length + 1;
            saveOrder(orderNumber);
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
          <Button value={'Confirmar'} width={'50%'} onClick={handleConfirm} />
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
