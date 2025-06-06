import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import PdfModal from '../components/PdfModal';            // ⬅️ 신규
import { experiences } from '../data';
import useInView from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

const highlight = (txt: string) =>
  txt.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-indigo-400">$1</span>');

const Work: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [open, setOpen] = useState(false);               // ⬅️ 모달 상태

  return (
    <section
      id="work"
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* 타이틀 + 버튼 한 줄 배치 */}
        <div className="flex items-center justify-between mb-8">
          <SectionTitle title="Work" />
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1 rounded-md border border-indigo-500 px-4 py-2 text-sm font-medium
                       text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-800"
          >
            세미나 PDF 보기
          </button>
        </div>

        {/* --- 기존 타임라인 --- */}
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
              <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] mt-1.5" />
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  {exp.description.map((line, i) => (
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

      {/* PDF 모달 */}
      {open && (
        <PdfModal
          src="/seminar.pdf"   // public 폴더에 두신 PDF 경로
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Work;