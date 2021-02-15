import React from 'react';
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
} from '../../firebase/client';
import './Login.css';

const Login = () => {
  const handleClickGoogle = () => {
    loginWithGoogle()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickFacebook = () => {
    loginWithFacebook()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='Login'>
      <h1 className='Login__title'>
        <span className='title_hola'>Hola,</span>
        <span className='title__message'>Inicia Sesión!</span>
      </h1>
      <form className='Login__form'>
        <div className='form__group'>
          <label htmlFor='email' className='form__label'>
            Email:
          </label>
          <input name='email' type='email' className='form__input' />
        </div>
        <div className='form__group'>
          <label htmlFor='password' className='form__label'>
            Contraseña:
          </label>

          <input name='password' type='password' className='form__input' />

          <div className='form__pass'>
            <a href='#' className='form__link'>
              Recuperar Contraseña
            </a>
          </div>
          <div className='form__check '>
            <input type='checkbox' />

            <span className='form__check_s'>Mantenerme conectado</span>
          </div>
        </div>
        <div className='form__group'>
          <button type='button' className='form__button'>
            Entrar
          </button>
          <p className='form__register'>
            No tiene cuenta registrate
            {' '}
            <a href='#'>aquí.</a>
          </p>
        </div>
        <div className='social__group'>
          <button
            type='button'
            className='form__button_other'
            onClick={handleClickFacebook}
          >
            Ingresar con Facebook
          </button>
          <button
            type='button'
            className='form__button_other'
            onClick={handleClickGoogle}
          >
            Ingresar con Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
