import React, { useEffect, useState } from "react";
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
} from "../../firebase/client";

const Login = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClickGoogle = () => {
    loginWithGoogle()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickFacebook = () => {
    loginWithFacebook()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick3 = () => {
    logOut(setUser);
  };

  return (
    <div>
      {/* <form onSubmit="">
        <input type="email"/>
        <input type="password"/>
        <button type="submit">Iniciar sesión</button>
      </form> */}
      <button onClick={handleClickGoogle}>Login Gmail</button>
      <button onClick={handleClickFacebook}>Login Facebook</button>
      {/* {user && (
        <div>
          <p>Estas logueado</p>
          <button onClick={handleClick3}>Cerrar Sesión</button>
        </div>
      )}*/}
    </div>
  );
};

export default Login;
