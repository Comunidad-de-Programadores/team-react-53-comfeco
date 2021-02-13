import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

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
      <div>
        <button onClick={handleShowLogin}>Inicia sesión</button>
        <button onClick={handleShowRegister}>Registrate</button>

        {showLogin && <Login/>}
        {showRegister && <Register/>}
      </div>
    </>
  );
};

export default Auth;
