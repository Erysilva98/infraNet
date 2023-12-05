"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getServicos } from "@/api/api";

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";

const assets = `/assets/`;
const url = "http://localhost:3000/pages/404";

const ServicoCard = ({ img_path, titulo, subtitulo, descricao }) => {
  const descricaoMin = descricao.length > 20 ? `${descricao.substring(0, 20)}...` : descricao;

  return (
    <div className='flex flex-col max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center'>
      <div className='flex justify-center mt-2'>
        <Image src={`${assets}${img_path}`} alt='servico' width={100} height={100} className='mt-2 w-44 h-22 object-cover rounded-t-lg' />
      </div>
      <div className='p-3 flex-grow'>
        <p className='text-gray-700 text-sm'>{descricaoMin}</p>
      </div>
    </div>
  );
};

export default function Servicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const dadosServicos = await getServicos();
        const dadosTratados = dadosServicos.map((item) => {
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
        setServicos(dadosTratados || []);
      } catch (error) {
        console.log('Error ao Obter os dados no servicos', error);
        setServicos([]);
      }
    };
    fetchServicos();
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
        <section className="flex flex-col justify-center h-full pt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700">Serviços</h1>
            <div className="grid grid-cols-4 gap-4 items-center justify-center">
              {servicos.length > 0 ? (
                servicos.map((item) => (
                  <ServicoCard
                    key={item.id}
                    img_path={item.img_path}
                    titulo={item.titulo}
                    subtitulo={item.subtitulo}
                    descricao={item.descricao}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl font-medium text-gray-700">Não há serviços cadastrados</p>
                  <p className="text-3xl font-medium text-gray-700">Volte mais tarde</p>
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
