// pages/login.js
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoSite from "@assets/logoSite.svg";
import LoginHeader from "@/components/header/loginHeader";
import Footer from "@/components/footer/footer";

export default function Login() {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ matricula, senha }),
            });

            const data = await res.json();

            if (res.ok) {
                // Armazenar o token no localStorage
                localStorage.setItem('token', data.token);
                router.push('/pages/admPage/admHome');
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <LoginHeader />
            </header>
            <main className="flex-grow">
                <section className="flex flex-col justify-center h-full">
                    <div className="flex flex-col items-center p-2">
                        <div className="items-center">
                            <Image src={logoSite} alt="Logo" width={250} height={250} />
                        </div>
                    </div>
                    <div>
                        <form className="flex flex-col items-center" onSubmit={handleLogin}>
                            <div className="flex flex-col items-center">
                                <label className="text-destaque1 text-xl font-bold mt-5">Matrícula</label>
                                <input
                                    className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                    type="text"
                                    placeholder="Digite sua Matrícula"
                                    value={matricula}
                                    onChange={(e) => setMatricula(e.target.value)}
                                />
                                <label className="text-destaque1 text-xl font-bold mt-5">Senha</label>
                                <input
                                    className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                    type="password"
                                    placeholder="Digite sua Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <button className="bg-botao hover:bg-botaoHover text-white font-bold rounded-lg p-2 w-80 mt-5" type="submit">
                                    Entrar
                                </button>
                                {error && <div className="text-red-500 mt-2">{error}</div>}
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
