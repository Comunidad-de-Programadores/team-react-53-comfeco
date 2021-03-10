
import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../../components/Avatar';
import UpdateProfile from '../../components/perfil/UpdateProfile';

const Perfil = () => {
  const { usuario } = useContext(AuthContext);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const updateProfile = () => {
    setShowUpdateProfile(true);
  };
  return (
    <div className='box-perfil'>
      {
        !showUpdateProfile ? (
          <>
            <div className='box-user'>
              <div className='box-info-user'>
                <button onClick={updateProfile}> Editar Perfil</button>
                <div className='circle-user'>
                  {usuario.photoUrl === '' ? (
                    <Avatar />
                  ) : (
                    <img src={usuario.photoUrl} className='user-img' />
                  )}
                </div>
                <h4>{usuario.name}</h4>
                <span />
                <p>lksjlkdj lkdkldjlkdj lkdjlksdjlskjdflsk jfdsklppppppppppp</p>
                <hr />
              </div>
            </div>
            <div className='box-centro'>
              <h5>Insignias</h5>
            </div>
            <div className='box-user'>
              <div className='box-info-user'>
                <div className='circle-user'>
                  {' '}
                  {usuario.photoUrl === '' ? (
                    <Avatar />
                  ) : (
                    <img src={usuario.photoUrl} className='user-img ' />
                  )}
                </div>
                <h4>{usuario.name}</h4>
                <span />
                <p>lksjlkdj lkdkldjlkdj lkdjlksdjlskjdflsk jfdsklppppppppppp</p>
                <hr />
              </div>
            </div>
          </>
        ) :
          <UpdateProfile />
      }
    </div>
  );
};

export default Perfil;
