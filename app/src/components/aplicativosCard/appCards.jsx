"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const assets = `/assets/`;
const url = 'http://localhost:3000/pages/404';  

const AplicativosCard = ({ img_path, titulo, descricao }) => {
    return (
        <div className='max-w-6xl mt-2 mb-4 shadow-lg items-center'>
            <div className='flex justify-center mt-2'>
                <Image src={`${assets}${img_path}`} alt='servico' width={100} height={20} className='mt-2 w-44 h-22 object-cover rounded-t-lg' />
            </div>
        </div>
    );
};

export default function AppCards({ dados }) {
    const [visibleItems, setVisibleItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        setVisibleItems(dados.slice(0, itemsPerPage));
    }, [dados]);

    const totalPages = Math.ceil(dados.length / itemsPerPage);

    const handleSeeMore = () => {
        const nextPage = currentPage + 1;
        const startIndex = currentPage * itemsPerPage;
        const newVisibleItems = dados.slice(0, startIndex + itemsPerPage);
        setVisibleItems(newVisibleItems);
        setCurrentPage(nextPage);
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-6xl">
                <ul className="flex flex-wrap justify-center">
                    {visibleItems.map((item, index) => (
                        <Link key={index} href={item.link ? item.link : url} passHref>
                            <d className="text-center flex flex-col flex-wrap-4 p-4">
                                <AplicativosCard
                                    img_path={item.img_path}
                                    titulo={item.titulo}
                                    descricao={item.descricao}
                                />
                            </d>
                        </Link>
                    ))}
                </ul>
                {currentPage < totalPages && (
                    <div className="text-center">
                        <button onClick={handleSeeMore} className='inline-block items-center cursor-pointer bg-navButton text-white space-x-2 py-2 px-4 rounded hover:bg-navButtonHover transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'>
                            Veja mais
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
