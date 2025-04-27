import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { studies } from '../data';
import useInView from '../hooks/useInView';

const Studies: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  return (
    <section 
      id="studies" 
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle 
          title="Study" 
        />
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {studies.map((study, index) => (
            <div 
              key={study.title}
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {study.title}
                </h3>
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                    aria-label="View Study Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                {study.description}
              </p>
              
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">
                {study.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;