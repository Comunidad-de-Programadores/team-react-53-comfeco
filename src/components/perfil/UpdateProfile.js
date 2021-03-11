import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../Avatar';

const UpdateProfile = () => {
  const { usuario, validateCurrentPassword, mensaje } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState({
    message: mensaje,
    type: 'password',
  });

  const updatePassword = (e) => {
    e.preventDefault();
    validateCurrentPassword(usuario.email, currentPassword);
  };

  // const handleInputChangePassword = (e) => {
  //   e.preventDefault();
  //   setChanguePassword({
  //     ...changuePassword,
  //     [e.target.name]: e.target.value,
  //   });
  // };
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
      <p>
        {' '}
        {errorMessage.message && errorMessage.type === 'password' ? <p>{errorMessage.message}</p> : ''}
      </p>
      <form onSubmit={updatePassword}>
        <label>
          Correo electrónico
        </label>
        <div>{usuario.email}</div>
        <input
          type='password'
          name='actualPassword'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input type='password' name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type='password' name='repeatNewPassword' value={repeatNewPassword} onChange={(e) => setRepeatNewPassword(e.target.value)} />
        <button type='submit'>Guarda</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
