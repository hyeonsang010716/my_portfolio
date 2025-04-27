import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data';
import useInView from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

/**
 * Helper: convert **bold** markdown to highlighted span.
 */
const highlight = (txt: string) =>
  txt.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-indigo-400">$1</span>');

const Work: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      id="work"
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle
          title="Work"
        />

        <div
          ref={ref}
          className="relative border-l-2 border-indigo-200 dark:border-gray-700 pl-8 transition-all duration-700 ease-out"
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-12 last:mb-0 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* timeline dot */}
              <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] mt-1.5" />

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  {exp.description.map((line: string, i: number) => (
                    <li key={i} className="flex gap-2 leading-snug">
                      <CheckCircle className="w-4 h-4 mt-[3px] text-indigo-500" />
                      <span dangerouslySetInnerHTML={{ __html: highlight(line) }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;