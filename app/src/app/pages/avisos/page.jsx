"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAvisos } from "@/api/api";

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";

const AvisoCard = ({ img_path, titulo, subtitulo, descricao, id }) => {
    const descricaoMin = descricao.length > 200 ? `${descricao.substring(0, 200)}...` : descricao;

    return (
        <div className='max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center'>
            <div className='flex justify-center mt-2'>
                <Image src={`${assets}${img_path}`} alt='aviso' width={100} height={100} className='mt-2 w-44 h-22 object-cover rounded-t-lg' />
            </div>
            <div className='p-3 flex-grow'>
                <h1 className='text-lg font-bold text-gray-700'>{titulo}</h1>
                <h2 className='text-base text-gray-500'>{subtitulo}</h2>
                <p className='text-gray-700 text-sm'>{descricaoMin}</p>
            </div>
        </div>
    );
};

export default function Avisos() {
    const [avisos, setAvisos] = useState([]);

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

    return (
        <div className="flex flex-col min-h-screen">
            <header>
                {/* Componentes loginHeader */}
                <UserHeader />
                <nav>
                    {/* Componentes navBar */}
                    <NavBar />
                </nav>
            </header>
            <main className="flex-grow">
                <section className="flex justify-center h-full pt-2">
                    <div className="ml-12 mr-12">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold text-gray-700 mb-2">Avisos</h1>
                            <div className="grid grid-cols-3 gap-2">
                                {avisos.length > 0 ? (
                                    avisos.map((aviso, index) => (
                                        <Link key={index} href={{
                                            pathname: `${url}${aviso.link}`,
                                            query: { id: aviso.id }
                                        }}>
                                            <AvisoCard
                                                img_path={aviso.img_path}
                                                titulo={aviso.titulo}
                                                subtitulo={aviso.subtitulo}
                                                descricao={aviso.descricao}
                                            />
                                        </Link>
                                    ))
                                ) : (
                                    <div className="flex justify-center">
                                        <h1 className="text-2xl font-medium text-gray-700 mb-5">Não há avisos cadastrados</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                {/* Componentes footer */}
                <Footer />
            </footer>
        </div>
    )
}