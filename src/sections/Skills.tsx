import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data';
import useInView from '../hooks/useInView';

const Skills: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  const skillCategories = {
    'AI': skills.ai,
    'Frontend Development': skills.frontend,
    'Backend Development': skills.backend,
    'Databases': skills.databases,
    'DevOps': skills.devops,
    'Tools' : skills.tools
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My technical expertise and tools I work with."
          center
        />
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                transitionDelay: `${categoryIndex * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)' 
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-600/30 transition-colors duration-300"
                    style={{ 
                      transitionDelay: `${(categoryIndex * 100) + (index * 50)}ms`,
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateY(0)' : 'translateY(10px)' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;