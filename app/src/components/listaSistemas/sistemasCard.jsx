import React, { useState } from "react";
import Image from "next/image";
import { deleteServico } from "@/api/api";  // Assumindo que a função deleteServico está implementada

const ServicosCard = ({ id, img_path, titulo, link, descricao, onDelete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        const result = await deleteServico(id);  // Chama a função de deletar
        if (result) {
            onDelete(id);  // Remove o serviço da lista no estado pai
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
                    alt="Serviço"
                    width={100}
                    height={100}
                    className="mt-2 w-44 h-22 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-3">
                <h1 className="text-sm font-bold text-gray-700">{titulo}</h1>
                <p className="text-gray-700 text-sm">{descricao}</p>
                <p className="text-gray-700 text-sm">
                    <a href={link} target="_blank" rel="noopener noreferrer">Visitar</a>
                </p>
                <button
                    className="bg-red-500 text-white rounded-lg p-2 mt-2"
                    onClick={handleDeleteClick}
                >
                    Deletar
                </button>
            </div>
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p>Tem certeza que deseja deletar?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 text-white rounded-lg p-2 mr-2"
                                onClick={handleConfirmDelete}
                            >
                                Confirmar
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 rounded-lg p-2"
                                onClick={handleCancelDelete}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicosCard;
