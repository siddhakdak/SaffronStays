'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Moment {
  id: number;
  src: string;
  alt: string;
}

interface RealMomentsCarouselProps {
  moments: Moment[];
}

export default function RealMomentsCarousel({ moments }: RealMomentsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setCurrentIndex(newIndex);
      }
    };

    carouselRef.current?.addEventListener('scroll', handleScroll);
    return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {moments.map((moment) => (
          <div key={moment.id} className="carousel-item">
            <Image
              src={moment.src}
              alt={moment.alt}
              width={300}
              height={300}
              className="carousel-image"
            />
             <p className="image-text">Vinay, &nbsp; &nbsp;Sep 03, 2023 </p>
           
          </div>
        ))}
      </div>
    </div>
  )
}

