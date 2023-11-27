import { useState, useEffect } from "react";
import Image from "next/image";

// icons
import setaLeft from "@icons/setaLeft.svg";
import setaRight from "@icons/setaRight.svg";

// imagens
const assets = `/assets/`;

export default function Carousel({ dados }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % (dados?.length || 1));
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + (dados?.length || 1)) % (dados?.length || 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, dados]);

  return (
    <div className="flex">
      <button onClick={prevSlide} className="prev-button">
        <Image src={setaLeft} alt="seta esquerda" width={20} height={20} />
      </button>
      <div className="carousel-container" style={{ width: '600px' }}>
        <div className="flex carousel">
          {dados && dados[currentSlide] && (
            <Image
              src={`${assets}${dados[currentSlide].img_path}`}
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
