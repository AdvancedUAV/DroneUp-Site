import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

const RegistrationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    experienceLevel: '',
    teamPreference: '',
    teamMembers: '',
  });

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
  ];

  const teamPreferences = [
    { value: 'individual', label: 'Individual registration' },
    { value: 'team', label: 'Team registration' },
  ];

  const faqData = [
    {
      question: 'Do I need a team to register?',
      answer: 'No, you can register as an individual and we\'ll help you form a team, or you can register with your own team of 3-4 players.',
    },
    {
      question: 'Who can join?',
      answer: 'The competition is open to youth participants aged 12-18. All skill levels are welcome, from beginners to experienced drone pilots.',
    },
    {
      question: 'When is the deadline?',
      answer: 'Registration closes [specific date] or when all spots are filled. We recommend registering early as spots are limited.',
    },
    {
      question: 'Where is this happening?',
      answer: 'The competition will be held at [venue name] in Calgary, Alberta. Full address and directions will be provided upon registration.',
    },
    {
      question: 'Is there an application process?',
      answer: 'Yes, there\'s a simple registration form to complete. We\'ll review applications to ensure all participants meet the age requirements and safety guidelines.',
    },
    {
      question: 'What experience do I need?',
      answer: 'No prior drone experience is required! We provide all equipment and training. The competition is designed to be beginner-friendly while still challenging for experienced pilots.',
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'The registration fee is [specific amount]. This includes all equipment, safety gear, training, and participation in the two-day competition.',
    },
    {
      question: 'What is a drone competition?',
      answer: 'Drone soccer combines the precision of drone piloting with the strategy of traditional soccer. Teams compete using specially designed drones to score goals in a controlled indoor arena.',
    },
    {
      question: 'What do I need to bring?',
      answer: 'Just bring yourself! All equipment, including drones, controllers, batteries, and safety gear, will be provided by DroneUp.',
    },
    {
      question: 'When does registration open?',
      answer: 'Registration opens [specific date]. You can sign up through our website or contact us directly for more information.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="register" className="section-padding bg-gradient-to-br from-electric-blue/10 to-neon-green/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-deep-space mb-6">
            Join the <span className="text-gradient">Competition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the thrill of drone soccer? Register now for Calgary's premier youth drone competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-deep-space mb-6">
              Registration Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <div className="relative">
                  <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level *
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Preference *
                </label>
                <select
                  name="teamPreference"
                  value={formData.teamPreference}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                >
                  <option value="">Select team preference</option>
                  {teamPreferences.map((pref) => (
                    <option key={pref.value} value={pref.value}>
                      {pref.label}
                    </option>
                  ))}
                </select>
              </div>

              {formData.teamPreference === 'team' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Members
                  </label>
                  <textarea
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="List the names of other team members (if applicable)"
                    rows={3}
                  />
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Register Now
              </motion.button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-deep-space mb-6 flex items-center">
              <FaQuestionCircle className="mr-3 text-electric-blue" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                  >
                    <span className="font-medium text-deep-space">{faq.question}</span>
                    <FaQuestionCircle className={`text-electric-blue transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-4 bg-white"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-orbitron font-semibold text-deep-space mb-6">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <FaEnvelope className="text-electric-blue text-2xl mx-auto mb-4" />
              <h4 className="font-semibold text-deep-space mb-2">Email</h4>
              <p className="text-gray-600">info@droneup.com</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <FaShieldAlt className="text-neon-green text-2xl mx-auto mb-4" />
              <h4 className="font-semibold text-deep-space mb-2">Address</h4>
              <p className="text-gray-600">123 Drone Arena Way, Tech City, TC 12345</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
