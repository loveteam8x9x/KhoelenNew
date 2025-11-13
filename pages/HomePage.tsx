import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedArticles from '../components/FeaturedArticles';
import NewsletterSignup from '../components/NewsletterSignup';
import TopicHighlight from '../components/TopicHighlight';

interface HomePageProps {
    onSelectArticle: (id: number) => void;
    onSelectCategory: (name: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectArticle, onSelectCategory }) => {
    return (
        <>
            <HeroSection />
            <TopicHighlight onSelectCategory={onSelectCategory} />
            <FeaturedArticles onSelectArticle={onSelectArticle} />
            <NewsletterSignup />
        </>
    );
};

export default HomePage;