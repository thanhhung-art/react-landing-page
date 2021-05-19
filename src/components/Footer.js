import React from 'react';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__row__1 title">
                    <h2 className="main-title">GET IN TOUCH</h2>
                </div>
                <div className="footer__row__2 content">
                    <div className="contact">
                        <div className="form">
                            <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                            <form action="#">
                                <input type="text" placeholder="Name" className="name" />
                                <input type="email" placeholder="Email" className="email" />
                            </form>
                            <textarea name="user-describe" className="user-text" cols="30" rows="100%" placeholder="MESSAGE"></textarea>
                            <div className="btn-wrap">
                                <a href="#" className="btn">SEND MESSAGE</a>
                            </div>
                        </div>
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <div className="sub-info">
                                <div className="title">
                                    <span><i className="fas fa-map-marker-alt"></i></span> <h4>Address</h4>
                                </div>
                                <div className="info">
                                    <p>4321 California St, San Francisco, CA 12345</p>
                                </div>
                            </div>
                            <div className="sub-info">
                                <div className="title">
                                    <span><i className="fas fa-phone-alt"></i></span> <h4>Phone</h4>
                                    
                                </div>
                                <div className="info">
                                    <p>+1 123 456 1234</p>
                                </div>
                            </div>
                            <div className="sub-info">
                                <div className="title">
                                    <span><i class="fas fa-envelope"></i></span> <h4>Email</h4>
                                </div>
                                <div className="info">
                                    <p>exampleEmail@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <i className="fab fa-github"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
