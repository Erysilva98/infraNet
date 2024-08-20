import React, { useState } from 'react';
import { deleteAviso } from '@/api/api'; // Importa a função de deletar da API

const AvisoCard = ({ id, img_data, titulo, subtitulo, descricao, prioridade, onDelete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const descricaoMin = descricao.length > 100 ? `${descricao.substring(0, 100)}...` : descricao;

    // Converte a imagem recebida em base64 para exibição
    const imageSrc = `data:image/png;base64,${img_data}`;

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
        <div className="max-w-xs mt-2 mb-4 bg-corCard rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center mt-2">
                {img_data && (
                    <img
                        src={imageSrc}
                        alt="aviso"
                        className="mt-2 w-44 h-22 object-cover rounded-t-lg"
                        style={{ width: '100%', height: 'auto' }} // Mantém a proporção
                    />
                )}
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
