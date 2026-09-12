import certificateImage from '../resources file/cert1.png';
import projectImage from '../resources file/img_1.png';

const github = 'https://github.com/Rayablepy';

export const profile = {
  name: 'Muhammad Rayhan',
  email: 'rayhan11.0808@gmail.com',
  tagline: 'Developing myself and my skills.',
  availability: 'Available for selected projects',
  intro:
    "I began learning programming as a Computing student in Secondary 3. Since then, I have been shaping my path toward AI engineering while building full stack web projects that are fast, clear, and enjoyable to use. I am currently studying Applied AI and Analytics at Nanyang Polytechnic, where I am developing my learning across software, data, and intelligent systems.",
  location: 'Singapore',
  role: 'Full stack developer and aspiring AI engineer',
  focus: ['Full stack systems', 'Applied AI'],
  social: {
    github,
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

export const homeProjectCount = 1;

export const projects = [
  {
    title: 'Personal Portfolio Website',
    eyebrow: 'Featured build',
    description:
      "A cinematic portfolio experience for presenting my engineering path, selected projects, technical skills, and interests — the site you're looking at now.",
    outcome: 'Designed as a fast React interface with editorial spacing, deliberate motion, and reusable visual components.',
    tech: ['React', 'Vite', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    image: projectImage,
    link: 'https://rayhan-portfolio-dev.vercel.app',
    github: `${github}/portfoliov3`
  },
  {
    title: 'Charles',
    eyebrow: 'Applied AI',
    description:
      'A personal AI assistant built on LangChain Deep Agents and LangGraph. It plans, uses tools, and remembers conversations across sessions — served through the free OpenRouter API plus a local model server.',
    outcome:
      'Three subsystems in one: a Deep Agent core, a local RAG store over my own documents, and filesystem and notes tools with persistent memory.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Chroma', 'LM Studio', 'OpenRouter'],
    github: `${github}/Charles`
  },
  {
    title: 'NL2RAG',
    eyebrow: 'Applied AI',
    description:
      'A RAG pipeline that runs entirely on your own machine. Upload files in a Streamlit UI, embed them with a local model from LM Studio, then chat with a LangChain agent that searches the vector store only when it needs to.',
    outcome:
      'Built as the foundation for a larger agent workflow — local, private, and model-agnostic through a simple .env configuration.',
    tech: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'LM Studio'],
    github: `${github}/NL2RAG`
  },
  {
    title: 'LTADataMallpy',
    eyebrow: 'Data & Analytics',
    description:
      "A clean Python wrapper around Singapore's LTA DataMall API — bus arrivals, taxi availability, and traffic data delivered as structured Python objects instead of raw JSON.",
    outcome: 'Turned a dense public data portal into a small importable library for analytics and learning projects.',
    tech: ['Python','HTTPX'],
    github: `${github}/LTADataMallpy`
  }
];

export const starred = [
  {
    name: 'Voicebox',
    owner: 'jamiepine',
    url: 'https://github.com/jamiepine/voicebox',
    description: 'An open-source AI voice studio — clone, dictate, and create.',
    stars: 53000,
    language: 'TypeScript'
  },
  {
    name: 'stop-slop',
    owner: 'hardikpandya',
    url: 'https://github.com/hardikpandya/stop-slop',
    description: 'A skill file for removing AI tells from prose.',
    stars: 17000,
    language: null
  },
  {
    name: 'Personal-Portfolio',
    owner: 'VERIDIITE',
    url: 'https://github.com/VERIDIITE/Personal-Portfolio',
    description: 'A 3D animated portfolio website built with React, Next.js and Framer Motion.',
    stars: 14,
    language: 'JavaScript'
  },
  {
    name: 'Parsegument',
    owner: 'RyanStudioo',
    url: 'https://github.com/RyanStudioo/Parsegument',
    description: 'A Python library for argument parsing and function routing.',
    stars: 1,
    language: 'Python'
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  }
];

export const skillGroups = [
  {
    category: 'Frontend Systems',
    summary: 'Interfaces with responsive layouts, motion, and component structure.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Streamlit']
  },
  {
    category: 'Backend Systems',
    summary: 'APIs, storage, and foundations for all my full stack applications.',
    skills: ['Node.js', 'Python', 'SQLite', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Artificial Intelligence',
    summary: 'Frameworks and technologies for AI development',
    skills: ['LangChain', 'LM Studio', 'Deep Agents', 'RAG']
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
    title: 'AI Fluency: Frameworks and Foundations',
    issuer: 'Anthropic',
    description:
      'A certificate earned through a short course on common, effective AI practices — prompt technique, model behaviour, and responsible use.',
    image: certificateImage
  }
];
