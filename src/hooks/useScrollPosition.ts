import { useState, useEffect } from 'react';

/** 헤더 높이 + 여유 margin */
const OFFSET = 120;   // px

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection]   = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollPosition(y);

      /** `section`과 `footer` 모두 탐색 */
      const sections = document.querySelectorAll<HTMLElement>(
        'section[id], footer[id]',
      );

      let current = activeSection;

      sections.forEach((section) => {
        const top    = section.offsetTop - OFFSET;
        const bottom = top + section.offsetHeight;

        if (y >= top && y < bottom) current = section.id;
      });

      /** 페이지 최하단(5px 오차 허용) 보정 */
      if (window.innerHeight + y >= document.body.scrollHeight - 5) {
        const last = sections[sections.length - 1];
        if (last) current = last.id;
      }

      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();                 // 첫 렌더링 시 즉시 체크

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return { scrollPosition, activeSection };
}
  