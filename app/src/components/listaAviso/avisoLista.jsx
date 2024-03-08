import React, { useState } from 'react';
import Image from 'next/image';

const assets = `/assets/`;

const AvisoCard = ({ id, img_path, titulo, subtitulo, descricao, prioridade, onDelete }) => {
  const descricaoMin = descricao.length > 200 ? `${descricao.substring(0, 200)}...` : descricao;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  if (typeof window === 'undefined') {
    return null; // Não renderiza o modal no servidor
  }

  return (
    <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
      <div className="flex justify-center mt-2">
        <Image src={`${assets}${img_path}`} alt="aviso" width={100} height={100} className="mt-2 w-44 h-22 object-cover rounded-t-lg" />
      </div>
      <div className="p-3 flex-grow">
        <h1 className="text-sm font-bold text-gray-700">{titulo}</h1>
        <h2 className="text-sm text-gray-500">{subtitulo}</h2>
        <p className="text-gray-700 text-sm">{descricaoMin}</p>
        <p className="text-gray-700 text-sm">Prioridade: {prioridade}</p>
        <button
          className="bg-red-500 text-white rounded-lg p-2 mt-2"
          onClick={handleDeleteClick}
        >
          Deletar
        </button>
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <p>Tem certeza que deseja deletar?</p>
              <div className="flex justify-end mt-4">
                <button className="bg-red-500 text-white rounded-lg p-2 mr-2" onClick={handleConfirmDelete}>
                  Confirmar
                </button>
                <button className="bg-gray-300 text-gray-700 rounded-lg p-2" onClick={handleCancelDelete}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AvisosList = ({ avisos, onDelete }) => {
  return (
    <div className='grid grid-cols-3 gap-4 justify-normal p-5'>
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
