"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAllData } from "@/api/api"; // Atualizado para usar getAllData
import setaLeft from "@icons/setaLeft.svg";
import setaRight from "@icons/setaRight.svg";
import Link from "next/link";

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

export default function Carousel() {
  const [avisos, setAvisos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const allData = await getAllData();
        if (allData && allData.avisos) {
          // Atualizado para extrair apenas os avisos de allData
          setAvisos(allData.avisos);
        }
      } catch (error) {
        console.log("Error ao Obter os dados no carrousel.jsx", error);
        setAvisos([]);
      }
    };
    fetchDados();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % avisos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + avisos.length) % avisos.length);
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
          {avisos[currentSlide] && (
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
