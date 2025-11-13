
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#', label: 'Trang Chủ' },
        { href: '#', label: 'Tiểu Đường' },
        { href: '#', label: 'Huyết Áp' },
        { href: '#', label: 'Dinh Dưỡng' },
        { href: '#', label: 'Liên Hệ' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-teal-600">
                        Khoẻ Lên
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300 font-medium">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-teal-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
