"use client";
import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoSite from "@assets/logoSite.svg";
import Footer from "@/components/footer/footer";

// Componentes
import SistemaHeader from "@/components/header/sistemaHeader";

export default function AdmCadastrar() {
    // Variáveis de Estado
    const [parteAtual, setParteAtual] = useState(1);

    const handleProximo = (event) => {
        event.preventDefault();
        setParteAtual(parteAtual + 1);
    };

    const handleAnterior = () => {
        setParteAtual(parteAtual - 1);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header>
                {/* Componentes loginHeader */}
                <SistemaHeader />
            </header>
            <main className="flex flex-grow justify-center">
                {/* ... Seção do Logo ... */}
                <section className="flex flex-col justify-center items-center pr-60">
                    <div>
                        <Image src={logoSite} alt="Logo" width={300} height={300} />
                    </div>
                </section>

                {/* Seção do Formulário */}
                <section className="flex flex-col justify-center h-full">
                    <form className="flex flex-col items-center">
                        {/* Condição para Renderizar Partes do Formulário */}
                        {parteAtual === 1 && (
                            <div className="flex flex-col items-center">
                                {/* ... Conteúdo do Usuário ... */}
                                <div className="flex flex-col items-center">
                                    <label className="text-destaque1 text-xl font-bold mt-5">Nome Completo</label>
                                    <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite seu Nome Completo" />

                                    <label className="text-destaque1 text-xl font-bold mt-5">Data de Nascimento</label>
                                    <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="date" placeholder="Digite sua Data de Nascimento" />
                                </div>
                            </div>
                        )}

                        {parteAtual === 2 && (
                            <div className="flex flex-col items-center">
                                {/* ... Conteúdo da Setor ... */}
                                <div className="flex flex-col items-center mt-5">
                                    <label className="text-destaque1 text-xl font-bold">E-mail</label>
                                    <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="email" placeholder="Digite seu E-mail" />

                                    <label className="text-destaque1 text-xl font-bold mt-5">Telefone</label>
                                    <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="tel" placeholder="Digite seu Telefone" />

                                    <label className="text-destaque1 text-xl font-bold mt-5">Ramal</label>
                                    <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite seu Ramal" />
                                </div>
                            </div>
                        )}

                        {parteAtual === 3 && (
                            <div className="flex flex-col items-center mt-5">
                                <label className="text-destaque1 text-xl font-bold">Código de Acesso</label>
                                <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite seu Código de Acesso" />

                                <label className="text-destaque1 text-xl font-bold mt-5">Matrícula</label>
                                <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite sua Matrícula" />

                                <label className="text-destaque1 text-xl font-bold mt-5">Senha</label>
                                <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="password" placeholder="Digite sua Senha" />
                            </div>
                        )}

                        {/* Botões de Navegação */}
                        <div className="flex flex-col items-center mt-5">
                            {parteAtual > 1 && (
                                <button className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5" onClick={handleAnterior}>Anterior</button>
                            )}

                            {parteAtual < 3 && (
                                <button className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5" onClick={handleProximo}>Próximo</button>
                            )}

                            {parteAtual === 3 && (
                                <Link href="/pages/admPage/admHome">
                                    <button className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5">Cadastrar</button>
                                </Link>
                            )}
                        </div>
                    </form>
                </section>
            </main>

            <footer>
                {/* Componentes loginFooter */}
                <Footer />
            </footer>
        </div>
    );
}
