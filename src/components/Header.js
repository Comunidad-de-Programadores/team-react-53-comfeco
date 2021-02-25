import React, { useContext } from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';

import logo from '../assets/img/logo1.png';
import '../assets/styles/components/Header.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from '../auth/AuthContext';
import Avatar from "../components/Avatar"

const Header = () => {
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);
  const location = useLocation();
  console.log("datos del usuario", usuario);
  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    // history.replace('/login');
  };

  return (
    <>
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
              <NavDropdown
                title={(
                  <span>
                    {' '}
                    <b>:) </b>
                    {usuario.photoUrl === "" ? (
                      <Avatar />
                    ) : (
                      <img src={usuario.photoUrl} className="foto-user"></img>
                    )}
                    {usuario.name.toUpperCase()}
                  </span>
                )}
                id='basic-nav-dropdown'
                className='nickname'
              >
                <NavDropdown.Item href='#action/3.1'>Perfil</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Notificaciones
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
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
