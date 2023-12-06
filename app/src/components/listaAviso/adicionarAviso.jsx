import React, { useState } from 'react';

const AdicionarAviso = ({ onAdicionarAviso }) => {
  const [novoAviso, setNovoAviso] = useState({
    img_path: '',
    prioridade: '',
    data_publicacao: '',
    link: '',
    titulo: '',
    subtitulo: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoAviso((prevAviso) => ({ ...prevAviso, [name]: value }));
  };

  const adicionarItem = () => {
    onAdicionarAviso(novoAviso);
    setNovoAviso({
      img_path: '',
      prioridade: '',
      data_publicacao: '',
      link: '',
      titulo: '',                
      subtitulo: '',
      descricao: '',
    });
  };

  return (
    <form className="flex flex-col items-center">
      <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
      <input
        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
        type="text"
        name="img_path"
        value={novoAviso.img_path}
        onChange={handleChange}
        placeholder="Digite o caminho da imagem"
      />

      <label className="text-destaque1 text-xl font-bold mt-5">Título</label>
      <input
        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
        type="text"
        name="titulo"
        value={novoAviso.titulo}
        onChange={handleChange}
        placeholder="Digite o título"
      />

      <label className="text-destaque1 text-xl font-bold mt-5">Link</label>
      <input
        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
        type="text"
        name="link"
        value={novoAviso.link}
        onChange={handleChange}
        placeholder="Digite o link"
      />

      <label className="text-destaque1 text-xl font-bold mt-5">Descrição</label>
      <textarea
        className="border-2 border-azulPrincipal rounded-lg p-2 w-80"
        name="descricao"
        value={novoAviso.descricao}
        onChange={handleChange}
        placeholder="Digite a descrição"
      ></textarea>

      <button
        className="bg-botao hover:bg-sucesso hover:text-white text-white font-bold rounded-lg p-2 w-80 mt-5"
        onClick={adicionarItem}
      >
        Adicionar Avisos
      </button>
    </form>
  );
};

export default AdicionarAviso;
