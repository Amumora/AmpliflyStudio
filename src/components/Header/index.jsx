import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link,NavLink} from "react-router-dom";




function Cnavbar() {
    return (
    <Container  className="bg-dark text-white" fluid>
      <Router>
        <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" className="ms-auto ">
            <NavLink to="/" className={({ isActive }) => isActive ?'nav-link active' : 'nav-link'}>Register</NavLink>
            <NavLink to="/Login" className={({ isActive }) => isActive ?'nav-link active' : 'nav-link'}>Log In</NavLink>
            <NavLink to="/Home" className={({ isActive }) => isActive ?'nav-link active' : 'nav-link'}>Home</NavLink>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Router>
        </Container>
    );
  }
  export default Cnavbar;


  
//   <h1 className="navbar-brand">
//   <Link to="/" className="brand-link">AmplifyStudio</Link>
// </h1>


