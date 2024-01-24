import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";




function NavbarR() {
  return (
    <Container  style={{backgroundColor:"#889696", borderColor:"#d8e2dc" }} className='text-dark' fluid>
      <Navbar >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="ms-auto ">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Register</NavLink>
            <NavLink to="/Login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Log In</NavLink>
            <NavLink to="/Home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
export default NavbarR;




