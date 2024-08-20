import React from "react";
import Image from "next/image";

import logoSite from "@assets/logoSite.svg";

//Componentes
import LoginHeader from "@/components/header/loginHeader";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default function Login() {

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                {/* Componentes loginHeader */}
                <LoginHeader />
            </header>
            <main className="flex-grow">
                <section className="flex flex-col justify-center h-full">
                    <div className="flex flex-col items-center p-2">
                        {/* Logo */}
                        <div className="items-center">
                            <Image src={logoSite} alt="Logo" width={250} height={250} />
                        </div>
                    </div>
                    <div>
                        {/* Componentes loginForm */}
                        <form className="flex flex-col items-center">

                            <div className="flex flex-col items-center">
                                <label className="text-destaque1 text-xl font-bold mt-5">Usuário</label>
                                <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite sua Matrícula" />

                                <label className="text-destaque1 text-xl font-bold mt-5">Senha</label>
                                <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="password" placeholder="Digite sua Senha" />

                                <Link href="/pages/admPage/admHome">
                                    <button className="bg-botao hover:bg-botaoHover text-white font-bold rounded-lg p-2 w-80 mt-5">Entrar</button>
                                </Link>

                                <div className="flex flex-col items-center mt-5">
                                    <a className="text-destaque1 text-sm" href="#">Esqueceu sua senha?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}