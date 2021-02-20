import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/logo1.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home' className='w-auto'>
          <img src={logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>item1</Nav.Link>
            <Nav.Link href='#link'>item2</Nav.Link>
            <Nav.Link href='#link'>item3</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
