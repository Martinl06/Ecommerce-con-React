import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Cartwidget from "./CartWidget";




function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom">
      <Container className="barra">
        <Navbar.Brand as= {Link} to="/">Flor De Loto Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-3">
            <Nav.Link as= {Link} to ="/Hombre">HOMBRE</Nav.Link>
            <Nav.Link as= {Link} to ="/Mujer">MUJER</Nav.Link>
            <Nav.Link as= {Link} to ="/Accesorios">ACCESORIOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget />
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;
