import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// <<<<<<< HEAD
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import Auth from '../views/Auth';

// const App = () => (
//     <BrowserRouter>
//     <Header/>
//       <Switch>
//         <Route exact path='/' component={Auth} />
//       </Switch>
//       <Footer/>
//     </BrowserRouter>
// =======
// import Autentificar from '../views/Autentificar';
// import Login from '../views/Auth/Login';
// import RecoveryPass from '../views/Auth/RecoveryPass';
// import Register from '../views/Auth/Register';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Auth from '../views/Auth';
// import RutaPrivada from './PrivateRoute';
import Home from '../views/Home';
import AuthContext from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import { authReducer } from '../auth/authReducer';

// const init = () => {
//   return JSON.parse(localStorage.getItem('user')) || { logged: false };
// };

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;
  console.log(autenticado);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path='/auth'
          component={Auth}
          isAuthenticated={autenticado}
        />
        <PrivateRoute
          exact
          path='/'
          component={Home}
          isAuthenticated={autenticado}
        />
        {/* <Route exact path="/" component={Autentificar} /> */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/recovery_pass" component={RecoveryPass} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
