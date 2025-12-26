'use client';

import { useState, useRef } from 'react';
import { Chapter } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';
import ArticleContent from './ArticleContent';

interface ReadSectionProps {
  chapters: Chapter[];
}

export default function ReadSection({ chapters }: ReadSectionProps) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scrollMenu = (direction: 'left' | 'right') => {
    if (menuRef.current) {
      const scrollAmount = 200;
      menuRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const activeChapter = chapters[activeChapterIndex];

  return (
    <div>
      {/* Horizontal Chapter Menu */}
      <div className="relative mb-8">
        {/* Left scroll button */}
        <button
          onClick={() => scrollMenu('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable menu */}
        <div
          ref={menuRef}
          className="overflow-x-auto scrollbar-hide px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-3">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapterIndex(index)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full font-sans text-sm transition-all duration-200
                  ${activeChapterIndex === index
                    ? 'bg-[#c4866b] text-white shadow-md'
                    : 'bg-white text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e8e4dc] border border-[#e8e4dc]'
                  }
                `}
              >
                <span className="font-serif font-semibold mr-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{chapter.title[language]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scrollMenu('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Active Chapter Content */}
      <div className="border border-[#e8e4dc] rounded-lg overflow-hidden bg-white shadow-md">
        {/* Chapter header */}
        <div className="p-6 bg-[#fdfcf8] border-b border-[#e8e4dc]">
          <div className="flex items-start gap-6">
            {/* Chapter number */}
            <div className="flex-shrink-0">
              <span className="font-serif text-5xl font-light text-[#c4866b]">
                {String(activeChapterIndex + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Chapter title */}
            <div className="flex-1">
              <h3 className="font-serif text-3xl font-semibold text-[#1a1a1a]">
                {activeChapter.title[language]}
              </h3>
            </div>
          </div>
        </div>

        {/* Chapter content */}
        <div className="p-6 bg-white">
          <ArticleContent chapter={activeChapter} onMapPointClick={() => {}} />
        </div>

        {/* Navigation arrows */}
        <div className="p-6 bg-[#fdfcf8] border-t border-[#e8e4dc] flex items-center justify-between">
          <button
            onClick={() => setActiveChapterIndex(Math.max(0, activeChapterIndex - 1))}
            disabled={activeChapterIndex === 0}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm transition-all
              ${activeChapterIndex === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#c4866b] hover:bg-[#c4866b] hover:text-white'
              }
            `}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>
              {language === 'ru' ? 'Предыдущая глава' : language === 'gr' ? 'Προηγούμενο κεφάλαιο' : 'Previous Chapter'}
            </span>
          </button>

          <span className="text-sm text-[#6b6b6b]">
            {activeChapterIndex + 1} {language === 'ru' ? 'из' : language === 'gr' ? 'από' : 'of'} {chapters.length}
          </span>

          <button
            onClick={() => setActiveChapterIndex(Math.min(chapters.length - 1, activeChapterIndex + 1))}
            disabled={activeChapterIndex === chapters.length - 1}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm transition-all
              ${activeChapterIndex === chapters.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#c4866b] hover:bg-[#c4866b] hover:text-white'
              }
            `}
          >
            <span>
              {language === 'ru' ? 'Следующая глава' : language === 'gr' ? 'Επόμενο κεφάλαιο' : 'Next Chapter'}
            </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
