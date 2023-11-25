"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Aplicativo from '@assets/imgApp.png';

export default function AplicativoCard() {
  const items = [
    {
      id: 1,
      image: { Aplicativo },
      title: 'Item 1',
      link: 'https://example.com/item1',
    },
    {
      id: 2,
      image: { Aplicativo },
      title: 'Item 2',
      link: 'https://example.com/item3',
    },
    {
      id: 3,
      image: { Aplicativo },
      title: 'Item 3',
      link: 'https://example.com/item3',
    },
    {
      id: 4,
      image: { Aplicativo },
      title: 'Item 4',
      link: 'https://example.com/item4',
    },
    {
      id: 5,
      image: { Aplicativo },
      title: 'Item 5',
      link: 'https://example.com/item5',
    },
    {
      id: 6,
      image: { Aplicativo },
      title: 'Item 6',
      link: 'https://example.com/item6',
    },
    {
      id: 7,
      image: { Aplicativo },
      title: 'Item 7',
      link: 'https://example.com/item7',
    },

    {
      id: 8,
      image: { Aplicativo },
      title: 'Item 7',
      link: 'https://example.com/item7',
    },

    {
      id: 9,
      image: { Aplicativo },
      title: 'Item 7',
      link: 'https://example.com/item7',
    },

    {
      id: 10,
      image: { Aplicativo },
      title: 'Item 7',
      link: 'https://example.com/item7',
    },
  ];

  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(items.slice(0, itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleSeeMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const nextPageItems = items.slice(startIndex, startIndex + itemsPerPage);

    setVisibleItems((prevVisibleItems) => [...prevVisibleItems, ...nextPageItems]);
    setCurrentPage(nextPage);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl">
        <ul className="flex flex-wrap justify-center">
          {visibleItems.map((item) => (
            <li key={item.id} className="text-center flex flex-col flex-wrap-4 p-4">
              <Image src={Aplicativo} alt={item.title} width={160} height={20} />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
        {currentPage < totalPages && (
          <div className="text-center">
            <Link href="./pages/servicos">
              <p className="cursor-pointer" onClick={handleSeeMore}>
                Ver mais
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}