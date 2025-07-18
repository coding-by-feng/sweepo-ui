import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Array of images from the public/images directory - only six main service images
    const images = [
        {
            src: '/images/services/home-cleaning-1.jpg',
            alt: 'Professional Home Cleaning Services',
            title: 'Home Cleaning'
        },
        {
            src: '/images/services/commercial-cleaning-1.jpg',
            alt: 'Commercial Cleaning Services',
            title: 'Commercial Cleaning'
        },
        {
            src: '/images/services/car-valet-1.jpg',
            alt: 'Car Valet Services',
            title: 'Car Valet'
        },
        {
            src: '/images/services/pest-control-1.jpg',
            alt: 'Pest Control Services',
            title: 'Pest Control'
        },
        {
            src: '/images/services/garbage-removal-1.jpg',
            alt: 'Garbage Removal Services',
            title: 'Garbage Removal'
        },
        {
            src: '/images/services/lawn-garden-1.jpg',
            alt: 'Lawn & Garden Services',
            title: 'Lawn & Garden'
        }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const goToPrevious = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const goToNext = () => {
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };

    return (
        <div className="image-gallery-container">
            <div className="image-gallery">
                <div className="gallery-main">
                    <img
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        className="gallery-main-image"
                        onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.target.src = '/images/hero-fallback.jpg';
                        }}
                    />
                    
                    {/* Navigation arrows */}
                    <button 
                        className="gallery-nav gallery-nav-prev" 
                        onClick={goToPrevious}
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                        className="gallery-nav gallery-nav-next" 
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    {/* Image title overlay */}
                    <div className="gallery-overlay">
                        <div className="gallery-title">
                            <h3>{images[currentImageIndex].title}</h3>
                        </div>
                    </div>
                </div>

                {/* Thumbnail navigation */}
                <div className="gallery-thumbnails">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`View ${image.title}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                onError={(e) => {
                                    e.target.src = '/images/hero-fallback.jpg';
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="gallery-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
