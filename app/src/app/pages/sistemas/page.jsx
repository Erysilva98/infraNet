import React from "react";

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";

export default function Avisos() {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                {/* Componentes loginHeader */}
                <UserHeader />
                <nav>
                    {/* Componentes navBar */}
                    <NavBar />
                </nav>
            </header>
            <main className="flex-grow">
                <section className="flex justify-center h-full pt-10">
                    <p>Codifique</p>
                </section>
            </main>
            <footer>
                {/* Componentes footer */}
                <Footer />
            </footer>
        </div>
    )
}