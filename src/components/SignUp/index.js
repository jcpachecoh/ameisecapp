import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { wrapComponent } from 'react-snackbar-alert';

import InputText from '../InputText';
import Title from '../Title';
import Button from '../Button';
import Icon from '../Icon';
import httpClient from '../../api/services/axios-client';
import check from '../../../public/assets/check.png';

import { StyledSignUp, StyledSuccess } from './styles';

function SignUp({ createSnackbar, backFn, showForm }) {
  const initialSignUpForm = {
    address: null,
    city: null,
    company: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phone: null,
  };

  const initialErrors = {
    address: null,
    city: null,
    company: null,
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    phone: null,
  };

  const [signUpForm, setSignUpForm] = useState(initialSignUpForm);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleForm = e => {
    const { name, value } = e.target;
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (name === 'email') {
      if (!regex.test(value)) {
        setErrors({ ...errors, [name]: 'Formato de email invalido' });
        setSignUpForm({ ...signUpForm, [name]: value });
      } else {
        setErrors({ ...errors, [name]: null });
        setSignUpForm({ ...signUpForm, [name]: value });
      }
      return;
    }
    setErrors({ ...errors, [name]: null });
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const checkFields = () => {
    let errorsFields = {};
    if (!signUpForm.firstName) {
      errorsFields = {
        ...errorsFields,
        firstName: 'Por favor ingrese su nombre',
      };
    }
    if (!signUpForm.lastName) {
      errorsFields = {
        ...errorsFields,
        lastName: 'Por favor ingrese su apellido',
      };
    }
    if (!signUpForm.email) {
      errorsFields = {
        ...errorsFields,
        email: 'Por favor ingrese su email',
      };
    }
    if (!signUpForm.password) {
      errorsFields = {
        ...errorsFields,
        password: 'Por favor ingrese su contraseña',
      };
    }
    if (!signUpForm.phone) {
      errorsFields = {
        ...errorsFields,
        phone: 'Por favor ingrese su telefono',
      };
    }
    if (!signUpForm.city) {
      errorsFields = {
        ...errorsFields,
        city: 'Por favor ingrese su ciudad',
      };
    }
    if (!signUpForm.address) {
      errorsFields = {
        ...errorsFields,
        address: 'Por favor ingrese su address',
      };
    }
    setErrors(errorsFields);
    return Object.keys(errorsFields).length === 0 ? true : false;
  };

  const submitForm = () => {
    const validField = checkFields();
    if (validField) {
      setLoading(true);
      httpClient
        .post('users', signUpForm)
        .then(response => {
          if (response.status === 201) {
            setLoading(false);
            setSaved(true);
            backFn();
            setSignUpForm(initialSignUpForm);
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
    }
  };
  return (
    <Fragment>
      {saved ? (
        <StyledSuccess>
          <Title value={'Tu usuario fue registrado existosamente'} />
          <Icon image={check} size={'128px'} />
        </StyledSuccess>
      ) : showForm ? (
        <StyledSignUp>
          <Title value={'Eres un Nuevo usuario? Registra tus datos para completar tu pedido'} />
          <InputText
            value={signUpForm.firstName}
            label={'Primer Nombre'}
            placeholder={'Tu primer nombre'}
            onChange={handleForm}
            name={'firstName'}
            errorLabel={errors.firstName}
          />
          <InputText
            value={signUpForm.lastName}
            label={'Apellido'}
            placeholder={'Tu Apellido'}
            onChange={handleForm}
            name={'lastName'}
            errorLabel={errors.lastName}
          />
          <InputText
            value={signUpForm.email}
            label={'Email'}
            type={'email'}
            placeholder={'xxxx@gmail.com'}
            onChange={handleForm}
            name={'email'}
            errorLabel={errors.email}
          />
          <InputText
            value={signUpForm.password}
            type={'password'}
            label={'Contraseña'}
            placeholder={'xxxxxxx'}
            onChange={handleForm}
            name={'password'}
            errorLabel={errors.password}
          />
          <InputText
            value={signUpForm.phone}
            label={'Telefono'}
            placeholder={'(3xx-xxxxxxxxx)'}
            onChange={handleForm}
            name={'phone'}
            errorLabel={errors.phone}
          />
          <InputText
            value={signUpForm.city}
            label={'Ciudad'}
            placeholder={'Tu ciudad'}
            onChange={handleForm}
            name={'city'}
            errorLabel={errors.city}
          />
          <InputText
            value={signUpForm.address}
            label={'Dirección'}
            placeholder={'Cra xx No yy-yy'}
            onChange={handleForm}
            name={'address'}
            errorLabel={errors.address}
          />
          <InputText
            value={signUpForm.company}
            label={'Empresa'}
            placeholder={'(Opcional)'}
            onChange={handleForm}
            name={'company'}
            errorLabel={errors.company}
          />
          <br />
          {loading && 'Guardando...'}
          <Button value={'Registrar'} width={'50%'} onClick={submitForm} disabled={loading} />
        </StyledSignUp>
      ) : (
        <Button value={'Registrate'} type={'secondary'} onClick={backFn} width={'50%'} />
      )}
    </Fragment>
  );
}

SignUp.propTypes = {
  backFn: PropTypes.string,
  createSnackbar: PropTypes.any,
  showForm: PropTypes.bool,
};

export default wrapComponent(SignUp);
