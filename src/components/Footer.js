import React from 'react';
import logo from '../assets/img/Logo2.png';
import '../assets/styles/components/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>

      <div>
        texto texto texto texto texto texto texto texto texto

      </div>
      <div>
        {' '}
        <img src={logo} className='logo-footer' alt='logo' />
      </div>
      <div className='box-redes'>
        <div>f</div>
        <div>y</div>
        <div>g</div>
        <div>l</div>
      </div>
    </div>
  );
};

export default Footer;
