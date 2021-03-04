import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Perfil from "../Perfil/Perfil"
import Insignias from "../Perfil/Insignias"
import Grupos from "../Perfil/Grupos"
import Eventos from "../Perfil/Eventos"

import "../../assets/styles/views/Perfil.css";

const index = () => {
  const [key, setKey] = useState("perfil");
  return (
    <div className="submenu">
      <Tabs
        justify
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="perfil" title={<i class="far fa-bell"> Mi Perfil</i> }>
          <Perfil/>
        </Tab>
        <Tab eventKey="insignia" title={<i class="far fa-bell"> Insignias</i> }>
         <Insignias/>
        </Tab>
        <Tab eventKey="grupos" title={<i class="far fa-bell"> Grupos</i> } >
        <Grupos/>
        </Tab>
        <Tab eventKey="eventos" title={<i class="far fa-bell"> Eventos</i> } >
        <Eventos/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default index;
