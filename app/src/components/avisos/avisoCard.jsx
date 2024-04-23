import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const assets = `/assets/`;
const url = 'http://localhost:3000/pages/';

const AvisoCard = React.memo(({ img_path, titulo, subtitulo, descricao }) => {
  const descricaoMin = descricao.length > 40 ? `${descricao.substring(0, 40)}...` : descricao;

  const cardStyle = {
    minHeight: '200px', 
  };

  return (
    <div className='max-w-sm mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center' style={cardStyle}>
      <div className='flex justify-center mt-2'>
        <Image
          src={`${assets}${img_path}`}
          alt='aviso'
          width={200}
          height={50}
          quality={75}
          loading="lazy"
        />
      </div>
      <div className='p-3 flex-grow'>
        <h1 className='text-lg font-bold text-gray-700'>{titulo}</h1>
        <h2 className='text-base font-semibold text-gray-600'>{subtitulo}</h2>
        <p className='text-gray-700 text-sm'>{descricaoMin}</p>
      </div>
    </div>
  );
});

export default function AvisosCardsContainer({ dados }) {
  const visibilidadeItems = 3;

  // Use useMemo to optimize re-renders and prevent unnecessary slicing
  const visibleDados = useMemo(() => {
    return dados.slice(0, visibilidadeItems);
  }, [dados, visibilidadeItems]);

  return (
    <div className='ml-12 mr-12'>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          {visibleDados.map((aviso, index) => (
            <Link key={index} href={{
              pathname: `${url}${aviso.link}`,
              query: { id: aviso.id }
            }} passHref>
              <div className='block'>
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
    </div>
  );
}
