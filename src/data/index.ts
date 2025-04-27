import { Project, Skill, Experience, Education, NavLink, Study } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Studies', href: '#studies' },
];

export const skills = {
  ai: ['Langchain', 'Langgraph', 'MCP', 'A2A', 'Crawl4ai'],
  frontend: ['JavaScript', 'HTML5', 'CSS3', 'Streamlit'],
  backend: ['Flask', 'FastAPI'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'Neo4j', 'Chroma'],
  devops: ['GitHub Actions', 'Docker', 'Azure'],
  tools: ['GitHub', 'Jira', 'Microsoft Teams'],
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Code Assistant',
    description: 'Developed an intelligent code completion and suggestion system using machine learning algorithms.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Development',
    tags: ['Python', 'TensorFlow', 'NLP', 'Machine Learning'],
    features: [
      'Real-time code suggestions',
      'Context-aware completions',
      'Multi-language support',
      'Integration with popular IDEs'
    ]
  },
  {
    id: 2,
    title: 'Automated Testing Framework',
    description: 'Created a comprehensive automated testing framework for large-scale applications.',
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Software Testing',
    tags: ['JavaScript', 'Jest', 'Selenium', 'CI/CD'],
    features: [
      'Parallel test execution',
      'Detailed reporting',
      'Cross-browser testing',
      'CI/CD integration'
    ]
  },
  {
    id: 3,
    title: 'Machine Learning Pipeline',
    description: 'Built an end-to-end ML pipeline for data processing and model deployment.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Development',
    tags: ['Python', 'PyTorch', 'Docker', 'MLOps'],
    features: [
      'Automated data preprocessing',
      'Model training and validation',
      'Deployment automation',
      'Performance monitoring'
    ]
  },
];

export const experiences: Experience[] = [
  {
    title: 'AI Software Engineer',
    company: 'Tech Innovation Labs',
    period: '2022 - Present',
    description: 'Leading AI/ML projects, developing intelligent systems, and implementing machine learning solutions for enterprise applications.',
  },
  {
    title: 'Software Engineer',
    company: 'Digital Solutions Inc.',
    period: '2020 - 2022',
    description: 'Developed and maintained large-scale applications, implemented automated testing frameworks, and optimized system performance.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Tech',
    period: '2019 - 2020',
    description: 'Worked on full-stack development projects, collaborated with cross-functional teams, and participated in agile development processes.',
  },
];

export const education: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    period: '2017 - 2019',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Engineering College',
    period: '2013 - 2017',
    description: 'Focus on Software Engineering and Data Structures',
  },
];

export const studies: Study[] = [
  {
    title: 'Advanced Machine Learning',
    description: 'Deep dive into neural networks, reinforcement learning, and computer vision algorithms.',
    period: '2023',
    link: 'https://github.com/example/advanced-ml-study',
  },
  {
    title: 'MLOps Practices',
    description: 'Study group focused on machine learning operations, deployment strategies, and monitoring systems.',
    period: '2022',
    link: 'https://github.com/example/mlops-study',
  },
  {
    title: 'System Design Patterns',
    description: 'Weekly discussions and implementations of various software design patterns and architecture principles.',
    period: '2021',
    link: 'https://github.com/example/system-design-study',
  },
];

export const categories = ['All', 'AI Development', 'Software Testing', 'Web Development'];