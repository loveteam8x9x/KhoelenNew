
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <main className="flex-grow">
                <HomePage />
            </main>
            <Footer />
        </div>
    );
};

export default App;
