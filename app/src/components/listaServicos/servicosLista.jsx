import React from "react";
import ServicosCard from "./servicosCard";

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
