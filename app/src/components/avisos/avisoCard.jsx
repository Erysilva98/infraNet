import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import comunicado from '@assets/comunicado.png';
import pesquisa from '@assets/pesquisa.png';
import aviso from '@assets/aviso.png';

const AvisoCard = ({ title, content, imagem }) => (
  <div className='max-w-6xl mt-2 mb-4 bg-azulCard rounded-lg shadow-lg flex items-center'>
    <div className='flex-shrink-0'>
      <Image src={imagem} alt='aviso' className='w-44 h-22 object-cover rounded-t-lg' />
    </div>
    <div className='p-3 flex-grow'>
      <h1 className='text-sm font-bold text-gray-700'>{title}</h1>
      <p className='text-gray-700 text-sm'>{content}</p>
    </div>
  </div>
);

export default function AvisosCard() {
  return (
    <div className='ml-12'>
      <div className='flex justify-center'>
        <div className='gap-4 bg-red-50'>
          <AvisoCard
            title='Título da notícia'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
            imagem={comunicado}
          />
          <AvisoCard
            title='Título da notícia'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
            imagem={pesquisa}
          />
          <AvisoCard
            title='Título da notícia'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
            imagem={aviso}
          />
        </div>
      </div>
      <div className="text-center">
        <Link href="/pages/avisos">
          <p className="cursor-pointer">Ver mais</p>
        </Link>
      </div>
    </div>
  );
}
