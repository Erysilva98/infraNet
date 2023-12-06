"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAvisos } from "@/api/api";

const assets = `/assets/`;

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";

const AvisoSection = ({ img_path, titulo, subtitulo, descricao, link }) => (
    <section className='flex justify-center h-full pt-10'>
        <div className='flex flex-col items-center bg-corCard rounded-lg shadow-lg mt-2 mb-4'>
            <div className='mt-2'>
                <Image src={`${assets}${img_path}`} alt='aviso' width={100} height={100} className='w-44 h-22 object-cover rounded-t-lg' />
            </div>
            <div className='p-3 flex-grow text-center'>
                <h1 className='text-sm font-bold text-gray-700'>{titulo}</h1>
                <h2 className='text-sm text-gray-500'>{subtitulo}</h2>
                <p className='text-gray-700 text-sm'>{descricao}</p>
            </div>
            <Link href={link}>
                <p className='text-blue-500 mb-3 underline'>Ver mais</p>
            </Link>
        </div>
    </section>
);

export default function Avisos() {
    const [avisos, setAvisos] = useState([]);

    useEffect(() => {
        const fetchAvisos = async () => {
            try {
                const dadosAvisos = await getAvisos();

                // Tratar os dados aqui
                const dadosTratados = dadosAvisos.map((item) => {
                    return {
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
        <div className="h-screen">
            <header>
                {/* Componentes loginHeader */}
                <UserHeader />
                <nav>
                    {/* Componentes navBar */}
                    <NavBar />
                </nav>
            </header>
            <main className="min-w-max h-4/5">
                <div className='ml-12 mr-12'>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-3 gap-4'>
                            {avisos.map((aviso, index) => (
                                <AvisoSection
                                    key={index}
                                    img_path={aviso.img_path}
                                    titulo={aviso.titulo}
                                    subtitulo={aviso.subtitulo}
                                    descricao={aviso.descricao}
                                    link={aviso.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                {/* Componentes footer */}
                <Footer />
            </footer>
        </div>
    );
}
