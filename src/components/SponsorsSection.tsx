import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SponsorsSectionProps {
  forceAnimation?: boolean;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ forceAnimation = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    initialInView: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView || forceAnimation) {
      setShouldAnimate(true);
    }
  }, [inView, forceAnimation]);

  // Placeholder sponsor data - replace with actual sponsors
  const sponsors = [
    {
      id: 1,
      name: 'AdvancedUAV Tech',
      tier: 'Platinum',
      logo: '/api/placeholder/200/100',
      description: 'Leading drone technology company',
    },
    {
      id: 2,
      name: 'Calgary Innovation Hub',
      tier: 'Gold',
      logo: '/api/placeholder/200/100',
      description: 'Supporting local innovation',
    },
    {
      id: 3,
      name: 'DroneTech Solutions',
      tier: 'Silver',
      logo: '/api/placeholder/200/100',
      description: 'Professional drone services',
    },
    {
      id: 4,
      name: 'Youth STEM Foundation',
      tier: 'Bronze',
      logo: '/api/placeholder/200/100',
      description: 'Empowering young minds',
    },
  ];

  return (
    <section id="sponsors" className="section-padding bg-deep-space text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make DroneUp possible and support youth innovation in drone technology.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-custom rounded-xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-neon-green rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-sm">Logo</span>
              </div>
              <h4 className="text-lg font-orbitron font-semibold mb-2">{sponsor.name}</h4>
              <div className="text-sm text-electric-blue mb-2">{sponsor.tier} Sponsor</div>
              <p className="text-gray-300 text-sm">{sponsor.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Become a Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-electric-blue to-neon-green rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-orbitron font-semibold mb-4">
            Become a Sponsor
          </h3>
          <p className="text-lg mb-6">
            Support the next generation of drone innovators and showcase your brand to a tech-savvy audience.
          </p>
          <button className="bg-white text-electric-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
