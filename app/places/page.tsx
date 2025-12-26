'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { places } from '@/data/places';
import { useLanguage } from '@/lib/LanguageContext';

export default function PlacesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryLabel = (type: string) => {
    const labels = {
      museum: { ru: 'Музей', en: 'Museum', gr: 'Μουσείο' },
      archaeological: { ru: 'Археология', en: 'Archaeological', gr: 'Αρχαιολογικός' },
      church: { ru: 'Церковь', en: 'Church', gr: 'Εκκλησία' },
      castle: { ru: 'Замок', en: 'Castle', gr: 'Κάστρο' },
      natural: { ru: 'Природа', en: 'Natural', gr: 'Φυσικός' },
    };
    return labels[type as keyof typeof labels]?.[language] || type;
  };

  const getCategoryColor = (type: string) => {
    const colors = {
      museum: 'bg-purple-100 text-purple-800',
      archaeological: 'bg-orange-100 text-orange-800',
      church: 'bg-blue-100 text-blue-800',
      castle: 'bg-red-100 text-red-800',
      natural: 'bg-green-100 text-green-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const categories = [
    { value: 'all', label: { ru: 'Все', en: 'All', gr: 'Όλα' }, color: 'bg-gray-200 text-gray-800' },
    { value: 'museum', label: { ru: 'Музеи', en: 'Museums', gr: 'Μουσεία' }, color: 'bg-purple-500 text-white' },
    { value: 'archaeological', label: { ru: 'Археология', en: 'Archaeological', gr: 'Αρχαιολογικά' }, color: 'bg-orange-500 text-white' },
    { value: 'church', label: { ru: 'Церкви', en: 'Churches', gr: 'Εκκλησίες' }, color: 'bg-blue-500 text-white' },
    { value: 'castle', label: { ru: 'Замки', en: 'Castles', gr: 'Κάστρα' }, color: 'bg-red-500 text-white' },
    { value: 'natural', label: { ru: 'Природа', en: 'Natural', gr: 'Φυσικά' }, color: 'bg-green-500 text-white' },
  ];

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.type === selectedCategory);

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
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {language === 'ru' ? 'Места Кипра' : language === 'gr' ? 'Τόποι της Κύπρου' : 'Places of Cyprus'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          {language === 'ru' 
            ? 'Исследуйте главные достопримечательности, музеи и исторические места острова' 
            : language === 'gr'
            ? 'Εξερευνήστε τα κύρια αξιοθέατα, μουσεία και ιστορικά μέρη του νησιού'
            : 'Explore the main attractions, museums and historical sites of the island'}
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm font-semibold text-gray-700">
            {language === 'ru' ? 'Фильтр:' : language === 'gr' ? 'Φίλτρο:' : 'Filter:'}
          </span>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category.value
                  ? category.color + ' shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label[language]}
              {category.value === 'all' && ` (${places.length})`}
              {category.value !== 'all' && ` (${places.filter(p => p.type === category.value).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* Places Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredPlaces.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              {language === 'ru' ? 'Места не найдены' : language === 'gr' ? 'Δεν βρέθηκαν τοποθεσίες' : 'No places found'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <div 
                key={place.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name[language]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(place.type)}`}>
                      {getCategoryLabel(place.type)}
                    </span>
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{place.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {place.name[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {place.description[language]}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {place.website ? (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                      >
                        <span>{language === 'ru' ? 'Подробнее' : language === 'gr' ? 'Περισσότερα' : 'Learn more'}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ru' ? 'Откройте для себя историю Кипра' : language === 'gr' ? 'Ανακαλύψτε την ιστορία της Κύπρου' : 'Discover Cyprus History'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'ru' 
              ? 'Узнайте больше о культуре и наследии острова в наших тематических разделах' 
              : language === 'gr'
              ? 'Μάθετε περισσότερα για τον πολιτισμό και την κληρονομιά του νησιού'
              : 'Learn more about the island\'s culture and heritage in our themed sections'}
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            {language === 'ru' ? 'К темам' : language === 'gr' ? 'Στα θέματα' : 'Explore Themes'}
          </Link>
        </div>
      </section>
    </div>
  );
}
