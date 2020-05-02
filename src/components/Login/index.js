import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { wrapComponent } from 'react-snackbar-alert';
import { useDispatch } from 'react-redux';

import InputText from '../InputText';
import Button from '../Button';
import httpClient from '../../api/services/axios-client';

import { StyledLogin } from './styles';

function Login({ createSnackbar, backFn, moveToResume, showForm }) {
  const dispatch = useDispatch();
  const initialLoginForm = {
    email: null,
    password: null,
  };

  const [LoginForm, setLoginForm] = useState(initialLoginForm);
  const [userData, setUserData] = useState({});

  const setLoginData = userExist => {
    dispatch({ type: 'UPDATE_USER_DATA', userData: userExist });
    dispatch({ type: 'UPDATE_LOGIN_STATUS', value: true });
    moveToResume();
  };

  const handleLogin = () => {
    httpClient
      .get('users')
      .then(response => {
        if (response.status === 200) {
          const userExist = response.data.find(
            item => item.email === LoginForm.email && item.password === LoginForm.password,
          );
          if (userExist) {
            setLoginData(userExist);
          } else {
            createSnackbar({
              message: 'Error en el inicio de sesion verifica datos',
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

  const handleForm = e => {
    const { name, value } = e.target;
    setLoginForm({ ...LoginForm, [name]: value });
  };
  return (
    <>
      {showForm ? (
        <StyledLogin>
          <InputText
            value={LoginForm.email}
            label={'Email'}
            type={'email'}
            placeholder={'xxxx@gmail.com'}
            onChange={handleForm}
            name={'email'}
          />
          <InputText
            value={LoginForm.password}
            label={'Contraseña'}
            placeholder={'xxxxxxx'}
            onChange={handleForm}
            name={'password'}
            type={'password'}
          />
          <br />
          <Button value={'Logearte'} width={'50%'} onClick={handleLogin} />
        </StyledLogin>
      ) : (
        <Button value={'Logueate'} type={'secondary'} onClick={backFn} width={'50%'} />
      )}
    </>
  );
}

Login.propTypes = {
  backFn: PropTypes.string,
  createSnackbar: PropTypes.any,
  moveToResume: PropTypes.func,
  showForm: PropTypes.bool,
};

export default wrapComponent(Login);
