import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaExpand, FaTimes } from 'react-icons/fa';

const GallerySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Sample gallery items - in a real app, these would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_7224-DP3-1024x683.jpg',
      alt: '',
      category: 'Action Photos',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_7335-DP3-1024x683.jpg',
      alt: '',
      category: 'Participant Photos',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_7457-DP3-1024x683.jpg',
      alt: '',
      category: 'Participant Photos',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_7615-DP3-1024x683.jpeg',
      alt: '',
      category: 'Team Photos',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_6985-DP3-1024x683.jpg',
      alt: '',
      category: 'Action Photos',
    },
    {
      id: 6,
      type: 'image',
      src: 'https://auav.ca/wp-content/uploads/2025/07/R62_7257-DP3-1024x683.jpg',
      alt: '',
      category: 'Participant Photos',
    },
  ];

  const categories = ['All', 'Action Photos', 'Team Photos', 'Arena Photos', 'Video Content', 'Participant Photos'];

  // Filter gallery items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-deep-space mb-6">
            Highlights & <span className="text-gradient">Media</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the excitement of drone soccer through our collection of photos and videos.
          </p> */}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-electric-blue text-white'
                  : 'bg-light-gray text-deep-space hover:bg-electric-blue hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.type === 'video' ? (
                      <FaPlay className="text-white text-3xl" />
                    ) : (
                      <FaExpand className="text-white text-2xl" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-electric-blue transition-colors duration-300"
              >
                <FaTimes size={24} />
              </button>
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
