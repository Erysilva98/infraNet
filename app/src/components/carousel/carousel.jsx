"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// icons
import setaLeft from "@icons/setaLeft.svg";
import setaRight from "@icons/setaRight.svg";

export default function Carousel({ imagens }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Object.keys(imagens).length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Object.keys(imagens).length) % Object.keys(imagens).length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const imageKeys = Object.keys(imagens);

  return (
    <div className="flex">
      <button onClick={prevSlide} className="prev-button">
        <Image src={setaLeft} alt="seta esquerda" width={20} height={20} />
      </button>
      <div className="carousel-container" style={{ width: '600px' }}>
        <div className="flex carousel">
          <Image
            src={imagens[imageKeys[currentSlide]]}
            alt={`Slide ${currentSlide + 1}`}
            layout="responsive"
            width={6}
            height={5}
          />
        </div>
      </div>
      <button onClick={nextSlide} className="next-button">
        <Image src={setaRight} alt="seta direita" width={20} height={20} />
      </button>
    </div>

  );
}

