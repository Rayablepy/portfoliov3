import certificateImage from '../resources file/cert1.png';
import projectImage from '../resources file/img_1.png';

export const profile = {
  name: 'Muhammad Rayhan',
  email: 'rayhan11.0808@gmail.com',
  tagline: 'Developing myself and my skills.',
  availability: 'Available for selected AI and web projects',
  intro:
    "I began learning programming as a Computing student in Secondary 3. Since then, I have been shaping my path toward AI engineering while building full stack web projects that are fast, clear, and enjoyable to use. I am currently studying Applied AI and Analytics at Nanyang Polytechnic, where I am developing my learning across software, data, and intelligent systems.",
  location: 'Singapore',
  role: 'Full stack developer and aspiring AI engineer',
  focus: ['Full stack systems', 'Applied AI'],
  social: {
    github: 'https://github.com/Rayablepy',
    linkedin: 'https://www.linkedin.com/in/muhammad-rayhan-619908372/',
    instagram: 'https://www.instagram.com/rayhan08._/'
  }
};

export const navigation = [
  { label: 'Home', href: '#/', key: 'home' },
  { label: 'Projects', href: '#/projects', key: 'projects' },
  { label: 'About', href: '#/about', key: 'about' },
  { label: 'Achievements', href: '#/achievements', key: 'achievements' }
];

export const projects = [
  {
    title: 'Personal Portfolio Website',
    eyebrow: 'All about me',
    description:
      'A cinematic portfolio experience for presenting my engineering path, selected projects, technical skills, and interests.',
    outcome: 'Designed as a fast React interface with responsive motion, editorial spacing, and reusable visual components.',
    tech: ['React', 'Vite', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    image: projectImage,
    github: 'https://github.com/Rayablepy/portfoliov3'
  }
];

export const iconSkills = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    name: 'Node.js',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: 'Flask',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
  },
  {
    name: 'MongoDB',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    name: 'PostgreSQL',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    name: 'MySQL',
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  }
];

export const skillGroups = [
  {
    category: 'Frontend Systems',
    summary: 'Interfaces with responsive layouts, motion, and component structure.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend Systems',
    summary: 'APIs, data flow, storage, and foundations for all my full stack applications.',
    skills: ['Node.js', 'Python', 'SQLite', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'AI Foundations',
    summary: 'A certificate that covers foundational AI skills',
    skills: [ 'AI Concepts', 'Prompting', 'Model Evaluation']
  },
  {
    category: 'Creative Workflow',
    summary: 'Tools for shaping ideas into polished, maintainable products.',
    skills: ['Git', 'Docker', 'Figma', 'VS Code', 'JetBrains Suite']
  }
];

export const experience = [
  {
    role: 'Computing Student',
    company: 'Secondary school',
    period: '2023-2024',
    description: 'Started building the technical foundation that led into the field of information technology.'
  },
  {
    role: 'Applied AI and Analytics Student',
    company: 'Nanyang Polytechnic',
    period: '2025-Present',
    description: 'Advancing my learning across full stack development, data analytics, and applied AI systems.'
  }
];

export const certificates = [
  {
    title: 'AI Fluency: Framework and Foundations',
    issuer: 'Anthropic',
    description: 'A certificate earnt through the completion of a short course on common yet effective AI practices',
    image: certificateImage
  }
];
