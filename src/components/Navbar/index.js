import React from 'react';
import './navbar.scss';
import logo from 'img/logo.png'

const navbar = () => {
    return (
        <nav className="navbar">
            <img className="nav-logo"   src={logo} alt="Dummy Logo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default navbar;