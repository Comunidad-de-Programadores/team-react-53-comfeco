import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Perfil from './Perfil';
import Insignias from './Insignias';
import Grupos from './Grupos';
import Eventos from './Eventos';

import '../../assets/styles/views/Perfil.css';

const index = () => {
  const [key, setKey] = useState('perfil');
  return (
    <div className='submenu'>
      <Tabs
        justify
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey='perfil' title={<i className='far fa-bell'> <span className="title">Mi Perfil</span></i>}>
          <Perfil />
        </Tab>
        <Tab eventKey='insignia' title={<i className='far fa-bell'> <span className="title">Insignias</span></i>}>
          <Insignias />
        </Tab>
        <Tab eventKey='grupos' title={<i className='far fa-bell'> <span className="title">Grupos</span></i>}>
          <Grupos />
        </Tab>
        <Tab eventKey='eventos' title={<i className='far fa-bell'> <span className="title">Eventos</span></i>}>
          <Eventos />
        </Tab>
      </Tabs>
    </div>
  );
};

export default index;
