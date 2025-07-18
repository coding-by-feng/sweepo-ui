import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChoose from '../components/home/WhyChoose';

import QuoteModal from '../components/forms/QuoteModal';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sweepo - We sweep, you relax | Professional Cleaning Services NZ</title>
                <meta name="description" content="Professional cleaning services available 24/7 across New Zealand. Home cleaning, commercial cleaning, pest control, and more. Get your free quote today!" />
                <meta name="keywords" content="cleaning services, New Zealand, professional cleaning, home cleaning, commercial cleaning, pest control" />
            </Helmet>

            <Hero />
            <ServicesOverview />
            <WhyChoose />

            <QuoteModal />
        </>
    );
};

export default Home;