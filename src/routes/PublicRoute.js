import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../auth/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { autenticado } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={(props) => (autenticado === false ? <Component {...props} /> : <Redirect to='/' />)}
    />
  );
};

// PublicRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };

export default PublicRoute;
