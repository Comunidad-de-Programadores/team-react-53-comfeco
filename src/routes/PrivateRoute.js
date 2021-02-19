import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      component={(props) => (
        (isAuthenticated === true) ?
          <Component {...props} /> :
          <Redirect to='/auth' />
      )}
    />
    // <Route
    //   {...rest}
    //   component={(props) => isAuthReady &&
    //   (isAuthenticated ? <Component {...props} /> : <Redirect to='/auth' />)}
    // />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
