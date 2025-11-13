import React from 'react';
import { MOCK_ARTICLES } from '../constants';
import ArticleCard from './ArticleCard';

interface FeaturedArticlesProps {
    onSelectArticle: (id: number) => void;
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ onSelectArticle }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bài Viết Nổi Bật</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Cập nhật những kiến thức mới nhất và hữu ích nhất về sức khỏe từ các chuyên gia của chúng tôi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_ARTICLES.map((article) => (
                        <ArticleCard key={article.id} article={article} onSelect={onSelectArticle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticles;