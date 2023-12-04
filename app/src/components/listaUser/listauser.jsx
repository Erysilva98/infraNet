"use client";
import React, { useState } from 'react';
import PopupForm from './form'; // Importe o PopupForm

const Lista = () => {
  const [itens, setItens] = useState([]);
  const [exibirPopup, setExibirPopup] = useState(false);

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
    setExibirPopup(false);
  };

  const deletarItem = (id) => {
    const novaLista = itens.filter((item) => item.id !== id);
    setItens(novaLista);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <button onClick={() => setExibirPopup(true)} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Adicionar Item
      </button>

      <ul className="border border-gray-300 rounded p-4">
        {itens.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
            <span>{item.nome}</span>
            <button onClick={() => deletarItem(item.id)} className="text-red-500">
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>

      {/* PopupForm condicional */}
      {exibirPopup && <PopupForm fecharPopup={() => setExibirPopup(false)} adicionarItem={adicionarItem} />}
    </div>
  );
};

export default Lista;
