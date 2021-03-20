import React, { useContext } from "react";
import {
  useHistory,
  useParams,
  useLocation,
  Link,
  NavLink,
} from "react-router-dom";

import logo from "../assets/img/logo1.png";
import "../assets/styles/components/Header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import AuthContext from "../auth/AuthContext";
import Avatar from "./Avatar";

const Header = () => {
  const { usuario, autenticado, cerrarSesion } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    cerrarSesion();
    history.replace("/login");
  };

  return (
    <div className="container-comfeco">
      <Navbar bg="light" expand="lg" className="header-mobile">
       <Link to ="/" className="logo">
      
          {" "}
          <img src={logo} alt="Logo de COMFECO" className=" w-100" />
        
       </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {autenticado === true && usuario !== null ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" w-100">
              <NavLink
                exact
                to="/"
                activeClassName="active "
                className="item-menu"
              >
                Inicio
              </NavLink>
              <NavLink
                exact
                to="/comunidades"
                activeClassName="active"
                className="item-menu"
              >
                Comunidades
              </NavLink>
              <NavLink
                exact
                to="/talleres"
                activeClassName="active"
                className="item-menu"
              >
                Talleres
              </NavLink>
              <NavLink
                exact
                to="/creadores-de-contenido"
                activeClassName="active"
                className="item-menu"
              >
                Creadores de contenido
              </NavLink>

              <div className="nickname">
                <span className="notification">
                  <i className="far fa-bell" />
                </span>
                <NavDropdown
                  title={
                    <div className="user-select">
                      {" "}
                      {usuario.photoUrl === "" ? (
                        <Avatar size="small" />
                      ) : (
                        <img src={usuario.photoUrl} className="foto-user" />
                      )}
                      {usuario.name.toUpperCase().split(" ", 1)}
                    </div>
                  }
                  id="basic-nav-dropdown "
                >
                  <Link to="/perfil">Perfil</Link>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              {location.pathname == "/recovery-pass" ? (
                <div className="btn-iniciar-sesion">
                  <Nav.Link className="" href="/login">
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
    </div>
  );
};

export default Header;
