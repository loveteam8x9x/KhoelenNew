
import React from 'react';

const NewsletterSignup: React.FC = () => {
    return (
        <section className="bg-teal-600">
            <div className="container mx-auto px-6 py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-3">Đừng Bỏ Lỡ Thông Tin Sức Khỏe Quan Trọng</h2>
                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                    Đăng ký nhận bản tin hàng tuần của chúng tôi để cập nhật các mẹo, tin tức và bài viết mới nhất.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        aria-label="Email Address"
                    />
                    <button
                        type="submit"
                        className="bg-white text-teal-600 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
                    >
                        Đăng Ký
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignup;
