import React from "react";
import Image from "next/image";

const assets = `/assets/`;

const SistemasCard = ({ id, img_path, titulo, link, descricao, onDelete }) => {

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

const SistemaList = ({ sistemas, onDelete }) => {
    return (
        <div className='grid grid-cols-4 gap-4 justify-normal p-5'>
            {sistemas.map((sistema) => (
                <SistemasCard   
                    key={sistema.id}
                    id={sistema.id}
                    img_path={sistema.img_path}
                    titulo={sistema.titulo}
                    link={sistema.link}
                    descricao={sistema.descricao}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default SistemaList;