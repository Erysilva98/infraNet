import React from 'react';
import AvisoCard from './avisoCard';

const AvisosList = ({ avisos, onDelete }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-normal p-5">
      {avisos.map((aviso) => (
        <AvisoCard
          key={aviso.id}
          id={aviso.id}
          img_data={aviso.img_data}
          titulo={aviso.titulo}
          subtitulo={aviso.subtitulo}
          descricao={aviso.descricao}
          prioridade={aviso.prioridade}
          onDelete={onDelete} // Passa a função onDelete para cada AvisoCard
        />
      ))}
    </div>
  );
};

export default AvisosList;
