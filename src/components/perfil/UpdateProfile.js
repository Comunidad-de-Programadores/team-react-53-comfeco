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
      <div className='container__updateProfile'>
        <h3>Editar perfil</h3>
        <form className='updateProfile__form' onSubmit={updateAllProfile}>
          <div className='container__updateProfileImg-flex'>
            {usuario.photoUrl === '' ? (
              <Avatar />
            ) : (
              <img src={usuario.photoUrl} className='user-img' />
            )}
            <input type='file' />
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='name' className='form__label'>
                Nick de Usuario :
              </label>
              <input type='text' id='name' name='name' placeholder='Nick de usuario' className='form__input' />
            </div>
            <div>
              <label htmlFor='email' className='form__label'>
                Correo Electrónico:
              </label>
              <input type='email' id='email' name='email' placeholder='example@gmail.com' className='form__input' />
            </div>
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='gender' className='form__label'>
                Género
              </label>
              <select name='gender' id='gender' className='form__select'>
                <option value=''>Hombre</option>
                <option value=''>Mujer</option>
                <option value=''>Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor='birth' className='form__label'>
                Fecha de Nacimiento
              </label>
              <input type='date' id='birth' name='birth' className='form__input' />
            </div>
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='country' className='form__label'>
                País
              </label>
              <select name='country' id='country' className='form__select'>
                <option value=''>Perú</option>
                <option value=''>Colombia</option>
                <option value=''>México</option>
                <option value=''>Venezuela</option>
                <option value=''>Argentina</option>
                <option value=''>Bolivia</option>
              </select>
            </div>
            <div>
              <label htmlFor='area' className='form__label'>
                Área de Conocimiento
              </label>
              <select name='area' id='area' className='form__select'>
                <option value=''>Frontend</option>
                <option value=''>Backend</option>
                <option value=''>DevOps</option>
                <option value=''>Video Game Developers</option>
                <option value=''>UI/UX</option>
                <option value=''>Database Developer</option>
                <option value=''>Cloud Computing</option>
              </select>
            </div>
          </div>
          <div className='container__updateProfile-flex margin-top'>
            <label htmlFor='facebook' className='form__label'>
              Facebook
            </label>
            <input type='text' id='facebook' name='facebook' placeholder='facebook' className='form__input' />
            <label htmlFor='github' className='form__label'>
              Github
            </label>
            <input type='text' id='github' name='github' placeholder='github' className='form__input' />
          </div>
          <div className='container__updateProfile-flex margin-top'>
            <label htmlFor='linkedin' className='form__label'>
              Linkedin
            </label>
            <input type='text' id='linkedin' name='linkedin' placeholder='linkedin' className='form__input' />
            <label htmlFor='twitter' className='form__label'>
              Twitter
            </label>
            <input type='text' id='twitter' name='twitter' placeholder='twitter' className='form__input' />
          </div>

          <label htmlFor='bibliography' className='form__label'>
            Bibliografía
          </label>
          <textarea name='bibliography' id='bibliography' cols='30' rows='10' maxLength='120' className='form__textarea' />
          <button type='submit' className='form__button'>Editar Perfil</button>
        </form>
      </div>
      <div className='container__updatePassword'>
        <h3>Cambiar Contraseña</h3>
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
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='newPassword' className='form__label'>
                Nueva Contraseña
              </label>
              <input type='password' name='newPassword' id='newPassword' placeholder='Nueva Contraseña' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className='form__input' />
            </div>
            <div>
              <label htmlFor='repeatNewPassword' className='form__label'>
                Repetir Nueva Contraseña
              </label>
              <input type='password' name='repeatNewPassword' id='repeatNewPassword' placeholder='Repetir Nueva Contraseña' onChange={(e) => setRepeatNewPassword(e.target.value)} value={repeatNewPassword} className='form__input' />
            </div>
          </div>
          <button type='submit' className='form__button'>Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
