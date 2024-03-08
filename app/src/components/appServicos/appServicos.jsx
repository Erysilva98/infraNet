"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getServicos } from '@/api/api';

const assets = `/assets/`;
const url = 'http://localhost:3000/pages/404';

const AppServicosCard = ({ img_path, titulo, descricao, link }) => {
  return (
    <div className='max-w-6xl mt-2 mb-4 shadow-lg items-center'>
      <div className='flex justify-center mt-2'>
        <Image src={`${assets}${img_path}`} alt='servico' width={100} height={20} className='mt-2 w-44 h-22 object-cover rounded-t-lg' />
      </div>
    </div>
  );
};

export default function AppServicos() {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleSeeMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const nextPageItems = items.slice(startIndex, startIndex + itemsPerPage);

    setVisibleItems((prevVisibleItems) => [...prevVisibleItems, ...nextPageItems]);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const dadosItems = await getServicos();

        // Tratar os dados aqui
        const dadosTratados = dadosItems.map((item) => {
          return {
            id: item.id,
            img_path: item.img_path,
            titulo: item.titulo,
            link: item.link,
            descricao: item.descricao,
          };
        });
        setItems(dadosTratados || []);
      } catch (error) {
        console.log('Error ao Obter os dados no AppServicos.jsx', error);
        setItems([]);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    // Initially set the visible items for the first page
    setVisibleItems(items.slice(0, itemsPerPage));
  }, [items]);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl">
        <ul className="flex flex-wrap justify-center">
          {visibleItems.map((item) => (
            <Link key={item.id} href={item.link ? item.link : `${url}`}>
              <li className="text-center flex flex-col flex-wrap-4 p-4">
                <AppServicosCard
                  img_path={item.img_path}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  link={item.link}
                />
              </li>
            </Link>
          ))}
        </ul>
        {currentPage < totalPages && (
          <div className="text-center">
            <Link href="./pages/servicos">
              <p className='inline-block items-center cursor-pointer bg-navButton text-white space-x-2  py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'>
                Veja mais
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
