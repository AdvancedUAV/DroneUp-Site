import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  //const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: FaYoutube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-deep-space text-white">
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-green rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-orbitron font-bold text-gradient">
                DroneUp
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Calgary's premier youth drone competition. Experience the future of competitive sports.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <social.icon className="text-white text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 md:text-right"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-end space-x-3">
                <FaEnvelope className="text-electric-blue" />
                <span className="text-gray-300">info@droneup.com</span>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <FaPhone className="text-electric-blue" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <FaMapMarkerAlt className="text-electric-blue" />
                <span className="text-gray-300">123 Drone Arena Way, Tech City, TC 12345</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
