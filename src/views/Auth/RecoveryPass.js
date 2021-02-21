import React from 'react';
// import './RecoveryPass.css';


const RecoveryPass = () => {
  return (
    <div className="Recovery">
      <div className="Recovery__container">
        <h1 className="Recovery__title">
          <span className="title_hola_rc">Calma,</span>
          <span className="title__message_rc"> recuperaremos tu clave!</span>
        </h1>
        <form className="Recovery__form">
          <div className="form__group_rc">
            <label htmlFor="email" className="form__label_rc">
              Ingresa tu correo:
            </label>
            <input name="email" type="email" className="form__input_rc" />
          </div>

          <div className="form__group_rc">
            <button type="button" className="form__button_rc">
              Recuperar contraseña
            </button>
            <p className="form__relogin_rc">
              si ya recordaste tu cuenta, ingresa <a href="#"> aquí.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoveryPass;
