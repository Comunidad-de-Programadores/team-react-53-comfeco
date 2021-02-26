import React, { useState } from 'react';
import '../../assets/styles/views/RecoveryPass.css';
import { sendRecoverPassword } from '../../firebase/client';

const RecoveryPass = () => {
  const [email, setEmail] = useState('');

  const recoverPassword = () => {
    sendRecoverPassword(email)
      .then(() => {
        alert('¡Ya enviamos un correo para recuperar tu contraseña, revisa tu bandeja de entrada!');
      })
      .catch((error) => {
        console.log(error, 'error al enviar password');
      });
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className='Recovery'>
      <div className='Recovery__container'>
        <h1 className='Recovery__title'>
          <span className='title_hola_rc'>Calma,</span>
          <span className='title__message_rc'> recuperaremos tu clave!</span>
        </h1>
        <form className='Recovery__form' onSubmit={recoverPassword}>
          <div className='form__group_rc'>
            <label htmlFor='email' className='form__label_rc'>
              Ingresa tu correo:
            </label>
            <input
              name='email'
              value={email}
              type='email'
              className='form__input_rc'
              onChange={handleInputChange}
            />
          </div>

          <div className='form__group_rc'>
            <button type='submit' className='form__button_rc'>
              Recuperar contraseña
            </button>
          </div>
        </form>
        <p className='form__relogin_rc'>
          si ya recordaste tu cuenta, ingresa
          <a href='/login'> aquí.</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPass;
