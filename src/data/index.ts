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
    period: '2024년 9월 1일 – 2024년 12월 31일',
    description: [
      '**MBC+ 운영·취업 Agent** RAG 플로우 3→1회 최적화 → 응답 시간·비용 **▼ 15 %**',
      '**PDF-OCR·웹 크롤링 파이프라인 구축** → 렛유인·PSI 등 B2B 콘텐츠 전처리·임베딩 **구현**',
      '**멀티·앙상블·셀프 쿼리 리트리버** 적용 → 답변 품질 **향상**',
      '**ChromaDB 원격 교체 알고리즘** + FastAPI → 기존 임베딩 유지, 신규 임베딩 비동기 추가·삭제로 응답 속도 **개선**·토큰 비용 **절감**',
      '**Streamlit + Docker 데모 UI** & Hallucination 테스트 자동화 → 배포 시간 **▼ 30 %**',
      '🧑**LangGraph 사내 세미나 개최** → 팀 선도 지식 공유 & 신규 프로젝트 온보딩 **가속**',
    ],
  },
  {
    title: '매직에꼴',
    company: 'AI 기술 연구소 / 연구원',
    period: '2025년 1월 1일 – 현재',
    description: [
      '**취업지원 4종 Agent** LangGraph 서버 통합 → 서버·유지보수 비용 **▼ 30 %**',
      '**웹 크롤링 + OCR 자동화** → MongoDB·PostgreSQL 연동, **일 k건** 데이터 수집·전처리',
      '**ChromaDB ↔ MongoDB/PostgreSQL 실시간 동기화** → 학습 데이터 관리 효율화·재사용성 **향상**',
      '**다국어(ko·en·zh·ja) 상담 챗봇** 구현 → 글로벌 UX **강화**',
      '**프롬프트 자동 반영 시스템** → 토큰 사용 최적화·할루시네이션 감소, 정확도 **▲ 20 %**',
      '**LangGraph 토큰·시간·비용 추적** + GitHub Actions CI/CD → 운영 가시성 및 배포 안정성 **향상**',
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