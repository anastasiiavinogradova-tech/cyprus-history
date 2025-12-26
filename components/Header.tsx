'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            {t('siteTitle', language)}
          </h1>
        </Link>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/places" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Places
          </Link>
          <Link 
            href="/events" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Events
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}

