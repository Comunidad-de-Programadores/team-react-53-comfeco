import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { onAuthStateChanged } from '../firebase/client';

const PrivateRoute = ({ component: Component, ...props }) => {
  const [firebaseUser, setFirebaseUser] = React.useState(undefined);
  React.useEffect(() => {
    onAuthStateChanged(setFirebaseUser);
  }, [firebaseUser]);
  ///Obteniendo todo el contenido de firebase///
  console.log(firebaseUser, 'ojitos');
  return (
    <Route
      {...props}
      render={(props) => (firebaseUser === null ? (
        <Redirect to='/auth' />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};

export default PrivateRoute;
