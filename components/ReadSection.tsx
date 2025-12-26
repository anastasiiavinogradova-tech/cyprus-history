'use client';

import { useState } from 'react';
import { Chapter } from '@/data/types';
import ArticleContent from './ArticleContent';

interface ReadSectionProps {
  chapters: Chapter[];
}

export default function ReadSection({ chapters }: ReadSectionProps) {
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterId(expandedChapterId === chapterId ? null : chapterId);
  };

  return (
    <>
      {/* Chapters list */}
      <div className="space-y-6">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="border border-[#e8e4dc] rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            {/* Chapter header - clickable */}
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full text-left p-6 hover:bg-[#fdfcf8] transition-colors"
            >
              <div className="flex items-start gap-6">
                {/* Chapter number */}
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl font-light text-[#c4866b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Chapter info */}
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-2">
                    {chapter.title.ru}
                  </h3>
                  <p className="text-[#6b6b6b] line-clamp-2">
                    {chapter.content.ru.split('\n\n')[0]}
                  </p>
                </div>

                {/* Expand icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#6b6b6b] transition-transform ${
                      expandedChapterId === chapter.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Chapter content - expandable */}
            {expandedChapterId === chapter.id && (
              <div className="border-t border-[#e8e4dc] bg-[#fdfcf8]">
                <div className="p-6">
                  <ArticleContent chapter={chapter} onMapPointClick={() => {}} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

