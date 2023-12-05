"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAvisos } from "@/api/api";
import Footer from "@/components/footer/footer";
import logoNav from "@assets/logoNav.svg"
import userAdm from "@icons/userAdm.svg";
import iconSair from "@icons/iconSair.svg";
import AvisosList from "@/components/listaAviso/avisoLista";
import AdicionarAviso from "@/components/listaAviso/adicionarAviso";
import AdmHeader from "@/components/header/admHeader";

export default function AdmAvisos() {
    const [avisos, setAvisos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const fetchAvisos = async () => {
            try {
                const dadosAvisos = await getAvisos();

                const dadosTratados = dadosAvisos.map((item) => {
                    return {
                        id: item.id,
                        img_path: item.img_path,
                        prioridade: item.prioridade,
                        link: item.link,
                        titulo: item.titulo,
                        subtitulo: item.subtitulo,
                        descricao: item.descricao,
                    };
                });
                setAvisos(dadosTratados || []);
            } catch (error) {
                console.log('Error ao Obter os dados no carrousel.jsx', error);
                setAvisos([]);
            }
        };
        fetchAvisos();
    }, []);

    const adicionarAviso = (novoAviso) => {
        setAvisos((prevAvisos) => [...prevAvisos, novoAviso]);
        setMostrarFormulario(false); // Ocultar o formulário após adicionar um aviso
    };

    const deletarAviso = (id) => {
        const novosAvisos = avisos.filter((aviso) => aviso.id !== id);
        setAvisos(novosAvisos);
    };

    return (
        <div className="flex flex-col min-h-screen min-w-full">
            <header>
                <div className="bg-azulPrincipal w-full">
                    <div className="flex content-center items-center justify-between h-20">
                        <div className="flex flex-col ml-12">
                            <Image src={logoNav} alt="logo" width={87} height={36} />
                            <div className="flex ml-2 pt-2">
                                <Image src={userAdm} alt="logo" width={20} height={20} />
                                <h1 className="text-white text-destaque1 ml-2">Administração do Sistema</h1>
                            </div>
                        </div>
                        <div className="flex mr-24">
                            <p className="mr-3 text-white">Sair</p>
                            <Link href="./admHome">
                                <Image src={iconSair} alt="logo" width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow min-h-full">
                <section>
                    <div>
                        <div className="flex justify-center">
                            {mostrarFormulario ? (
                                <div className="flex-col">
                                    <AdicionarAviso onAdicionarAviso={adicionarAviso} />
                                    <button
                                        className="bg-error text-white font-bold rounded-lg p-2 w-80 mt-5"
                                        onClick={() => setMostrarFormulario(false)}
                                    >
                                        Fechar Formulário
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="bg-botao hover:bg-botaoHover hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
                                    onClick={() => setMostrarFormulario(true)}
                                >
                                    Adicionar Aviso
                                </button>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <AvisosList avisos={avisos} onDelete={deletarAviso} />
                        </div>
                    </div>

                </section>
            </main>

            <footer>
                {/* Componentes admFooter */}
                <Footer />
            </footer>
        </div>
    );
}
