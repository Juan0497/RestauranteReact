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
class navbar extends React.Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100%", zIndex: "99", top: "0" }}>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand href="#home">Reservar Restaurante</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Link to="/inicio">
                {" "}
                <button type="button" class="btn btn-primary">
                  SingUp
                </button>
              </Link>
              <br />
              <Link to="/login">
                {" "}
                <button type="button" class="btn btn-primary">
                  LogIn
                </button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
