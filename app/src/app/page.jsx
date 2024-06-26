import React from 'react'

//component
import UserHeader from '@/components/header/userHeader'
import Carousel from '@/components/carousel/carousel'
import Footer from '@/components/footer/footer';
import NavBar from '@/components/navBar/navBar';
import AvisosCard from '@/components/avisos/avisoCard';
import AppServicos from '@/components/appServicos/appServicos';
import AppSistemas from '@/components/appSistemas/appSistemas';

export default function Home() {

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
          {/* Sessão Carousel */}
          <div className='flex justify-center '>
            <Carousel/>
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
              {/* Card de Avisos */}
              <AvisosCard />
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
            <AppServicos />
          </div>
          <hr className="border-t m-2 border-gray-300"></hr>
        </section>
        <section>
          {/* Sessão de Aplicativos Externos */}
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Sistemas Governamentais</h1>
          </div>
          <div>
            <AppSistemas /> 
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
