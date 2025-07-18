import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const CommercialCleaning = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Commercial Cleaning Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional commercial cleaning services in New Zealand. Office cleaning, retail cleaning, and industrial cleaning solutions. Book with Sweepo today!" />
                <meta name="keywords" content="commercial cleaning, office cleaning, business cleaning, industrial cleaning, New Zealand" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">

                        <h1>Professional Commercial Cleaning Services</h1>
                        <p>Maintain a clean, professional workspace that impresses clients and boosts employee productivity. Our comprehensive commercial cleaning solutions are tailored to your business needs.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-building"></i>
                                <span>All Business Types</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-clock"></i>
                                <span>Flexible Timing</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-certificate"></i>
                                <span>Fully Licensed</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-users"></i>
                                <span>Trained Professionals</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="service-details">
                <div className="container">
                    <div className="service-content-grid">
                        <div className="service-info">
                            <h2>Comprehensive Commercial Cleaning Solutions</h2>
                            <p>Create a professional, healthy work environment with our specialized commercial cleaning services. We understand that every business has unique needs, and we customize our approach to deliver exceptional results that enhance your company's image.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#28a745' }}>
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <h3>Office Cleaning</h3>
                                    <p>Professional office cleaning services to maintain a productive and healthy workplace.</p>
                                    <ul>
                                        <li>Daily, weekly, or monthly service</li>
                                        <li>Workstation and desk cleaning</li>
                                        <li>Conference room maintenance</li>
                                        <li>Kitchen and break room care</li>
                                        <li>Restroom sanitization</li>
                                        <li>Floor care and maintenance</li>
                                        <li>Trash removal and recycling</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#28a745' }}>
                                        <i className="fas fa-store"></i>
                                    </div>
                                    <h3>Retail & Restaurant Cleaning</h3>
                                    <p>Specialized cleaning for retail spaces and food service establishments.</p>
                                    <ul>
                                        <li>Customer area maintenance</li>
                                        <li>Kitchen deep cleaning</li>
                                        <li>Display and window cleaning</li>
                                        <li>Food safety compliance</li>
                                        <li>Floor care and polishing</li>
                                        <li>Inventory area cleaning</li>
                                        <li>After-hours service available</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#28a745' }}>
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <h3>Industrial Cleaning</h3>
                                    <p>Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities.</p>
                                    <ul>
                                        <li>Warehouse floor cleaning</li>
                                        <li>Machinery and equipment cleaning</li>
                                        <li>High-level cleaning services</li>
                                        <li>Pressure washing</li>
                                        <li>Hazardous material cleanup</li>
                                        <li>Loading dock maintenance</li>
                                        <li>Safety compliance cleaning</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#28a745' }}>
                                        <i className="fas fa-hospital"></i>
                                    </div>
                                    <h3>Medical & Healthcare</h3>
                                    <p>Specialized cleaning services for medical facilities with strict hygiene requirements.</p>
                                    <ul>
                                        <li>Medical-grade disinfection</li>
                                        <li>Biohazard cleanup</li>
                                        <li>Patient room sanitization</li>
                                        <li>Surgical suite cleaning</li>
                                        <li>Compliance with health standards</li>
                                        <li>Waiting area maintenance</li>
                                        <li>Emergency cleaning services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card" style={{ borderColor: '#28a745' }}>
                                <h3>Starting Prices</h3>
                                <div className="price-item">
                                    <span>Small Office (Under 2,000 sq ft)</span>
                                    <strong>From $150/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Medium Office (2,000-5,000 sq ft)</span>
                                    <strong>From $300/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Large Office (5,000+ sq ft)</span>
                                    <strong>From $500/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Retail/Restaurant</span>
                                    <strong>From $200/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Industrial/Warehouse</span>
                                    <strong>Custom Quote</strong>
                                </div>
                                <p className="price-note">*Prices based on weekly service. Discounts available for longer contracts.</p>
                            </div>

                            <div className="service-areas">
                                <h3>Business Types We Serve</h3>
                                <ul>
                                    <li>Corporate Offices</li>
                                    <li>Medical Facilities</li>
                                    <li>Retail Stores</li>
                                    <li>Restaurants & Cafes</li>
                                    <li>Schools & Universities</li>
                                    <li>Warehouses</li>
                                    <li>Manufacturing Plants</li>
                                    <li>Financial Institutions</li>
                                    <li>Government Buildings</li>
                                    <li>Religious Facilities</li>
                                    <li>Gyms & Sports Centers</li>
                                    <li>Auto Dealerships</li>
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
                        <h2>Our Professional 4-Step Process</h2>
                        <p>Streamlined service delivery designed for business efficiency</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#28a745' }}>1</div>
                            <div className="step-content">
                                <h3>Facility Assessment</h3>
                                <p>Comprehensive evaluation of your space, cleaning requirements, and scheduling needs.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#28a745' }}>2</div>
                            <div className="step-content">
                                <h3>Custom Service Plan</h3>
                                <p>Tailored cleaning program designed to meet your specific business requirements and budget.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#28a745' }}>3</div>
                            <div className="step-content">
                                <h3>Professional Implementation</h3>
                                <p>Trained teams execute the cleaning plan with minimal disruption to your business operations.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#28a745' }}>4</div>
                            <div className="step-content">
                                <h3>Quality Monitoring</h3>
                                <p>Regular quality checks and feedback sessions to ensure consistent, exceptional service.</p>
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
                        <p>Common questions about our commercial cleaning services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>What times are available for commercial cleaning?</h3>
                            <p>We offer flexible scheduling including after-hours, early morning, and weekend service to minimize disruption to your business operations. 24/7 emergency service is also available.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you provide cleaning supplies and equipment?</h3>
                            <p>Yes, we provide all necessary cleaning supplies, equipment, and materials as part of our service. We use commercial-grade products and can accommodate any specific requirements you may have.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How do you ensure consistent quality?</h3>
                            <p>We use detailed cleaning checklists, conduct regular quality inspections, and maintain open communication with clients. Our team supervisors perform regular site visits to ensure standards are met.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can you handle specialized cleaning requirements?</h3>
                            <p>Absolutely! We provide specialized services including medical facility cleaning, food service sanitation, post-construction cleanup, and hazardous material handling with appropriate certifications.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What are your contract terms?</h3>
                            <p>We offer flexible contract options from month-to-month to multi-year agreements. Longer contracts typically receive better pricing. We can discuss terms that work best for your business.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Are you insured for commercial work?</h3>
                            <p>Yes, we carry comprehensive commercial insurance including general liability and workers' compensation. We can provide certificates of insurance upon request for your records.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Enhance Your Business Image?</h2>
                        <p>Get a free facility assessment and custom cleaning proposal</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Assessment Now
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

export default CommercialCleaning;