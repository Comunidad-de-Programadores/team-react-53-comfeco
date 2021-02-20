import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { onAuthStateChanged, auth } from '../../firebase/client';

;
const Home = () => {
  // Extraer la información de autentificación
  const { authContext, autenticado, cerrarSesion } = useContext(AuthContext);
  // const {
  //   // usuario,
  //   cerrarSesion,
  // } = authContext;

  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    history.replace('/login');
  };

  // useEffect(() => {
  //   usuarioAutenticado();
  // }, []);

  if (!autenticado) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <p>
        Bienvenido :
        {/* {usuario ? (
          <span>
            {usuario.email}
          </span>
        ) : ''} */}
      </p>
      <button type='button' onClick={handleLogout} className='btn'>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
