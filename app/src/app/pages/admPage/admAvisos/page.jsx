"use client";
import React, { useState, useEffect } from "react";
import { getAvisos } from "@/api/api";

import Footer from "@/components/footer/footer";
import AvisosList from "@/components/listaAviso/avisoLista";
import AdicionarAviso from "@/components/listaAviso/adicionarAviso";
import SistemaHeader from "@/components/header/sistemaHeader";

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
                <SistemaHeader  />
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
