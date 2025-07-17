import React, { useRef, useState } from 'react';
import { useModal } from '../../hooks/useModal';

const Hero = () => {
    const { openQuoteModal } = useModal();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

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
                                <a href="tel:+64-21-123-4567" className="btn btn-secondary btn-large">
                                    <i className="fas fa-phone"></i>
                                    <span className="btn-text">+64 21 123 4567</span>
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
                        <div className="hero-video-container">
                            <video
                                ref={videoRef}
                                className="hero-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="/images/video-poster.jpg"
                            >
                                <source src="/videos/cleaning-services.mp4" type="video/mp4" />
                                <source src="/videos/cleaning-services.webm" type="video/webm" />
                                <img
                                    src="/images/hero-fallback.jpg"
                                    alt="Professional Cleaning Services"
                                    className="video-fallback"
                                />
                            </video>

                            <div className="video-overlay">
                                <button
                                    className="video-control"
                                    onClick={toggleVideo}
                                    aria-label="Play/Pause Video"
                                >
                                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                                </button>
                            </div>

                            <div className="video-content-overlay">
                                <div className="overlay-badge">
                                    <i className="fas fa-play-circle"></i>
                                    <span>Watch Our Team in Action</span>
                                </div>
                            </div>
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