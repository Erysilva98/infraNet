"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSistemas } from "@/api/api";

import logoNav from "@assets/logoNav.svg"
import userAdm from "@icons/userAdm.svg";
import iconSair from "@icons/iconSair.svg";

import Footer from "@/components/footer/footer";
import SistemaList from "@/components/listaSistemas/sistemasLista";
import AdicionarSistema from "@/components/listaSistemas/adicionarSistema";
import SistemaHeader from "@/components/header/sistemaHeader";

export default function AdmSistemas() {
    const [sistemas, setSistemas] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const fetchSistemas = async () => {
            try {
                const dadosSistemas = await getSistemas();

                const dadosTratados = dadosSistemas.map((item) => {
                    return {
                        id: item.id,
                        img_path: item.img_path,
                        titulo: item.titulo,
                        link: item.link,
                        descricao: item.descricao,
                    };
                });
                setSistemas(dadosTratados || []);
            } catch (error) {
                console.log('Error ao Obter os dados em AdmSistemas.jsx', error);
                setSistemas([]);
            }
        };
        fetchSistemas();
    }, []);

    const adicionarSistema = (novoSistema) => {
        setSistemas((prevSistemas) => [...prevSistemas, novoSistema]);
        setMostrarFormulario(false); // Ocultar o formulário após adicionar um aviso
    };

    const deletarSistema = (id) => {
        const novosSistemas = sistemas.filter((sistema) => sistema.id !== id);
        setSistemas(novosSistemas);
    }

    return (
        <div class="flex flex-col min-h-screen min-w-full">
            <header>
                <SistemaHeader />
            </header>

            <main class="flex-grow">
                <section class="flex justify-center">
                    <div>
                        <div className="flex justify-center">
                            {mostrarFormulario ? (
                                <div className="flex-col">
                                    <AdicionarSistema onAdicionarSistema={adicionarSistema} />
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
                                    Adicionar Sistema
                                </button>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <SistemaList sistemas={sistemas} onDelete={deletarSistema} />
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