import React from 'react';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';

interface CategoryPageProps {
    categoryName: string;
    articles: Article[];
    onSelectArticle: (id: number) => void;
    onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, articles, onSelectArticle, onBack }) => {
    const categoryArticles = articles.filter(article => article.category === categoryName);

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                     <button 
                        onClick={onBack} 
                        className="mb-4 inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Trang chủ
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Chuyên mục: <span className="text-teal-600">{categoryName}</span>
                    </h1>
                </div>

                {categoryArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} onSelect={onSelectArticle} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">
                        Chưa có bài viết nào trong chuyên mục này.
                    </p>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;