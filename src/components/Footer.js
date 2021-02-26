import React from 'react';
import '../assets/styles/components/Footer.css';
import logo from '../assets/img/Logo2.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div>texto texto texto texto texto texto texto texto texto</div>
      <div>
        <img src={logo} className='logo-footer' alt='logo' />
      </div>
      <div className='box-redes'>
        <div>
          {' '}
        <i className="fas fa-heart"></i>
        </div>
        <div>y</div>
        <div>g</div>
        <div>l</div>
      </div>
    </div>
  );
};

export default Footer;
