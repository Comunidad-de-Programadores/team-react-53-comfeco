import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../Avatar';
import '../../assets/styles/views/UpdateProfile.css';

const UpdateProfile = () => {
  const { usuario, validateCurrentPassword, mensaje, updatePasswordFirebase } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState({
    message: mensaje,
    type: 'password',
  });

  const updatePassword = (e) => {
    e.preventDefault();
    if (newPassword === repeatNewPassword) { updatePasswordFirebase(newPassword); }
    // alert(`Sen envio este password ${currentPassword}`);
    // validateCurrentPassword(usuario.email, currentPassword);

  };
  const updateAllProfile = (e) => {
    e.preventDefault();
  };

  // const handleInputChangePassword = (e) => {
  //   e.preventDefault();
  //   setChanguePassword({
  //     ...changuePassword,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div className='container__profile'>
      <h3>Editar perfil</h3>
      <div className='container__updateProfile'>
        <form className='updateProfile__form' onSubmit={updateAllProfile}>
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
      <div className='container__updatePassword'>
        <form className='updatePassword__form' onSubmit={updatePassword}>
          <p>
            {errorMessage.message && errorMessage.type === 'password' ? <p>{errorMessage.message}</p> : ''}
          </p>
          <label>
            Correo electrónico
          </label>
          <div>{usuario.email}</div>
          {/* <input
            type='password'
            name='actualPassword'
            placeholder='Contraseña Actual'
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
          /> */}
          <input type='password' name='newPassword' placeholder='Nueva Contraseña' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
          <input type='password' name='repeatNewPassword' placeholder='Repetir Nueva Contraseña' onChange={(e) => setRepeatNewPassword(e.target.value)} value={repeatNewPassword} />
          <input type='submit' value='Guardar' />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
