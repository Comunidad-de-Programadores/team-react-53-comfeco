import React, { useReducer, useEffect, useContext } from 'react';
import AppRouter from './routes/AppRouter';
import AuthState from './auth/AuthState';

// const init = () => {
//   return JSON.parse(localStorage.getItem('user')) || { logged: false };
// };

const App = () => {
  // const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthState>
      <AppRouter />
    </AuthState>
    // <AuthContext.Provider value={{ user, dispatch }}>
    //   <AppRouter />
    // </AuthContext.Provider>
  );
};

export default App;
