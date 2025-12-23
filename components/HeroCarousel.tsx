'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';
import { Period } from '@/data/types';

interface HeroCarouselProps {
  onPeriodSelect: (period: string) => void;
}

const heroImages = [
  {
    period: 'mythology',
    image: 'https://picsum.photos/seed/cyprus-myths-hero/1920/800',
    key: 'periods.mythology',
  },
  {
    period: 'antiquity',
    image: 'https://picsum.photos/seed/antiquity-hero/1920/800',
    key: 'periods.antiquity',
  },
  {
    period: 'byzantine',
    image: 'https://picsum.photos/seed/byzantine-hero/1920/800',
    key: 'periods.byzantine',
  },
  {
    period: 'lusignan',
    image: 'https://picsum.photos/seed/lusignan-hero/1920/800',
    key: 'periods.lusignan',
  },
  {
    period: 'venetian',
    image: 'https://picsum.photos/seed/venetian-hero/1920/800',
    key: 'periods.venetian',
  },
  {
    period: 'ottoman',
    image: 'https://picsum.photos/seed/ottoman-hero/1920/800',
    key: 'periods.ottoman',
  },
  {
    period: 'british',
    image: 'https://picsum.photos/seed/british-hero/1920/800',
    key: 'periods.british',
  },
  {
    period: 'modern20',
    image: 'https://picsum.photos/seed/modern20-hero/1920/800',
    key: 'periods.modern20',
  },
  {
    period: 'century21',
    image: 'https://picsum.photos/seed/century21-hero/1920/800',
    key: 'periods.century21',
  },
];

export default function HeroCarousel({ onPeriodSelect }: HeroCarouselProps) {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleExplore = () => {
    onPeriodSelect(heroImages[currentSlide].period);
    const element = document.getElementById('themes-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {heroImages.map((item, index) => (
        <div
          key={item.period}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
              {t('siteTitle', language)}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-center max-w-3xl animate-fade-in-delay">
              {t(item.key, language)}
            </p>
            <button
              onClick={handleExplore}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-delay-2"
            >
              {t('explorePeriods', language)}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => {
          setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setCurrentSlide((prev) => (prev + 1) % heroImages.length);
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
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
      </button>
    </div>
  );
}
