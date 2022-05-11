import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Kamino Games</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#novedades">Novedades</Nav.Link>
        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
        <Nav.Link href="#mas-vendidos">Más vendidos</Nav.Link>
        <NavDropdown title="Consolas" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#consolas/pc">PC</NavDropdown.Item>
            <NavDropdown.Item href="#consolas/ps4">PS4</NavDropdown.Item>
            <NavDropdown.Item href="#consolas/xbone">Xbox One</NavDropdown.Item>
            <NavDropdown.Item href="#consolas/nswitch">Nintendo Switch</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="#sobre-nosotros">Sobre nosotros</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar