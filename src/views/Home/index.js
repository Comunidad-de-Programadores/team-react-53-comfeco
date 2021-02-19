import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { onAuthStateChanged, auth } from '../../firebase/client';

;
const Home = () => {
  // Extraer la i nformación de autentificación
  const authContext = useContext(AuthContext);
  const {
    usuarioAutenticado,
    usuario,
    cerrarSesion,
  } = authContext;

  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    history.replace('/auth');
  };

  // useEffect(() => {
  //   usuarioAutenticado();
  // }, []);

  return (
    <div>
      <p>
        Bienvenido :
        {usuario ? (
          <span>
            {usuario.email}
          </span>
        ) : ''}
      </p>
      <button onClick={handleLogout} className='btn'>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
