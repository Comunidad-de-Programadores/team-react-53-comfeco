import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import Counter from '../../components/Home/counter';
import Workshops from '../../components/Home/Workshops';
import '../../assets/styles/views/Home.css';

const Home = () => {
  // Extraer la información de autentificación
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    history.replace('/login');
  };

  if (!autenticado) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='container__home'>
      <div className='home__communities'>
        <p>kdhfjkdhfk</p>
      </div>
      <div className='home__main'>
        <p>
          Bienvenido :
          {usuario ? <span>{usuario.name}</span> : ''}
        </p>
        <Counter />
        <button type='button' onClick={handleLogout} className='btn'>
          Cerrar Sesión
        </button>
      </div>
      <div className='home__workshops'>
        <Workshops />
      </div>
    </div>
  );
};

export default Home;
