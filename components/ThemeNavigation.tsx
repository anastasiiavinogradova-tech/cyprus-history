'use client';

import { Chapter } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ThemeNavigationProps {
  chapters: Chapter[];
  activeChapterId: string;
  onChapterChange: (chapterId: string) => void;
}

export default function ThemeNavigation({ chapters, activeChapterId, onChapterChange }: ThemeNavigationProps) {
  const { language } = useLanguage();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => onChapterChange(chapter.id)}
              className={`
                flex-shrink-0 text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-colors
                ${
                  activeChapterId === chapter.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <span className="text-xs text-gray-400 mr-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              {chapter.title[language]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

