'use client';

import { useState } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import ThemeCard from '@/components/ThemeCard';
import PeriodFilter from '@/components/PeriodFilter';
import { themes, getThemesByPeriod } from '@/data/themes';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  
  const filteredThemes = getThemesByPeriod(selectedPeriod);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Carousel */}
      <HeroCarousel onPeriodSelect={setSelectedPeriod} />

      {/* Main Content */}
      <section id="themes-section" className="max-w-7xl mx-auto px-6 py-16">
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

