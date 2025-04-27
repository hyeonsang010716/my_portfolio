import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { navLinks } from '../data';
import useScrollPosition from '../hooks/useScrollPosition';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm py-4 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* GitHub Link */}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl font-bold transition-colors duration-300 ${
            isHome && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
        >
          <Github size={24} />
        </a>

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