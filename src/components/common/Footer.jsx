import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

const Footer = () => {
    const { openQuoteModal } = useModal();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <h3>Sweepo</h3>
                            <p className="footer-slogan">We sweep, you relax</p>
                        </div>
                        <p>Professional cleaning services available 24/7 across New Zealand. Trusted by thousands of satisfied customers.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link to="/services/home-cleaning">Home Cleaning</Link></li>
                            <li><Link to="/services/commercial-cleaning">Commercial Cleaning</Link></li>
                            <li><Link to="/services/pest-control">Pest Control</Link></li>
                            <li><Link to="/services/garbage-removal">Garbage Removal</Link></li>
                            <li><Link to="/services/lawn-garden">Lawn & Garden</Link></li>
                            <li><Link to="/services/car-valet">Car Valet</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/company">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><button onClick={openQuoteModal} className="link-button">Get Quote</button></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <p><i className="fas fa-phone"></i> +64 21 123 4567</p>
                            <p><i className="fas fa-envelope"></i> info@sweepo.co.nz</p>
                            <p><i className="fas fa-map-marker-alt"></i> Auckland, New Zealand</p>
                            <p><i className="fas fa-clock"></i> 24/7 Service Available</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Sweepo. All rights reserved. | Website: sweepo.co.nz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;