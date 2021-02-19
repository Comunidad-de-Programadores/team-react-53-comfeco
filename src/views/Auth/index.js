import React, { useEffect, useState } from 'react';
import Login from './Login.jsx';
import Register from './Register';
import background from '../../assets/img/backgroundLogin.svg';
import '../../assets/styles/views/Auth.css';

const Auth = () => {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className='Auth'>
        <img src={background} alt='background for Login/Register' />
        <div className='Auth__container'>
          {showLogin && <Login changePage={setShowLogin} />}
          {!showLogin && <Register changePage={setShowLogin} />}
        </div>
      </div>
    </>
  );
};

export default Auth;
