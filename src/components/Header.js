import React, { useContext } from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';

import logo from '../assets/img/logo1.png';
import '../assets/styles/components/Header.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from '../auth/AuthContext';
import Avatar from './Avatar';

const Header = () => {
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    history.replace('/login');
  };
  console.log('naaaaaaardada', usuario);

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <div>
          <Navbar.Brand href='/'>
            {' '}
            <img src={logo} width='180' alt='Logo de COMFECO' className='logo' />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {autenticado === true && usuario !== null ? (
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' w-100'>
              <Nav.Link href='/'>Inicio</Nav.Link>
              <Nav.Link href='/comunidades'>Comunidades</Nav.Link>
              <Nav.Link href='/talleres'>Talleres</Nav.Link>
              <Nav.Link href='/creadores-de-contenido'>
                Creadores de contenido
              </Nav.Link>

              <div className='nickname'>
                <span className='notification'><i className='far fa-bell' /></span>
                <NavDropdown
                  title={(
                    <div className='user-select'>
                      {' '}
                      {usuario.photoUrl === '' ? (
                        <Avatar />
                      ) : (
                        <img src={usuario.photoUrl} className='foto-user' />
                      )}
                      {usuario.name
                        .toUpperCase()
                        .split(' ', 1)}
                    </div>
                  )}
                  id='basic-nav-dropdown '
                >

                  <NavDropdown.Item href='/perfil'>Perfil</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
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
