// Global variables
let isMenuOpen = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    setupMobileMenu();
    setupScrollEffects();
    setupFormHandling();
    setupSmoothScrolling();
    setupIntersectionObserver();
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');

    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        nav.style.padding = '1rem';
        nav.style.borderRadius = '0 0 8px 8px';

        // Rotate hamburger
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        nav.style.display = 'none';

        // Reset hamburger
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');

    if (isMenuOpen && !nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Header scroll effects
function setupScrollEffects() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Quote Modal Functions
function openQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Focus on first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Reset form
        const form = document.getElementById('quoteForm');
        if (form) {
            form.reset();
        }
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('quoteModal');
    if (e.target === modal) {
        closeQuoteModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeQuoteModal();
    }
});

// Form handling
function setupFormHandling() {
    const quoteForm = document.getElementById('quoteForm');

    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmission);
    }
}

async function handleQuoteSubmission(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Show loading state
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    // Collect form data
    const formData = new FormData(form);
    const quoteData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        address: formData.get('address'),
        message: formData.get('message'),
        timestamp: new Date().toISOString(),
        source: 'website'
    };

    try {
        // Here you would normally send to your backend API
        // For now, we'll simulate the API call
        const response = await simulateAPICall(quoteData);

        if (response.success) {
            showSuccessMessage();
            closeQuoteModal();
        } else {
            showErrorMessage('Failed to submit quote request. Please try again.');
        }
    } catch (error) {
        console.error('Quote submission error:', error);
        showErrorMessage('An error occurred. Please try again or call us directly.');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

// Simulate API call (replace with actual API endpoint)
function simulateAPICall(data) {
    return new Promise((resolve) => {
        // Log the data for development purposes
        console.log('Quote request data:', data);

        // Simulate network delay
        setTimeout(() => {
            resolve({ success: true, message: 'Quote request submitted successfully' });
        }, 2000);
    });
}

// Success/Error message functions
function showSuccessMessage() {
    showNotification('Quote request submitted successfully! We\'ll contact you within 24 hours.', 'success');
}

function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10001;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.service-card, .benefit-item, .testimonial-card, .showcase-item'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Enhanced form validation
function validateForm(form) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const service = form.querySelector('#service').value;

    const errors = [];

    if (!name || name.length < 2) {
        errors.push('Please enter a valid name');
    }

    if (!email || !validateEmail(email)) {
        errors.push('Please enter a valid email address');
    }

    if (!phone || !validatePhone(phone)) {
        errors.push('Please enter a valid phone number');
    }

    if (!service) {
        errors.push('Please select a service type');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Add CSS for animations and notifications
const additionalStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .fadeInUp {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Video control functionality
function toggleVideo() {
    const video = document.querySelector('.hero-video');
    const icon = document.getElementById('videoIcon');

    if (video.paused) {
        video.play();
        icon.className = 'fas fa-pause';
    } else {
        video.pause();
        icon.className = 'fas fa-play';
    }
}

// Auto-pause video when not in viewport (performance optimization)
function setupVideoIntersectionObserver() {
    const video = document.querySelector('.hero-video');
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(video);
}

// Initialize video observer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupVideoIntersectionObserver();
});