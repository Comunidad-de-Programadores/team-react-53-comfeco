import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Avatar from '../../components/Avatar';
import UpdateProfile from '../../components/perfil/UpdateProfile';
import EventsProfile from '../../components/perfil/EventsProfile';
import Activity from '../../components/perfil/Activity';
import { get } from '../../firebase/client';

const Perfil = () => {
  const { usuario, updateProfile } = useContext(AuthContext);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [user, setUser] = useState(false);

  const functionUpdateProfile = (show) => {
    setShowUpdateProfile(show);
  };

  return (
    <div className='container-comfeco'>
      <div className='box-perfil'>
        {showUpdateProfile === false && updateProfile === false ? (
          <>
            <div className='box-user'>
              <div className='box-info-user'>
                <a
                  className='link-editar'
                  onClick={() => functionUpdateProfile(true)}
                >
                  {' '}
                  Editar Perfil
                </a>
                <div className='circle-user'>
                  {usuario.photoUrl === '' ? (
                    <Avatar size='large' />
                  ) : (
                    <img src={usuario.photoUrl} className='user-img' />
                  )}
                </div>
                <h4 className='user-name'>{usuario.name}</h4>
                <span />
                <p>{usuario.bibliography}</p>
                <hr />
                <div className='box-redes-user'>
                  {/* facebook: data.facebook === '' ? '' : `https://www.facebook.com/$
                  {data.facebook}
                  `,
                  github: data.github === '' ? '' : `https://github.com/$
                  {data.github}
                  `,
                  linkedin: data.linkedin === '' ? '' : `https://www.linkedin.com/in/$
                  {data.linkedin}
                  `,
                  twitter: data.twitter === '' ? '' : `https://twitter.com/$
                  {data.twitter}
                  `, */}
                  {
                    usuario.facebook !== '' && (
                      <a
                        href={`https://www.facebook.com/${usuario.facebook}`}
                        className='redes-user'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fab fa-facebook-f' />
                      </a>
                    )
                  }
                  {
                    usuario.github !== '' && (
                      <a
                        href={`https://github.com/${usuario.github}`}
                        className='redes-user'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fab fa-github' />
                      </a>
                    )
                  }
                  {
                    usuario.linkedin !== '' && (
                      <a
                        href={`https://www.linkedin.com/in/${usuario.linkedin}`}
                        className='redes-user'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fab fa-linkedin-in' />
                      </a>
                    )
                  }
                  {
                    usuario.twitter !== '' && (
                      <a
                        href={`https://twitter.com/${usuario.twitter}`}
                        className='redes-user'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fab fa-twitter' />
                      </a>
                    )
                  }

                </div>
              </div>
            </div>
            <div className='box-centro'>
              <div className='box-centro-insignia'>
                <h5> Mis insignias</h5>
                <div className='box-all-insignias'>
                  <div className='box-insignia'>
                    {' '}
                    <img src={usuario.photoUrl} className='insignia-img' />
                  </div>
                  <div className='box-insignia'>
                    {' '}
                    <img src={usuario.photoUrl} className='insignia-img' />
                  </div>

                </div>
              </div>
              <div className='box-centro-actividad'>
                <h5> Actividad reciente</h5>
                <div className='box-all-activity'>
                  {console.log('La actividad del usuario es: ', usuario.activity)}
                  {usuario.activity.length > 0 ? (
                    usuario.activity.map((item) => {
                      return <Activity type={item.type} title={item.title} message={item.message} color={item.color} time={item.time} />;
                    })
                  ) : (
                    <div className='no-activites'>
                      <i class="far fa-frown-open fa-5x"></i>
                      <h3>Lastimosamente aún no tienes actividad, ¿qué tal si navegas un poco?</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='box-user'>
              <EventsProfile />
            </div>
          </>
        ) : (
          <UpdateProfile />
        )}
      </div>
    </div>
  );
};

export default Perfil;
