import React from 'react';
import './RecoveryPass.css';

const RecoveryPass = () => {
  return (
    <div className="Recovery">
      <div className="Recovery__container">
        <h1 className="Recovery__title">
          <span className="title_hola">Hola,</span>
          <span className="title__message">Inicia Sesión!</span>
        </h1>
        <form className="Recovery__form">
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email:
            </label>
            <input name="email" type="email" className="form__input" />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Contraseña:
            </label>
            <input name="password" type="password" className="form__input" />
            <a href="#" className="form__link">
              Recuperar Contraseña
            </a>
          </div>
          <div className="form__group">
            <button type="button" className="form__button">
              Entrar
            </button>
            <p className="form__register">
              No tiene cuenta registrate <a href="#">aquí.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoveryPass;
