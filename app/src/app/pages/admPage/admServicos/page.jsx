"use client";
import React, { useEffect, useState } from "react";
import { getServicos } from "@/api/api";

import Footer from "@/components/footer/footer";
import SistemaList from "@/components/listaServicos/servicosLista";
import AdicionarServico from "@/components/listaServicos/adicionarServico";
import SistemaHeader from "@/components/header/sistemaHeader";

export default function AdmServicos() {
    const [servicos, setServicos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const dadosServicos = await getServicos();

                const dadosTratados = dadosServicos.map((item) => {
                    return {
                        id: item.id,
                        img_path: item.img_path,
                        titulo: item.titulo,
                        link: item.link,
                        descricao: item.descricao,
                    };
                });
                setServicos(dadosTratados || []);
            } catch (error) {
                console.log('Error ao Obter os dados em AdmServicos.jsx', error);
                setServicos([]);
            }
        };
        fetchServicos();
    }, []);

    const adicionarServico = (novoServico) => {
        setServicos((prevServicos) => [...prevServicos, novoServico]);
        setMostrarFormulario(false); // Ocultar o formulário após adicionar um aviso
    };

    const deletarServico = (id) => {
        const novosServicos = servicos.filter((servico) => servico.id !== id);
        setServicos(novosServicos);
    }

    return (
        <div class="flex flex-col min-h-screen min-w-full">
            <SistemaHeader />

            <main class="flex-grow">
                <section class="flex justify-center">
                    <div>
                        <div className="flex justify-center">
                            {mostrarFormulario ? (
                                <div className="flex-col">
                                    <AdicionarServico onAdicionarServico={adicionarServico}  />
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
                                    Adicionar Serviços
                                </button>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <SistemaList servicos={servicos} onDelete={deletarServico} />
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