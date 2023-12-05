import Footer from '@/components/footer/footer';
import UserHeader from '@/components/header/userHeader';
import NavBar from '@/components/navBar/navBar';
import React from 'react';

export default function Custom404() {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <UserHeader />
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main className='flex-grow'>
                <section>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-center items-center h-80">
                            <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
                            <p className="text-lg text-gray-600">A página que você está procurando não existe.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

