'use client';

import { useLanguage, Language } from '@/lib/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'ENG' },
    { code: 'gr', label: 'GR' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`text-sm font-medium transition-colors ${
              language === lang.code
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-300">/</span>
          )}
        </div>
      ))}
    </div>
  );
}

