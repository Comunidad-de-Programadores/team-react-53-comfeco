import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginWithGoogle, loginWithFacebook } from '../../firebase/client';
import AuthContext from '../../auth/AuthContext';
// import { types } from '../../types/types';
import '../../assets/styles/views/Login.css';

import fondo from '../../assets/img/fondo.png';

const Login = () => {
  const authContext = useContext(AuthContext);
  const {
    mensaje,
    autenticado,
    iniciarSesion,
    loginGoogle,
    loginFacebook,
  } = authContext;
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    type: '',
  });
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  });
  const initialErrorMessageState = {
    mesage: '',
    type: '',
  };

  const history = useHistory();

  //Extraer de usuario
  const { email, password } = user;

  //En caso de que el password o usuario no exista
  useEffect(() => {
    // if (autenticado) {
    //   history.replace('/');
    // }
    if (mensaje) {
      setErrorMessage({
        message: mensaje,
        type: 'usuario',
      });
    }
  }, [mensaje, autenticado, history]);

  const handleClickGoogle = () => {
    loginGoogle()
      .then((user) => {
        history.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickFacebook = () => {
    loginFacebook()
      .then((user) => {
        history.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const EMAIL_REGEX = new RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    );
    const emailIsValid = EMAIL_REGEX.test(email);
    if (emailIsValid) {
      setFormValid({
        ...formValid,
        email: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    } else {
      setErrorMessage({
        message:
          'Su email es incorrecto. Por favor incluya una @ en el correo electrónico',
        type: 'email',
      });
      setFormValid({
        ...formValid,
        email: false,
      });
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const { value, name } = target;
    console.log(value, 'yo');
    if (value.length === 0) {
      if (name === 'email') {
        setFormValid({
          ...formValid,
          email: false,
        });
      } else {
        setFormValid({
          ...formValid,
          password: false,
        });
      }
      return setErrorMessage({
        message: `Ingrese su ${name}`,
        type: name,
      });
    }
    if (name === 'password') {
      setFormValid({
        ...formValid,
        password: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    }
    if (name === 'email') {
      validateEmail(value);
      setErrorMessage({ ...initialErrorMessageState });
    }
  };

  const Login = (e) => {
    e.preventDefault();
    iniciarSesion({
      email,
      password,
    });
  };

  return (
    <div className='view-login'>
      <div className='box-login-img'>
        <div className='box-login'>
          <div className='Login'>
            <h1 className='Login__title'>
              {/* <span className="title_hola"> Hola, </span> */}
              <span className='title__message'> Iniciar Sesión </span>
            </h1>
            <form className='Login__form' onSubmit={Login}>
              {errorMessage.message ? (
                <div className='error-msj'>{errorMessage.message}</div>
              ) : (
                ''
              )}
              <div className='form__group'>
                <label htmlFor='email' className='form__label'>
                  Email :
                </label>
                <input
                  name='email'
                  type='email'
                  value={user.email}
                  className='form__input'
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  autoComplete='new-password'
                  className={errorMessage.type === 'email' ? 'error' : ''}
                />
              </div>
              <div className='form__group'>
                <label htmlFor='password' className='form__label'>
                  Contraseña:
                </label>
                <input
                  name='password'
                  type='password'
                  value={user.password}
                  className='form__input'
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  autoComplete='new-password'
                  className={errorMessage.type === 'password' ? 'error' : ''}
                />
                <div className='form__pass'>
                  <a href='/recovery-pass' className='form__link'>
                    Recuperar Contraseña
                  </a>
                </div>
                <div className='form__check '>
                  <input type='checkbox' className='w-auto mr-2' />
                  <span className='form__check_s'> Mantenerme conectado </span>
                </div>
              </div>
              <div className='form__group'>
                <button
                  type='submit'
                  className='form__button'
                  disabled={formValid.email === false && formValid.password === false}
                >
                  Entrar
                </button>
                <p className='form__register'>
                  No tiene cuenta registrate
                  <a href='/signup'> aquí. </a>
                </p>
              </div>
            </form>
            <div>
              <div className='social__group'>
                <button
                  type='button'
                  className='form__button_other loginBtn--facebook'
                  onClick={handleClickFacebook}
                >
                  Ingresar con Facebook
                </button>
                <button
                  type='button'
                  className='form__button_other loginBtn--google'
                  onClick={handleClickGoogle}
                >
                  Ingresar con Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='box-img'>
          <img src={fondo} className='' />
        </div>
      </div>
    </div>

  );
};

export default Login;
