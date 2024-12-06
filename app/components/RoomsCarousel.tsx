'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Room {
  id: number;
  name: string;
  image: string;
  description: string;
  beds: string;
}

interface RoomsCarouselProps {
  rooms: Room[];
}

export default function RoomsCarousel({ rooms }: RoomsCarouselProps) {
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
        {rooms.map((room) => (
          <div key={room.id} className="carousel-item room-card">
            <div className="room-image">
              <Image
                src={room.image}
                alt={room.name}
                width={100}
                height={200}
                className="carousel-image"
              />
            </div>
            <div className="room-info">
              <ul className="about-list">
                <li> {room.description}</li>
                <li> <strong>Beds:</strong> {room.beds}</li>
               
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

