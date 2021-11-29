import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () =>(
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><Link to="/">Portfo<span>lio.</span></Link></div>
            <ul className="menu">
               <li><Link to="/" className="menu-btn">Home</Link></li>
                <li><Link to="about" className="menu-btn">About</Link></li>
                <li><Link to="services" className="menu-btn">Services</Link></li>
                <li><Link to="skills" className="menu-btn">Skills</Link></li>
                <li><Link to="projects" className="menu-btn">Projects</Link></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>

)
export default NavBar;