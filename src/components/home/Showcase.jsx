import React from 'react';
import { useModal } from '../../hooks/useModal';

const Showcase = () => {
    const { openQuoteModal } = useModal();

    const showcaseItems = [
        {
            id: 1,
            title: 'Professional Equipment',
            description: 'State-of-the-art cleaning equipment for superior results',
            image: '/images/showcase/equipment.jpg',
            icon: 'fas fa-tools'
        },
        {
            id: 2,
            title: 'Trained Technicians',
            description: 'Experienced and certified cleaning professionals',
            image: '/images/showcase/team.jpg',
            icon: 'fas fa-users'
        },
        {
            id: 3,
            title: 'Quality Results',
            description: 'Spotless results that exceed expectations every time',
            image: '/images/showcase/results.jpg',
            icon: 'fas fa-star'
        }
    ];

    return (
        <section className="showcase section">
            <div className="container">
                <div className="section-header">
                    <h2>See the Sweepo Difference</h2>
                    <p>Experience the quality and professionalism that sets us apart</p>
                </div>

                <div className="showcase-grid">
                    {showcaseItems.map((item) => (
                        <div key={item.id} className="showcase-item">
                            <div className="showcase-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(e) => {
                                        // Fallback to icon if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="image-fallback" style={{ display: 'none' }}>
                                    <i className={item.icon}></i>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <button className="btn btn-primary btn-large" onClick={openQuoteModal}>
                        Get Your Free Quote Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;