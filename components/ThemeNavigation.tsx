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
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:block sticky top-[73px] h-[calc(100vh-73px)] w-64 bg-white border-r border-gray-200 overflow-y-auto scrollbar-hide flex-shrink-0">
        <div className="p-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Chapters
          </h3>
          <div className="flex flex-col gap-1">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => onChapterChange(chapter.id)}
                className={`
                  text-left py-3 px-4 rounded-lg transition-all duration-200
                  ${
                    activeChapterId === chapter.id
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <span className={`
                    text-xs font-semibold mt-0.5 flex-shrink-0
                    ${activeChapterId === chapter.id ? 'text-gray-300' : 'text-gray-400'}
                  `}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium leading-tight">
                    {chapter.title[language]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="px-4">
          <div className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-hide">
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
    </>
  );
}




