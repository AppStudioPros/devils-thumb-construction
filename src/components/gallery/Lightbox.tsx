'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Card modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-sm text-[#5d6661] font-[Montserrat]">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#5d6661] hover:text-[#13251e] text-xl leading-none cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Image container */}
        <div className="relative flex-1 min-h-0">
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              priority
            />
          </div>

          {/* Nav arrows inside card */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-[#13251e] text-2xl sm:text-3xl leading-none cursor-pointer transition-all hover:scale-105 select-none"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={onNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-[#13251e] text-2xl sm:text-3xl leading-none cursor-pointer transition-all hover:scale-105 select-none"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
