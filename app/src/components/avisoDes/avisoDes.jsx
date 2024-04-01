import React from 'react';

const AvisoDes = ({ aviso }) => {
  const {
    img_path,
    data_publicacao,
    titulo,
    subtitulo,
    descricao,
    link,
  } = aviso;

  const converterDataParaISO8601 = (dataString) => {
    const [dia, mes, ano] = dataString.split('/');
    return new Date(`${ano}-${mes}-${dia}`).toISOString();
  };

  return (
    <div className="text-center">
      <img
        src={img_path}
        alt="Aviso"
        className="max-w-full max-h-96 mx-auto my-8"
      />
      <p className="text-gray-600">
        Data de Publicação: {new Date(converterDataParaISO8601(data_publicacao)).toLocaleDateString()}
      </p>
      <div className="text-left my-8">
        <h2 className="text-3xl font-bold">{titulo}</h2>
        <h3 className="text-xl font-semibold">{subtitulo}</h3>
        <p className="text-gray-800">{descricao}</p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Link Original
        </a>
      )}
    </div>
  );
};

export default AvisoDes;
