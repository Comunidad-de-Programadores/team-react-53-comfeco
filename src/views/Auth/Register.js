import React, { useState, useContext, useEffect } from 'react';
import '../../assets/styles/views/Register.css';
import { useHistory, Redirect, Link } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const Register = () => {
  //extraer los valores del context
  const authContext = useContext(AuthContext);
  const {
    mensaje,
    autenticado,
    registrarUsuario,
    loginGoogle,
    loginFacebook } = authContext;
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    type: '',
  });
  const history = useHistory();
  // Statepara iniciar sesión
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmar: '',
  });
  const { name, email, password, confirmar } = user;
  const [formValid, setFormValid] = useState({
    name: false,
    email: false,
    password: false,
    confirmar: false,
  });
  const initialErrorMessageState = {
    mesage: '',
    type: '',
  };
  //En caso que el usuario se haya autenticado / registrado o sea un registro duplicado
  useEffect(() => {
    // if (autenticado) {
    //   history.push('/');
    // }
    if (mensaje) {
      setErrorMessage({
        message: mensaje,
        type: 'usuario',
      });
    }
  }, [mensaje, autenticado, history]);

  const signIn = (e) => {
    e.preventDefault();
    registrarUsuario({
      name,
      email,
      password,
    });
  };
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const emailIsValid = EMAIL_REGEX.test(email);
    if (emailIsValid) {
      setFormValid({
        ...formValid,
        email: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    } else {
      setErrorMessage({
        message: 'Su email es incorrecto',
        type: 'email',
      });
      setFormValid({
        ...formValid,
        email: false,
      });
    }
  };

  const validateConfirmar = (confirmar) => {
    if (confirmar === password) {
      setFormValid({
        ...formValid,
        confirmar: true,
      });
      setErrorMessage({ ...initialErrorMessageState });
    } else {
      setErrorMessage({
        message: 'No coinciden sus contraseñas',
        type: 'confirmar',
      });
      setFormValid({
        ...formValid,
        confirmar: false,
      });
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const { value, name } = target;
    let message;
    if (value.length === 0) {
      switch (name) {
        case 'name':
          setFormValid({
            ...formValid,
            name: false,
          });
          message = 'Ingrese su nick';
          break;
        case 'email':
          setFormValid({
            ...formValid,
            email: false,
          });
          message = `Ingrese su ${name}`;
          break;
        case 'password':
          setFormValid({
            ...formValid,
            password: false,
          });
          message = `Ingrese su ${name}`;
          break;
        case 'confirmar':
          setFormValid({
            ...formValid,
            confirmar: false,
          });
          message = 'Confirme su password';
          break;
      }

      return setErrorMessage({
        message,
        type: name,
      });
    }

    switch (name) {
      case 'name':
        setFormValid({
          ...formValid,
          name: true,
        });
        setErrorMessage({ ...initialErrorMessageState });
        break;
      case 'email':
        validateEmail(value);
        break;
      case 'password':
        setFormValid({
          ...formValid,
          password: true,
        });
        setErrorMessage({ ...initialErrorMessageState });
        break;
      case 'confirmar':
        validateConfirmar(value);
        break;
    }

  };
  if (autenticado) {
    return <Redirect to='/' />;
  }
  const handleClickGoogle = () => {
    loginGoogle()
      .then((user) => {
        console.log(user);
        history.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickFacebook = () => {
    loginFacebook()
      .then((user) => {
        console.log(user);
        history.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='Register'>
      <h1 className='Register__title'>
        <span className='title_hola'>Bienvenido,</span>
        <span className='title__message'>¡Vamos a registrarte!</span>
      </h1>
      <form className='Register__form' onSubmit={signIn}>
        {errorMessage.message ? <p>{errorMessage.message}</p> : ''}
        <div className='form__group_re'>
          <label htmlFor='name' className='form__label_re'>
            Nick:
          </label>
          <input
            name='name'
            type='name'
            value={user.name}
            className='form__input_re'
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errorMessage.type === 'name' ? 'error' : ''}
          />
        </div>
        <div className='form__group_re'>
          <label htmlFor='email' className='form__label_re'>
            Email:
          </label>
          <input
            name='email'
            type='email'
            value={user.email}
            className='form__input_re'
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errorMessage.type === 'email' ? 'error' : ''}
          />
        </div>
        <div className='form__group_re'>
          <label htmlFor='password' className='form__label_re'>
            Contraseña:
          </label>
          <input
            name='password'
            type='password'
            value={user.password}
            className='form__input_re'
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errorMessage.type === 'password' ? 'error' : ''}
          />
        </div>
        <div className='form__group_re'>
          <label htmlFor='password' className='form__label_re'>
            Confirmar Contraseña:
          </label>
          <input
            name='confirmar'
            type='password'
            className='form__input_re'
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={errorMessage.type === 'confirmar' ? 'error' : ''}
          />
        </div>
        <div className='form__group_re'>
          <button
            type='submit'
            className='form__button_re'
            disabled={
              !(
                formValid.name &&
                formValid.email &&
                formValid.password &&
                formValid.confirmar
              )
            }
          >
            Registrarse
          </button>
          <label className='form__register_re'>
            Ya tienes cuenta? Inicia sesión
            {' '}
            <Link to='/login' type='button'>
              aquí.
            </Link>
          </label>
        </div>
      </form>
      <div>
        <div className='social__group_re'>
          <button
            type='button'
            className='form__button_other_re'
            onClick={handleClickFacebook}
          >
            Ingresar con Facebook
          </button>
          <button
            type='button'
            className='form__button_other_re'
            onClick={handleClickGoogle}
          >
            Ingresar con Google
          </button>
        </div>
        <p className='form__relogin_re'>
          Al registrarte estas aceptando los
          <a href='#'> Términos y Condiciones</a>
          y la
          <a href='#'> Política de privacidad y protección de datos</a>
          de COMFECO
        </p>
      </div>
    </div>
  );
};

export default Register;
