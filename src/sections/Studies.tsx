import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { studies } from '../data';
import useInView from '../hooks/useInView';
import CourseModal from '../components/CourseModal';   // ← 추가

const Studies: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);   // ← 추가

  return (
    <section
      id="studies"
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* 제목 & 버튼 */}
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title="Study" />
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-colors"
          >
            수강한 강의 보기
          </button>
        </div>

        {/* 기존 스터디 카드 */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {studies.map((study, index) => (
            <div
              key={study.title}
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    aria-label="View Study"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {study.description}
              </p>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                {study.period}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      <CourseModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Studies;