import React, { useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import { useForm } from '../../hooks/useForm';

const QuoteModal = () => {
    const { isQuoteModalOpen, closeQuoteModal } = useModal();

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        message: ''
    };

    const handleSubmit = async (formData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Quote request:', {
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'website'
        });

        // Show success message
        alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
        closeQuoteModal();
    };

    const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit, reset } = useForm(
        initialValues,
        handleSubmit
    );

    useEffect(() => {
        if (isQuoteModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            reset();
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isQuoteModalOpen, reset]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeQuoteModal();
            }
        };

        if (isQuoteModalOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isQuoteModalOpen, closeQuoteModal]);

    if (!isQuoteModalOpen) return null;

    return (
        <div className="modal" onClick={closeQuoteModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Get Your Free Quote</h3>
                    <button
                        className="close"
                        onClick={closeQuoteModal}
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={onSubmit} className="quote-form">
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
                        <label htmlFor="service">Service Type *</label>
                        <select
                            id="service"
                            name="service"
                            value={values.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="home-cleaning">Home Cleaning</option>
                            <option value="commercial-cleaning">Commercial Cleaning</option>
                            <option value="pest-control">Pest Control</option>
                            <option value="garbage-removal">Garbage Removal</option>
                            <option value="lawn-garden">Lawn & Garden</option>
                            <option value="car-valet">Car Valet</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Property Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Details</label>
                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Please describe your cleaning requirements..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-large"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuoteModal;