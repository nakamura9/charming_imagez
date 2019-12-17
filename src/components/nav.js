import React from 'react';
import {Link} from 'react-router-dom';

const AppNav = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark quarternary">
            <ul className="navbar-nav">
                <li className='nav-item'><Link className='nav-link' to="/" >Home</Link></li>
                <li className='nav-item'><Link to="/about" className='nav-link' >About</Link></li>
                <li className='nav-item'><Link to="/packages" className='nav-link' >Packages</Link></li>
                <li className='nav-item'><Link to="/gallery" className='nav-link' >Gallery</Link></li>
                <li className='nav-item'><Link to="/blog/" className='nav-link' >Blog</Link></li>
            </ul>
        </nav>
    )
}

export default AppNav;