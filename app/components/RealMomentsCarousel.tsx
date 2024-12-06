'use client'

import {useRef} from 'react'
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
  const carouselRef = useRef<HTMLDivElement>(null);

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

