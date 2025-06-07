import { Project, Skill, Experience, Education, NavLink, Study } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  // { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Project', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Study', href: '#studies' },
  { name: 'Contact',   href: '#contact' }, 
];

export const skills = {
  ai: ['Langchain', 'Langgraph', 'MCP', 'Crawl4ai'],
  frontend: ['Streamlit', 'JavaScript', 'HTML5', 'CSS3'],
  backend: ['FastAPI', 'Flask'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'Neo4j', 'Chroma'],
  devops: ['GitHub Actions', 'Docker', 'Azure'],
  tools: ['GitHub', 'Jira', 'Microsoft Teams'],
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'MBC+/맑은소프트 운영 Agent',
    description: 'MBC+와 맑은소프트에 배포한 운영 에이전트입니다.',
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
    description: 'MBC+에 배포한 취업 지원 에이전트입니다.',
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
    description: 'MBC+에 배포한 학습 지원 에이전트입니다.',
    image: '/study.png',
    category: 'AI Development',
    tags: ['Python', 'FastAPI', 'Langchain', 'Langgraph', 'RAG', 'OCR', 'Chroma', 'SQLite', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure'],
    features: [
      '병렬 OCR을 통한 빠른 학습 데이터 생성 - 여러 PDF 파일을 동시에 병렬로 OCR 처리하여 빠르고 효율적으로 학습 데이터를 생성',
      '분반별 독립 학습 데이터 관리 - 다수의 분반이 각자 독립적으로 학습 데이터를 관리하여 데이터 충돌 없이 정확한 학습 지원이 가능',
      'LMS와 ChromaDB의 비동기 연계 - 비동기 방식으로 연계되어 안정적이고 효율적인 데이터 처리를 지원',
      '사용자 기반 맞춤형 응답 - 메타데이터 관리를 통해, 사용자가 설정한 학습 범위 내에서만 정확하고 집중적인 답변을 제공'
    ],
    video: '/study.mp4'
  },
  {
    id: 4,
    title: 'LAM Agent',
    description: 'LAM Agent는 사용자의 요청에 따라 MCP 도구를 활용해 직접 정보를 검색하고, 그 내용을 기반으로 슬라이드를 제작한 후, TTS로 설명까지 제공하는 자동화 학습 지원 서비스입니다.',
    image: '/LAM_demo.png',
    category: 'AI Development',
    tags: ['Python', 'FastAPI', 'Streamlit', 'Langchain', 'Langgraph', 'MCP', 'TTS', 'SQLite', 'Docker', 'Azure'],
    features: [
      '사용자의 질문을 분석하여 가장 적합한 MCP 도구를 판단하고 능동적으로 작업을 수행',
      '필요한 정보를 실시간으로 직접 크롤링하여 최신의 신뢰할 수 있는 데이터를 확보',
      '수집된 정보를 기반으로 슬라이드를 제작하고, TTS 기술을 활용하여 발표 형식으로 내용을 설명 지원',
      '데이터 검증 과정을 통해 생성된 슬라이드의 정확성을 확인하고, 필요 시 슬라이드를 재구성하여 신뢰성을 보장'
    ],
    video: '/LAM_demo.mp4'
  },
];


