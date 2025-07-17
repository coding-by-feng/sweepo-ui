import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TEAM_MEMBERS, COMPANY_INFO } from '../utils/constants';

const Company = () => {
    return (
        <>
            <Helmet>
                <title>About Sweepo | Company Details - We sweep, you relax</title>
                <meta name="description" content="Learn about Sweepo - New Zealand's trusted cleaning service company. Professional, reliable, and eco-friendly cleaning solutions." />
                <meta name="keywords" content="about sweepo, cleaning company new zealand, professional cleaning team, eco-friendly cleaning" />
            </Helmet>

            {/* Company Hero */}
            <section className="company-hero">
                <div className="container">
                    <h1>About Sweepo</h1>
                    <p>New Zealand's most trusted professional cleaning service</p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Story</h2>
                        <p>Building trust through exceptional cleaning services since our founding</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Founded with a simple mission: to provide exceptional cleaning services that allow our customers to focus on what matters most to them. At {COMPANY_INFO.name}, we believe that a clean environment contributes to a healthier, happier lifestyle.
                        </p>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            Over the years, we've built our reputation on reliability, attention to detail, and outstanding customer service. Our team of trained professionals uses eco-friendly products and state-of-the-art equipment to deliver results that consistently exceed expectations.
                        </p>

                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            From residential homes to commercial spaces, we take pride in creating spotless environments that our customers can be proud of. Because when we sweep, you can truly relax.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3>Trust & Reliability</h3>
                            <p>We show up when we say we will and deliver consistent, dependable service you can count on.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3>Excellence</h3>
                            <p>We strive for perfection in every job, no matter how big or small, ensuring exceptional results every time.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3>Environmental Responsibility</h3>
                            <p>We're committed to using eco-friendly products and sustainable practices that protect our planet.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Community Focus</h3>
                            <p>As a local New Zealand company, we're dedicated to serving our communities with personalized care.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Safety First</h3>
                            <p>The safety of our team and customers is our top priority in everything we do.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-smile"></i>
                            </div>
                            <h3>Customer Satisfaction</h3>
                            <p>Your happiness is our success. We're not satisfied until you're completely delighted with our service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Team</h2>
                        <p>The dedicated professionals behind Sweepo's success</p>
                    </div>

                    <div className="team-grid">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="team-member">
                                <div className="member-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        onError={(e) => {
                                            // Fallback to initials if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="member-image" style={{ display: 'none' }}>
                                        {member.initials}
                                    </div>
                                </div>

                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Sweepo by the Numbers</h2>
                        <p>Our track record speaks for itself</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>5,000+</div>
                            <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>Happy Customers</p>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>10,000+</div>
                            <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>Jobs Completed</p>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>5+</div>
                            <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>Years of Experience</p>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>24/7</div>
                            <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>Service Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Experience the Sweepo Difference?</h2>
                        <p>Join thousands of satisfied customers across New Zealand</p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Get Free Quote
                            </button>
                            <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline btn-large">
                                <i className="fas fa-phone"></i> {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Company;