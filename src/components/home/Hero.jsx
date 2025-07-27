import React from 'react';
import { useModal } from '../../hooks/useModal';
import ImageGallery from './ImageGallery';

const Hero = () => {
    const { openQuoteModal } = useModal();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Professional Cleaning Services Available 24/7 Across New Zealand</h1>
                            <p>Experience pristine & spotless spaces with Sweepo - New Zealand's trusted cleaning professionals. High-quality cleaning, skilled staff, and outstanding results that exceed expectations.</p>

                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                    <i className="fas fa-calculator"></i>
                                    <span className="btn-text">Get Free Quote</span>
                                </button>
                                <a href="tel:+64225269873" className="btn btn-secondary btn-large">
                                    <i className="fas fa-phone"></i>
                                    <span className="btn-text">022 526 9873</span>
                                </a>
                            </div>

                            <div className="hero-stats">
                                <div className="stat-item">
                                    <div className="stat-number">5,000+</div>
                                    <div className="stat-label">Happy Customers</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">Service Available</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">100%</div>
                                    <div className="stat-label">Satisfaction Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-media">
                        <div className="hero-gallery-container">
                            <ImageGallery />
                        </div>

                        <div className="service-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Fully Insured</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-leaf"></i>
                                <span>Eco-Friendly</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-clock"></i>
                                <span>24/7 Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;