import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Auth from '../views/Auth';


const App = () => (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={Auth} />
      </Switch>
      <Footer/>
    </BrowserRouter>
);

export default App;