import React from 'react';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonials = () => {
    return (
        <section className="testimonials section">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Don't just take our word for it - hear from our satisfied customers</p>
                </div>

                <div className="testimonials-grid">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p className="testimonial-text">{testimonial.text}</p>

                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.initials}
                                </div>
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;