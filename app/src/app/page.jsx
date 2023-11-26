import React, { useState } from 'react'
import { getAvisos } from '@/api/api';

//imagens
import aviso from '@assets/aviso.png';
import comunicado from '@assets/comunicado.png';
import pesquisa from '@assets/pesquisa.png';

//component
import UserHeader from '@/components/header/userHeader'
import Carousel from '@/components/carousel/carousel'
import Footer from '@/components/footer/footer';
import NavBar from '@/components/navBar/navBar';
import AvisosCard from '@/components/avisos/avisoCard';
import AplicativoCard from '@/components/aplicativos/aplicativoCard';

export default function Home() {

  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const dadosAvisos = await getAvisos();

        //Tratar os dados aqui
        const dadosTratados = dadosAvisos.map((item) => {
          return {
            img_path: aviso.img_path,
            prioridade: aviso.prioridade,
          };
        });
        setAvisos(dadosAvisos);
      }
      catch (error) {
        console.log("Error ao Obter os dados na Page.jsx", error);
        setAvisos([]);
      }
    };
    fetchAvisos();
  }, []);

  const dados = {
    imagem1: aviso,
    imagem2: comunicado,
    imagem3: pesquisa,
  };

  return (
    <>
      <header>
        {/* Componentes userHeader */}
        <UserHeader />
        <nav>
          {/* Componentes navBar */}
          <NavBar />
        </nav>
      </header>
      <main>
        <section>
          {/* Sessão Carousel */}
          <div className='flex justify-center '>
            <Carousel dados={avisos} />
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
            <AplicativoCard />
          </div>
          <hr className="border-t m-2 border-gray-300"></hr>
        </section>
        <section>
          {/* Sessão de Aplicativos Externos */}
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-gray-700'>Sistemas Governamentais</h1>
          </div>
          <div>
            <AplicativoCard />
          </div>
          <hr className="border-t m-2 border-gray-300"></hr>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
