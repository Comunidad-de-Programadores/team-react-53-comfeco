import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../Avatar';

const UpdateProfile = () => {
  const { usuario } = useContext(AuthContext);
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
    </div>
  );
};

export default UpdateProfile;
