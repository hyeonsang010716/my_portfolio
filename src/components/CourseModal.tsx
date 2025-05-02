import React, { useState } from 'react';
import { X } from 'lucide-react';
import { courses } from '../data/courses';
import { CourseCategory } from '../types';

interface Props {
  open: boolean;
  onClose: () => void;
}

const categories: CourseCategory[] = [
  'All', 
  'AI',
  'Backend',
  'DevOps',
  'Frontend',
  'Etc',
];

// ★ All 탭에서 보여줄 순서
const orderedCategories = ['AI', 'Backend', 'DevOps', 'Frontend', 'Etc'] as const;

const CourseModal: React.FC<Props> = ({ open, onClose }) => {
  const [tab, setTab] = useState<CourseCategory>('All');   // ★ 초기값 All

  if (!open) return null;

  /* -------------------- 카드 JSX (중복 제거용 헬퍼) -------------------- */
  const CourseCard = ({ id, title, author, image, link, provider }: (typeof courses)[number]) => (
    <a
      key={id}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{author}</p>
        {provider && (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            {provider}
          </p>
        )}
      </div>
    </a>
  );
  /* -------------------------------------------------------------------- */

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 max-h-[85vh] bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-bold">수강한 강의 모음</h2>
          <button onClick={onClose} aria-label="모달 닫기">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 px-6 py-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                tab === c
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ---------------- Course Grid ---------------- */}
        {tab === 'All' ? (
          /* All 탭 레이아웃 */
          <div className="space-y-10 p-6">
            {orderedCategories.map((cat) => (
              <div key={cat}>
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  {cat}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter((c) => c.category === cat)
                    .map((c) => <CourseCard {...c} />)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 단일 카테고리 레이아웃 */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {courses
              .filter((c) => c.category === tab)
              .map((c) => <CourseCard {...c} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseModal;
