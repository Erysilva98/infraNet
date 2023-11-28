"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getAvisos } from "@/api/api";

// icons
import setaLeft from "@icons/setaLeft.svg";
import setaRight from "@icons/setaRight.svg";

// imagens
const assets = `/assets/`;

export default function Carousel() {
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const dadosAvisos = await getAvisos();

        //Tratar os dados aqui
        const dadosTratados = dadosAvisos.map((item) => {
          return {
            img_path: item.img_path,
            prioridade: item.prioridade,
            link: item.link,
          };
        });
        setAvisos(dadosTratados || []);
      } catch (error) {
        console.log("Error ao Obter os dados no carrousel.jsx", error);
        setAvisos([]);
      }
    };
    fetchAvisos();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % (avisos?.length || 1));
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + (avisos?.length || 1)) % (avisos?.length || 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, avisos]);

  return (
    <div className="flex">
      <button onClick={prevSlide} className="prev-button">
        <Image src={setaLeft} alt="seta esquerda" width={20} height={20} />
      </button>
      <div className="carousel-container" style={{ width: '600px' }}>
        <div className="flex carousel">
          {avisos && avisos[currentSlide] && (
            <Image
              src={`${assets}${avisos[currentSlide].img_path}`}
              alt={`Slide ${currentSlide + 1}`}
              layout="responsive"
              width={600}
              height={400}
            />
          )}
        </div>
      </div>
      <button onClick={nextSlide} className="next-button">
        <Image src={setaRight} alt="seta direita" width={20} height={20} />
      </button>
    </div>
  );
}
