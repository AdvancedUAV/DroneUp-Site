import { FaUsers, FaHelicopter, FaClock, FaTrophy, FaShieldAlt, FaCog, FaBalanceScale, FaBatteryFull, FaCode, FaRobot, FaLaptop } from 'react-icons/fa';

export interface CompetitionData {
  formatDetails: Array<{
    icon: any;
    title: string;
    value: string;
    color: string;
  }>;
  rules: string[];
  previewImages: string[];
  equipmentSpecs: Array<{
    icon: any;
    title: string;
    value: string;
  }>;
  schedule: {
    day1: Array<{
      time: string;
      activity: string;
      icon: any;
      color: string;
    }>;
    day2: Array<{
      time: string;
      activity: string;
      icon: any;
      color: string;
    }>;
  };
  description: string;
}

export const droneSoccerData: CompetitionData = {
  formatDetails: [
    {
      icon: FaUsers,
      title: 'Team Size',
      value: '3-4 players per team',
      color: 'from-electric-blue to-cyan-400',
    },
    {
      icon: FaClock,
      title: 'Match Duration',
      value: '3 minutes per game',
      color: 'from-neon-green to-emerald-400',
    },
    {
      icon: FaTrophy,
      title: 'Tournament Structure',
      value: 'Seeding matches followed by double-elimination rounds',
      color: 'from-cyber-purple to-purple-400',
    },
    {
      icon: FaShieldAlt,
      title: 'Event Type',
      value: 'Two-day competition',
      color: 'from-hot-pink to-pink-400',
    },
  ],
  rules: [
    'Safety First: All participants must adhere to safety guidelines',
    'Equipment Standards: Drones must meet competition specifications',
    'Fair Play: Sportsmanship and respect for all participants',
    'Scoring System: Goals, assists, and technical skills evaluated.',
  ],
  previewImages: [
    '/images/a55.png',
  ],
  equipmentSpecs: [
    {
      icon: FaCog,
      title: 'Drone Type',
      value: 'Quadcopter with protective cage (20cm diameter)',
    },
    {
      icon: FaBalanceScale,
      title: 'Weight',
      value: 'Maximum 500g',
    },
    {
      icon: FaBatteryFull,
      title: 'Battery',
      value: '3S LiPo, 1500mAh maximum',
    },
    {
      icon: FaShieldAlt,
      title: 'Safety Features',
      value: 'Propeller guards, emergency stop',
    },
  ],
  schedule: {
    day1: [
      {
        time: '8:00 AM - 9:00 AM',
        activity: 'Registration and Check-in',
        icon: FaUsers,
        color: 'from-electric-blue to-cyan-400',
      },
      {
        time: '9:00 AM - 10:00 AM',
        activity: 'Welcome and Equipment Setup',
        icon: FaClock,
        color: 'from-neon-green to-emerald-400',
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
        icon: FaUsers,
        color: 'from-cyber-purple to-purple-400',
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
        icon: FaClock,
        color: 'from-electric-blue to-cyan-400',
      },
    ],
    day2: [
      {
        time: '8:00 AM - 8:30 AM',
        activity: 'Morning Check-in',
        icon: FaUsers,
        color: 'from-electric-blue to-cyan-400',
      },
      {
        time: '8:30 AM - 9:00 AM',
        activity: 'Day 2 Briefing',
        icon: FaClock,
        color: 'from-neon-green to-emerald-400',
      },
      {
        time: '9:00 AM - 12:00 PM',
        activity: 'Double-Elimination Tournament Rounds',
        icon: FaTrophy,
        color: 'from-electric-blue to-neon-green',
      },
      {
        time: '12:00 PM - 1:00 PM',
        activity: 'Lunch Break',
        icon: FaUsers,
        color: 'from-cyber-purple to-purple-400',
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
        icon: FaTrophy,
        color: 'from-yellow-400 to-orange-400',
      },
    ],
  },
  description: 'Two exciting days of drone soccer competition, practice, and championship matches.',
};

