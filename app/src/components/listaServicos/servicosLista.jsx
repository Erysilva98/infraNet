import React, { useState } from "react";
import Image from "next/image";

const assets = `/assets/`;

const ServicosCard = ({ id, img_path, titulo, link, descricao, onDelete }) => {
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

    return (
        <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
            <div className="flex justify-center mt-2">
                <Image src={`${assets}${img_path}`} alt="sistema" width={100} height={100} className="mt-2 w-44 h-22 object-cover rounded-t-lg" />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-red-500 text-white rounded-lg p-2"
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
    );
};

const ServicosList = ({ servicos, onDelete }) => {
    return (
        <div className='grid grid-cols-4 gap-4 justify-normal p-5'>
            {servicos.map((servico) => (
                <ServicosCard   
                    key={servico.id}
                    id={servico.id}
                    img_path={servico.img_path}
                    titulo={servico.titulo}
                    link={servico.link}
                    descricao={servico.descricao}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ServicosList;
