import React from 'react';

const ListaPaginada = ({ items, onDelete }) => {
  return (
    <ul className="border border-gray-300 rounded p-4">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
          <span>{item.nome}</span>
          <button onClick={() => onDelete(item.id)} className="text-red-500">
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaPaginada;
