import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 flex justify-between items-center border-b dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          
          
          {project.video && (
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <video 
                src={project.video} 
                controls 
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Overview
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {project.features && (
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;