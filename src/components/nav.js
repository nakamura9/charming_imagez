import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const AppNav = (props) =>{
    return(
        <Navbar expand='lg' >
            <Navbar.Brand >
                <Link to='/'>Charming Imagez</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to='/'>
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                    <Nav.Link >About</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/gallery'>
                    <Nav.Link >Gallery</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/packages'>
                    <Nav.Link >Packages</Nav.Link></LinkContainer>
                <LinkContainer to='/blog'>
                    <Nav.Link >Blog</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default AppNav;