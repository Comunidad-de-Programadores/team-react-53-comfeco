import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo1.png';
import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark header-glass'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} width='140' alt='Logo de COMFECO' />
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='btn btn-lg btn-outline-light' to='/login'>Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
