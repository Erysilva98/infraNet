import React, { useState } from 'react';
import Image from 'next/image';
import { deleteAviso } from '@/api/api';

const AvisoCard = ({ id, img_path, titulo, subtitulo, descricao, prioridade, onDelete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const descricaoMin = descricao.length > 100 ? `${descricao.substring(0, 100)}...` : descricao;

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        const result = await deleteAviso(id); // Chama a função de deletar
        if (result) {
            onDelete(id); // Remove o aviso da lista no estado pai
        }
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    return (
        <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
            <div className="flex justify-center mt-2">
                <Image
                    src={img_path}
                    alt="Aviso"
                    width={100}
                    height={100}
                    className="mt-2 w-44 h-22 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-3 flex-grow">
                <h1 className="text-sm font-bold text-gray-700">{titulo}</h1>
                <h2 className="text-sm text-gray-500">{subtitulo}</h2>
                <p className="text-gray-700 text-sm">
                    {showFullDescription ? descricao : descricaoMin}
                    {descricao.length > 100 && (
                        <span
                            className="text-blue-500 cursor-pointer ml-2"
                            onClick={() => setShowFullDescription(!showFullDescription)}
                        >
                            {showFullDescription ? 'Ver Menos' : 'Ver Mais'}
                        </span>
                    )}
                </p>
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

export default AvisoCard;
