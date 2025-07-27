import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import QuoteModal from '../../components/forms/QuoteModal';

const CarValet = () => {
    const { openQuoteModal } = useModal();

    return (
        <>
            <Helmet>
                <title>Car Valet Services | Sweepo - We sweep, you relax</title>
                <meta name="description" content="Professional car valet and detailing services in New Zealand. Interior and exterior car cleaning and protection. Book with Sweepo today!" />
                <meta name="keywords" content="car valet, car detailing, car cleaning, mobile car wash, vehicle cleaning, New Zealand" />
            </Helmet>

            {/* Service Hero */}
            <section className="service-hero">
                <div className="container">
                    <div className="service-hero-content">

                        <h1>Professional Car Valet & Detailing Services</h1>
                        <p>Keep your vehicle looking its absolute best with our comprehensive car valet and detailing services. From basic washes to premium protection packages, we restore and maintain your car's appearance inside and out.</p>

                        <div className="service-hero-features">
                            <div className="feature-item">
                                <i className="fas fa-car"></i>
                                <span>All Vehicle Types</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Paint Protection</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-tools"></i>
                                <span>Professional Products</span>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-home"></i>
                                <span>Mobile Service Available</span>
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
                            <h2>Complete Vehicle Care Solutions</h2>
                            <p>Our professional car valet services provide everything from basic cleaning to comprehensive detailing packages. Using premium products and techniques, we protect your investment and keep your vehicle looking showroom fresh.</p>

                            <div className="service-types">
                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#ffc107' }}>
                                        <i className="fas fa-tint"></i>
                                    </div>
                                    <h3>Exterior Services</h3>
                                    <p>Complete exterior cleaning and protection to keep your car's paintwork pristine.</p>
                                    <ul>
                                        <li>Hand wash and dry</li>
                                        <li>Paint decontamination</li>
                                        <li>Clay bar treatment</li>
                                        <li>Wheel and tire cleaning</li>
                                        <li>Window and mirror cleaning</li>
                                        <li>Trim and plastic restoration</li>
                                        <li>Headlight restoration</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#ffc107' }}>
                                        <i className="fas fa-couch"></i>
                                    </div>
                                    <h3>Interior Services</h3>
                                    <p>Deep cleaning and conditioning for all interior surfaces and upholstery.</p>
                                    <ul>
                                        <li>Vacuum and deep clean</li>
                                        <li>Leather conditioning</li>
                                        <li>Fabric protection</li>
                                        <li>Dashboard and console care</li>
                                        <li>Steam cleaning</li>
                                        <li>Odor elimination</li>
                                        <li>Floor mat cleaning</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#ffc107' }}>
                                        <i className="fas fa-gem"></i>
                                    </div>
                                    <h3>Premium Detailing</h3>
                                    <p>Advanced detailing services for maximum protection and show-quality results.</p>
                                    <ul>
                                        <li>Paint correction and polishing</li>
                                        <li>Ceramic coating application</li>
                                        <li>Paint protection film</li>
                                        <li>Engine bay detailing</li>
                                        <li>Chrome and metal polishing</li>
                                        <li>Swirl mark removal</li>
                                        <li>Show car preparation</li>
                                    </ul>
                                </div>

                                <div className="service-type-card">
                                    <div className="service-type-icon" style={{ backgroundColor: '#ffc107' }}>
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <h3>Mobile Valet</h3>
                                    <p>Convenient mobile service bringing professional car care directly to your location.</p>
                                    <ul>
                                        <li>On-site service at home or office</li>
                                        <li>Flexible scheduling</li>
                                        <li>Water-efficient cleaning</li>
                                        <li>Professional mobile equipment</li>
                                        <li>Multiple vehicle discounts</li>
                                        <li>Fleet service programs</li>
                                        <li>Regular maintenance schedules</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="service-sidebar">
                            <div className="pricing-card" style={{ borderColor: '#ffc107' }}>
                                <h3>Service Packages</h3>
                                <div className="price-item">
                                    <span>Basic Wash & Vacuum</span>
                                    <strong>From $35</strong>
                                </div>
                                <div className="price-item">
                                    <span>Standard Valet</span>
                                    <strong>From $65</strong>
                                </div>
                                <div className="price-item">
                                    <span>Premium Detail</span>
                                    <strong>From $120</strong>
                                </div>
                                <div className="price-item">
                                    <span>Full Protection Package</span>
                                    <strong>From $200</strong>
                                </div>
                                <div className="price-item">
                                    <span>Mobile Service</span>
                                    <strong>+$15 travel fee</strong>
                                </div>
                                <p className="price-note">*Prices vary based on vehicle size, condition, and selected services. Package deals available.</p>
                            </div>

                            <div className="service-areas">
                                <h3>Vehicle Types</h3>
                                <ul>
                                    <li>Cars & Sedans</li>
                                    <li>SUVs & 4WDs</li>
                                    <li>Hatchbacks</li>
                                    <li>Utes & Trucks</li>
                                    <li>Vans & People Movers</li>
                                    <li>Motorcycles</li>
                                    <li>Boats & Marine</li>
                                    <li>RVs & Caravans</li>
                                    <li>Classic & Luxury Cars</li>
                                    <li>Fleet Vehicles</li>
                                </ul>

                                <h3 style={{ marginTop: '2rem' }}>Add-On Services</h3>
                                <ul>
                                    <li>Engine bay cleaning</li>
                                    <li>Undercarriage wash</li>
                                    <li>Pet hair removal</li>
                                    <li>Stain removal</li>
                                    <li>Bug and tar removal</li>
                                    <li>Scratch repair</li>
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
                        <p>Meticulous attention to detail for exceptional results</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#ffc107', color: '#333' }}>1</div>
                            <div className="step-content">
                                <h3>Vehicle Inspection</h3>
                                <p>Thorough assessment of your vehicle's condition, noting specific areas of concern and tailoring our approach accordingly.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#ffc107', color: '#333' }}>2</div>
                            <div className="step-content">
                                <h3>Pre-Treatment</h3>
                                <p>Apply specialized pre-treatments for stubborn dirt, stains, and contaminants to ensure optimal cleaning results.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#ffc107', color: '#333' }}>3</div>
                            <div className="step-content">
                                <h3>Deep Clean & Detail</h3>
                                <p>Comprehensive cleaning using professional techniques and premium products for both interior and exterior surfaces.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number" style={{ backgroundColor: '#ffc107', color: '#333' }}>4</div>
                            <div className="step-content">
                                <h3>Protection & Finish</h3>
                                <p>Apply protective coatings and finishes to preserve the clean look and protect your investment for longer-lasting results.</p>
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
                        <p>Common questions about our car valet services</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How long does a car valet service take?</h3>
                            <p>Service times vary by package: Basic wash takes 30-45 minutes, Standard valet 1-2 hours, Premium detail 3-4 hours, and Full protection packages can take 4-6 hours depending on vehicle condition.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you offer mobile car valet services?</h3>
                            <p>Yes! Our mobile service brings professional car care to your home, office, or preferred location. We have water-efficient systems and all necessary equipment for on-site service.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What's the difference between a basic wash and premium detailing?</h3>
                            <p>Basic wash includes exterior cleaning and interior vacuum. Premium detailing involves paint correction, protection application, deep interior cleaning, and conditioning - essentially restoring your car to near-new condition.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How often should I have my car professionally detailed?</h3>
                            <p>For optimal protection and appearance, we recommend basic cleaning monthly, standard valet every 2-3 months, and premium detailing 2-3 times per year, depending on usage and conditions.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you work on all types of vehicles?</h3>
                            <p>Yes, we service all vehicle types including cars, SUVs, trucks, motorcycles, boats, and RVs. We have specialized techniques and products for different vehicle types and finishes.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What products do you use for car detailing?</h3>
                            <p>We use only premium automotive-grade products from trusted brands. All products are safe for your vehicle's surfaces and environmentally responsible. We can discuss specific product preferences upon request.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Make Your Car Shine?</h2>
                        <p>Book professional car valet service and protect your investment</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                                Book Car Valet Now
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

export default CarValet;