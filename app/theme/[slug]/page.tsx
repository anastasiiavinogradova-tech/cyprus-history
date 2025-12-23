'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ThemeNavigation from '@/components/ThemeNavigation';
import ArticleContent from '@/components/ArticleContent';
import VideoPreview from '@/components/VideoPreview';
import MapSection from '@/components/MapSection';
import { getThemeBySlug } from '@/data/themes';
import { ancientMythsVideos } from '@/data/content/ancient-myths';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

export default function ThemePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  
  const theme = getThemeBySlug(slug);
  const [activeChapterId, setActiveChapterId] = useState<string>('');
  const [activeMapPointId, setActiveMapPointId] = useState<string | undefined>();

  useEffect(() => {
    if (theme && theme.chapters.length > 0 && !activeChapterId) {
      setActiveChapterId(theme.chapters[0].id);
    }
  }, [theme]);

  if (!theme) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair font-semibold mb-4">
            {language === 'ru' ? 'Тема не найдена' : language === 'gr' ? 'Το θέμα δεν βρέθηκε' : 'Theme not found'}
          </h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline">
            {t('backToHome', language)}
          </Link>
        </div>
      </div>
    );
  }

  const activeChapter = theme.chapters.find(ch => ch.id === activeChapterId) || theme.chapters[0];

  const handleMapPointClick = (mapPointId: string) => {
    setActiveMapPointId(mapPointId);
    // Scroll to map
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Theme Navigation */}
      {theme.chapters.length > 0 && (
        <ThemeNavigation
          chapters={theme.chapters}
          activeChapterId={activeChapterId}
          onChapterChange={setActiveChapterId}
        />
      )}

      {/* Article Content */}
      {activeChapter && (
        <ArticleContent
          chapter={activeChapter}
          onMapPointClick={handleMapPointClick}
        />
      )}

      {/* Video Preview - Only show for ancient-myths theme */}
      {slug === 'ancient-myths' && (
        <VideoPreview videos={ancientMythsVideos} />
      )}

      {/* Map Section */}
      {theme.mapPoints.length > 0 && (
        <MapSection
          mapPoints={theme.mapPoints}
          activeMapPointId={activeMapPointId}
        />
      )}

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('backToHome', language)}
        </Link>
      </div>
    </div>
  );
}

