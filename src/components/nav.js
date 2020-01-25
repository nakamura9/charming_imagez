import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const AppNav = (props) =>{
    // const [scrolled, setScrolled] = useState(false)
    // useEffect(()=>{
    //     setInterval(() =>{
    //         console.log(document.body.scrollTop)
    //         setScrolled(document.body.scrollTop > 50)
    //     }, 200)
    // }, [])

    return(
        <Navbar expand='lg' className={'quarternary navbar-dark custom-nav'} >
            <Navbar.Brand >
                <Link to='/'>
                    <img width='200' alt='charming-imagez logo' height='40' src='/static/images/transparent.PNG' style={{filter:'invert(100%)'}}/>
                </Link>
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
                <LinkContainer to='/contact'>
                    <Nav.Link >Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/blog'>
                    <Nav.Link >Blog</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default AppNav;