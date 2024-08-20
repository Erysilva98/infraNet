"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAvisos } from '@/api/api';

const assets = `/assets/`;
const url = 'http://localhost:3000/pages/';

const AvisoCard = ({ img_path, titulo, subtitulo, descricao }) => {
  const descricaoMin = descricao.length > 90 ? `${descricao.substring(0, 90)}...` : descricao;

  return (
    <div className='max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center'>
      <div className='flex justify-center mt-2'>
        <Image src={img_path} alt='aviso' width={100} height={100} className='mt-2 w-52 h-32 object-cover rounded-t-lg' />
      </div>
      <div className='p-3 flex-grow'>
        <h1 className='text-lg font-bold text-gray-700'>{titulo}</h1>
        <h2 className='text-base font-semibold text-gray-600'>{subtitulo}</h2>
        <p className='text-gray-700 text-sm'>{descricaoMin}</p>
      </div>
    </div>
  );
};

export default function AvisosCard() {
  const [avisos, setAvisos] = useState([]);
  const [visibleAvisos, setVisibleAvisos] = useState(3);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const dadosAvisos = await getAvisos();

        // Tratar os dados aqui
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
        console.log('Error ao Obter os dados no avisoCard.jsx', error);
        setAvisos([]);
      }
    };
    fetchAvisos();
  }, []);

  return (
    <div className='ml-12'>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          {avisos.slice(0, visibleAvisos).map((aviso, index) => (
            <Link key={index} href={{
              pathname: `${url}${aviso.link}`,
              query: { id: aviso.id }
            }}>
              <AvisoCard
                key={index}
                img_path={aviso.img_path}
                titulo={aviso.titulo}
                subtitulo={aviso.subtitulo}
                descricao={aviso.descricao}
              />
            </Link>
          ))}
        </div>
      </div>
      {visibleAvisos < avisos.length && (
        <div className='text-center'>
          <Link href="/pages/avisos" passHref>
            <p className='inline-block items-center cursor-pointer bg-navButton text-white py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'>
              Veja mais
            </p>
          </Link>
        </div>

      )}
    </div>
  );
}
