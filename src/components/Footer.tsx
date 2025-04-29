import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kyr76789@gmail.com')
      .then(() => {
        setCopied(true);
        // 2초 후에 메시지 숨기기
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // 복사 실패 시에도 원하는 동작 추가 가능
      });
  };

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* ...생략... */}

          <div className="flex space-x-6">
            {/* GitHub 링크 */}
            <a 
              href="https://github.com/hyeonsang010716" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            {/* 이메일 복사 버튼 */}
            <button
              onClick={copyEmail}
              type="button"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Copy email"
            >
              <Mail size={20} />
            </button>
          </div>

          {/* 복사 완료 메시지 */}
          {copied && (
            <div className="mt-4 text-sm text-green-500">
              이메일 주소가 복사되었습니다!
            </div>
          )}
        </div>

        {/* ...하단 저작권 부분... */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Hyeonsang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
