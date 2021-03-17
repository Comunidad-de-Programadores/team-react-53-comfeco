import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../Avatar';
import { uploadProfilePicture, updateProfile } from '../../firebase/client';
import '../../assets/styles/views/UpdateProfile.css';

const UpdateProfile = () => {
  const { usuario, validateCurrentPassword, mensaje, updatePasswordFirebase } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState({
    imgProfile: null,
    imgProfilePantalla: usuario.photoUrl === '' ? '' : usuario.photoUrl,
  });
  const [dataEditProfile, setDataEditProfile] = useState({
    uid: usuario.uid,
    name: usuario.name,
    email: usuario.email,
    photoUrl: usuario.photoUrl,
    gender: usuario.gender,
    birth: usuario.birth,
    country: usuario.country,
    area: usuario.area,
    facebook: usuario.facebook,
    github: usuario.github,
    linkedin: usuario.linkedin,
    twitter: usuario.twitter,
    bibliography: usuario.bibliography,
    createdAt: usuario.createdAt,
  });
  const [urlProfile, setUrlProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    message: mensaje,
    type: 'password',
  });
  console.log(selectedFile.imgProfile, 'url :)');
  console.log(dataEditProfile, 'objeto perfil');
  console.log(dataEditProfile, 'ojitos :)');
  const updatePassword = (e) => {
    e.preventDefault();
    if (newPassword === repeatNewPassword) { updatePasswordFirebase(newPassword); }
    // validateCurrentPassword(usuario.email, currentPassword);

  };
  const updateAllProfile = (e) => {
    e.preventDefault();
    if (selectedFile.imgProfile !== undefined || selectedFile.imgProfile !== null) {
      uploadProfilePicture(selectedFile.imgProfile, dataEditProfile, setDataEditProfile);
      return;

    }
    updateProfile(dataEditProfile);
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const input = event.target;
    console.log(input.files, 'input');
    if (input.files && input.files[0]) {
      const sizeByte = input.files[0].size;
      const sizeMegaByte = parseFloat(sizeByte / (1024 * 1024)).toFixed(2);
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result, 'resutl');
        if (sizeMegaByte > 1) {
          // setAlertError('El tamaño máximo es de 1mb');
        } else {
          // setAlertError(null);
          setSelectedFile({
            imgProfile: input.files[0],
            imgProfilePantalla: e.target.result,
          });
        }

      };
      reader.readAsDataURL(input.files[0]);

    }
  };
  const handleInputChangeProfile = (e) => {
    e.preventDefault();
    setDataEditProfile({
      ...dataEditProfile,
      [e.target.name]: e.target.value,
    });
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
        <h2>Editar perfil</h2>
        <form className='updateProfile__form' onSubmit={updateAllProfile}>
          <div className='container__updateProfileImg-flex'>
            {dataEditProfile.photoUrl === '' ? (
              <>
                {
                  selectedFile.imgProfilePantalla === '' ?
                    <Avatar size='large' opacity='opacity' /> : (
                      <img
                        id='imagenPromocion'
                        src={selectedFile.imgProfilePantalla}
                        alt='imagen de perfil'
                        className='user-img opacity'
                      />
                    )
                }
                <i className='fas fa-camera' />
              </>
            ) : (
              <>
                <img src={selectedFile.imgProfilePantalla} className='user-img opacity' />
                <i className='fas fa-camera' />
              </>
            )}
            <input
              type='file'
              id='inputFile'
              name='imgProfile'
              accept='image/png, image/jpeg, image/jpg'
              onChange={handleFileChange}
            />
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='name' className='form__label'>
                Nick de Usuario :
              </label>
              <input type='text' id='name' name='name' placeholder='Nick de usuario' className='form__input' value={dataEditProfile.name} onChange={handleInputChangeProfile} />
            </div>
            <div>
              <label htmlFor='email' className='form__label'>
                Correo Electrónico:
              </label>
              <input type='email' id='email' name='email' placeholder='example@gmail.com' className='form__input' value={dataEditProfile.email} onChange={handleInputChangeProfile} />
            </div>
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='gender' className='form__label'>
                Género:
              </label>
              <select name='gender' id='gender' className='form__select' value={dataEditProfile.gender} onChange={handleInputChangeProfile}>
                <option value='Hombre'>Hombre</option>
                <option value='Mujer'>Mujer</option>
                <option value='Otro'>Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor='birth' className='form__label'>
                Fecha de Nacimiento:
              </label>
              <input type='date' id='birth' name='birth' className='form__input' value={dataEditProfile.birth} onChange={handleInputChangeProfile} />
            </div>
          </div>
          <div className='container__updateProfile-flex'>
            <div>
              <label htmlFor='country' className='form__label'>
                País:
              </label>
              <select name='country' id='country' className='form__select' value={dataEditProfile.country} onChange={handleInputChangeProfile}>
                <option value='Perú'>Perú</option>
                <option value='Colombia'>Colombia</option>
                <option value='México'>México</option>
                <option value='Venezuela'>Venezuela</option>
                <option value='Argentina'>Argentina</option>
                <option value='Bolivia'>Bolivia</option>
              </select>
            </div>
            <div>
              <label htmlFor='area' className='form__label'>
                Área de Conocimiento:
              </label>
              <select name='area' id='area' className='form__select' value={dataEditProfile.area} onChange={handleInputChangeProfile}>
                <option value='Frontend'>Frontend</option>
                <option value='Backend'>Backend</option>
                <option value='DevOps'>DevOps</option>
                <option value='Video Game Developers'>Video Game Developers</option>
                <option value='UI/UX'>UI/UX</option>
                <option value='Database Developer'>Database Developer</option>
                <option value='Cloud Computing'>Cloud Computing</option>
              </select>
            </div>
          </div>
          <div className='container__updateProfile-flex margin-top'>
            <label htmlFor='facebook' className='form__label'>
              Facebook
            </label>
            <input type='text' id='facebook' name='facebook' placeholder='facebook' className='form__input' value={dataEditProfile.facebook} onChange={handleInputChangeProfile} />
            <label htmlFor='github' className='form__label'>
              Github
            </label>
            <input type='text' id='github' name='github' placeholder='github' className='form__input' value={dataEditProfile.github} onChange={handleInputChangeProfile} />
          </div>
          <div className='container__updateProfile-flex margin-top'>
            <label htmlFor='linkedin' className='form__label'>
              Linkedin
            </label>
            <input type='text' id='linkedin' name='linkedin' placeholder='linkedin' className='form__input' value={dataEditProfile.linkedin} onChange={handleInputChangeProfile} />
            <label htmlFor='twitter' className='form__label'>
              Twitter
            </label>
            <input type='text' id='twitter' name='twitter' placeholder='twitter' className='form__input' value={dataEditProfile.twitter} onChange={handleInputChangeProfile} />
          </div>

          <label htmlFor='bibliography' className='form__label'>
            Bibliografía
          </label>
          <textarea name='bibliography' id='bibliography' cols='30' rows='10' maxLength='120' className='form__textarea' value={dataEditProfile.bibliography} onChange={handleInputChangeProfile} />
          <button type='submit' className='form__button'>Editar Perfil</button>
        </form>
      </div>
      <div className='container__updatePassword'>
        <h2>Cambiar Contraseña</h2>
        <form className='updatePassword__form' onSubmit={updatePassword}>
          <p>
            {errorMessage.message && errorMessage.type === 'password' ? <p>{errorMessage.message}</p> : ''}
          </p>
          <label className='form__label'>
            Correo electrónico:
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
