import React, { useState } from 'react';
import '../../assets/styles/views/RecoveryPass.css';
import { recoveryPass } from '../../firebase/client';

const NewPassword = () => {
  const [newPass, setNewPass] = useState('');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('oobCode');

  const newPassword = (e) => {
    e.preventDefault();
    recoveryPass(code, newPass)
      .then(() => {
        alert('Tu contraseña se actualizó correctamente, vuelve al login por favor');
      })
      .catch((error) => {
        console.log(error, 'error al establecer nueva contraseña');
      });
  };

  const handleInputChange = (e) => {
    setNewPass(e.target.value);
  };
  return (
    <div className='Recovery'>
      <div className='Recovery__container'>
        <h1 className='Recovery__title'>
          <span className='title_hola_rc'>Establecer nueva contraseña</span>
        </h1>
        <form className='Recovery__form' onSubmit={newPassword}>
          <div className='form__group_rc'>
            <label htmlFor='email' className='form__label_rc'>
                            Ingresa tu nueva contraseña:
            </label>
            <input
              name='password'
              value={newPass}
              type='password'
              className='form__input_rc'
              onChange={handleInputChange}
            />
          </div>

          <div className='form__group_rc'>
            <button type='submit' className='form__button_rc'>
                            Establecer nueva contraseña
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

export default NewPassword;
