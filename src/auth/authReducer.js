// import { types } from '../types/types';

// // const state = {
// //     name: 'Fernando',
// //     logged: true
// // }

// const authReducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.login:
//       return {
//         ...action.payload,
//         logged: true,
//       };

//     case types.logout:
//       return {
//         logged: false,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  VALIDATE_PASSWORD_ERROR,
  VALIDATE_PASSWORD_EXITOSO,
} from '../types/types';

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authReady: true,
        autenticado: true,
        mensaje: null,
        updateProfile: false,
      };
    case LOGIN_EXITOSO:
    case VALIDATE_PASSWORD_EXITOSO:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authReady: true,
        autenticado: true,
        mensaje: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        authReady: true,
        autenticado: true,
        usuario: action.payload,
        mensaje: null,
        updateProfile: false,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      return {
        ...state,
        // token:null,
        authReady: true,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
        updateProfile: false,
      };
    case VALIDATE_PASSWORD_ERROR:
      return {
        ...state,
        authReady: true,
        autenticado: true,
        updateProfile: true,
        mensaje: action.payload,
      };
    default:
      return state;
  }

};
