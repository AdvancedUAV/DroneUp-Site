import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaClock, FaUsers, FaTrophy, FaUtensils, FaPlay, FaAward } from 'react-icons/fa';

const ScheduleSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const day1Schedule = [
    {
      time: '8:00 AM - 9:00 AM',
      activity: 'Registration and Check-in',
      icon: FaUsers,
      color: 'from-electric-blue to-cyan-400',
    },
    {
      time: '9:00 AM - 9:30 AM',
      activity: 'Welcome and Safety Briefing',
      icon: FaClock,
      color: 'from-neon-green to-emerald-400',
    },
    {
      time: '9:30 AM - 10:00 AM',
      activity: 'Equipment Distribution and Setup',
      icon: FaPlay,
      color: 'from-cyber-purple to-purple-400',
    },
    {
      time: '10:00 AM - 12:00 PM',
      activity: 'Practice Sessions and Team Formation',
      icon: FaUsers,
      color: 'from-hot-pink to-pink-400',
    },
    {
      time: '12:00 PM - 1:00 PM',
      activity: 'Lunch Break',
      icon: FaUtensils,
      color: 'from-yellow-400 to-orange-400',
    },
    {
      time: '1:00 PM - 5:00 PM',
      activity: 'Seeding Matches',
      icon: FaTrophy,
      color: 'from-electric-blue to-neon-green',
    },
    {
      time: '5:00 PM - 6:00 PM',
      activity: 'Day 1 Wrap-up and Day 2 Preview',
      icon: FaCalendarAlt,
      color: 'from-cyber-purple to-purple-400',
    },
  ];

  const day2Schedule = [
    {
      time: '8:00 AM - 8:30 AM',
      activity: 'Morning Check-in',
      icon: FaUsers,
      color: 'from-electric-blue to-cyan-400',
    },
    {
      time: '8:30 AM - 9:00 AM',
      activity: 'Day 2 Briefing and Rules Review',
      icon: FaClock,
      color: 'from-neon-green to-emerald-400',
    },
    {
      time: '9:00 AM - 12:00 PM',
      activity: 'Double-Elimination Tournament Rounds',
      icon: FaTrophy,
      color: 'from-cyber-purple to-purple-400',
    },
    {
      time: '12:00 PM - 1:00 PM',
      activity: 'Lunch Break',
      icon: FaUtensils,
      color: 'from-yellow-400 to-orange-400',
    },
    {
      time: '1:00 PM - 4:00 PM',
      activity: 'Final Rounds and Championship Matches',
      icon: FaTrophy,
      color: 'from-electric-blue to-neon-green',
    },
    {
      time: '4:00 PM - 5:00 PM',
      activity: 'Awards Ceremony and Closing Remarks',
      icon: FaAward,
      color: 'from-hot-pink to-pink-400',
    },
  ];

  return (
    <section id="schedule" className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-deep-space mb-6">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two exciting days of drone soccer competition, practice, and championship matches.
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold text-deep-space mb-2">
              Day 1 - [Date]
            </h3>
            <p className="text-gray-600">Registration, Practice, and Seeding Matches</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day1Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold text-deep-space mb-2">
              Day 2 - [Date]
            </h3>
            <p className="text-gray-600">Tournament Rounds and Championship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day2Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
            <h4 className="font-orbitron font-semibold mb-2">Practice Sessions</h4>
            <p className="text-sm">Dedicated time for teams to practice and strategize</p>
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
