import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../Avatar';

const UpdateProfile = ({ updateProfile, showUpdateProfile }) => {
  const { usuario, validateCurrentPassword, mensaje } = useContext(AuthContext);
  const [actualPassword, setActualPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    message: mensaje,
    type: 'password',
  });
  console.log(errorMessage.message, 'errorcito');
  console.log(mensaje, 'errorcito mensaje');
  console.log(usuario.email, 'aqui');
  console.log(actualPassword, 'contraseña actual');
  const updatePassword = (e) => {
    e.preventDefault();
    console.log(errorMessage.message, 'errorcito');
    validateCurrentPassword(usuario.email, actualPassword);
    updateProfile(true);
  };
  console.log(showUpdateProfile, 'veritas');
  const handleInputChange = (e) => {
    setActualPassword(e.target.value);
  };
  return (
    <div>
      <h3>Editar perfil</h3>
      <form action=''>
        {usuario.photoUrl === '' ? (
          <Avatar />
        ) : (
          <img src={usuario.photoUrl} className='user-img' />
        )}
        <input type='file' />
        <input type='text' placeholder='Nick de usuario' />
        <input type='email' placeholder='example@gmail.com' />
        <input type='text' />
        <input type='date' />
        <input type='text' placeholder='pais' />
        <input type='text' placeholder='área de conocimiento' />
        <input type='text' placeholder='facebook' />
        <input type='text' placeholder='github' />
        <input type='text' placeholder='linkedin' />
        <input type='text' placeholder='twitter' />
        <textarea name='' id='' cols='30' rows='10' placeholder='bibliografia' />
        <button type='submit'>Guardar Cambios</button>
      </form>
      <br />
      <form onSubmit={updatePassword}>
        <p>
          {' '}
          {errorMessage.message && errorMessage.type === 'password' ? <p>{errorMessage.message}</p> : ''}
        </p>
        <label>
          Correo electrónico
        </label>
        <div>{usuario.email}</div>
        <input type='password' value={actualPassword} onChange={handleInputChange} />
        <button type='submit'>Guarda</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
