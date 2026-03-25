'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface CategoryGalleryProps {
  images: string[];
  categoryName: string;
}

export default function CategoryGallery({ images, categoryName }: CategoryGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    );
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <button
            key={image}
            onClick={() => setLightboxIndex(i)}
            className="aspect-[4/3] relative overflow-hidden group cursor-pointer"
            aria-label={`View ${categoryName} image ${i + 1}`}
          >
            <Image
              src={image}
              alt={`${categoryName} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#13251e]/0 group-hover:bg-[#13251e]/30 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
