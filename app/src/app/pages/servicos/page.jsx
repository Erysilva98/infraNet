"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getServicos } from "@/api/api";

import Footer from "@/components/footer/footer";
import UserHeader from "@/components/header/userHeader";
import NavBar from "@/components/navBar/navBar";
import Link from "next/link";

const url = "/404"; // Corrigido o link de fallback para a página 404

const ServicosCard = ({ img_path, descricao }) => {
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
          <Image src={img_path} alt='sistema' width={100} height={100} className='w-44 h-22 object-cover rounded-t-lg' />
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

export default function Servicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const dadosServicos = await getServicos();
        const dadosTratados = dadosServicos.map((item) => ({
          id: item.id,
          img_path: item.img_path, // img_path já está em formato base64
          titulo: item.titulo,
          link: item.link,
          descricao: item.descricao,
        }));
        setServicos(dadosTratados || []);
      } catch (error) {
        console.log('Error ao Obter os dados no sistemas:', error);
        setServicos([]);
      }
    };
    fetchServicos();
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <UserHeader />
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="flex-grow">
        <section className="flex flex-col justify-center h-full pt-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Serviços</h1>
            <div className="grid grid-cols-4 gap-4 items-center justify-center">
              {servicos.length > 0 ? (
                servicos.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link ? item.link : `${url}`}
                  >
                    <ServicosCard
                      key={item.id}
                      img_path={item.img_path}
                      titulo={item.titulo}
                      descricao={item.descricao}
                    />
                  </Link>
                ))
              ) : (
                <div className="flex justify-center">
                  <p className="text-2xl font-medium text-gray-700">Não há Serviço cadastrados</p>
                </div>
              )}
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
