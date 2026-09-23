import certificateImage from '../resources file/cert1.png';
import projectImage from '../resources file/img_1.png';

const github = 'https://github.com/Rayablepy';

export const profile = {
  name: 'Muhammad Rayhan',
  email: 'rayhan11.0808@gmail.com',
  tagline: 'Developing myself and my skills.',
  availability: 'Available for selected projects',
  intro:
    "I started coding in Secondary 3 as a Computing student, figuring out what my first programs could even do. Since then I have been working toward AI engineering and building full stack sites that load fast, stay clear, and feel good to use. I am currently on that track at Nanyang Polytechnic, studying Applied AI and Analytics across software, data, and intelligent systems.",
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

export const projects = [
  {
    title: 'Personal Portfolio Website',
    eyebrow: 'Featured build',
    description:
      "The site you're on right now. I built it to present my engineering path, selected projects, the tools I know, and what I care about.",
    outcome: 'A React interface built for speed, with editorial spacing, intentional motion, and components I can reuse.',
    tech: ['React', 'Vite', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    image: projectImage,
    link: 'https://rayhan-portfolio-dev.vercel.app',
    github: `${github}/portfoliov3`
  },
  {
    title: 'Charles',
    eyebrow: 'Applied AI',
    description:
      'A personal AI assistant built with LangChain Deep Agents and LangGraph. It makes a plan, reaches for tools, and remembers past conversations across sessions, all served through the free OpenRouter API plus a local model server.',
    outcome:
      'One assistant with three parts: a Deep Agent core, a local RAG store over my own documents, and filesystem and notes tools that keep memory across sessions.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Chroma', 'LM Studio', 'OpenRouter'],
    github: `${github}/Charles`
  },
  {
    title: 'NL2RAG',
    eyebrow: 'Applied AI',
    description:
      'A RAG pipeline that runs entirely on your own machine. Upload files in a Streamlit UI, embed them with a local model from LM Studio, then chat with a LangChain agent that searches the vector store only when it needs to.',
    outcome:
      'It started as the foundation for a bigger agent workflow. It stays on your machine, keeps your data private, and lets you swap models through a single .env file.',
    tech: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'LM Studio'],
    github: `${github}/NL2RAG`
  },
  {
    title: 'LTADataMallpy',
    eyebrow: 'Data & Analytics',
    description:
      "A tidy Python wrapper around Singapore's LTA DataMall API. Bus arrivals, taxi availability, and traffic data come back as structured Python objects instead of raw JSON. Now officially released on PyPi.",
    outcome: 'Turned a dense public data portal into a small importable library for analytics and learning projects.',
    tech: ['Python','HTTPX'],
    github: `${github}/LTADataMallpy`
  },
  {
    title: 'IMDBert',
    eyebrow: 'Applied AI',
    description:
      "A binary classification DistilBERT model fine tuned on a dataset of IMDB movie reviews, built to classify positive and negative reviews.",
    outcome: 'Ultimately helped me learn the fundamentals of pytorch and common machine learning workflows.',
    tech: ['Python', 'Streamlit', 'Pytorch', 'HuggingFace', 'Transformers'],
    link: "imdbert-demo.streamlit.app",
    github: `${github}/IMDBert`
  }
];

export const starred = [
  {
    name: 'Voicebox',
    owner: 'jamiepine',
    url: 'https://github.com/jamiepine/voicebox',
    description: 'An open-source AI voice studio for cloning, dictating, and creating audio.',
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
    summary: 'The tools I train and build AI systems with.',
    skills: ['LangChain', 'LM Studio', 'Deep Agents', 'RAG']
  },
  {
    category: 'Creative Workflow',
    summary: 'Tools I use to turn ideas into clean, maintainable builds.',
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
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2025',
    level: 'Foundational',
    description:
      'Covers the core AWS services, pricing, security, and the cloud concepts every project starts from.'
  },
  {
    title: 'AI Fluency: Frameworks and Foundations',
    issuer: 'Anthropic',
    year: '2025',
    level: 'Short course',
    description:
      'Earned after a short course on the AI practices that matter: prompting well, understanding how models behave, and using them responsibly.',
    image: certificateImage
  },
  {
    title: 'AI For Industry – Foundations in AI',
    issuer: 'AI Singapore',
    year: '2026',
    level: 'Industry foundation',
    description:
      "AI Singapore's take on how companies put AI to work: picking a use case, building it, and keeping it responsible."
  },
  {
    title: 'Basic Proficiency in KNIME Analytics Platform',
    issuer: 'KNIME',
    year: '2026',
    level: 'Basic proficiency',
    description:
      'A hands-on pass through KNIME, building analytics workflows end to end from raw data to final output.'
  },
  {
    title: 'Google Cloud Responsible AI: Applying AI principles with Google Cloud',
    issuer: 'Google Cloud',
    year: '2026',
    level: 'Applied practice',
    description:
      'How Google applies its own AI principles in real products, balancing fairness, accountability, and safety at every step.'
  }
];
