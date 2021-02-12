import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Autentificar from '../views/Autentificar';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Autentificar} />
      </Switch>
    </BrowserRouter>
);

export default App;