import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

import "./Auth.css";
const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <div className="Auth">
        <div className="Auth__container">
          <div className="Auth_box_button">
            <button onClick={handleShowLogin}>Inicia sesión</button>
            <button onClick={handleShowRegister}>Registrate</button>
          </div>
          {showLogin && <Login />}
          {showRegister && <Register />}
        </div>
      </div>
    </>
  );
};

export default Auth;
