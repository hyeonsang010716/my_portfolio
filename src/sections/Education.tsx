import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data';
import useInView from '../hooks/useInView';

const Education: React.FC = () => {
  const [educationRef, isEducationInView] = useInView<HTMLDivElement>();
  
  return (
    <section 
      id="education" 
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications."
        />
        
        <div 
          ref={educationRef}
          className="relative border-l-2 border-indigo-200 dark:border-gray-700 pl-8 transition-colors duration-300"
        >
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`mb-12 last:mb-0 ${
                isEducationInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] mt-1.5 transition-colors duration-300" />
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                  {edu.degree}
                </h4>
                
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                  {edu.institution}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {edu.period}
                </p>
                
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;