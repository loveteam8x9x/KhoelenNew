
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <a href="#" className="text-2xl font-bold text-teal-600 mb-4 md:mb-0">
                        Khoẻ Lên
                    </a>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-600">
                        <a href="#" className="hover:text-teal-600">Về Chúng Tôi</a>
                        <a href="#" className="hover:text-teal-600">Chính Sách</a>
                        <a href="#" className="hover:text-teal-600">Liên Hệ</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Khoẻ Lên. Mọi quyền được bảo lưu.</p>
                    <p className="mt-1">Thông tin trên trang web này chỉ mang tính chất tham khảo, không thay thế cho chẩn đoán và điều trị y tế chuyên nghiệp.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
