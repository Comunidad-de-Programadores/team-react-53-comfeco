import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="Register">
      <div className="Register__container">
        <h1 className="Register__title">
          <span className="title_hola">Bienvenido,</span>
          <span className="title__message">¡Vamos a registrarte!</span>
        </h1>
        <form className="Register__form">
          <div className="form__group_re">
            <label htmlFor="email" className="form__label_re">
              Nick:
            </label>
            <input name="email" type="email" className="form__input_re" />
          </div>
          <div className="form__group_re">
            <label htmlFor="email" className="form__label_re">
              Email:
            </label>
            <input name="email" type="email" className="form__input_re" />
          </div>
          <div className="form__group_re">
            <label htmlFor="password" className="form__label_re">
              Contraseña:
            </label>
            <input name="password" type="password" className="form__input_re" />
          </div>
          <div className="form__group_re">
            <label htmlFor="password" className="form__label_re">
              Confirmar Contraseña:
            </label>
            <input name="password" type="password" className="form__input_re" />
          </div>
          <div className="form__group_re">
            <button type="button" className="form__button_re">
              Registrarse
            </button>
            <p className="form__register_re">
              Ya tienes cuenta? Inicia sesión <a href="#"> aquí.</a>
            </p>
          </div>
          <div className="social__group_re">
            <button type="button" className="form__button_other_re">
              Ingresar con Facebook
            </button>
            <button type="button" className="form__button_other_re">
              Ingresar con Google
            </button>
          </div>
          <p className="form__relogin_re">
            Al registrarte estas aceptando los{' '}
            <a href="#"> Términos y Condiciones</a> y la
            <a href="#"> Política de privacidad y protección de datos</a> de
            COMFECO
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
