"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSistemas } from "@/api/api";

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";
import Link from "next/link";

const assets = `/assets/`;
const url = "http://localhost:3000/pages/404";

const SistemaCard = ({ img_path, titulo, subtitulo, descricao }) => {
  const [isHovered, setIsHovered] = useState(false);
  const descricaoMin = descricao.length > 50 ? `${descricao.substring(0, 50)}...` : descricao;

  return (
    <div
      className='flex flex-col bg-corCard rounded-lg items-center'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-center'>
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Image src={`${assets}${img_path}`} alt='servico' width={100} height={100} className='w-44 h-22 object-cover rounded-t-lg' />
          {isHovered && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <p className="text-white text-sm">{descricaoMin}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Sistema() {
  const [sistema, setSistemas] = useState([]);

  useEffect(() => {
    const fetchSistemas = async () => {
      try {
        const dadosSistemas = await getSistemas();
        const dadosTratados = dadosSistemas.map((item) => {
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
        setSistemas(dadosTratados || []);
      } catch (error) {
        console.log('Error ao Obter os dados no servicos', error);
        setSistemas([]);
      }
    };
    fetchSistemas();
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        {/* Componentes loginHeader */}
        <UserHeader />
        <nav>
          {/* Componentes navBar */}
          <NavBar />
        </nav>
      </header>
      <main className="flex-grow">
        <section className="flex flex-col justify-center h-full pt-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Sistemas</h1>
            <div className="grid grid-cols-4 gap-4 items-center justify-center">
              {sistema.length > 0 ? (
                sistema.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link ? item.link : `${url}`}
                  >
                    <SistemaCard
                      key={item.id}
                      img_path={item.img_path}
                      titulo={item.titulo}
                      subtitulo={item.subtitulo}
                      descricao={item.descricao}
                    />
                  </Link>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-medium text-gray-700">Não há serviços cadastrados</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* Componentes footer */}
        <Footer />
      </footer>
    </div>
  );
}
