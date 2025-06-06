import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PdfModalProps {
  src: string;
  onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ src, onClose }) => {
  /** Esc 키로도 닫히게 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  /** 백드롭 클릭 시 닫기 */
  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={onBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div className="relative w-[90%] max-w-4xl h-[80vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:text-gray-300"
        >
          <X size={24} />
        </button>

        {/* PDF 미리보기 */}
        <iframe
          src={src}
          title="Work Detail PDF"
          className="w-full h-full rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default PdfModal;