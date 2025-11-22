"use client"

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string; category?: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
  const currentImage = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrevious()
      if (e.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrevious])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:opacity-70 transition-opacity z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 p-2 text-white hover:opacity-70 transition-opacity z-10"
        aria-label="Previous image"
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image */}
      <div className="relative max-w-7xl max-h-[90vh] mx-auto px-16">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <div className="mt-4 text-center text-white">
          <p className="text-sm opacity-70">
            {currentIndex + 1} / {images.length}
            {currentImage.category && ` • ${currentImage.category}`}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 p-2 text-white hover:opacity-70 transition-opacity z-10"
        aria-label="Next image"
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}
