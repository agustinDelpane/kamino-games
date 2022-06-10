import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Kamino Games</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/categoria/novedades">Novedades</Nav.Link>
        <Nav.Link href="/categoria/ofertas">Ofertas</Nav.Link>
        <Nav.Link href="/categoria/mas-vendidos">Más vendidos</Nav.Link>
        <NavDropdown title="Consolas" id="collasible-nav-dropdown">
            <NavDropdown.Item href='/categoria/PC'>PC</NavDropdown.Item>
            <NavDropdown.Item href="/categoria/PS4">PS4</NavDropdown.Item>
            <NavDropdown.Item href="/categoria/xbone">Xbox One</NavDropdown.Item>
            <NavDropdown.Item href="/categoria/nswitch">Nintendo Switch</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="/categoria/sobre-nosotros">Sobre nosotros</Nav.Link>
        <Nav.Link href="/categoria/contacto">Contacto</Nav.Link>
        </Nav>
        <Link to='/cart'><CartWidget /></Link>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar