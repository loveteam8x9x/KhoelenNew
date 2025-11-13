
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
                <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
                 <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${article.categoryColor}`}>
                    {article.category}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{article.title}</h3>
                <p className="text-gray-600 text-sm flex-grow mb-4">{article.summary}</p>
                <a href="#" className="mt-auto font-semibold text-teal-600 hover:text-teal-700 self-start">
                    Đọc thêm &rarr;
                </a>
            </div>
        </div>
    );
};

export default ArticleCard;
