"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import setaLeft from '@icons/setaLeft.svg';
import setaRight from '@icons/setaRight.svg';
import Link from 'next/link';

const assets = `/assets/`;
const url = "http://localhost:3000/pages/";

const Carousel = ({ avisos }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (avisos.length > 0) {
            setCurrentSlide((currentSlide + 1) % avisos.length);
        }
    };

    const prevSlide = () => {
        if (avisos.length > 0) {
            setCurrentSlide((currentSlide - 1 + avisos.length) % avisos.length);
        }
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
                    {avisos.length > 0 && avisos[currentSlide] && (
                        <Link href={{
                            pathname: `${url}${avisos[currentSlide].link}`,
                            query: { id: avisos[currentSlide].id }
                        }}>
                            <div>
                                <Image
                                    src={`${assets}${dados[currentSlide].img_path}`}
                                    alt={`Slide ${currentSlide}`}
                                    width={600}
                                    height={400}
                                    layout='responsive'
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

export default Carousel;
