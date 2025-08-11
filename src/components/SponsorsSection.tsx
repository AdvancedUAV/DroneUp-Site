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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D563DAQE0NJ13tDXEug/image-scale_191_1128/B56ZWsRU6lHoAg-/0/1742351978723/auav_tech_inc_cover?e=2147483647&v=beta&t=3ODUsrUwaQf9GNgvubtqiStAJJBMcgNEwDLl_CLbcYU',
    website: 'https://auav.ca/'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful for the support of these amazing organizations. Click on any logo to visit their website.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {sponsorsData.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div
                className="transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={() => handleSponsorClick(sponsor)}
                title={`Visit ${sponsor.name} website`}
              >
                <img
                  src={sponsor.imageUrl}
                  alt={`${sponsor.name} logo`}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
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
          <a 
            href="mailto:info@auav.ca"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-9"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
