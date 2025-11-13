import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import { MOCK_ARTICLES } from './constants';
import { Article } from './types';

// Define the structure for our view state
type View = 
    | { page: 'home' } 
    | { page: 'category'; categoryName: string }
    | { page: 'article'; articleId: number };

const App: React.FC = () => {
    const [view, setView] = useState<View>({ page: 'home' });

    // Scroll to top when view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const navigateToHome = () => setView({ page: 'home' });
    const navigateToCategory = (categoryName: string) => setView({ page: 'category', categoryName });
    const navigateToArticle = (articleId: number) => setView({ page: 'article', articleId });

    const renderContent = () => {
        switch (view.page) {
            case 'article':
                const article = MOCK_ARTICLES.find(a => a.id === view.articleId);
                if (article) {
                    return <ArticlePage article={article} onBack={() => navigateToCategory(article.category)} />;
                }
                // Fallback if article not found
                return <HomePage onSelectArticle={navigateToArticle} onSelectCategory={navigateToCategory} />;
            
            case 'category':
                return (
                    <CategoryPage 
                        categoryName={view.categoryName} 
                        articles={MOCK_ARTICLES} 
                        onSelectArticle={navigateToArticle}
                        onBack={navigateToHome}
                    />
                );

            case 'home':
            default:
                return <HomePage onSelectArticle={navigateToArticle} onSelectCategory={navigateToCategory} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <Header onNavigateHome={navigateToHome} onNavigateCategory={navigateToCategory} />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;