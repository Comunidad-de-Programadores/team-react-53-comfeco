import React, { useEffect, useState } from "react";
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
  signInWithEmail,
  createUserWithEmail,
} from "../../firebase/client";


const Register = () => {
  const [user, setUser]=useState({
  email : "",
  password: ""
  })
  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmail(user.email, user.password);
  };
  const handleInputChange =  (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={signIn}>
        <input type="email" name="email" value={user.email} onChange={handleInputChange}/>
        <input type="password" name="password" value={user.password} onChange={handleInputChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register
