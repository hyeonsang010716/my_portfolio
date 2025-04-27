import { Project, Skill, Experience, Education, NavLink, Study } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Education', href: '#education' },
  { name: 'Project', href: '#projects' },
  { name: 'Study', href: '#studies' },
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
    title: 'MBC+/맑은소프트 운영 Agent',
    description: 'LangChain + LangGraph로 구축하여 MBC+와 맑은소프트에 배포한 운영 에이전트입니다.',
    image: '/operation.png',
    category: 'AI Development',
    tags: ['Python', 'FastAPI', 'Langchain', 'Langgraph', 'RAG', 'Chroma', 'SQLite', 'PostgreSQL', 'Docker', 'Azure'],
    features: [
      'LangGraph RAG 1-step 플로우로 응답 지연·토큰 비용 최소화',
      '임베딩 비동기 추가·삭제 기능(기존 임베딩 무손실 유지)으로 실시간 데이터 관리',
      '다국어(ko·en·zh·ja) 지원',
      'ChromaDB ↔ PostgreSQL 동기화로 학습 데이터 즉시 업데이트'
    ],
    video: '/operation.mp4'
  },
  {
    id: 2,
    title: 'MBC+ 취업지원 Agent',
    description: 'LangChain + LangGraph로 구축하여 MBC+에 배포한 취업 지원 에이전트입니다.',
    image: '/job.png',
    category: 'AI Development',
    tags: ['Python', 'FastAPI', 'Langchain', 'Langgraph', 'RAG', 'OCR', 'Crawl4ai', 'Chroma', 'SQLite', 'PostgreSQL', 'Docker', 'Azure'],
    features: [
      '채용 공고 추천·자기소개서 첨삭·모의 면접·역량 개발 Agent를 단일 LangGraph 서버로 통합',
      '임베딩 비동기 추가·삭제 기능(기존 임베딩 무손실 유지)으로 실시간 데이터 관리',
      'ChromaDB ↔ PostgreSQL 동기화로 학습 데이터 즉시 업데이트',
      'Human-in-the-Loop 방식을 적용해 멀티턴 대화 가능'
    ],
    video: '/job.mp4'
  },
  {
    id: 3,
    title: 'MBC+ 학습 지원 Agent',
    description: '예정',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Development',
    tags: ['Python', 'FastAPI', 'Langchain', 'Langgraph', 'RAG', 'OCR', 'Chroma', 'SQLite', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure'],
    features: [
      '-',
      '-',
      '-',
      '-'
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
    degree: '국민대학교',
    institution: '소프트웨어학과',
    period: '2020년 - 현재',
    description: ['소프트웨어학과 4학년 재학 중' ,'학점 4.13 / 4.5']
  },
  {
    degree: 'WINK',
    institution: '국민대학교 소프트웨어융합대학 전공 웹 학술동아리',
    period: '2020년 10월 4일 - 2023년 12월 31일',
    description: [
      'HTML·CSS·JavaScript 스터디 참여 및 미니 프로젝트 실습으로 웹 역량 함양',
      '자료구조·알고리즘 스터디를 통해 문제 해결 전략 습득',
      'Flask 기반 RESTful API 설계·구현 실습으로 백엔드 개발 역량 강화',
      '동아리 좌석 예약 시스템 프로젝트에서 CRUD 설계·구현 및 DB 스키마 최적화 경험',
    ],
  },
  {
    degree: '저학년 예비 직무 전문가 양성과정 6기',
    institution: '국민대학교 경력개발지원단',
    period: '2020년 12월 24일 - 2021년 2월 10일',
    description: [
      '신세계 Inc. 응용소프트웨어 개발자 인터뷰 진행 및 데이터 분석 직무 실습',
      'AI 개발 커리어 플래너 작성 → 개인 목표 설정 및 자기개발 로드맵 수립',
      '커리어 플래너 정보 기반 팀 협업 웹사이트 제작 → 학부생 대상 진로 정보 플랫폼 구축·공유',
    ],
  },
  {
    degree: '국민대학교 여름방학 부트캠프 (PBL 프로젝트)',
    institution: '코드스테이츠',
    period: '2023년 6월 26일 – 2023년 7월 7일',
    description: [
      'RFP 작성 및 시퀀스 다이어그램 제작으로 요구사항 분석·업무 분해 역량 함양',
      '그로스 해킹 기법으로 데이터 분석 실습',
      '팀 단위 PBL 프로젝트를 통해 애자일 협업·문제 해결 능력 강화',
    ],
  },
  {
    degree: '추천 시스템 알고리즘 성능 개선 및 설계 연구',
    institution: '국민대학교 데이터마이닝연구실',
    period: '2024년 3월 4일 – 2024년 6월 10일',
    description: [
      'MovieLens 데이터셋 기반 협업 필터링(User/Item bias) 경사하강법 적용 → RMSE 예측 성능 개선',
      'Latent Factor 모델 구현: User·Item 잠재벡터 SGD 학습으로 explicit feedback 정확도 강화',
      'Bayesian Personalized Ranking(BPR) 알고리즘 도입 → implicit feedback 예측 정밀도 향상',
      'SLIM (Sparse Linear Methods) 설계: ElasticNet·CSC 희소 행렬로 item-only 추천시스템 구축',
      'Neural Collaborative Filtering 개발: PyTorch ReLU·Dropout 활용해 비선형 관계 학습으로 선형 한계 극복'
    ],
  },
  {
    degree: 'KPSC',
    institution: '국민대학교 소프트웨어학부 알고리즘 문제해결 학술 동아리',
    period: '2024년 3월 13일 – 2024년 8월 17일',
    description: [
      '심화 알고리즘 스터디 참여 → 백준 다이아몬드 등급 달성 & Codeforces Blue 등급 획득으로 알고리즘 역량 강화',
      'Kaggle 스터디 참여: 예측 모델링 기법 학습 후 “Binary Prediction of Poisonous Mushrooms” 챌린지 참가 → 전체 615위 달성으로 데이터 모델링·평가 역량 강화',
    ],
  },
  {
    degree: '국민대학교 여름방학 LLM Application 개발 부트캠프',
    institution: '매직에꼴',
    period: '2024년 7월 15일 – 2024년 7월 26일',
    description: [
      'LLM 애플리케이션 개발 역량 습득: OpenAI API·LangChain 실습',
      '미니 프로젝트: 회의록(STT)·명함 인식(OCR)·숙박 추천(RAG) 서비스 개발',
      '팀 프로젝트: 보드 게임 Assistant 챗봇 서비스 설계·구현 및 배포'
    ],
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