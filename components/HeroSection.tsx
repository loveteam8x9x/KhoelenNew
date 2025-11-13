
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/wellness/1920/1080')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative container mx-auto px-6 py-24 md:py-40 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Sống Khoẻ Mỗi Ngày Cùng Khoẻ Lên
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
                    Nguồn thông tin đáng tin cậy về quản lý tiểu đường, huyết áp và xây dựng một lối sống lành mạnh.
                </p>
                <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
                    Khám Phá Ngay
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
