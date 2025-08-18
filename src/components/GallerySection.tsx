import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaPlay, FaExpand } from 'react-icons/fa';

interface GallerySectionProps {
  forceAnimation?: boolean;
}

const GallerySection: React.FC<GallerySectionProps> = ({ forceAnimation = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    initialInView: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inView || forceAnimation) {
      setShouldAnimate(true);
    }
  }, [inView, forceAnimation]);

  // Placeholder gallery data - replace with actual images
  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/600/400',
      alt: 'Drone Soccer Match',
      title: 'Intense Drone Soccer Action',
      category: 'Competition',
    },
    {
      id: 2,
      src: '/api/placeholder/600/400',
      alt: 'Team Practice Session',
      title: 'Teams Preparing for Battle',
      category: 'Practice',
    },
    {
      id: 3,
      src: '/api/placeholder/600/400',
      alt: 'Equipment Setup',
      title: 'Professional Equipment Setup',
      category: 'Equipment',
    },
    {
      id: 4,
      src: '/api/placeholder/600/400',
      alt: 'Awards Ceremony',
      title: 'Celebrating Winners',
      category: 'Awards',
    },
    {
      id: 5,
      src: '/api/placeholder/600/400',
      alt: 'Safety Briefing',
      title: 'Safety First Approach',
      category: 'Safety',
    },
    {
      id: 6,
      src: '/api/placeholder/600/400',
      alt: 'Spectator Area',
      title: 'Exciting Spectator Experience',
      category: 'Spectators',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="gallery" className="section-padding bg-deep-space text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Event <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the excitement and energy of DroneUp through our visual journey.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/10 backdrop-blur-custom rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-electric-blue to-neon-green p-1 rounded-xl">
                <div className="w-full h-48 bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/60 text-sm">Image {image.id}</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg font-orbitron font-semibold mb-2">{image.title}</h4>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FaExpand className="text-white text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <button
            onClick={prevImage}
            className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <div className="flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-electric-blue' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextImage}
            className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <FaChevronRight className="text-white" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <span className="text-white text-xl">&times;</span>
            </button>
            
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 p-1 rounded-xl">
              <div className="w-full h-96 bg-gradient-to-br from-electric-blue/10 to-neon-green/10 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-lg">Modal Image {galleryImages[currentImageIndex].id}</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-xl font-orbitron font-semibold text-white mb-2">
                {galleryImages[currentImageIndex].title}
              </h3>
              <p className="text-gray-300">{galleryImages[currentImageIndex].category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
