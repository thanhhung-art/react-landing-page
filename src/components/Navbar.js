import React from 'react';

function navbar() {
    return (
        <div className="container-navbar">
            <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <h3>REACT LANDING PAGE</h3>
                </div>
                <div className="navbar__links">
                    <ul>
                        <li><a href="#features">FEATURES</a></li>
                        <li><a href="#about-us">ABOUT</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#testimonials">TESTIMONIALS</a></li>
                        <li><a href="#team">TEAM</a></li>
                        <li><a href="#footer">CONTACT</a></li>
                    </ul>
                </div>
            </nav>         
            </div>
        </div>
    )
}

export default navbar;
