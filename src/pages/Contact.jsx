import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from '../hooks/useForm';
import { COMPANY_INFO } from '../utils/constants';

// Move initialValues outside component to prevent recreation on every render
const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
};

const Contact = () => {
    // Memoize the handleSubmit function to prevent recreation
    const handleSubmit = useMemo(() => async (formData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Contact form submission:', {
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'contact-page'
        });

        // Show success message
        alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    }, []);

    const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit } = useForm(
        INITIAL_VALUES,
        handleSubmit
    );

    return (
        <>
            <Helmet>
                <title>Contact Sweepo | Get In Touch - We sweep, you relax</title>
                <meta name="description" content="Contact Sweepo for professional cleaning services in New Zealand. Get in touch for quotes, bookings, or any questions." />
                <meta name="keywords" content="contact sweepo, cleaning services contact, new zealand cleaning, get quote" />
            </Helmet>


            {/* Contact Content */}
            <section className="section" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div>
                            <div className="contact-form">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'error' : ''}
                                            required
                                        />
                                        {errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            required
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'error' : ''}
                                            required
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={values.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="quote">Request a Quote</option>
                                            <option value="booking">Make a Booking</option>
                                            <option value="complaint">File a Complaint</option>
                                            <option value="compliment">Leave a Compliment</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            rows="6"
                                            placeholder="Please tell us how we can help you..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-large"
                                        disabled={isSubmitting}
                                        style={{ width: '100%' }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>We're here to help! Contact us using any of the methods below.</p>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Phone</h3>
                                    <p><a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a></p>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Available 24/7 for emergencies</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Email</h3>
                                    <p><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></p>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>We respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Service Area</h3>
                                    <p>{COMPANY_INFO.address}</p>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Serving all of New Zealand</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Hours</h3>
                                    <p>{COMPANY_INFO.hours}</p>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Emergency services available</p>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="map-container" style={{ marginTop: '2rem' }}>
                                <div style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden', border: '2px solid #ddd' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3!2d174.7633!3d-36.8485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6cd%3A0x4aa7f8715ee2d76d!2s15%20Whitaker%20Pl%2C%20Grafton%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1642678901234!5m2!1sen!2snz"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Sweepo Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How quickly can you respond to a service request?</h3>
                            <p>We typically respond to inquiries within 2-4 hours and can often schedule same-day or next-day service depending on availability and urgency.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you provide free quotes?</h3>
                            <p>Yes! We provide free, no-obligation quotes for all our services. Simply contact us with your requirements and we'll provide a detailed estimate.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Are your services available on weekends?</h3>
                            <p>Absolutely! We offer services 7 days a week, including weekends and holidays. Emergency services are available 24/7.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What areas do you service?</h3>
                            <p>We provide services throughout New Zealand. Contact us to confirm service availability in your specific area.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How do I prepare for a cleaning service?</h3>
                            <p>We'll provide specific preparation instructions when you book. Generally, clearing clutter and securing valuables is all that's needed.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What if I'm not satisfied with the service?</h3>
                            <p>We offer a 100% satisfaction guarantee. If you're not completely happy with our service, contact us within 24 hours and we'll make it right.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;