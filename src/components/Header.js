import React, { useContext } from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';

import logo from '../assets/img/logo1.png';
import '../assets/styles/components/Header.css';
import AuthContext from '../auth/AuthContext';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname, 'aa');

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark header-glass">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="140" alt="Logo de COMFECO" />
          </Link>

          {location.pathname == "/login" ? (
            <></>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-lg btn-outline-light" to="/login">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav> */}

      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>
          {' '}
          <img src={logo} width='180' alt='Logo de COMFECO' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {autenticado == true ? (
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-5 w-100'>
              <Nav.Link href='/'>Inicio</Nav.Link>
              <Nav.Link href='/comunidades'>Comunidades</Nav.Link>
              <Nav.Link href='/talleres'>Talleres</Nav.Link>
              <Nav.Link href='/creadores-de-contenido'>
                Creadores de contenido
              </Nav.Link>
              {location.pathname == '/recovery-pass' ? (
                <div className='btn-iniciar-sesion'>
                  <Nav.Link className='' href='/login'>
                    Iniciar sesión
                  </Nav.Link>
                </div>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
        ) : (
          <></>
        )}
      </Navbar>
    </>
  );
};

export default Header;
