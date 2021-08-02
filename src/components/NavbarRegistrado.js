import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
class NavbarUsuario extends React.Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100%", zIndex: "99", top: "0" }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Reservar Restaurante</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/inicio">
                {" "}
                <Nav.Link href="#home">Home</Nav.Link>{" "}
              </Link>
              <NavDropdown title="Reservas" id="basic-nav-dropdown">
                <Link to="/Reservas">
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Reservar
                  </NavDropdown.Item>
                </Link>
                <Link to="/ReservaCreada">
                  {" "}
                  <NavDropdown.Item href="#action/3.2">
                    Agenda de Reservas
                  </NavDropdown.Item>{" "}
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Reservas Previas
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Link to="/">
                {" "}
                <button type="button" class="btn btn-primary">
                  LogOut
                </button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarUsuario;
