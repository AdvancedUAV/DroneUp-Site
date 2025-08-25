import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  //const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61571232464007', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/auavtech/', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://x.com/AUAVyyc', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/channel/UC9436ojngaL50ShfDK-QKGg', color: 'hover:text-red-600' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/aerialogic-technology-inc/', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-deep-space text-white">
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-green rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">D</span>
              </div> */}
              <img src="/favicon.png" alt="DroneUp Logo" className="w-14 h-14" />
              <span className="text-2xl font-orbitron font-bold text-gradient">
                DroneUp
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Calgary's premier youth drone competition. 
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 md:text-right"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center md:justify-end space-x-3">
                <FaEnvelope className="text-electric-blue" />
                <span className="text-gray-300">info@auav.ca</span>
              </div>
              <div className="flex items-center md:justify-end space-x-3">
                <FaMapMarkerAlt className="text-electric-blue" />
                <span className="text-gray-300">1423 45 Ave NE, Calgary, AB</span>
              </div>
              <div className="flex items-center md:justify-end space-x-3">
                {/* <FaPhone className="text-electric-blue" /> */}
                <span className="text-gray-300">
                  ©2025-2026 AdvancedUAV Tech Inc. |{' '}
                  <a 
                    href="https://github.com/NoozAbooz/DroneUp-Site" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
                  >
                    Made with 💖 in Calgary
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
