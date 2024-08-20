"use client";

import React, { useEffect, useState } from "react";
import { getSistemas } from "@/api/api";  // Certifique-se que `getSistemas` está importado corretamente
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
                const dadosTratados = dadosSistemas.map((item) => ({
                    id: item.id,
                    img_path: item.img_path,  // Certifique-se que img_path é convertido corretamente
                    titulo: item.titulo,
                    link: item.link,
                    descricao: item.descricao,
                }));
                setSistemas(dadosTratados || []);
            } catch (error) {
                console.log('Erro ao obter os dados:', error);
                setSistemas([]);  // Define como um array vazio em caso de erro
            }
        };
        fetchSistemas();
    }, []);

    const adicionarSistema = (novoSistema) => {
        setSistemas((prevSistemas) => [...prevSistemas, novoSistema]);
        setMostrarFormulario(false); // Ocultar o formulário após adicionar um sistema
    };

    const deletarSistema = (id) => {
        const novosSistemas = sistemas.filter((sistema) => sistema.id !== id);
        setSistemas(novosSistemas);
    };

    return (
        <div className="flex flex-col min-h-screen min-w-full">
            <SistemaHeader />
            <main className="flex-grow">
                <section className="flex justify-center">
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
                <Footer />
            </footer>
        </div>
    );
}
