import React, { useEffect, useMemo } from 'react';
import { useModal } from '../../hooks/useModal';
import { useForm } from '../../hooks/useForm';

// Move initialValues outside component to prevent recreation on every render
// This is one of the key fixes - creating a stable reference
const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    service: '',
    frequency: '',
    bedrooms: '',
    bathrooms: '',
    additionalInfo: ''
};

const QuoteModal = () => {
    const { isQuoteModalOpen, closeQuoteModal } = useModal();

    // Memoize the handleSubmit function to prevent recreation on every render
    // This prevents the useForm hook from being recreated unnecessarily
    const handleSubmit = useMemo(() => async (formData) => {
        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    propertyType: formData.propertyType,
                    service: formData.service,
                    frequency: formData.frequency,
                    bedrooms: parseInt(formData.bedrooms) || 0,
                    bathrooms: parseInt(formData.bathrooms) || 0,
                    additionalInfo: formData.additionalInfo
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Quote request successful:', result);

            // Show success message
            alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
            closeQuoteModal();
        } catch (error) {
            console.error('Error submitting quote request:', error);
            alert('There was an error submitting your quote request. Please try again or contact us directly.');
        }
    }, [closeQuoteModal]);

    const { values, errors, isSubmitting, handleChange, handleSubmit: onSubmit, reset } = useForm(
        INITIAL_VALUES,
        handleSubmit
    );

    // This useEffect now has stable dependencies and won't cause infinite re-renders
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
    }, [isQuoteModalOpen, reset]); // reset is now memoized, so it won't change on every render

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
                        <label htmlFor="address">Property Address *</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            className={errors.address ? 'error' : ''}
                            required
                        />
                        {errors.address && <span className="error-message">{errors.address}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="propertyType">Property Type *</label>
                        <select
                            id="propertyType"
                            name="propertyType"
                            value={values.propertyType}
                            onChange={handleChange}
                            className={errors.propertyType ? 'error' : ''}
                            required
                        >
                            <option value="">Select property type</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Office">Office</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                        {errors.propertyType && <span className="error-message">{errors.propertyType}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Service Type *</label>
                        <select
                            id="service"
                            name="service"
                            value={values.service}
                            onChange={handleChange}
                            className={errors.service ? 'error' : ''}
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="Regular Cleaning">Regular Cleaning</option>
                            <option value="Deep Cleaning">Deep Cleaning</option>
                            <option value="Commercial Cleaning">Commercial Cleaning</option>
                            <option value="Pest Control">Pest Control</option>
                            <option value="Garbage Removal">Garbage Removal</option>
                            <option value="Lawn & Garden">Lawn & Garden</option>
                            <option value="Car Valet">Car Valet</option>
                        </select>
                        {errors.service && <span className="error-message">{errors.service}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="frequency">Frequency *</label>
                        <select
                            id="frequency"
                            name="frequency"
                            value={values.frequency}
                            onChange={handleChange}
                            className={errors.frequency ? 'error' : ''}
                            required
                        >
                            <option value="">Select frequency</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-weekly">Bi-weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="One-time">One-time</option>
                        </select>
                        {errors.frequency && <span className="error-message">{errors.frequency}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group form-group-half">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <input
                                type="number"
                                id="bedrooms"
                                name="bedrooms"
                                value={values.bedrooms}
                                onChange={handleChange}
                                min="0"
                                max="10"
                            />
                        </div>
                        <div className="form-group form-group-half">
                            <label htmlFor="bathrooms">Bathrooms</label>
                            <input
                                type="number"
                                id="bathrooms"
                                name="bathrooms"
                                value={values.bathrooms}
                                onChange={handleChange}
                                min="0"
                                max="10"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="additionalInfo">Additional Information</label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={values.additionalInfo}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Please describe any specific requirements or additional details..."
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