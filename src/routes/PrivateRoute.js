import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { autenticado, authReady } = useContext(AuthContext);
  console.log(authReady, 'ahi estoy');
  return (
    <Route
      {...rest}
      component={(props) => (
        (authReady === false) ? <p>Loading</p> :

          ((autenticado === true) ?
            <Component {...props} /> :
            <Redirect to='/login' />)
      )}
    />
  );
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };

export default PrivateRoute;
