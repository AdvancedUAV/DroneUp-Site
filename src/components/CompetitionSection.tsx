import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaClock, FaTrophy, FaShieldAlt, FaCog, FaBalanceScale, FaBatteryFull } from 'react-icons/fa';
import { droneSoccerData, autonomousChallengeData, CompetitionData } from '../data/competitionData';

interface CompetitionSectionProps {
  competitionType: 'drone-soccer' | 'autonomous';
  setCompetitionType: (type: 'drone-soccer' | 'autonomous') => void;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ competitionType, setCompetitionType }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentData: CompetitionData = competitionType === 'drone-soccer' ? droneSoccerData : autonomousChallengeData;

  const formatDetails = currentData.formatDetails;
  const rules = currentData.rules;
  const equipmentSpecs = currentData.equipmentSpecs;

  return (
    <section id="competition" className="section-padding bg-deep-space text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Competition <span className="text-gradient">Details</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about the DroneUp competition format, rules, and equipment.
          </p>

          {/* Competition Type Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => setCompetitionType('drone-soccer')}
              className={`px-8 py-4 rounded-xl font-orbitron font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                competitionType === 'drone-soccer'
                  ? 'bg-gradient-to-r from-electric-blue to-neon-green text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent hover:border-electric-blue'
              }`}
            >
              Drone Soccer (Piloted)
            </button>
            <button
              onClick={() => setCompetitionType('autonomous')}
              className={`px-8 py-4 rounded-xl font-orbitron font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                competitionType === 'autonomous'
                  ? 'bg-gradient-to-r from-electric-blue to-neon-green text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border-2 border-transparent hover:border-electric-blue'
              }`}
            >
              Autonomous Challenge (Coding)
            </button>
          </div>
        </motion.div>

        {/* Format Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {formatDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-custom rounded-xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${detail.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <detail.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-orbitron font-semibold mb-3">
                {detail.title}
              </h4>
              <p className="text-gray-300">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rules & Regulations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-8">
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-center">
              Rules & Regulations
            </h3>
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{rule}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-8">
            <h3 className="text-2xl font-orbitron font-semibold mb-6 text-center">
              Equipment Specifications
            </h3>
            <div className="space-y-4">
              {equipmentSpecs.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <spec.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-electric-blue">{spec.title}</h4>
                    <p className="text-gray-300 text-sm">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Equipment Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-electric-blue to-neon-green rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-orbitron font-semibold mb-4">
            {competitionType === 'drone-soccer' ? 'All Equipment Provided' : 'Development Environment Provided'}
          </h3>
          <p className="text-lg">
            'All equipment will be provided by DroneUp (drones, controllers, batteries, etc.)'
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitionSection;
