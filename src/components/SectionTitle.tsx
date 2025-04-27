import React from 'react';
import useInView from '../hooks/useInView';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  center = false 
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : ''} ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;