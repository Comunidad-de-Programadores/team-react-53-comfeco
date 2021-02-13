import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Autentificar from '../views/Autentificar';
import Login from '../views/Login';
import RecoveryPass from '../views/RecoveryPass';
import Registrarse from '../views/registrarse';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Autentificar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registrarse" component={Registrarse} />
      <Route exact path="/recovery_pass" component={RecoveryPass} />
    </Switch>
  </BrowserRouter>
);

export default App;