export const experiences: Experience[] = [
  {
    title: '매직에꼴',
    company: 'AI 기술 연구소 / 인턴',
    period: '2024년 9월 1일 – 2024년 12월 31일',
    description: [
      '**MBC+ 운영·취업 에이전트 RAG 플로우를 최적화**하여 평균 응답 시간과 토큰 비용을 **▼ 15 % 절감**했습니다.',
      '**PDF-OCR 파이프라인을 설계·구축**해 렛유인·PSI 등 B2B 콘텐츠 전처리·임베딩을 **전면 자동화**했습니다.',
      '**Naive RAG를 Modular RAG로 전환**해 할루시네이션을 **▼ 10 % 감소**, 답변 정확도를 **▲ 10 % 향상**시켰습니다.',
      '**ChromaDB 원격 교체 알고리즘을 구현**하여 기존 임베딩을 그대로 유지하면서 신규 데이터의 비동기 추가·삭제를 지원, 토큰 비용을 **▼ 30 % 절감**했습니다.',
      '**Hallucination 테스트를 자동화**해 배포 전 검증 시간을 **▼ 30 % 단축**했습니다.',
      '**LangGraph 사내 세미나를 주최**해 팀 지식 공유를 **강화**, 신규 프로젝트 온보딩 속도를 **가속**했습니다.',
    ],
  },
  {
    title: '매직에꼴',
    company: 'AI 기술 연구소 / 연구원',
    period: '2025년 1월 1일 – 현재',
    description: [
      '**기존 4개 취업지원 에이전트를 각기 다른 서버에서 운영하던 구조를, LangGraph 기반 단일 에이전트로 통합**하여 서버 운영·유지보수 비용을 **▼ 30 % 절감**했습니다.',
      '**웹 크롤링 + OCR 파이프라인을 자동화**해 **일일 약 1 천 건**의 데이터를 수집·전처리했습니다.',
      '**ChromaDB ↔ MongoDB/PostgreSQL 실시간 동기화 알고리즘을 구현**해 학습 데이터 관리 효율성과 재사용성을 **▲ 20 % 향상**시켰습니다.',
      '**다국어(ko·en·zh·ja) 상담 챗봇을 구축**해 글로벌 UX를 **강화**했습니다.',
      '**객체지향 프롬프트 관리 로직을 설계**하여 할루시네이션을 **▼ 15 % 감소**, 답변 정확도를 **▲ 15 % 향상**시켰습니다.',
      '**LangGraph 기반 토큰·시간·비용 추적 로직을 구축**해 운영 가시성과 배포 안정성을 **강화**했습니다.',
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
      'Flask 기반 RESTful API 설계·구현 실습으로 백엔드 개발 역량 강화'
    ],
    github: "https://github.com/KMU-WINK/2020-02-Algorithm/tree/%EC%A1%B0%ED%98%84%EC%83%81"
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
    github: "https://github.com/JCoREP-SoVA/sova-webpage"
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
    github: "https://github.com/hyeonsang010716/Recommendation-system"
  },
  {
    degree: 'KPSC',
    institution: '국민대학교 소프트웨어학부 알고리즘 문제해결 학술 동아리',
    period: '2024년 3월 13일 – 2024년 8월 17일',
    description: [
      '심화 알고리즘 스터디 참여 → 백준 다이아몬드 등급 달성 & Codeforces Blue 등급 획득으로 알고리즘 역량 강화',
      '2024년 상반기 교내 알고리즘 대회 재학생 부문 1위 수상',
      'Kaggle 스터디 참여: 예측 모델링 기법 학습 후 “Binary Prediction of Poisonous Mushrooms” 챌린지 참가 → 전체 615위 달성으로 데이터 모델링·평가 역량 강화',
    ],
    github: "https://github.com/hyeonsang010716/Kaggle-Binary-Prediction"
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
    link: "https://www.youtube.com/watch?v=YjaCYeKBIh8",
    github: "https://github.com/hyeonsang010716/ChatBoard"
  },
];

export const studies: Study[] = [
  {
    title: 'LLM 스터디',
    description: '팀장을 맡아 LLM 스터디를 운영하며 LangChain을 팀원들에게 지식 공유했고, DACON 재정정보 AI 검색 알고리즘 경진대회에 출전하여 134위를 기록했습니다.',
    period: '2024년 8월 10일 – 2024년 11월 16일',
    link: 'https://github.com/hyeonsang010716/LLM-Study',
  },
  {
    title: '깃헙&알고리즘 스터디',
    description: 'GitHub 스터디장으로서 팀원들이 매주 알고리즘 문제를 컨벤션 룰에 맞춰 GitHub 저장소에 푸시하도록 주도하며 스터디를 운영했습니다.',
    period: '2025년 1월1일 – 2025년 2월 28일',
    link: 'https://github.com/hyeonsang010716/algorithm-study',
  },
  {
    title: '서강대학교 SGCS 깃헙 스터디',
    description: '서강대학교 SGCS 학술 동아리에서 깃헙 스터디를 주관하며, 학생들에게 Git 사용법과 협업 워크플로우를 교육하고 했습니다.',
    period: '2025년 3월24일 – 2025년 5월 12일',
    link: 'https://github.com/SGCS-Release-Git-Project/Git-Study',
  },
];

export const categories = ['All', 'AI Development', 'Software Testing', 'Web Development'];