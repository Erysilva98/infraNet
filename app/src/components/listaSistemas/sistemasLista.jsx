import React from "react";
import SistemasCard from "./sistemasCard";

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