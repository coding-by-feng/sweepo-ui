import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const GarbageRemoval = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Garbage Removal Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional garbage removal and waste management services in New Zealand. Residential and commercial waste collection. Book with Sweepo today!" />
                <meta name="keywords" content="garbage removal, waste management, rubbish collection, waste disposal, New Zealand" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">
                        <h1>Professional Garbage Removal & Waste Management</h1>
                        <p>Reliable waste collection and disposal services for homes and businesses. From regular pickups to one-time cleanouts, we handle all your waste management needs efficiently and responsibly.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-clock"></i>
                                <span>Flexible Scheduling</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-recycle"></i>
                                <span>Eco-Friendly Disposal</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-truck"></i>
                                <span>Professional Equipment</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Fully Licensed & Insured</span>
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
                            <h2>Comprehensive Waste Management Solutions</h2>
                            <p>Our professional garbage removal services provide convenient, reliable, and environmentally responsible waste management for residential and commercial properties. We handle everything from regular collections to large-scale cleanouts.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#fd7e14' }}>
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <h3>Residential Collection</h3>
                                    <p>Regular and one-time garbage collection services for homes and apartments.</p>
                                    <ul>
                                        <li>Weekly/bi-weekly pickup</li>
                                        <li>General household waste</li>
                                        <li>Recycling collection</li>
                                        <li>Green waste disposal</li>
                                        <li>Bulky item removal</li>
                                        <li>Holiday collection adjustments</li>
                                        <li>Bin cleaning and maintenance</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#fd7e14' }}>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <h3>Commercial Waste</h3>
                                    <p>Tailored waste management solutions for businesses of all sizes.</p>
                                    <ul>
                                        <li>Office waste collection</li>
                                        <li>Retail waste management</li>
                                        <li>Restaurant waste disposal</li>
                                        <li>Industrial waste removal</li>
                                        <li>Confidential document shredding</li>
                                        <li>Compactor and dumpster service</li>
                                        <li>Waste audit and consulting</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#fd7e14' }}>
                                        <i className="fas fa-hammer"></i>
                                    </div>
                                    <h3>Construction & Renovation</h3>
                                    <p>Specialized disposal services for construction and renovation projects.</p>
                                    <ul>
                                        <li>Construction debris removal</li>
                                        <li>Renovation waste disposal</li>
                                        <li>Drywall and lumber removal</li>
                                        <li>Concrete and masonry disposal</li>
                                        <li>Roofing material removal</li>
                                        <li>Site cleanup services</li>
                                        <li>Roll-off dumpster rental</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#fd7e14' }}>
                                        <i className="fas fa-broom"></i>
                                    </div>
                                    <h3>Cleanout Services</h3>
                                    <p>Complete property cleanout services for various situations and needs.</p>
                                    <ul>
                                        <li>Estate cleanouts</li>
                                        <li>Garage and basement clearing</li>
                                        <li>Office cleanouts</li>
                                        <li>Hoarding cleanup assistance</li>
                                        <li>Moving and downsizing help</li>
                                        <li>Storage unit cleanouts</li>
                                        <li>Property management cleanouts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card" style={{ borderColor: '#fd7e14' }}>
                                <h3>Starting Prices</h3>
                                <div className="price-item">
                                    <span>Residential Pickup</span>
                                    <strong>From $25/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Commercial Collection</span>
                                    <strong>From $80/week</strong>
                                </div>
                                <div className="price-item">
                                    <span>Bulky Item Removal</span>
                                    <strong>From $60/item</strong>
                                </div>
                                <div className="price-item">
                                    <span>Construction Debris</span>
                                    <strong>From $200/load</strong>
                                </div>
                                <div className="price-item">
                                    <span>Complete Cleanouts</span>
                                    <strong>From $300</strong>
                                </div>
                                <p className="price-note">*Prices vary based on volume, frequency, and waste type. Recycling discounts available.</p>
                            </div>

                            <div className="service-areas">
                                <h3>We Accept</h3>
                                <ul>
                                    <li>General Household Waste</li>
                                    <li>Recyclable Materials</li>
                                    <li>Green Waste & Yard Debris</li>
                                    <li>Construction Materials</li>
                                    <li>Furniture & Appliances</li>
                                    <li>Office Equipment</li>
                                    <li>Paper & Cardboard</li>
                                    <li>Electronic Waste (E-waste)</li>
                                    <li>Metal & Scrap Materials</li>
                                    <li>Glass & Plastic</li>
                                </ul>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                                    <strong>Note:</strong> Hazardous materials require special handling. Contact us for details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Simple 4-Step Process</h2>
                        <p>Getting reliable waste management has never been easier</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#fd7e14' }}>1</div>
                            <div className="step-content">
                                <h3>Schedule Service</h3>
                                <p>Contact us for a free quote and choose your pickup schedule - weekly, monthly, or one-time service.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#fd7e14' }}>2</div>
                            <div className="step-content">
                                <h3>Prepare Your Waste</h3>
                                <p>Sort materials as needed and place them in designated areas or containers by pickup time.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#fd7e14' }}>3</div>
                            <div className="step-content">
                                <h3>Professional Collection</h3>
                                <p>Our team arrives on schedule with proper equipment to collect and load all waste safely and efficiently.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#fd7e14' }}>4</div>
                            <div className="step-content">
                                <h3>Responsible Disposal</h3>
                                <p>We transport waste to appropriate facilities, prioritizing recycling and environmentally responsible disposal methods.</p>
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
                        <p>Common questions about our garbage removal services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>What types of waste do you collect?</h3>
                            <p>We collect most types of waste including household garbage, recycling, yard waste, furniture, appliances, and construction debris. Hazardous materials require special arrangements.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How do you determine pricing for waste removal?</h3>
                            <p>Pricing is based on volume, weight, frequency of service, and type of materials. We offer transparent pricing with no hidden fees and free quotes for all services.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you provide bins or containers?</h3>
                            <p>Yes, we can provide various sizes of bins and containers for regular service. For one-time collections, we can also work with your existing containers or bags.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What happens to recyclable materials?</h3>
                            <p>We prioritize recycling and work with certified recycling facilities. Materials are sorted and processed according to local recycling guidelines to minimize landfill waste.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can you handle same-day or emergency pickups?</h3>
                            <p>Yes, we offer same-day and emergency pickup services for urgent situations. Additional fees may apply, and availability depends on our current schedule.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you offer services for special events or cleanouts?</h3>
                            <p>Absolutely! We provide specialized services for events, estate cleanouts, moving assistance, and large-scale cleanup projects with flexible scheduling options.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Simplify Your Waste Management?</h2>
                        <p>Get reliable garbage removal service starting today</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Quote Now
                            </button>
                            <a href="tel:+64225269873" className="btn btn-outline btn-large">
                                <i className="fas fa-phone"></i> Call 022 526 9873
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteModal />
        </>
    );
};

export default GarbageRemoval;