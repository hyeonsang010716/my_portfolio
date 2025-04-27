import React from 'react';
import { skills } from '../data';
import useInView from '../hooks/useInView';

const Skills: React.FC = () => {
  // 단일 ref로 제목과 카드 모두 애니메이션 제어
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
      {/* ref를 최상단 컨테이너에 부착하여 제목도 함께 in-view 애니메이션 */}
      <div ref={ref} className="container mx-auto">
        {/* 제목 */}
        <h3
          className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Skill &amp; Tool
        </h3>

        {/* 기술 카드 그리드 */}
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
                  {categorySkills.map((skill: string, index: number) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-600/30 transition-colors duration-300"
                      style={{
                        transitionDelay: `${
                          categoryIndex * 100 + index * 50
                        }ms`,
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(10px)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;