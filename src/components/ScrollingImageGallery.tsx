import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollingImageGalleryProps {
  images: string[];
}

const ScrollingImageGallery: React.FC<ScrollingImageGalleryProps> = ({ 
  images 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-full w-full">
      <div className="flex items-center justify-center h-full w-full">
        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 z-10 w-10 h-10 bg-electric-blue/80 hover:bg-electric-blue rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          ←
        </button>

        {/* Current Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md h-full min-h-40 rounded-lg border border-electric-blue/30 overflow-hidden"
        >
          <img
            src={images[currentIndex]}
            alt={`Preview ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          {/* Fallback placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-electric-blue/20 to-neon-green/20" style={{ display: 'none' }}>
            <div className="text-center p-4">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-electric-blue to-neon-green rounded-full flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {currentIndex + 1}
                </span>
              </div>
              <p className="text-sm text-gray-300 font-medium">
                Preview {currentIndex + 1}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {images[currentIndex] || 'No image'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 z-10 w-10 h-10 bg-electric-blue/80 hover:bg-electric-blue rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          →
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-electric-blue' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImageGallery;
