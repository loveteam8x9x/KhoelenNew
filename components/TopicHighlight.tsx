
import React from 'react';
import { DropletIcon, HeartIcon } from './icons/Icons';

const TopicCard: React.FC<{ icon: React.ReactNode; title: string; description: string; bgColor: string; hoverColor: string }> = ({ icon, title, description, bgColor, hoverColor }) => (
    <div className={`relative p-8 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 ${bgColor}`}>
        <div className="relative z-10">
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            <a href="#" className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                Tìm hiểu thêm &rarr;
            </a>
        </div>
        <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 ease-out ${hoverColor}`}></div>
    </div>
);

const TopicHighlight: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Chủ Đề Chính</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Tập trung vào hai vấn đề sức khỏe quan trọng nhất để giúp bạn có một cuộc sống trọn vẹn.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <TopicCard
                        icon={<DropletIcon />}
                        title="Quản Lý Tiểu Đường"
                        description="Kiến thức, chế độ dinh dưỡng và lời khuyên từ chuyên gia giúp bạn kiểm soát đường huyết hiệu quả."
                        bgColor="bg-blue-50"
                        hoverColor="bg-blue-400"
                    />
                    <TopicCard
                        icon={<HeartIcon />}
                        title="Kiểm Soát Huyết Áp"
                        description="Tìm hiểu các phương pháp theo dõi, phòng ngừa và điều trị tăng huyết áp để bảo vệ sức khỏe tim mạch."
                        bgColor="bg-red-50"
                        hoverColor="bg-red-400"
                    />
                </div>
            </div>
        </section>
    );
};

export default TopicHighlight;
