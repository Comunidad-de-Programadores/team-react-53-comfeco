import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Auth from '../views/Auth';
// import RutaPrivada from './PrivateRoute';
import Home from '../views/Home';
import AuthContext from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { autenticado, authReady, usuarioAutenticado } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path='/auth'
          component={Auth}
          isAuthenticated={autenticado}
        />
        {!authReady ? (
          <p>Loading</p>
        ) : (
          <PrivateRoute
            exact
            path='/'
            component={Home}
            isAuthenticated={autenticado}
          />
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
