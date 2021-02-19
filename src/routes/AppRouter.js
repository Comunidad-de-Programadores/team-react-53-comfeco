import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Auth from '../views/Auth';
import Home from '../views/Home';
import AuthContext from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;
  console.log(autenticado);

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
        <PrivateRoute
          exact
          path='/'
          component={Home}
          isAuthenticated={autenticado}
        />
        {/* <Route exact path="/" component={Autentificar} /> */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/recovery_pass" component={RecoveryPass} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
