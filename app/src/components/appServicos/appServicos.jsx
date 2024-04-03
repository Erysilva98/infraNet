"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllData } from '@/api/api'; // Certifique-se de que esta função está implementada corretamente.

const assets = `/assets/`;

export default function AppServicos() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const allData = await getAllData();
        if (allData && allData.servicos) {
          setItems(allData.servicos); // Assumindo que allData contém uma propriedade 'servicos'
        }
      } catch (error) {
        console.log('Erro ao obter os dados no AppServicos.jsx', error);
        setItems([]);
      }
    };
    fetchItems();
  }, []);

  // Calcular os itens visíveis com base na página atual
  const visibleItems = items.slice(0, currentPage * itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleSeeMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl">
        <ul className="flex flex-wrap justify-center">
          {visibleItems.map((item) => (
            <Link key={item.id} href={item.link || '/pages/404'}>
              <div>
                <div className="text-center flex flex-col flex-wrap-4 p-4">
                  <Image src={`${assets}${item.img_path}`} alt={item.titulo} width={100} height={20} className="mt-2 w-44 h-22 object-cover rounded-t-lg" />
                  {/* Aqui você pode incluir o título, descrição, etc., se necessário */}
                </div>
              </div>
            </Link>
          ))}
        </ul>
        {currentPage < totalPages && (
          <div className="text-center">
            <button onClick={handleSeeMore} className='inline-block cursor-pointer bg-navButton text-white py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'>
              Veja mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
