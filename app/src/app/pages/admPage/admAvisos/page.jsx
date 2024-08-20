"use client";

import React, { useEffect, useState } from "react";
import { getServicos } from "@/api/api"; // Assumindo que a função getServicos está implementada
import Footer from "@/components/footer/footer";
import ServicosList from "@/components/listaServicos/servicosLista";
import AdicionarServico from "@/components/listaServicos/adicionarServico";
import SistemaHeader from "@/components/header/sistemaHeader";

export default function AdmServicos() {
    const [servicos, setServicos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const dadosServicos = await getServicos();
                const dadosTratados = dadosServicos.map((item) => ({
                    id: item.id,
                    img_path: `data:image/png;base64,${item.img_data}`, // Atribuindo caminho da imagem
                    titulo: item.titulo,
                    link: item.link,
                    descricao: item.descricao,
                }));
                setServicos(dadosTratados || []);
            } catch (error) {
                console.log('Erro ao obter os dados:', error);
                setServicos([]);
            }
        };
        fetchServicos();
    }, []);

    const adicionarServico = (novoServico) => {
        setServicos((prevServicos) => [...prevServicos, novoServico]);
        setMostrarFormulario(false);
    };

    const deletarServico = (id) => {
        const novosServicos = servicos.filter((servico) => servico.id !== id);
        setServicos(novosServicos);
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
                                    <AdicionarServico onAdicionarServico={adicionarServico} />
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
                                    Adicionar Serviço
                                </button>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <ServicosList servicos={servicos} onDelete={deletarServico} />
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
