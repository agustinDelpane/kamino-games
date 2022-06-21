import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Link to="/" className='navbar-brand'>Kamino Games</Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to="/categoria/novedades" className='nav-link'>Novedades</Link>
        <Link to="/categoria/ofertas" className='nav-link'>Ofertas</Link>
        <Link to="/categoria/mas-vendidos" className='nav-link'>Más vendidos</Link>
        <NavDropdown title="Consolas" id="collasible-nav-dropdown">
            <Link to='/categoria/PC' className='nav-dropdown-item'>PC</Link><br />
            <Link to="/categoria/PS4" className='nav-dropdown-item'>PS4</Link><br />
            <Link to="/categoria/xbone" className='nav-dropdown-item'>Xbox One</Link><br />
            <Link to="/categoria/nswitch" className='nav-dropdown-item'>Nintendo Switch</Link>
        </NavDropdown>
        </Nav>
        <Nav>
        <Link to="/categoria/sobre-nosotros" className='nav-link'>Sobre nosotros</Link>
        <Link to="/categoria/contacto" className='nav-link'>Contacto</Link>
        </Nav>
        <Link to='/cart'><CartWidget /></Link>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar