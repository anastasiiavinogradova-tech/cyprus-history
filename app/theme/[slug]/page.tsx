'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ArzamasHero from '@/components/ArzamasHero';
import ActionNav from '@/components/ActionNav';
import WatchSection from '@/components/WatchSection';
import ReadSection from '@/components/ReadSection';
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

  if (!theme) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold mb-4">
            {language === 'ru' ? 'Тема не найдена' : language === 'gr' ? 'Το θέμα δεν βρέθηκε' : 'Theme not found'}
          </h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline">
            {t('backToHome', language)}
          </Link>
        </div>
      </div>
    );
  }

  // Determine what sections to show
  const hasVideos = slug === 'ancient-myths' && ancientMythsVideos.length > 0;
  const hasChapters = theme.chapters.length > 0;
  const hasMap = theme.mapPoints.length > 0;

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <ArzamasHero theme={theme} />

      {/* Sticky Navigation */}
      <ActionNav
        hasVideo={hasVideos}
        hasPodcast={true}
        hasChapters={hasChapters}
        hasMap={hasMap}
      />

      {/* Content Sections */}
      {/* Watch Section now includes Listen integrated */}
      {hasVideos && <WatchSection videos={ancientMythsVideos} />}

      {/* Read Section - now numbered as 3 */}
      {hasChapters && (
        <section id="read" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section number and title */}
            <div className="mb-12">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-8xl md:text-9xl font-light text-[#e8e4dc]">3</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
                  Читать
                </h2>
              </div>
            </div>
            <ReadSection chapters={theme.chapters} />
          </div>
        </section>
      )}

      {/* Map Section - now numbered as 4 */}
      {hasMap && (
        <section id="map" className="py-16 md:py-24 bg-[#fdfcf8]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section number and title */}
            <div className="mb-12">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-8xl md:text-9xl font-light text-[#e8e4dc]">4</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
                  На карте
                </h2>
              </div>
            </div>
            <MapSection mapPoints={theme.mapPoints} />
          </div>
        </section>
      )}

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
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

