import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      description: 'State-of-the-art arena and equipment',
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-deep-space mb-6">
              What is Drone Soccer?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Drone soccer combines the precision of drone piloting in three dimensions with the strategy and excitement 
              of traditional soccer. Teams compete using specially designed drones to score goals 
              in a controlled netted arena.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
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
