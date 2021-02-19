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
} from '../types/types';

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case LOGIN_EXITOSO:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      return {
        ...state,
        // token:null,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
      };
    default:
      return state;
  }

};
