import React, { useReducer, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../views/Home';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import AuthContext from '../auth/AuthContext';

const AppRouter = () => {
  const { usuarioAutenticado } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
