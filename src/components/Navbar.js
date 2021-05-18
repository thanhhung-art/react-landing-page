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
                        <li className="list-item"><a href="#features">FEATURES</a></li>
                        <li className="list-item"><a href="#about-us">ABOUT</a></li>
                        <li className="list-item"><a href="#services">SERVICES</a></li>
                        <li className="list-item"><a href="#gallery">GALLERY</a></li>
                        <li className="list-item"><a href="#testimonials">TESTIMONIALS</a></li>
                        <li className="list-item"><a href="#team">TEAM</a></li>
                        <li className="list-item"><a href="#footer">CONTACT</a></li>
                    </ul>
                </div>
            </nav>         
            </div>
        </div>
    )
}

export default navbar;
