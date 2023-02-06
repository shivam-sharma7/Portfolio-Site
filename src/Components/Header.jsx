import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (

        <div className="header">
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Shivam Sharma</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="jusstify-content-end">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/services" className="nav-link">Services</NavLink>
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                             
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </div >
    )

}

export default Header