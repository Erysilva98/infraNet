"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import logoSite from "@assets/logoSite.svg";
import Footer from "@/components/footer/footer";
import SistemaHeader from "@/components/header/sistemaHeader";

export default function AdmCadastrar() {
    const [parteAtual, setParteAtual] = useState(1);
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [cadastrado, setCadastrado] = useState(false); // Estado para controlar o sucesso do cadastro

    const handleProximo = (event) => {
        event.preventDefault();
        setParteAtual(parteAtual + 1);
    };

    const handleAnterior = (event) => {
        event.preventDefault();
        setParteAtual(parteAtual - 1);
    };

    const handleCadastro = async (event) => {
        event.preventDefault();

        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        const novoUsuario = {
            nome,
            data_nascimento: dataNascimento,
            senha,
        };

        try {
            const response = await axios.post("http://localhost:4000/user", novoUsuario);

            if (response.status === 201) {
                alert("Usuário cadastrado com sucesso!");

                // Define o estado como true para indicar que o cadastro foi realizado
                setCadastrado(true);
            } else {
                alert("Erro ao cadastrar usuário. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar usuário. Verifique a conexão e tente novamente.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <SistemaHeader />
            </header>
            <main className="flex flex-grow justify-center">
                <section className="flex flex-col justify-center items-center pr-60">
                    <div>
                        <Image src={logoSite} alt="Logo" width={300} height={300} />
                    </div>
                </section>

                <section className="flex flex-col justify-center h-full">
                    <form className="flex flex-col items-center" onSubmit={handleCadastro}>
                        {parteAtual === 1 && (
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center">
                                    <label className="text-destaque1 text-xl font-bold mt-5">Nome Usúario</label>
                                    <input
                                        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                        type="text"
                                        placeholder="Digite seu Nome Completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <label className="text-destaque1 text-xl font-bold mt-5">Data de Nascimento</label>
                                    <input
                                        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                        type="date"
                                        placeholder="Digite sua Data de Nascimento"
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        {parteAtual === 2 && (
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-destaque1 text-xl font-bold mt-5">Senha</label>
                                    <input
                                        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                        type="password"
                                        placeholder="Digite sua Senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-destaque1 text-xl font-bold mt-5">Confirma Senha</label>
                                    <input
                                        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
                                        type="password"
                                        placeholder="Digite sua Senha"
                                        value={confirmaSenha}
                                        onChange={(e) => setConfirmaSenha(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col items-center mt-5">
                            {parteAtual > 1 && (
                                <button
                                    className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                                    onClick={handleAnterior}
                                >
                                    Anterior
                                </button>
                            )}

                            {parteAtual < 2 && (
                                <button
                                    className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                                    onClick={handleProximo}
                                >
                                    Próximo
                                </button>
                            )}

                            {parteAtual === 2 && !cadastrado && (
                                <button
                                    type="submit" // Submit button for the form
                                    className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                                >
                                    Cadastrar
                                </button>
                            )}

                            {/* Renderiza o link de redirecionamento se o cadastro foi bem-sucedido */}
                            {cadastrado && (
                                <Link href="/pages/admPage/admHome">
                                    <button className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5">
                                        Ir para Home
                                    </button>
                                </Link>
                            )}
                        </div>
                    </form>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
