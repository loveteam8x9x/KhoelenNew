import React from 'react';
import { Article } from '../types';

interface ArticlePageProps {
    article: Article;
    onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
    return (
        <article>
            {/* Banner Image */}
            <div className="h-64 md:h-96 w-full overflow-hidden relative">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white shadow-lg rounded-lg -mt-16 md:-mt-24 p-6 md:p-10 relative z-10">
                    {/* Back Button */}
                    <button 
                        onClick={onBack} 
                        className="mb-6 inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Quay lại chuyên mục
                    </button>
                    
                    {/* Category */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${article.categoryColor}`}>
                        {article.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">{article.title}</h1>

                    {/* Content */}
                    <div 
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    >
                    </div>
                </div>
            </div>
            {/* Spacer */}
            <div className="py-12"></div>
        </article>
    );
};

export default ArticlePage;