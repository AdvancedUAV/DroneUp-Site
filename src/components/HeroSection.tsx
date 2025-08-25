import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Hero section should always animate on load
    setShouldAnimate(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const navbarHeight = 60; // Approximate navbar height in pixels
      const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20; // Additional 20px buffer
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-deep-space via-deep-space to-black flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-20 w-40 h-40 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-electric-blue font-medium mb-4 tracking-wider uppercase"
          >
            March DD-DD, 2026 • Calgary, Alberta
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white mb-6 leading-tight"
          >
            DroneUp
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14"
          >
            <span className="font-[1000]">Calgary's premier drone competition</span> is back, challenging participants in Drone Soccer and Autonomous Programming
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Register Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            Learn More
          </motion.button>
        </motion.div> */}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-electric-blue mb-2">100+</div>
            <div className="text-gray-400">Drones Expected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-green mb-2">50+</div>
            <div className="text-gray-400">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-purple mb-2">$500</div>
            <div className="text-gray-400">Worth of Prizes</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 transform -translate-x-1/2 mt-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={scrollToNext}
          >
            <FaArrowDown className="text-2xl mx-auto mb-2" />
            <span className="text-sm">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
