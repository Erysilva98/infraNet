"use client"
import React, { useEffect, useState } from 'react';
import { test } from '../../../Api/api'; // Importa a função test da sua API

const MinhaPagina = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosRecebidos = await test();
        setDados(dadosRecebidos);
      } catch (error) {
        console.error('Erro ao Obter Dados:\n', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {dados ? (
        <div>
          <h2>Dados Recebidos:</h2>
          <pre>{JSON.stringify(dados, null, 2)}</pre>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default MinhaPagina;
