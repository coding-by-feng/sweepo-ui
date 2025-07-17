import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const HomeCleaning = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Home Cleaning Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional home cleaning services in New Zealand. Regular house cleaning, deep cleaning, and move-in/out cleaning. Book with Sweepo today!" />
                <meta name="keywords" content="home cleaning, house cleaning, residential cleaning, deep cleaning, New Zealand" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="fas fa-chevron-right"></i>
                            <span>Services</span>
                            <i className="fas fa-chevron-right"></i>
                            <span>Home Cleaning</span>
                        </div>

                        <h1>Professional Home Cleaning Services</h1>
                        <p>Transform your home into a spotless sanctuary with our comprehensive residential cleaning services. From regular maintenance to deep cleaning, we make your home shine.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-home"></i>
                                <span>All Home Types</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-calendar-check"></i>
                                <span>Flexible Scheduling</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Insured & Bonded</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Eco-Friendly Options</span>
                            </div>
                        </div>

                        <div className="service-hero-actions">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Quote
                            </button>
                            <a href="tel:+64-21-123-4567" className="btn btn-outline btn-large">
                                <i className="fas fa-phone"></i> Call +64 21 123 4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="service-details">
                <div className="container">
                    <div className="service-content-grid">
                        <div className="service-info">
                            <h2>Complete Home Cleaning Solutions</h2>
                            <p>Our professional home cleaning services are designed to keep your living space fresh, healthy, and beautiful. Whether you need weekly maintenance or a one-time deep clean, our experienced team delivers exceptional results every time.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <h3>Regular House Cleaning</h3>
                                    <p>Consistent, reliable cleaning services to maintain your home's cleanliness week after week.</p>
                                    <ul>
                                        <li>Weekly, bi-weekly, or monthly service</li>
                                        <li>Kitchen cleaning and sanitization</li>
                                        <li>Bathroom deep cleaning</li>
                                        <li>Dusting and vacuuming</li>
                                        <li>Floor mopping and care</li>
                                        <li>Trash removal and fresh liners</li>
                                        <li>Customizable cleaning checklist</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon">
                                        <i className="fas fa-broom"></i>
                                    </div>
                                    <h3>Deep Cleaning</h3>
                                    <p>Intensive cleaning service that reaches every corner of your home for a thorough refresh.</p>
                                    <ul>
                                        <li>Inside appliance cleaning</li>
                                        <li>Baseboards and window sills</li>
                                        <li>Light fixtures and ceiling fans</li>
                                        <li>Cabinet fronts and interiors</li>
                                        <li>Detailed bathroom sanitization</li>
                                        <li>Carpet and upholstery cleaning</li>
                                        <li>Garage and basement cleaning</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon">
                                        <i className="fas fa-boxes"></i>
                                    </div>
                                    <h3>Move-In/Move-Out Cleaning</h3>
                                    <p>Comprehensive cleaning services for moving transitions to ensure a fresh start.</p>
                                    <ul>
                                        <li>Complete property sanitization</li>
                                        <li>All rooms and storage areas</li>
                                        <li>Kitchen appliance deep clean</li>
                                        <li>Bathroom disinfection</li>
                                        <li>Window and door cleaning</li>
                                        <li>Carpet and floor deep clean</li>
                                        <li>Same-day service available</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon">
                                        <i className="fas fa-sparkles"></i>
                                    </div>
                                    <h3>Specialty Cleaning</h3>
                                    <p>Specialized cleaning services for unique needs and special occasions.</p>
                                    <ul>
                                        <li>Post-party cleanup</li>
                                        <li>Holiday preparation cleaning</li>
                                        <li>Spring cleaning services</li>
                                        <li>Post-construction cleanup</li>
                                        <li>Elderly and disability assistance</li>
                                        <li>Pet-friendly cleaning</li>
                                        <li>Vacation rental turnovers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card">
                                <h3>Starting Prices</h3>
                                <div className="price-item">
                                    <span>Regular Cleaning</span>
                                    <strong>From $80</strong>
                                </div>
                                <div className="price-item">
                                    <span>Deep Cleaning</span>
                                    <strong>From $150</strong>
                                </div>
                                <div className="price-item">
                                    <span>Move-In/Out</span>
                                    <strong>From $200</strong>
                                </div>
                                <div className="price-item">
                                    <span>One-Time Clean</span>
                                    <strong>From $120</strong>
                                </div>
                                <p className="price-note">*Prices vary based on home size and specific requirements. Free quotes available.</p>
                                <button className="btn btn-primary" onClick={openQuoteModal}>
                                    Get Custom Quote
                                </button>
                            </div>

                            <div className="service-areas">
                                <h3>What We Clean</h3>
                                <ul>
                                    <li>Living Areas & Bedrooms</li>
                                    <li>Kitchens & Dining Rooms</li>
                                    <li>Bathrooms & Powder Rooms</li>
                                    <li>Entryways & Hallways</li>
                                    <li>Stairs & Landings</li>
                                    <li>Home Offices</li>
                                    <li>Laundry Rooms</li>
                                    <li>Basements & Garages</li>
                                    <li>Sunrooms & Patios</li>
                                    <li>Guest Houses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Simple 4-Step Process</h2>
                        <p>Getting professional home cleaning has never been easier</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Free Consultation</h3>
                                <p>We visit your home to assess your needs and provide a detailed, no-obligation quote.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Custom Cleaning Plan</h3>
                                <p>We create a personalized cleaning checklist based on your preferences and requirements.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Professional Service</h3>
                                <p>Our trained team arrives with all supplies and equipment to deliver exceptional results.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Quality Assurance</h3>
                                <p>We conduct a final walkthrough to ensure every detail meets our high standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our home cleaning services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How long does a typical home cleaning take?</h3>
                            <p>Regular cleaning typically takes 1-3 hours depending on home size and condition. Deep cleaning can take 3-6 hours. We'll provide an accurate time estimate during your consultation.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do I need to be home during the cleaning?</h3>
                            <p>No, you don't need to be present. Many of our clients provide access and go about their day. We're fully insured and bonded for your peace of mind.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What cleaning supplies do you use?</h3>
                            <p>We bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products that are safe for families and pets. You can also request specific products if preferred.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How often should I schedule regular cleaning?</h3>
                            <p>Most clients choose weekly or bi-weekly service. The frequency depends on your lifestyle, home size, pets, and personal preferences. We'll help you determine the best schedule.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What if I'm not satisfied with the cleaning?</h3>
                            <p>We guarantee your satisfaction. If you're not completely happy with our service, contact us within 24 hours and we'll return to address any concerns at no additional charge.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Are your cleaners background checked?</h3>
                            <p>Yes, all our cleaning professionals undergo thorough background checks, are fully insured, and receive ongoing training to maintain our high standards of service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready for a Spotless Home?</h2>
                        <p>Get your free quote and experience the Sweepo difference</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Quote Now
                            </button>
                            <a href="tel:+64-21-123-4567" className="btn btn-outline btn-large">
                                <i className="fas fa-phone"></i> Call +64 21 123 4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteModal />
        </>
    );
};

export default HomeCleaning;