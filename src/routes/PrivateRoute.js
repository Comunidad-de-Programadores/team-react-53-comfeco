import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  // const autenticado = localStorage.getItem('Autenticado');
  console.log(isAuthenticated, 'ruta privada');
  return (
    <Route
      {...rest}
      component={(props) => (
        (isAuthenticated) ?
          <Component {...props} /> :
          <Redirect to='/auth' />
      )}
    />
  );
};

PrivateRoute.proptype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;