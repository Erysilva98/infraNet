"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAvisos } from "@/api/api";
import setaLeft from "@icons/setaLeft.svg";
import setaRight from "@icons/setaRight.svg";
import Link from "next/link";

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

export default function Carousel() {
  const [avisos, setAvisos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const dadosAvisos = await getAvisos();
        const dadosTratados = dadosAvisos.map((item) => {
          return {
            id: item.id,
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
            <Link href={{
              pathname: `${url}${avisos[currentSlide].link}`,
              query: { id: avisos[currentSlide].id } 
            }}>
              <div>
                <Image
                  src={`${assets}${avisos[currentSlide].img_path}`}
                  alt={`Slide ${currentSlide + 1}`}
                  layout="responsive"
                  width={600}
                  height={400}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
      <button onClick={nextSlide} className="next-button">
        <Image src={setaRight} alt="seta direita" width={20} height={20} />
      </button>
    </div>
  );
}
