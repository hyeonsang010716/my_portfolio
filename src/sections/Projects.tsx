import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data';
import useInView from '../hooks/useInView';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [containerRef, isContainerInView] = useInView<HTMLDivElement>();
  
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <section 
      id="projects" 
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle 
          title="Project" 
        />
        
        <div 
          ref={containerRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isContainerInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isContainerInView ? 1 : 0,
                transform: isContainerInView ? 'translateY(0)' : 'translateY(20px)' 
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full transition-colors duration-300">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-all duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;