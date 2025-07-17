import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

const ServicesOverview = () => {
    return (
        <section className="services-overview section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Professional Services</h2>
                    <p>Comprehensive cleaning solutions for every need, delivered by trained professionals you can trust</p>
                </div>

                <div className="services-grid">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon" style={{ backgroundColor: service.color }}>
                                <i className={service.icon}></i>
                            </div>

                            <h3>{service.title}</h3>
                            <p>{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            <Link to={service.link} className="btn btn-outline">
                                Learn More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;