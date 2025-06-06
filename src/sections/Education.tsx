import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data';
import useInView from '../hooks/useInView';
import { BookOpen, ExternalLink, Github } from 'lucide-react';

const highlight = (t: string) =>
  t.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-indigo-400">$1</span>');

const Education: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle title="Education" center />

        <div
          ref={ref}
          className="relative border-l-2 border-indigo-200 dark:border-gray-700 pl-8 transition-all duration-700 ease-out"
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`mb-12 last:mb-0 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* timeline dot */}
              <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] mt-1.5 flex items-center justify-center text-white">
                <BookOpen className="w-3 h-3" />
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                {/* Header with optional links */}
                <div className="flex justify-between items-start mb-1 gap-3">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="flex gap-2">
                    {edu.github && (
                      <a
                        href={edu.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {edu.link && (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                        aria-label="View External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>

                {/* description */}
                {Array.isArray(edu.description) ? (
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    {edu.description.map((line: string, i: number) => (
                      <li key={i} className="flex gap-2 leading-snug">
                        <span className="text-indigo-500">-</span>
                        <span dangerouslySetInnerHTML={{ __html: highlight(line) }} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  edu.description && (
                    <p
                      className="text-gray-600 dark:text-gray-300 text-sm"
                      dangerouslySetInnerHTML={{ __html: highlight(edu.description) }}
                    />
                  )
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