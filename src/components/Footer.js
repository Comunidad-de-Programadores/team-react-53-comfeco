import React from 'react';
import logo from '../assets/img/Logo2.png';
import '../assets/styles/components/Footer.css';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} className='logo-footer' alt='logo' />
      {/* <FontAwesomeIcon icon={faHome} /> */}
    </div>
  );
};

export default Footer;
