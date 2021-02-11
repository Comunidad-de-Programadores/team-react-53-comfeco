import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </BrowserRouter>
);

export default App;