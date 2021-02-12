import React, { useEffect, useState } from "react";
import { loginWithGoogle, onAuthStateChanged } from "../firebase/client";
import { loginWithFacebook } from "../firebase/client";
const Autentificar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])
  const handleClick = () => {
    loginWithGoogle()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick2 = () => {
    loginWithFacebook()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
    zzz;
  };
  return (
    <>{
      user===null ?     <div>
        <button onClick={handleClick}>Login Gmail</button>
        <button onClick={handleClick2}>Login Facebook</button>
      </div>
      : <p>Estas logueado</p>
    }</>
  );
};

export default Autentificar;
