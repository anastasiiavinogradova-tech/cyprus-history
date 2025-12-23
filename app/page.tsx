'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThemeCard from '@/components/ThemeCard';
import PeriodFilter from '@/components/PeriodFilter';
import { themes, getThemesByPeriod } from '@/data/themes';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

export default function Home() {
  const { language } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  
  const filteredThemes = getThemesByPeriod(selectedPeriod);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
        <Image
          src="https://picsum.photos/seed/cyprus-coast-2024/1920/1080"
          alt="Cyprus landscape - Beautiful coastline"
          fill
          unoptimized
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            {t('siteTitle', language)}
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light opacity-90">
            {t('explorePeriods', language)}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Period Filter */}
        <PeriodFilter 
          selectedPeriod={selectedPeriod} 
          onPeriodChange={setSelectedPeriod}
        />

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              {language === 'ru' ? 'Темы не найдены' : language === 'gr' ? 'Δεν βρέθηκαν θέματα' : 'No themes found'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

