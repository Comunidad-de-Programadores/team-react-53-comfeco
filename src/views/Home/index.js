import React from "react";
import Button from "react-bootstrap/Button";
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
} from "../../firebase/client";

const Home = () => {
  const handleClick3 = () => {
    logOut(setUser);
    console.log("hola mundo");
  };
  return (
    <div>
      <p>Bienvenido</p>
      <Button  onClick={handleClick3} variant="outline-danger">Cerrar Sesión</Button>{' '}
    </div>
  );
};

export default Home;
