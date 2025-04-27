import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Education from './sections/Education';
import Studies from './sections/Studies';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  useEffect(() => {
    document.title = "조현상 | AI SW Engineer";
    
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      
      if (href?.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedCursor />
      <Header />
      <main>
        <Hero />
        <div className="bg-gray-900">
          <About />
          <Skills />
          <Work />
          <Projects />
          <Education />
          <Studies />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;