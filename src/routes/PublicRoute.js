import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  // const autenticado = localStorage.getItem('Autenticado');

  return (
    <Route
      {...rest}
      component={(props) => (!isAuthenticated ? <Component {...props} /> : <Redirect to='/' />)}
    />
  );
};

PublicRoute.proptype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
