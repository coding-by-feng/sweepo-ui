import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const PestControl = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Pest Control Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional pest control services in New Zealand. Safe and effective pest removal for homes and businesses. Book with Sweepo today!" />
                <meta name="keywords" content="pest control, extermination, rodent control, insect removal, New Zealand pest control" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">
                        <h1>Professional Pest Control Services</h1>
                        <p>Protect your property from unwanted pests with our safe, effective, and environmentally responsible pest control solutions. We eliminate current infestations and prevent future problems.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Safe & Non-Toxic</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-leaf"></i>
                                <span>Eco-Friendly Methods</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-certificate"></i>
                                <span>Licensed Professionals</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-thumbs-up"></i>
                                <span>100% Satisfaction Guaranteed</span>
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
                            <h2>Comprehensive Pest Control Solutions</h2>
                            <p>Our professional pest control services protect your home or business from a wide range of pests using safe, effective methods. We focus on long-term prevention and use integrated pest management techniques to keep your property pest-free.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#dc3545' }}>
                                        <i className="fas fa-spider"></i>
                                    </div>
                                    <h3>General Pest Control</h3>
                                    <p>Comprehensive treatment for common household and commercial pests.</p>
                                    <ul>
                                        <li>Ants and ant colonies</li>
                                        <li>Spiders and web removal</li>
                                        <li>Cockroaches and beetles</li>
                                        <li>Silverfish and moths</li>
                                        <li>Flies and gnats</li>
                                        <li>Earwigs and crickets</li>
                                        <li>Perimeter barrier treatment</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#dc3545' }}>
                                        <i className="fas fa-mouse"></i>
                                    </div>
                                    <h3>Rodent Control</h3>
                                    <p>Safe and humane rodent removal and prevention services.</p>
                                    <ul>
                                        <li>Mouse identification and removal</li>
                                        <li>Rat control and exclusion</li>
                                        <li>Entry point sealing</li>
                                        <li>Bait station installation</li>
                                        <li>Nest removal and sanitization</li>
                                        <li>Prevention consultations</li>
                                        <li>Ongoing monitoring programs</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#dc3545' }}>
                                        <i className="fas fa-bug"></i>
                                    </div>
                                    <h3>Specialized Treatments</h3>
                                    <p>Targeted solutions for specific pest problems and seasonal issues.</p>
                                    <ul>
                                        <li>Wasp and bee removal</li>
                                        <li>Flea and tick treatment</li>
                                        <li>Bed bug elimination</li>
                                        <li>Termite inspection and treatment</li>
                                        <li>Bird deterrent systems</li>
                                        <li>Seasonal pest prevention</li>
                                        <li>Commercial kitchen pest control</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#dc3545' }}>
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <h3>Organic & Eco-Friendly</h3>
                                    <p>Environmentally conscious pest control options for sensitive environments.</p>
                                    <ul>
                                        <li>Organic treatment methods</li>
                                        <li>Non-toxic pest solutions</li>
                                        <li>Child and pet-safe options</li>
                                        <li>Botanical pest deterrents</li>
                                        <li>Integrated pest management</li>
                                        <li>Natural habitat modification</li>
                                        <li>Eco-friendly ongoing maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card" style={{ borderColor: '#dc3545' }}>
                                <h3>Starting Prices</h3>
                                <div className="price-item">
                                    <span>Initial Inspection</span>
                                    <strong>FREE</strong>
                                </div>
                                <div className="price-item">
                                    <span>General Pest Treatment</span>
                                    <strong>From $120</strong>
                                </div>
                                <div className="price-item">
                                    <span>Rodent Control</span>
                                    <strong>From $180</strong>
                                </div>
                                <div className="price-item">
                                    <span>Specialized Treatments</span>
                                    <strong>From $200</strong>
                                </div>
                                <div className="price-item">
                                    <span>Ongoing Maintenance</span>
                                    <strong>From $80/visit</strong>
                                </div>
                                <p className="price-note">*Prices vary based on property size, pest type, and treatment complexity</p>
                            </div>

                            <div className="service-areas">
                                <h3>Common Pests We Control</h3>
                                <ul>
                                    <li>Ants & Ant Colonies</li>
                                    <li>Spiders & Webs</li>
                                    <li>Cockroaches</li>
                                    <li>Mice & Rats</li>
                                    <li>Wasps & Bees</li>
                                    <li>Fleas & Ticks</li>
                                    <li>Bed Bugs</li>
                                    <li>Silverfish</li>
                                    <li>Moths</li>
                                    <li>Beetles</li>
                                    <li>Termites</li>
                                    <li>And many more...</li>
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
                        <h2>Our Proven 4-Step Process</h2>
                        <p>Effective pest control starts with proper assessment and planning</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#dc3545' }}>1</div>
                            <div className="step-content">
                                <h3>Free Inspection</h3>
                                <p>Comprehensive property assessment to identify pest issues, entry points, and contributing factors.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#dc3545' }}>2</div>
                            <div className="step-content">
                                <h3>Custom Treatment Plan</h3>
                                <p>Develop a tailored pest control strategy based on your specific needs and pest types identified.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#dc3545' }}>3</div>
                            <div className="step-content">
                                <h3>Professional Treatment</h3>
                                <p>Apply safe, effective treatments using the latest techniques and environmentally responsible products.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#dc3545' }}>4</div>
                            <div className="step-content">
                                <h3>Follow-Up & Prevention</h3>
                                <p>Monitor results, provide prevention tips, and schedule maintenance visits to keep pests away.</p>
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
                        <p>Common questions about our pest control services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Are your pest control treatments safe for children and pets?</h3>
                            <p>Yes, we prioritize safety and use eco-friendly, non-toxic treatments whenever possible. We offer specialized organic options for families with young children and pets.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How long does a typical pest control treatment take?</h3>
                            <p>Treatment time varies depending on property size and pest type, typically ranging from 30 minutes to 2 hours. We'll provide an estimated timeframe during your free inspection.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How often should I schedule pest control treatments?</h3>
                            <p>For prevention, quarterly treatments are usually sufficient. Properties with active infestations may need monthly treatments initially, then transition to maintenance schedules.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do I need to leave my home during treatment?</h3>
                            <p>Most treatments allow you to remain at home. We'll inform you of any specific requirements during the consultation and ensure your comfort and safety.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What's included in your pest control guarantee?</h3>
                            <p>We guarantee our treatments will effectively control target pests. If pests return between scheduled services, we'll return at no additional charge to re-treat the affected areas.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can you help with both indoor and outdoor pest problems?</h3>
                            <p>Absolutely! Our comprehensive approach includes interior treatments, exterior perimeter protection, and lawn/garden pest control to create a complete barrier around your property.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Eliminate Your Pest Problems?</h2>
                        <p>Get your free inspection and custom treatment plan today</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Get Free Inspection Now
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

export default PestControl;