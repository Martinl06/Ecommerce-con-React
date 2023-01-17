import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cartwidget from "./CartWidget";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom">
      <Container className="barra">
        <Navbar.Brand href="#home">Flor De Loto Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-3">
            <Nav.Link href="#Hombre">HOMBRE</Nav.Link>
            <Nav.Link href="#Mujer">MUJER</Nav.Link>
            <Nav.Link href="#Accesorios">ACCESORIOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget />
      </Container>
    </Navbar>
  );
}

export default Header;
