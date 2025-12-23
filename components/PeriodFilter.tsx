'use client';

import { Period } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

interface PeriodFilterProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

const periods: Array<{ key: string; value: Period | 'all' }> = [
  { key: 'allPeriods', value: 'all' },
  { key: 'periods.mythology', value: 'mythology' },
  { key: 'periods.antiquity', value: 'antiquity' },
  { key: 'periods.byzantine', value: 'byzantine' },
  { key: 'periods.lusignan', value: 'lusignan' },
  { key: 'periods.venetian', value: 'venetian' },
  { key: 'periods.ottoman', value: 'ottoman' },
  { key: 'periods.british', value: 'british' },
  { key: 'periods.modern20', value: 'modern20' },
  { key: 'periods.century21', value: 'century21' },
];

export default function PeriodFilter({ selectedPeriod, onPeriodChange }: PeriodFilterProps) {
  const { language } = useLanguage();

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => onPeriodChange(period.value)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
              transition-all duration-200 
              ${
                selectedPeriod === period.value
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
              }
            `}
          >
            {t(period.key, language)}
          </button>
        ))}
      </div>
    </div>
  );
}

