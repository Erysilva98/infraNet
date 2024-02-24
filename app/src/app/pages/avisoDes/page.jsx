"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
//import {format} from "date-fns";
import { getAvisosId } from "@/api/api";
import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";

const assets = `/assets/`;

export default function AvisosDesc() {
    const [aviso, setAviso] = useState(null);

    useEffect(() => {
        const fetchAviso = async () => {
            try {
                // Recupera o ID do aviso da query string
                const urlParams = new URLSearchParams(window.location.search);
                const avisoId = parseInt(urlParams.get("id"));

                if (!isNaN(avisoId)) {
                    const dadosAviso = await getAvisosId(avisoId);

                    const dadosTratados = {
                        img_path: dadosAviso.img_path,
                        data: dadosAviso.data_publicacao,
                        link: dadosAviso.link,
                        titulo: dadosAviso.titulo,
                        subtitulo: dadosAviso.subtitulo,
                        descricao: dadosAviso.descricao,
                    };

                    setAviso(dadosTratados);
                } else {
                    console.log("ID de aviso inválido");
                    setAviso(null);
                }
            } catch (error) {
                console.log("Erro ao obter detalhes do aviso: ", error);
                setAviso(null);
            }
        };

        fetchAviso();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <UserHeader />
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main className="flex-grow flex-col px-20">
                {aviso ? (
                    <div>
                        <div>
                            <div className="text-center">
                                <h1 className="text-2xl font-bold">{aviso.titulo}</h1>
                                <p className="mt-3">{aviso.subtitulo}</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src={`${assets}${aviso.img_path}`}
                                alt={`Imagem do aviso`}
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="flex justify-end mr-20">
                            <p className="mr-2">Publicado em: </p>
                            <p>{(aviso.data)}</p>
                        </div>
                        <div className="pr-20 pt-5 pl-20">
                            <p>{aviso.descricao}</p>
                        </div>

                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
