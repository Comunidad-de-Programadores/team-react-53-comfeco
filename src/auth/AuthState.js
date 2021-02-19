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
  auth,
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
    authReady: false,
    autenticado: false,
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

  // Usuario activo

  const usuarioAutenticado = async () => {
    await auth.onAuthStateChanged((user) => {
      const { email, uid } = user;
      console.log(user, 'estas autentificado?');
      if (user) {
        return getUserProfile(user.uid)
          .then((snapshot) => {
            const dbUser = snapshot.data();
            console.log(dbUser, 'Document successfully written!');
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
      }
      if (!user) {
        return dispatch({
          type: LOGIN_ERROR,
          payload: 'no estas autentificado',
        });
      }
    });

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
        authReady: state.authReady,
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
