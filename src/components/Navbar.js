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
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">TESTIMONIALS</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </nav>         
            </div>
        </div>
    )
}

export default navbar;
