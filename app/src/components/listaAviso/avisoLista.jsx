import React from 'react';
import Image from 'next/image';

const assets = `/assets/`;

const AvisoCard = ({ id, img_path, titulo, subtitulo, descricao, prioridade, onDelete }) => (
  <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
    <div className="flex justify-center mt-2">
      <Image src={`${assets}${img_path}`} alt="aviso" width={100} height={100} className="mt-2 w-44 h-22 object-cover rounded-t-lg" />
    </div>
    <div className="p-3 flex-grow">
      <h1 className="text-sm font-bold text-gray-700">{titulo}</h1>
      <h2 className="text-sm text-gray-500">{subtitulo}</h2>
      <p className="text-gray-700 text-sm">{descricao}</p>
      <p className="text-gray-700 text-sm">Prioridade: {prioridade}</p>
      <button
        className="bg-red-500 text-white rounded-lg p-2 mt-2"
        onClick={() => onDelete(id)}
      >
        Deletar
      </button>
    </div>
  </div>
);

const AvisosList = ({ avisos, onDelete }) => {
  return (
    <div className='grid grid-cols-3 justify-normal'>
      {avisos.map((aviso) => (
        <AvisoCard
          key={aviso.id}
          id={aviso.id}
          img_path={aviso.img_path}
          titulo={aviso.titulo}
          subtitulo={aviso.subtitulo}
          descricao={aviso.descricao}
          prioridade={aviso.prioridade}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default AvisosList;
