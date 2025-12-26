'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

interface HeroCarouselProps {
  onPeriodSelect: (period: string) => void;
}

const heroImages = [
  {
    period: 'mythology',
    image: '/images/themes/hero-carousel/hero-mythology.png',
    key: 'periods.mythology',
  },
  {
    period: 'antiquity',
    image: '/images/themes/hero-carousel/hero-antiquity.png',
    key: 'periods.antiquity',
  },
  {
    period: 'byzantine',
    image: '/images/themes/hero-carousel/hero-byzantine.png',
    key: 'periods.byzantine',
  },
  {
    period: 'british',
    image: '/images/themes/hero-carousel/hero-british.png',
    key: 'periods.british',
  },
  {
    period: 'century21',
    image: '/images/themes/hero-carousel/hero-century21.png',
    key: 'periods.century21',
  },
];

export default function HeroCarousel({ onPeriodSelect }: HeroCarouselProps) {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (period: string) => {
    onPeriodSelect(period);
    const element = document.getElementById('themes-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-8 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 text-center mb-3">
          This website is a visual aid to{' '}
          <Link 
            href="/mvp-concept" 
            className="text-gray-700 hover:text-gray-900 underline transition-colors duration-200"
          >
            MVP CONCEPT
          </Link>
        </p>
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900 uppercase">
          EXPLORE CYPRUS HISTORY
        </h2>
        
        {/* Desktop version - all cards visible */}
        <div className="hidden md:flex gap-3 lg:gap-4 h-[400px] lg:h-[500px]">
          {heroImages.map((item, index) => (
            <div
              key={item.period}
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl"
              style={{
                flex: hoveredIndex === index ? '2' : '1',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(item.period)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 0.8 : 0.6,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 lg:p-6 text-white">
                <h3 
                  className="font-bold mb-2 transition-all duration-500"
                  style={{
                    fontSize: hoveredIndex === index ? '1.75rem' : '1.25rem',
                    opacity: 1,
                  }}
                >
                  {t(item.key, language)}
                </h3>
                
                {hoveredIndex === index && (
                  <p className="text-sm opacity-90 animate-fade-in">
                    {t('clickToExplore', language)}
                  </p>
                )}
              </div>

              {/* Hover Indicator */}
              {hoveredIndex === index && (
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-fade-in">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile version - scrollable carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
          {heroImages.map((item, index) => (
            <div
              key={item.period}
              className="relative flex-shrink-0 w-[280px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg active:scale-95 transition-transform duration-200 snap-start"
              onClick={() => handleCardClick(item.period)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {t(item.key, language)}
                </h3>
                <p className="text-sm opacity-90">
                  {t('clickToExplore', language)}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
