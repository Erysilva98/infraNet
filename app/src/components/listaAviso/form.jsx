import React from 'react';

const PopupForm = ({ fecharPopup, adicionarItem }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-gray-300 shadow-lg z-50">
      <form className="flex flex-col items-center">
        <label className="text-destaque1 text-xl font-bold mt-5">Imagem</label>
        <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite o caminho da imagem" />

        <label className="text-destaque1 text-xl font-bold mt-5">Título</label>
        <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite o título" />

        <label className="text-destaque1 text-xl font-bold mt-5">Link</label>
        <input className="border-2 border-azulPrincipal rounded-lg p-2 w-80" type="text" placeholder="Digite o link" />

        <label className="text-destaque1 text-xl font-bold mt-5">Descrição</label>
        <textarea className="border-2 border-azulPrincipal rounded-lg p-2 w-80" placeholder="Digite a descrição"></textarea>

        <button className="bg-azulPrincipal text-white rounded-lg p-2 w-80 mt-5" onClick={adicionarItem}>
          Adicionar Item
        </button>
      </form>
      <button onClick={fecharPopup} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Fechar</button>
    </div>
  );
};

export default PopupForm;
