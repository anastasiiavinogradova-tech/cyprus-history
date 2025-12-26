'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ActionNavProps {
  hasVideo?: boolean;
  hasPodcast?: boolean;
  hasChapters?: boolean;
  hasMap?: boolean;
}

export default function ActionNav({
  hasVideo = true,
  hasPodcast = true,
  hasChapters = true,
  hasMap = true,
}: ActionNavProps) {
  const [activeSection, setActiveSection] = useState('watch');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['watch', 'listen', 'read', 'map'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'watch', label: 'Смотреть', icon: '/images/themes/watch-icon.png', show: hasVideo },
    { id: 'listen', label: 'Слушать', icon: '/images/themes/listen-icon.png', show: hasPodcast },
    { id: 'read', label: 'Читать', icon: '/images/themes/read-icon.png', show: hasChapters },
    { id: 'map', label: 'На карте', icon: '/images/themes/map-icon.png', show: hasMap },
  ];

  return (
    <nav className="sticky top-[73px] z-30 bg-[#fdfcf8] border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-1 py-4">
          {navItems.filter(item => item.show).map((item, index, array) => (
            <div key={item.id} className="flex items-center">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm transition-all duration-200
                  ${activeSection === item.id 
                    ? 'bg-[#c4866b] text-white' 
                    : 'text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e8e4dc]'
                  }
                `}
              >
                <div className="relative w-4 h-4">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className={`object-contain ${activeSection === item.id ? 'brightness-0 invert' : ''}`}
                  />
                </div>
                <span>{item.label}</span>
              </button>
              {index < array.length - 1 && (
                <div className="w-px h-6 bg-[#e8e4dc] mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}


