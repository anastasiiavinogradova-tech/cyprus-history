'use client';

import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/data/events';
import { useLanguage } from '@/lib/LanguageContext';

export default function EventsPage() {
  const { language } = useLanguage();

  const getCategoryLabel = (category: string) => {
    const labels = {
      carnival: { ru: 'Карнавал', en: 'Carnival', gr: 'Καρναβάλι' },
      festival: { ru: 'Фестиваль', en: 'Festival', gr: 'Φεστιβάλ' },
      concert: { ru: 'Концерт', en: 'Concert', gr: 'Συναυλία' },
      exhibition: { ru: 'Выставка', en: 'Exhibition', gr: 'Έκθεση' },
      theater: { ru: 'Театр', en: 'Theater', gr: 'Θέατρο' },
      cultural: { ru: 'Культура', en: 'Cultural', gr: 'Πολιτισμός' },
    };
    return labels[category as keyof typeof labels]?.[language] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      carnival: 'bg-pink-100 text-pink-800',
      festival: 'bg-purple-100 text-purple-800',
      concert: 'bg-blue-100 text-blue-800',
      exhibition: 'bg-orange-100 text-orange-800',
      theater: 'bg-red-100 text-red-800',
      cultural: 'bg-green-100 text-green-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    if (dateString.includes(' - ')) {
      const [start, end] = dateString.split(' - ');
      const startDate = new Date(start);
      const endDate = new Date(end);
      
      if (language === 'ru') {
        return `${startDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} - ${endDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}`;
      } else if (language === 'gr') {
        return `${startDate.toLocaleDateString('el-GR', { day: 'numeric', month: 'long' })} - ${endDate.toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' })}`;
      } else {
        return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
      }
    }
    
    const date = new Date(dateString);
    if (language === 'ru') {
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if (language === 'gr') {
      return date.toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  };

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date.split(' - ')[0]);
    const dateB = new Date(b.date.split(' - ')[0]);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5 mr-2" 
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
          {language === 'ru' ? 'Назад на главную' : language === 'gr' ? 'Πίσω στην αρχική' : 'Back to Home'}
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {language === 'ru' ? 'События Кипра' : language === 'gr' ? 'Εκδηλώσεις Κύπρου' : 'Cyprus Events'}
          </h1>
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {language === 'ru' ? 'Январь - Февраль 2025' : language === 'gr' ? 'Ιανουάριος - Φεβρουάριος 2025' : 'January - February 2025'}
          </span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl">
          {language === 'ru' 
            ? 'Афиша культурных событий, фестивалей, концертов и выставок' 
            : language === 'gr'
            ? 'Πρόγραμμα πολιτιστικών εκδηλώσεων, φεστιβάλ, συναυλιών και εκθέσεων'
            : 'Calendar of cultural events, festivals, concerts and exhibitions'}
        </p>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          {sortedEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="relative md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title[language]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                      {getCategoryLabel(event.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {event.title[language]}
                      </h3>
                      
                      {/* Date and Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.city}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        {event.description[language]}
                      </p>

                      <div className="text-sm text-gray-500 mb-4">
                        <span className="font-medium">{language === 'ru' ? 'Место:' : language === 'gr' ? 'Τοποθεσία:' : 'Venue:'}</span> {event.location}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {event.price && (
                        <div className="flex items-center gap-2 text-indigo-600 font-bold">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                          <span>{event.price[language]}</span>
                        </div>
                      )}
                      
                      {event.website && (
                        <a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                        >
                          <span>{language === 'ru' ? 'Подробнее' : language === 'gr' ? 'Περισσότερα' : 'Learn more'}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ru' ? 'Погрузитесь в культуру Кипра' : language === 'gr' ? 'Βυθιστείτε στον πολιτισμό της Κύπρου' : 'Immerse in Cyprus Culture'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'ru' 
              ? 'Изучайте историю острова в наших тематических разделах' 
              : language === 'gr'
              ? 'Μελετήστε την ιστορία του νησιού στις θεματικές ενότητες'
              : 'Explore the island\'s history in our themed sections'}
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            {language === 'ru' ? 'К темам' : language === 'gr' ? 'Στα θέματα' : 'Explore Themes'}
          </Link>
        </div>
      </section>
    </div>
  );
}


