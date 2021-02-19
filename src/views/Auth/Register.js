import React, { useState, useContext, useEffect } from 'react';
import '../../assets/styles/views/Register.css';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const Register = ({ changePage }) => {
  //extraer los valores del context
  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  // State para iniciar sesión
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmar: '',
  });
  const { nombre, email, password, confirmar } = user;
  //En caso que el usuario se haya autenticado / registrado o sea un registro duplicado
  useEffect(() => {
    if (autenticado) {
      history.push('/');
    }
    if (mensaje) {
      setErrorMessage(mensaje);
    }
  }, [mensaje, autenticado, history]);

  const signIn = (e) => {
    e.preventDefault();
    registrarUsuario({
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

  const handleLogin = () => {
    changePage(true);
  };

  return (
    <div className='Register'>
      <h1 className='Register__title'>
        <span className='title_hola'>Bienvenido,</span>
        <span className='title__message'>¡Vamos a registrarte!</span>
      </h1>
      <form className='Register__form' onSubmit={signIn}>
        {errorMessage ? <p>{errorMessage}</p> : ''}
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
          />
        </div>
        <div className='form__group_re'>
          <label htmlFor='password' className='form__label_re'>
            Confirmar Contraseña:
          </label>
          <input name='password' type='password' className='form__input_re' />
        </div>
        <div className='form__group_re'>
          <button type='submit' className='form__button_re'>
            Registrarse
          </button>
          <label className='form__register_re'>
            Ya tienes cuenta? Inicia sesión
            {' '}
            <button onClick={handleLogin} type='button'>aquí.</button>
          </label>
        </div>
      </form>
      <div>
        <div className='social__group_re'>
          <button type='button' className='form__button_other_re'>
            Ingresar con Facebook
          </button>
          <button type='onSubmit' className='form__button_other_re'>
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
