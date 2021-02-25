import React, { useContext, useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import Counter from "../../components/counter";

const Home = () => {
  // Extraer la información de autentificación
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);

  const history = useHistory();

  console.log("aquiiiii",usuario);
  const handleLogout = () => {
    cerrarSesion();
    history.replace("/login");
  };

  if (!autenticado) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <p>BIENVENIDO: {usuario ? <span> {usuario.name.toUpperCase() }</span> : ""}</p>
      <Counter />
      <button type="button" onClick={handleLogout} className="btn">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
