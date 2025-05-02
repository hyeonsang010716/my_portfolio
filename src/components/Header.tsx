import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';
import { navLinks } from '../data';
import useScrollPosition from '../hooks/useScrollPosition';
import { SiVelog } from 'react-icons/si';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition, activeSection } = useScrollPosition();
  
  const isScrolled = scrollPosition > 50;
  const isHome = activeSection === 'home';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm
                  transition-colors duration-300
                  ${isScrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 py-4 shadow-md'
                    : 'bg-black/60 py-6'             // ← Hero 오버레이와 동일
                  }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

      <div className="flex items-center gap-2">
        {/* GitHub 아이콘 전용 링크 */}
        <a
          href="https://github.com/hyeonsang010716"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`text-2xl transition-colors duration-300 ${
            isHome && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
        >
          <Github size={24} />
        </a>

        {/* Velog(블로그) 아이콘 전용 링크 */}
        <a
          href="https://velog.io/@phenomenon/posts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blog"
          className={`text-2xl transition-colors duration-300 ${
            isHome && !isScrolled ? 'text-white' : 'text-emerald-500 dark:text-emerald-400'
          }`}
        >
          <SiVelog size={24} />
        </a>

        {/* 이름(조현상) – 텍스트 링크 */}
        <a
          href="#home"                         // 원하시는 곳으로 바꿔도 됩니다
          className={`text-2xl font-bold transition-colors duration-300 ${
            isHome && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'
          } hidden sm:inline`}                 // 모바일에서는 숨김
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                          bg-clip-text text-transparent">
            조현상
          </span>
        </a>
      </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 ${
                isHome && !isScrolled
                  ? 'text-white hover:text-indigo-400'   // 파란색(또는 보라색) 계열로 통일
                  : 'text-gray-700 dark:text-white hover:text-indigo-600'
              } ${
                activeSection === link.href.replace('#', '') && !isHome
                  ? 'text-indigo-600'
                  : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden transition-colors duration-300 ${
            isHome && !isScrolled ? 'text-white' : 'text-gray-700 hover:text-indigo-600'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24`}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavLinkClick}
              className={`text-lg font-medium transition-all duration-300 hover:text-indigo-600 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-indigo-600'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;