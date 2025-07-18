import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const LawnGarden = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Lawn & Garden Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional lawn care and garden maintenance services in New Zealand. Complete landscaping solutions for beautiful outdoor spaces. Book with Sweepo today!" />
                <meta name="keywords" content="lawn care, garden maintenance, landscaping, lawn mowing, garden design, New Zealand" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">

                        <h1>Professional Lawn Care & Garden Maintenance</h1>
                        <p>Transform your outdoor spaces into beautiful, healthy landscapes with our comprehensive lawn care and garden maintenance services. From regular upkeep to complete landscape design, we make your property shine.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-calendar-check"></i>
                                <span>Regular Maintenance</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Eco-Friendly Practices</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-tools"></i>
                                <span>Professional Equipment</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-seedling"></i>
                                <span>Seasonal Expertise</span>
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
                            <h2>Complete Outdoor Care Solutions</h2>
                            <p>Our professional lawn and garden services keep your outdoor spaces beautiful year-round. Whether you need regular maintenance or seasonal cleanup, our experienced team delivers exceptional results using sustainable practices and quality equipment.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#198754' }}>
                                        <i className="fas fa-cut"></i>
                                    </div>
                                    <h3>Lawn Care Services</h3>
                                    <p>Complete lawn maintenance to keep your grass healthy and beautiful throughout the seasons.</p>
                                    <ul>
                                        <li>Regular mowing and edging</li>
                                        <li>Fertilization programs</li>
                                        <li>Weed control and treatment</li>
                                        <li>Aeration and overseeding</li>
                                        <li>Lawn pest management</li>
                                        <li>Irrigation system maintenance</li>
                                        <li>Seasonal lawn preparation</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#198754' }}>
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <h3>Garden Maintenance</h3>
                                    <p>Professional garden care to maintain beautiful flower beds, plants, and landscaping features.</p>
                                    <ul>
                                        <li>Pruning and trimming</li>
                                        <li>Planting and transplanting</li>
                                        <li>Mulching and soil care</li>
                                        <li>Garden bed maintenance</li>
                                        <li>Plant health monitoring</li>
                                        <li>Seasonal garden cleanup</li>
                                        <li>Compost and organic care</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#198754' }}>
                                        <i className="fas fa-tree"></i>
                                    </div>
                                    <h3>Tree & Shrub Care</h3>
                                    <p>Expert care for trees, shrubs, and larger landscape features to maintain health and appearance.</p>
                                    <ul>
                                        <li>Tree and shrub pruning</li>
                                        <li>Hedge trimming and shaping</li>
                                        <li>Disease and pest treatment</li>
                                        <li>Tree removal and stump grinding</li>
                                        <li>Plant nutrition programs</li>
                                        <li>Emergency storm cleanup</li>
                                        <li>Landscape assessment</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#198754' }}>
                                        <i className="fas fa-palette"></i>
                                    </div>
                                    <h3>Landscaping & Design</h3>
                                    <p>Complete landscaping solutions from design to installation and ongoing maintenance.</p>
                                    <ul>
                                        <li>Landscape design consultation</li>
                                        <li>Garden installation</li>
                                        <li>Hardscape installation</li>
                                        <li>Irrigation system design</li>
                                        <li>Seasonal color planning</li>
                                        <li>Outdoor lighting installation</li>
                                        <li>Property enhancement projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card" style={{ borderColor: '#198754' }}>
                                <h3>Starting Prices</h3>
                                <div className="price-item">
                                    <span>Lawn Mowing</span>
                                    <strong>From $45/visit</strong>
                                </div>
                                <div className="price-item">
                                    <span>Garden Maintenance</span>
                                    <strong>From $65/visit</strong>
                                </div>
                                <div className="price-item">
                                    <span>Tree & Shrub Care</span>
                                    <strong>From $85/visit</strong>
                                </div>
                                <div className="price-item">
                                    <span>Landscape Installation</span>
                                    <strong>From $500/project</strong>
                                </div>
                                <div className="price-item">
                                    <span>Seasonal Cleanup</span>
                                    <strong>From $120/visit</strong>
                                </div>
                                <p className="price-note">*Prices vary based on property size, service frequency, and specific requirements. Package discounts available.</p>
                            </div>

                            <div className="service-areas">
                                <h3>Seasonal Services</h3>
                                <ul>
                                    <li><strong>Spring:</strong> Cleanup, fertilization, planting</li>
                                    <li><strong>Summer:</strong> Regular maintenance, irrigation</li>
                                    <li><strong>Autumn:</strong> Leaf removal, winterization</li>
                                    <li><strong>Winter:</strong> Pruning, planning, protection</li>
                                </ul>

                                <h3 style={{ marginTop: '2rem' }}>Specialized Services</h3>
                                <ul>
                                    <li>Organic lawn care</li>
                                    <li>Native plant gardens</li>
                                    <li>Vegetable garden maintenance</li>
                                    <li>Water-wise landscaping</li>
                                    <li>Commercial property care</li>
                                    <li>Property management services</li>
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
                        <h2>Our Comprehensive 4-Step Approach</h2>
                        <p>Creating and maintaining beautiful outdoor spaces through expert care</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#198754' }}>1</div>
                            <div className="step-content">
                                <h3>Property Assessment</h3>
                                <p>Comprehensive evaluation of your outdoor space, soil conditions, plant health, and maintenance needs.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#198754' }}>2</div>
                            <div className="step-content">
                                <h3>Custom Care Plan</h3>
                                <p>Develop a tailored maintenance schedule and treatment plan based on your landscape's specific requirements.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#198754' }}>3</div>
                            <div className="step-content">
                                <h3>Professional Service</h3>
                                <p>Expert maintenance using professional equipment and sustainable practices to enhance your landscape's health and beauty.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#198754' }}>4</div>
                            <div className="step-content">
                                <h3>Ongoing Monitoring</h3>
                                <p>Regular check-ups and seasonal adjustments to ensure your landscape thrives throughout the year.</p>
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
                        <p>Common questions about our lawn and garden services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How often should my lawn be mowed?</h3>
                            <p>Most lawns benefit from weekly mowing during growing season (spring and summer) and bi-weekly during slower growth periods. We adjust frequency based on grass type and weather conditions.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you use environmentally friendly practices?</h3>
                            <p>Yes, we prioritize sustainable lawn care practices including organic fertilizers, integrated pest management, water conservation techniques, and environmentally responsible disposal methods.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What's included in your garden maintenance service?</h3>
                            <p>Our garden maintenance includes pruning, weeding, mulching, plant health monitoring, seasonal planting, irrigation checks, and general bed cleanup to keep your gardens looking their best.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can you help design a new landscape for my property?</h3>
                            <p>Absolutely! We offer complete landscape design services including consultation, planning, plant selection, installation, and ongoing maintenance to create your ideal outdoor space.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you provide services during winter months?</h3>
                            <p>Yes, we offer year-round services including winter pruning, landscape planning, hardscape projects, and preparation for spring growth. Winter is an excellent time for many landscape improvements.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What happens if weather affects the scheduled service?</h3>
                            <p>We monitor weather conditions and will reschedule services if necessary for safety or quality reasons. We'll communicate any changes in advance and work with you to find alternative dates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Outdoor Space?</h2>
                        <p>Get professional lawn and garden care that keeps your property beautiful year-round</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Estimate Now
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

export default LawnGarden;