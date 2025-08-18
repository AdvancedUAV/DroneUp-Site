import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';

interface AboutSectionProps {
  forceAnimation?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ forceAnimation = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    initialInView: true,
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const words = ['Pilot.', 'Program.', 'Fly.', 'Tinker.', 'Build.', 'Prototype.', 'Code.'];

  useEffect(() => {
    if (inView || forceAnimation) {
      setShouldAnimate(true);
    }
  }, [inView, forceAnimation]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Delete effect
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // Type effect
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, shouldAnimate, words]);

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Safe Environment',
      description: 'Professional-grade safety equipment and protocols',
      color: 'from-electric-blue to-cyan-400',
    },
    {
      icon: FaUsers,
      title: 'All Skill Levels',
      description: 'Beginner-friendly with advanced competition tiers',
      color: 'from-neon-green to-emerald-400',
    },
    {
      icon: FaRocket,
      title: 'Community Focus',
      description: 'Build connections with fellow drone enthusiasts',
      color: 'from-cyber-purple to-purple-400',
    },
    {
      icon: FaTrophy,
      title: 'Professional Setup',
      description: 'Run by licensed drone pilots who will be providing assistance',
      color: 'from-hot-pink to-pink-400',
    },
  ];

  const statistics = [
    { number: '100+', label: 'Drones Expected' },
    { number: '50+', label: 'Registration Spots' },
    { number: '$500', label: 'Worth of Prizes' },
  ];

  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-deep-space mb-6">
            What is <span className="text-gradient">DroneUp</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DroneUp is Calgary's premier drone competition for youth, bringing together drone enthusiasts, 
            pilots, and spectators for an unparalleled competitive experience. We are hosting two competition categories: Drone Soccer and Autonomous Programming.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed">
              It's a design challenge, where anyone can learn to{' '}
              <span className="text-electric-blue font-semibold">
                {currentText}
                <span className="blink-cursor">|</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                <feature.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-orbitron font-semibold text-deep-space mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-electric-blue to-neon-green text-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-orbitron font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
