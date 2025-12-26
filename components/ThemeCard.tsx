'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Theme } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ThemeCardProps {
  theme: Theme;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  const { language } = useLanguage();

  return (
    <Link 
      href={`/theme/${theme.slug}`}
      className="group relative block overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <Image
          src={theme.image}
          alt={theme.title[language]}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/85 via-teal-700/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-serif font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
          {theme.title[language]}
        </h3>
        <p className="text-sm text-gray-200 line-clamp-2 opacity-90">
          {theme.description[language]}
        </p>
      </div>
    </Link>
  );
}

