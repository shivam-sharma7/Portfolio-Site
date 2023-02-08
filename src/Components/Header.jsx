import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Header = () => {

    let activeStyle = {

        color: "#fff",

    }

    return (

        <div className="header">
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Shivam Sharma</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ml-auto">
                            <NavLink to="/" className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                            <NavLink to="/contact" className="nav-link">Contacts</NavLink>
                              
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </div >
    )

}

export default Header