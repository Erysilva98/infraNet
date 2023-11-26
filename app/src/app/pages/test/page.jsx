"use client"
// TestPage.jsx
import React, { useEffect, useState } from 'react';
import { getAvisos } from '@/api/api';
import Image from 'next/image';

const TestPage = () => {
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosAvisos = await getAvisos();
        if (dadosAvisos) {
          setAvisos(dadosAvisos);
        } else {
          console.error('Erro ao obter dados de avisos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <div>
      <h1>Teste de Dados dos Avisos</h1>
      <ul>
        {avisos.map((aviso) => (
          <li key={aviso.id}>
            <Image className='bg-red-400' src={aviso.img_path} alt={`Imagem do Aviso ${aviso.id}`} width={100} height={100}/>
            <h1>{aviso.link}</h1>
            <h2>{aviso.titulo}</h2>
            <p>{aviso.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
