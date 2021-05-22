import React from 'react';

function Navbar() {

    const handleOpenCloseMenu = () => {
        document.getElementById("menu").classList.toggle("open-menu");
    }

    return (
        <div className="container-navbar">
            <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <a href="#"><h3>REACT LANDING PAGE</h3></a>
                </div>
                <div className="navbar__button" id="button" onClick={handleOpenCloseMenu}>
                    <div className="icon-bar"></div>
                    <div className="icon-bar"></div>
                    <div className="icon-bar"></div>
                </div>
                <div className="navbar__links" id="menu">
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

export default Navbar;
