'use client';

import Image from 'next/image';
import { Chapter } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

interface ArticleContentProps {
  chapter: Chapter;
  onMapPointClick?: (mapPointId: string) => void;
}

export default function ArticleContent({ chapter, onMapPointClick }: ArticleContentProps) {
  const { language } = useLanguage();

  const handleMapLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (chapter.mapPointId && onMapPointClick) {
      onMapPointClick(chapter.mapPointId);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
          {chapter.title[language]}
        </h1>
      </header>

      {/* Feature Image */}
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12 shadow-lg bg-gray-200">
        <Image
          src={chapter.image}
          alt={chapter.title[language]}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {chapter.content[language].split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Map Link */}
      {chapter.mapPointId && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <button
            onClick={handleMapLinkClick}
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors group"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            {t('onMap', language)}
          </button>
        </div>
      )}
    </article>
  );
}

