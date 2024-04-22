import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const assets = `/assets/`;
const url = 'http://localhost:3000/pages/';

const AvisoCard = ({ img_path, titulo, subtitulo, descricao }) => {
  const descricaoMin = descricao.length > 90 ? `${descricao.substring(0, 90)}...` : descricao;

  return (
    <div className='max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center'>
      <div className='flex justify-center mt-2'>
        <Image src={`${assets}${img_path}`} alt='aviso' width={100} height={100} className='mt-2 w-52 h-32 object-cover rounded-t-lg' />
      </div>
      <div className='p-3 flex-grow'>
        <h1 className='text-lg font-bold text-gray-700'>{titulo}</h1>
        <h2 className='text-base font-semibold text-gray-600'>{subtitulo}</h2>
        <p className='text-gray-700 text-sm'>{descricaoMin}</p>
      </div>
    </div>
  );
};

export default function AvisosCardsContainer({ dados }) {
  const visibleAvisos = 3;

  return (
    <div className='ml-12 mr-12'>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          {dados.slice(0, visibleAvisos).map((aviso, index) => (
            <Link key={index} href={{
              pathname: `${url}${aviso.link}`,
              query: { id: aviso.id }
            }} passHref>
              <div>
                <AvisoCard
                  img_path={aviso.img_path}
                  titulo={aviso.titulo}
                  subtitulo={aviso.subtitulo}
                  descricao={aviso.descricao}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Optional: Implement "Load More" functionality here if you have many avisos */}
    </div>
  );
}
