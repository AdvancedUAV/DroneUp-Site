import React from 'react';
import { motion } from 'framer-motion';

interface Sponsor {
  name: string;
  imageUrl: string;
  website?: string;
}

// Sponsors data - easily configurable
const sponsorsData: Sponsor[] = [
  {
    name: 'AUAV',
    imageUrl: 'https://auav.ca/wp-content/uploads/2024/12/A.png',
    website: 'https://auav.ca/'
  },
  {
    name: 'AeroTech Solutions',
    imageUrl: 'https://via.placeholder.com/200x100/10B981/FFFFFF?text=AeroTech',
    website: 'https://aerotechsolutions.com'
  },
  {
    name: 'SkyRacing League',
    imageUrl: 'https://via.placeholder.com/200x100/8B5CF6/FFFFFF?text=SkyRacing',
    website: 'https://skyracingleague.com'
  },
  {
    name: 'DroneChampions',
    imageUrl: 'https://via.placeholder.com/200x100/F59E0B/FFFFFF?text=Champions',
    website: 'https://dronechampions.com'
  },
];

interface SponsorsSectionProps {
  // No props needed since sponsors are now internal
}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSponsorClick = (sponsor: Sponsor) => {
    if (sponsor.website) {
      window.open(sponsor.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful for the support of these amazing organizations that make our drone competitions possible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                  sponsor.website ? 'hover:bg-blue-50' : ''
                }`}
                onClick={() => handleSponsorClick(sponsor)}
              >
                <div className="aspect-w-2 aspect-h-1 mb-4">
                  <img
                    src={sponsor.imageUrl}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-24 object-contain rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {sponsor.name}
                </h3>
                {sponsor.website && (
                  <div className="mt-2 text-center">
                    <span className="text-sm text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                      Click to visit website
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Interested in becoming a sponsor?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
