import React, { useState } from 'react';

interface HeaderProps {
    onNavigateHome: () => void;
    onNavigateCategory: (categoryName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateCategory }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Trang Chủ', action: onNavigateHome },
        { label: 'Tiểu Đường', action: () => onNavigateCategory('Tiểu Đường') },
        { label: 'Huyết Áp', action: () => onNavigateCategory('Huyết Áp') },
        { label: 'Sức Khỏe Chung', action: () => onNavigateCategory('Sức Khỏe Chung') },
    ];

    const handleLinkClick = (action: () => void) => {
        action();
        setIsMenuOpen(false); // Close menu on navigation
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button onClick={onNavigateHome} className="text-2xl font-bold text-teal-600">
                        Khoẻ Lên
                    </button>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <button key={link.label} onClick={link.action} className="text-gray-600 hover:text-teal-600 transition-colors duration-300 font-medium">
                                {link.label}
                            </button>
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
                                <button key={link.label} onClick={() => handleLinkClick(link.action)} className="text-left text-gray-600 hover:text-teal-600 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;