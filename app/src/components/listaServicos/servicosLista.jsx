import React from "react";
import Image from "next/image";

const assets = `/assets/`;

const ServicosCard = ({ id, img_path, titulo, link, descricao, onDelete }) => {

    return (
        <div className="max-w-6xl mt-2 mb-4 bg-corCard rounded-lg shadow-lg items-center">
            <div className="flex justify-center mt-2">
                <Image src={`${assets}${img_path}`} alt="sistema" width={100} height={100} className="mt-2 w-44 h-22 object-cover rounded-t-lg" />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-red-500 text-white rounded-lg p-2"
                    onClick={() => onDelete(id)}
                >
                    Deletar
                </button>
            </div>
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