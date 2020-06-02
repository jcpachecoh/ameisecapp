import React, { useState } from 'react';
import { wrapComponent } from 'react-snackbar-alert';
import PropTypes from 'prop-types';

import { messages } from '../../constants/messages';
import InputText from '../InputText';
import Button from '../Button';
import Title from '../Title';
import { isDesktop } from '../../utils';
import httpClient from '../../api/services/axios-client';

import { StyledEmailPromotion } from './styles';

function EmailPromotion({ createSnackbar }) {
  const [email, setemail] = useState('');
  const handleEmail = evt => {
    const value = evt.target.value;
    setemail(value);
  };

  const handleSubmit = () => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!email && !regex.test(email)) {
      createSnackbar({
        message: 'Por favor ingrese un correo valido para continuar.',
        theme: 'error',
      });
    } else {
      const body = {
        emailAddress: email,
      };
      httpClient
        .post(
          'https://k0opndd78k.execute-api.us-east-1.amazonaws.com/rossys-stage/sendEmailWithAttachment',
          body,
        )
        .then(res => {
          if (res.status === 200) {
            createSnackbar({
              message: 'Su email fue guardado recibira un email, con el codigo de descuento',
              theme: 'success',
            });
          }
        })
        .catch(e => {
          createSnackbar({
            message: 'Un error ocurrio, intenta mas tarde',
            theme: 'error',
          });
        });
    }
  };

  const isDesktopDevice = isDesktop();
  return (
    <StyledEmailPromotion>
      <Title value={messages.emailPromotion} />
      <div>
        <InputText
          name={'newsletter'}
          type={'email'}
          placeholder={messages.email}
          value={email}
          onChange={handleEmail}
          width={isDesktopDevice ? '520px' : '200px'}
        />
        <Button onClick={handleSubmit} value={messages.submit} zIndex={0} width={'30%'} />
      </div>
    </StyledEmailPromotion>
  );
}

EmailPromotion.propTypes = {
  createSnackbar: PropTypes.any,
};

export default wrapComponent(EmailPromotion);
