import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import setaLeft from '@icons/setaLeft.svg';
import setaRight from '@icons/setaRight.svg';

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

export default function Carousel({ dados }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % dados.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + dados.length) % dados.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, dados]);

  return (
    <div className="flex justify-center">
      <button onClick={prevSlide} aria-label="Previous slide">
        <Image src={setaLeft} alt="Seta esquerda" width={20} height={20} />
      </button>
      <div>
        {dados[currentSlide] && (
          <Link href={{
            pathname: `${url}${dados[currentSlide].link}`,
            query: { id: dados[currentSlide].id }
          }}>
            <div aria-label={`Slide ${currentSlide + 1}`}>
              <Image
                src={`${assets}${dados[currentSlide].img_path}`}
                alt={`Slide ${currentSlide + 1}`}
                width={600}
                height={50}
                quality={75}
                loading="lazy"
              />

            </div>
          </Link>
        )}
      </div>
      <button onClick={nextSlide} aria-label="Next slide">
        <Image src={setaRight} alt="Seta direita" width={20} height={20} />
      </button>
    </div>
  );
}
