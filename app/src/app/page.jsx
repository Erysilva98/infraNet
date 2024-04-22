"use client";
import React, {useEffect, useState} from 'react'

//component
import UserHeader from '@/components/header/userHeader'
import Carrossel from '@/components/carrossel/carrossel'
import Footer from '@/components/footer/footer';
import NavBar from '@/components/navBar/navBar';
import AvisosCard from '@/components/avisos/avisoCard';
import AppCards from '@/components/aplicativosCard/appCards';

import { getAllData  } from '@/api/api'

export default function Home() {

  const [dados, setDados] = useState({
    avisos: [],
    servicos: [],
    sistemas: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosCarregados = await getAllData();
        if (dadosCarregados) {
          setDados({
            avisos: dadosCarregados.avisos || [],
            servicos: dadosCarregados.servicos || [],
            sistemas: dadosCarregados.sistemas || []
          });
        }
      } catch (error) {
        console.error("Erro ao carregar dados da Home:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        {/* Componentes userHeader */}
        <UserHeader />
        <nav>
          {/* Componentes navBar */}
          <NavBar />
        </nav>
      </header>
      <main className='flex-grow'>
        <section>
          {/* Sessão Carrossel */}
          <div className='flex justify-center '>
            <Carrossel dados={dados.avisos}/>
          </div>
          <hr className="border-t m-2 w-11/12 border-gray-300"></hr>
        </section>
        <section>
          {/* Sessão de noticias */}
          <div>
            <div className='flex justify-center'>
              <h1 className='text-2xl font-bold text-gray-700'>Avisos</h1>
            </div>
            <div className='ml-12 mr-12'>
              <AvisosCard dados={dados.avisos} />
            </div>
            <hr className="border-t m-2 border-gray-300"></hr>
          </div>
        </section>
        <section>
          {/* Sessão de Aplicativos Internos */}
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Serviços Internos</h1>
          </div>
          <div>
            <AppCards dados={dados.servicos} />
          </div>
          <hr className="border-t m-2 border-gray-300"></hr>
        </section>
        <section>
          {/* Sessão de Aplicativos Externos */}
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Sistemas Governamentais</h1>
          </div>
          <div>
            <AppCards dados={dados.sistemas} /> 
          </div>
          <hr className="border-t m-2 border-gray-300"></hr>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
