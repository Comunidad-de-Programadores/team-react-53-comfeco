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
  dateCreateUserProfile,
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
  const addUserCollection = async (datos) => {
    const user = await userActive();
    const { email, uid, displayName, photoURL } = user;
    console.log(user, 'google');
    if (user) {
      await createUserProfile(user.uid, {
        name: !displayName ? datos.name : displayName,
        email,
        uid,
        photoUrl: !photoURL ? '' : photoURL,
        createdAt: dateCreateUserProfile(),
      })
        .then(() => {
          console.log('Document successfully written! Judith');
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
      if (user) {
        return getUserProfile(user.uid)
          .then((snapshot) => {
            const dbUser = snapshot.data();
            console.log(dbUser, 'hola este es el usuario autenticado');
            dispatch({
              type: OBTENER_USUARIO,
              payload: {
                name: dbUser.name,
                email: dbUser.email,
                uid: dbUser.uid,
                photoUrl: dbUser.photoUrl,
                createdAt: dbUser.createdAt,
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
          payload: null,
        });
      }
    });
  };

  const registrarUsuario = async (datos) => {
    try {
      await createUserWithEmail(datos.email, datos.password);
      //Crear la colección de usuarios
      addUserCollection(datos);
      //Obtener el usuario
      usuarioAutenticado();
      // dispatch({
      //   type: REGISTRO_EXITOSO,
      // });
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
      await signInWithEmail(datos.email, datos.password);
      //Obtener el usuario
      usuarioAutenticado();
      // dispatch({
      //   type: LOGIN_EXITOSO,
      // });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.message,
      });
    }
  };

  //Cuando el usuario registra i inicia sesion con google
  const loginGoogle = async () => {
    await loginWithGoogle()
      .then((user) => {
        console.log(user, 'logueado con google');
        if (user.additionalUserInfo.isNewUser === true) {
          //Crear la colección de usuarios
          console.log('hola estoy primera vez logueado,  "agrega collecion');
          addUserCollection();
        }
        //Obtener el usuario
        usuarioAutenticado();
        // dispatch({
        //   type: REGISTRO_EXITOSO,
        // });
      })
      .catch((error) => {
        dispatch({
          type: REGISTRO_ERROR,
          payload: error.message,
        });
      });
  };

  //Cuando el usuario registra i inicia sesion con google
  const loginFacebook = async () => {
    await loginWithFacebook()
      .then((user) => {
        console.log(user);
        dispatch({
          type: REGISTRO_EXITOSO,
        });
        if (user.additionalUserInfo.isNewUser === true) {
          //Crear la colección de usuarios
          addUserCollection();
        }
        //Obtener el usuario
        usuarioAutenticado();
      })
      .catch((error) => {
        dispatch({
          type: REGISTRO_ERROR,
          payload: error.message,
        });
      });
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
        loginGoogle,
        loginFacebook,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
