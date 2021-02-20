import React from 'react';
import logo from '../assets/img/Logo2.png';
import '../assets/styles/components/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} className='logo-footer' alt='logo' />
    </div>
  );
};

export default Footer;
