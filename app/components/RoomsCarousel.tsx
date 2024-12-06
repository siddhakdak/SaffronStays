'use client'

import {useRef } from 'react'
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
  const carouselRef = useRef<HTMLDivElement>(null);

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
              <ul className="about-list">
               
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

