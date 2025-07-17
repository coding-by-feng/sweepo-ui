import React from 'react';
import { WHY_CHOOSE_FEATURES } from '../../utils/constants';

const WhyChoose = () => {
    return (
        <section className="why-choose section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Sweepo?</h2>
                    <p>We're committed to delivering exceptional cleaning services that exceed your expectations</p>
                </div>

                <div className="features-grid">
                    {WHY_CHOOSE_FEATURES.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">
                                <i className={feature.icon}></i>
                            </div>

                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;