"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use para navegação programática
import logoSite from "@assets/logoSite.svg";
import LoginHeader from "@/components/header/loginHeader";
import Footer from "@/components/footer/footer";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter(); // Hook para redirecionamento

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/login", {
                username,
                password,
            });

            console.log("Resposta da API:", response.data); // Log para depuração

            if (response.status === 200 && response.data.token) {
                // Armazena o token no localStorage
                localStorage.setItem("token", response.data.token);
                // Define o estado como autenticado
                setIsAuthenticated(true);
            } else {
                setError("Credenciais inválidas. Por favor, tente novamente.");
            }
        } catch (error) {
            if (error.response) {
                console.error("Erro ao fazer login:", error.response.data);
                setError(`Erro ao fazer login: ${error.response.data.error || error.response.data}`);
            } else {
                console.error("Erro ao fazer login:", error.message);
                setError("Erro ao fazer login. Verifique sua conexão e tente novamente.");
            }
        }
    };

    // Redireciona o usuário para a home se estiver autenticado
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/pages/admPage/admHome"); // Redireciona para a página home
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex flex-col min-h-screen">
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
                                <label className="text-destaque1 text-xl font-bold mt-5">Usuário</label>
                                <input
                                    className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                    type="text"
                                    placeholder="Digite sua Matrícula"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />

                                <label className="text-destaque1 text-xl font-bold mt-5">Senha</label>
                                <input
                                    className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                    type="password"
                                    placeholder="Digite sua Senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button
                                    type="submit"
                                    className="bg-botao hover:bg-botaoHover text-white font-bold rounded-lg p-2 w-80 mt-5"
                                >
                                    Entrar
                                </button>

                                {error && (
                                    <div className="mt-5 text-red-500 text-sm">
                                        {error}
                                    </div>
                                )}
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
