import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './authReducer';
import {
  loginWithGoogle,
  logOut,
  onAuthStateChanged,
  loginWithFacebook,
  createUserWithEmail,
  userActive,
  createUserProfile,
  getUserProfile,
  signInWithEmail,
} from '../firebase/client';

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from '../types/types';

const AuthState = (props) => {
  const initialState = {
    // token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Crear coleccion de perfil de usuario
  const addUserCollection = () => {
    const user = userActive();
    const { email, uid } = user;
    if (user) {
      createUserProfile(user.uid, {
        email,
        uid,
      })
        .then(() => {
          console.log('Document successfully written!');

        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: 'no estas autentificado',
      });
    }
  };

  //Retorna el usuario registrado
  const usuarioAutenticado = async () => {
    const user = await userActive();
    const { email, uid } = user;
    if (user) {
      await getUserProfile(user.uid)
        .then(() => {
          console.log('Document successfully written!');
          dispatch({
            type: OBTENER_USUARIO,
            payload: {
              email,
              uid,
            },
          });
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    } else {
      console.log('no estas autentificado');
      dispatch({
        type: LOGIN_ERROR,
        payload: 'no estas autentificado',
      });
    }
  };

  const registrarUsuario = async (datos) => {
    console.log(datos, 'datitos');
    try {
      const respuesta = await createUserWithEmail(datos.email, datos.password);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.user,
      });
      //Crear la colección de usuarios
      addUserCollection();
      //Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.message,
      });
    }
  };

  //Cuando el usuario inicia sesión
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await signInWithEmail(datos.email, datos.password);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.user,
      });
      //Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
  //Cierra la sesión del usuario
  const cerrarSesion = () => {
    logOut();
    dispatch({
      type: CERRAR_SESION,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        // token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
