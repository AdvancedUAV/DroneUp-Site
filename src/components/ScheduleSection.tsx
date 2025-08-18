import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// @ts-ignore
import { FaCalendarAlt, FaClock, FaUsers, FaTrophy, FaUtensils, FaPlay, FaAward } from 'react-icons/fa';
import { droneSoccerData, autonomousChallengeData } from '../data/competitionData';

interface ScheduleSectionProps {
  competitionType: 'drone-soccer' | 'autonomous';
  forceAnimation?: boolean;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ competitionType, forceAnimation = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    initialInView: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const currentData = competitionType === 'drone-soccer' ? droneSoccerData : autonomousChallengeData;
  const day1Schedule = currentData.schedule.day1;
  const day2Schedule = currentData.schedule.day2;

  useEffect(() => {
    if (inView || forceAnimation) {
      setShouldAnimate(true);
    }
  }, [inView, forceAnimation]);

  return (
    <section id="schedule" className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-deep-space mb-6">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentData.description}
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold text-deep-space mb-2">
              Day 1 - [Date]
            </h3>
            <p className="text-gray-600">
              {competitionType === 'drone-soccer' 
                ? 'Registration, Practice, and Seeding Matches'
                : 'Registration, Challenge Overview, and Programming Sessions'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day1Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon className="text-white text-lg" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-electric-blue mb-2">
                    {item.time}
                  </div>
                  <h4 className="font-orbitron font-semibold text-deep-space">
                    {item.activity}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold text-deep-space mb-2">
              Day 2 - [Date]
            </h3>
            <p className="text-gray-600">
              {competitionType === 'drone-soccer' 
                ? 'Tournament Rounds and Championship'
                : 'Final Programming Session and Evaluation'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day2Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon className="text-white text-lg" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-electric-blue mb-2">
                    {item.time}
                  </div>
                  <h4 className="font-orbitron font-semibold text-deep-space">
                    {item.activity}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-r from-electric-blue to-neon-green text-white rounded-xl p-6 text-center">
            <h4 className="font-orbitron font-semibold mb-2">Flexible Timing</h4>
            <p className="text-sm">Schedule may be adjusted based on participant numbers</p>
          </div>
          <div className="bg-gradient-to-r from-cyber-purple to-purple-400 text-white rounded-xl p-6 text-center">
            <h4 className="font-orbitron font-semibold mb-2">Break Times</h4>
            <p className="text-sm">Regular breaks for rest and equipment maintenance</p>
          </div>
          <div className="bg-gradient-to-r from-hot-pink to-pink-400 text-white rounded-xl p-6 text-center">
            <h4 className="font-orbitron font-semibold mb-2">
              {competitionType === 'drone-soccer' ? 'Practice Sessions' : 'Development Time'}
            </h4>
            <p className="text-sm">
              {competitionType === 'drone-soccer' 
                ? 'Dedicated time for teams to practice and strategize'
                : 'Dedicated time for teams to develop and test solutions'
              }
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-6 text-center">
            <h4 className="font-orbitron font-semibold mb-2">Awards Ceremony</h4>
            <p className="text-sm">Recognition for winners and participants</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
