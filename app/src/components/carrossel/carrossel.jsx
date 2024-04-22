
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import setaLeft from '@icons/setaLeft.svg';
import setaRight from '@icons/setaRight.svg';

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

export default function Carousel ({ dados }){

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (dados.length > 0) {
      setCurrentSlide((currentSlide + 1) % dados.length);
    }
  };

  const prevSlide = () => {
    if (dados.length > 0) {
      setCurrentSlide((currentSlide - 1 + dados.length) % dados.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, dados]);

  return (
    <div className="flex justify-center">
      {dados.length > 0 && (
        <>
          <button onClick={prevSlide}>
            <Image src={setaLeft} alt="seta esquerda" width={20} height={20} />
          </button>
            <div>
              {dados.length > 0 && dados[currentSlide] && (
                <Link href={{
                  pathname: `${url}${dados[currentSlide].link}`,
                  query: { id: dados[currentSlide].id }
                }}>
                  <div>
                    <Image
                      src={`${assets}${dados[currentSlide].img_path}`}
                      alt={`Slide ${currentSlide}`}
                      width={100}
                      height={100}
                    layout='responsive'
                    priority={true}
                    />
                  </div>
                </Link>
              )}
            </div>
          <button onClick={nextSlide}>
            <Image src={setaRight} alt="seta direita" width={20} height={20} />
          </button>
        </>
      )}
    </div>
  );
};
