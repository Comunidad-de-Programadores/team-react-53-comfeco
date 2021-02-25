import React from 'react';
import logo from '../assets/img/Logo2.png';
import '../assets/styles/components/Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/fontawesome-free-regular';

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
          {/* <FontAwesomeIcon icon={faHeart} /> */}
        </div>
        <div>y</div>
        <div>g</div>
        <div>l</div>
      </div>
    </div>
  );
};

export default Footer;
