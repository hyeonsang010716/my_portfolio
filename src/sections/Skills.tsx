import React from 'react';
import { Icon } from '@iconify/react';
import { skills } from '../data';
import useInView from '../hooks/useInView';

/** 스킬별 아이콘 매핑 (Iconify - Simple Icons) */
const skillIcons: Record<string, React.ReactNode> = {
  // ───────── AI ─────────
  Langgraph: <Icon icon="simple-icons:langgraph" className="w-4 h-4" />,
  Langchain: <Icon icon="simple-icons:langchain" className="w-4 h-4" />,
  MCP:       <span aria-hidden></span>,
  A2A:       <span aria-hidden></span>,
  Crawl4ai:  <span aria-hidden>🕷️</span>,

  // ─────── Front-end ───────
  JavaScript: <Icon icon="simple-icons:javascript" className="w-4 h-4" />,
  HTML5:      <Icon icon="simple-icons:html5"      className="w-4 h-4" />,
  CSS3:       <Icon icon="simple-icons:css3"       className="w-4 h-4" />,
  Streamlit:  <Icon icon="simple-icons:streamlit"  className="w-4 h-4" />,

  // ─────── Back-end ───────
  Flask:   <Icon icon="simple-icons:flask"   className="w-4 h-4" />,
  FastAPI: <Icon icon="simple-icons:fastapi" className="w-4 h-4" />,

  // ─────── Databases ───────
  PostgreSQL: <Icon icon="simple-icons:postgresql" className="w-4 h-4" />,
  MySQL:      <Icon icon="simple-icons:mysql"      className="w-4 h-4" />,
  MongoDB:    <Icon icon="simple-icons:mongodb"    className="w-4 h-4" />,
  SQLite:     <Icon icon="simple-icons:sqlite"     className="w-4 h-4" />,
  Redis:      <Icon icon="simple-icons:redis"      className="w-4 h-4" />,
  Neo4j:      <Icon icon="simple-icons:neo4j"      className="w-4 h-4" />,
  Chroma:     <span aria-hidden></span>,  // Simple Icons에 없으므로 이모지 사용

  // ─────── DevOps ───────
  'GitHub Actions': <Icon icon="simple-icons:githubactions" className="w-4 h-4" />,
  Docker:          <Icon icon="simple-icons:docker"        className="w-4 h-4" />,
  Azure:           <Icon icon="simple-icons:microsoftazure" className="w-4 h-4" />,

  // ─────── Tools ───────
  GitHub:           <Icon icon="simple-icons:github" className="w-4 h-4" />,
  Jira:             <Icon icon="simple-icons:jira"   className="w-4 h-4" />,
  'Microsoft Teams': <Icon icon="simple-icons:microsoftteams" className="w-4 h-4" />,
};

const Skills: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const skillCategories = {
    AI: skills.ai,
    'Frontend Development': skills.frontend,
    'Backend Development': skills.backend,
    Databases: skills.databases,
    DevOps: skills.devops,
    Tools: skills.tools,
  } as const;

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-gray-900 transition-colors duration-300"
    >
      <div ref={ref} className="container mx-auto">
        {/* 제목 */}
        <h3
          className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Skill &amp; Tool
        </h3>

        {/* 카드 그리드 */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  transitionDelay: `${categoryIndex * 100}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h4 className="text-xl font-bold text-white mb-4">{category}</h4>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-indigo-600/30 transition-colors duration-300"
                      style={{
                        transitionDelay: `${
                          categoryIndex * 100 + index * 50
                        }ms`,
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(10px)',
                      }}
                    >
                      {/* 아이콘 / 이모지 */}
                      {skillIcons[skill] ?? <span aria-hidden>🔧</span>}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
