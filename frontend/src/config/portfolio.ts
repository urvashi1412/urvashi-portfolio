/**
 * Portfolio configuration file
 * Centralized constants for personal information, projects, skills, and social links
 * Edit this file to update portfolio content without modifying UI components
 */

export const portfolioConfig = {
  // Personal information
  fullName: 'Urvashi Rathod',
  location: 'VIT Chennai',

  // Resume file path (static asset)\n  resumePath: 'https://drive.google.com/uc?export=download&id=1tMsv0fSxoW83qs11huKn46YU3QIT8eqt',

  // Profile photo path (static asset)
  profilePhotoPath: '/assets/generated/profile-photo.dim_800x800.png',

  // Social media links
  social: {
    linkedin: 'https://linkedin.com/in/urvashi-rathod-66879228a',
    github: 'https://github.com/urvashi1412',
    email: 'urvashianuatara@gmail.com',
  },

  // GitHub username for fetching repositories
  githubUsername: 'urvashi1412',

  // Priority repositories to display (when available)
  priorityRepos: ['IPv4-Geoguesser', 'File-Manager'],

  // About section content
  about: {
    introduction:
      "I'm a passionate software developer and computer science student dedicated to creating efficient, scalable solutions. With a strong foundation in full-stack development, I thrive on solving complex problems and continuously expanding my technical expertise.",
    strengths: [
      'Problem Solving & Algorithm Design',
      'Full Stack Development',
      'Team Collaboration & Communication',
      'Agile Development Practices',
      'Code Quality & Best Practices',
      'Continuous Learning & Adaptability',
    ],
    coreSkills: [
      'Python',
      'JavaScript',
      'Java',
      'C/C++',
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Firebase',
    ],
    // Optional additional details to display in About section
    additionalDetails: [],
  },

  // Education entries for timeline display
  education: [
    {
      institution: 'Vellore Institute of Technology, Chennai Campus',
      degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
      period: 'August 2023 – May 2027',
      score: 'CGPA: 9.08',
      description: 'Focus on Software Engineering, Data Structures, and Algorithms',
    },
    {
      institution: 'Shri Kanwartara P. H. S. School, Mandleshwar, MP',
      degree: 'CBSE Board – Class XII',
      period: 'April 2022 – March 2023',
      score: 'Percentage: 94%',
      description: 'Higher Secondary Education with focus on Science and Mathematics',
    },
    {
      institution: 'Shri Kanwartara P. H. S. School, Mandleshwar, MP',
      degree: 'CBSE Board – Class X',
      period: 'April 2020 – March 2021',
      score: 'Percentage: 95%',
      description: 'Secondary Education with strong academic performance',
    },
  ],

  // Resume projects (always displayed)
  projects: {
    resumeProjects: [
      {
        title: 'Buds of Christ – NGO Management Application',
        subtitle: 'JP Morgan Code for Good Hackathon',
        technologies: ['Express.js', 'Node.js', 'TypeScript', 'MySQL', 'Firebase Authentication'],
        description: [
          'Developed a role-based web application to manage NGO beneficiaries, volunteers, events, and analytics.',
          'Implemented secure authentication and access control using Firebase Auth.',
          'Designed structured backend APIs for data handling and reporting.',
        ],
        githubUrl: 'https://github.com/bengaluru25/Team-54.git',
      },
      {
        title: 'Laundry Management System – Floor-wise Hostel Automation',
        subtitle: '',
        technologies: ['TypeScript', 'JavaScript', 'CSS', 'Supabase'],
        description: [
          'Built a floor-wise laundry request management system for hostel students.',
          'Implemented real-time request tracking and workflow management.',
          'Designed role-based modules for collection, washing, and delivery processes.',
        ],
        githubUrl: 'https://github.com/urvashi1412/Laundry-Management-System',
      },
      {
        title: 'Serene Study Spot – Student Task Management Application',
        subtitle: '',
        technologies: ['React.js', 'Tailwind CSS', 'AWS Services'],
        description: [
          'Developed a responsive task management application tailored for students.',
          'Implemented task categorization with due dates, priority levels, and completion tracking.',
          'Integrated AWS services for deployment and scalability.',
        ],
        githubUrl: 'https://github.com/urvashi1412/Taskflow',
      },
    ],
  },

  // Certifications
  certifications: [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle Corporation',
      date: 'July 2025',
    },
    {
      name: 'BCG - GenAI Job Simulation',
      issuer: 'Forage',
      date: 'February 2026',
    },
    {
      name: 'JPMorganChase - Software Engineering Job Simulation',
      issuer: 'Forage',
      date: 'February 2026',
    },
  ],

  // Skills categorized for card-based display
  skills: {
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C/C++', 'SQL', 'HTML', 'CSS'],
    frameworksLibraries: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Pandas', 'NumPy'],
    toolsTechnologies: ['MySQL', 'Firebase', 'Git & GitHub', 'VS Code', 'AWS', 'Vercel'],
  },
};