export const autonomousChallengeData: CompetitionData = {
  formatDetails: [
    {
      icon: FaUsers,
      title: 'Team Size',
      value: '2-3 programmers per team',
      color: 'from-electric-blue to-cyan-400',
    },
    {
      icon: FaClock,
      title: 'Challenge Duration',
      value: '8 hours total programming time',
      color: 'from-neon-green to-emerald-400',
    },
    {
      icon: FaTrophy,
      title: 'Competition Structure',
      value: 'Single elimination with coding challenges',
      color: 'from-cyber-purple to-purple-400',
    },
    {
      icon: FaCode,
      title: 'Event Type',
      value: 'Programming competition',
      color: 'from-hot-pink to-pink-400',
    },
  ],
  rules: [
    'Code Review: All code must be original and written during the competition',
    'Collaboration: Team members can work together on solutions',
    'Documentation: Code should be readable by judges',
    'Testing: Participants are able to test their code on physical drones',
  ],
  previewImages: [
    '/images/a55.png',
  ],
  equipmentSpecs: [
    {
      icon: FaLaptop,
      title: 'Development Language',
      value: 'Python, C++, or JavaScript with provided IDE',
    },
    {
      icon: FaRobot,
      title: 'Simulation Platform',
      value: 'lorem ipsum',
    },
    {
      icon: FaHelicopter,
      title: 'Drone Type',
      value: 'lorem ipsum',
    },
    {
      icon: FaCode,
      title: 'Version Control',
      value: 'Git repository provided for each team',
    },
  ],
  schedule: {
    day1: [
      {
        time: '8:00 AM - 9:00 AM',
        activity: 'Registration and Team Check-in',
        icon: FaUsers,
        color: 'from-electric-blue to-cyan-400',
      },
      {
        time: '9:00 AM - 9:30 AM',
        activity: 'Welcome and Challenge Overview',
        icon: FaCode,
        color: 'from-neon-green to-emerald-400',
      },
      {
        time: '9:30 AM - 10:00 AM',
        activity: 'Development Environment Setup',
        icon: FaLaptop,
        color: 'from-cyber-purple to-purple-400',
      },
      {
        time: '10:00 AM - 12:00 PM',
        activity: 'Morning Programming Session',
        icon: FaCode,
        color: 'from-hot-pink to-pink-400',
      },
      {
        time: '12:00 PM - 1:00 PM',
        activity: 'Lunch Break',
        icon: FaUsers,
        color: 'from-yellow-400 to-orange-400',
      },
      {
        time: '1:00 PM - 5:00 PM',
        activity: 'Afternoon Programming Session',
        icon: FaCode,
        color: 'from-electric-blue to-neon-green',
      },
      {
        time: '5:00 PM - 6:00 PM',
        activity: 'Day 1 Review and Day 2 Preview',
        icon: FaClock,
        color: 'from-cyber-purple to-purple-400',
      },
    ],
    day2: [
      {
        time: '8:00 AM - 8:30 AM',
        activity: 'Morning Check-in',
        icon: FaUsers,
        color: 'from-electric-blue to-cyan-400',
      },
      {
        time: '8:30 AM - 9:00 AM',
        activity: 'Final Challenge Instructions',
        icon: FaCode,
        color: 'from-neon-green to-emerald-400',
      },
      {
        time: '9:00 AM - 12:00 PM',
        activity: 'Final Programming Session',
        icon: FaCode,
        color: 'from-cyber-purple to-purple-400',
      },
      {
        time: '12:00 PM - 1:00 PM',
        activity: 'Lunch Break',
        icon: FaUsers,
        color: 'from-yellow-400 to-orange-400',
      },
      {
        time: '1:00 PM - 3:00 PM',
        activity: 'Solution Testing and Evaluation',
        icon: FaRobot,
        color: 'from-electric-blue to-neon-green',
      },
      {
        time: '3:00 PM - 4:00 PM',
        activity: 'Awards Ceremony and Closing Remarks',
        icon: FaTrophy,
        color: 'from-hot-pink to-pink-400',
      },
    ],
  },
  description: 'Two days of intensive programming challenges to create autonomous drone solutions.',
};
