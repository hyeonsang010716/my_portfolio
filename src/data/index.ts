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
    title: '매직에꼴',
    company: 'AI 기술 연구소 / 인턴',
    period: '2024년 9월 1일 - 2024년 12월 31일',
    description: [
      'B2B 대상 맞춤형 AI 솔루션 기획·개발 프로젝트 참여',
      '대용량 데이터 수집·전처리 파이프라인 설계 및 구축',
      'RAG 기반 문서 검색 로직 구현 및 MBC+ 챗봇 Agent 운영·최적화',
    ],
  },
  {
    title: '매직에꼴',
    company: 'AI 기술 연구소 / 연구원',
    period: '2025년 1월 1일 - 진행 중',
    description: [
      '대규모 애플리케이션 개발·유지보수',
      '자동화된 테스트 프레임워크 설계·구현',
      '시스템 성능 최적화 및 모니터링 파이프라인 구축',
    ],
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