
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import NewsletterSignup from '../components/NewsletterSignup';
import TopicHighlight from '../components/TopicHighlight';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <TopicHighlight />
            <FeaturedArticles />
            <NewsletterSignup />
        </>
    );
};

export default HomePage;
