import React from 'react';
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
} from '../../firebase/client';

const Home = () => {

  const handleClick3 = () => {
    logOut(setUser);
    console.log('hola mundo');
  };
  return (
    <div>
      <p>Bienvenido</p>
      <button onClick={handleClick3}> Cerrar Sesión</button>
    </div>
  );
};

export default Home;
