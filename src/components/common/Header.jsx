import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openQuoteModal } = useModal();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false); // Close menu on route change
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="logo">
                        <h1>Sweepo</h1>
                        <p className="slogan">We sweep, you relax</p>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <Link
                                    to="/"
                                    className={`nav-link ${isActivePath('/') ? 'active' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="dropdown">
                <span className="nav-link">
                  Services <i className="fas fa-chevron-down"></i>
                </span>
                                <ul className="dropdown-menu">
                                    <li><Link to="/services/home-cleaning">Home Cleaning</Link></li>
                                    <li><Link to="/services/commercial-cleaning">Commercial Cleaning</Link></li>
                                    <li><Link to="/services/pest-control">Pest Control</Link></li>
                                    <li><Link to="/services/garbage-removal">Garbage Removal</Link></li>
                                    <li><Link to="/services/lawn-garden">Lawn & Garden</Link></li>
                                    <li><Link to="/services/car-valet">Car Valet</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    to="/company"
                                    className={`nav-link ${isActivePath('/company') ? 'active' : ''}`}
                                >
                                    Company Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a href="tel:+64-21-123-4567" className="btn btn-call">
                            <i className="fas fa-phone"></i>
                            <span className="btn-text">Call Now</span>
                        </a>
                        <button className="btn btn-quote" onClick={openQuoteModal}>
                            <i className="fas fa-calculator"></i>
                            <span className="btn-text">Get a Quote</span>
                        </button>
                    </div>

                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;