'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

export default function MVPConceptPage() {
  const { language, setLanguage } = useLanguage();
  const previousLanguage = useRef(language);
  
  useEffect(() => {
    // Save current language and switch to Russian
    previousLanguage.current = language;
    setLanguage('ru');
    
    // Restore previous language on unmount
    return () => {
      setLanguage(previousLanguage.current);
    };
  }, []);
  
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
          {t('backToHome', language)}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/themes/ancient-myths.png')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-teal-800/75 to-purple-900/85 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t('mvpPage.heroTitle', language)}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              {t('mvpPage.heroSubtitle', language)}
            </p>
            <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl">
              <p className="text-lg text-gray-900 font-medium">
                {t('mvpPage.heroDescription', language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('mvpPage.missionTitle', language)}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              {t('mvpPage.missionText', language)}
            </p>
            
            {/* Value Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('mvpPage.reputation', language)}</h3>
                <p className="text-gray-700">{t('mvpPage.reputationDesc', language)}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Образование</h3>
                <p className="text-gray-700">Вклад в образовательную экосистему</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Культурный актив</h3>
                <p className="text-gray-700">Создание долгосрочного цифрового наследия</p>
              </div>
            </div>

            {/* Note about automation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic max-w-3xl mx-auto">
                *При разработке концепции учитывалась задача максимальной автоматизации производства для достижения минимальной стоимости единицы контента при масштабировании.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gaps Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('mvpPage.whyNeededTitle', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              У Кипра отсутствует единый современный цифровой продукт, который бы системно 
              и качественно рассказывал об истории и жизни острова
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gap 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Разрозненность информации
              </h3>
              <p className="text-gray-700 mb-4">
                Информация об истории Кипра разбросана между музеями, сайтами, блогами и 
                академическими источниками
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-green-600 font-semibold">✓ Единый структурированный портал</p>
              </div>
            </div>

            {/* Gap 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Разрыв между знанием и аудиторией
              </h3>
              <p className="text-gray-700 mb-4">
                Качественное историческое знание существует в книгах и архивах, 
                недоступно для массовой аудитории
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-green-600 font-semibold">✓ Современные форматы контента</p>
              </div>
            </div>

            {/* Gap 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Сегментированная культурная жизнь
              </h3>
              <p className="text-gray-700 mb-4">
                Афиши мероприятий и места интереса разрознены, 
                аудитория фрагментирована
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-green-600 font-semibold">✓ Агрегация для культурно-активных жителей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Logic Section */}
      <section className="pt-20 pb-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Подход к эффективному производству
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Масштабируемая модель без экспоненциального роста затрат
            </p>
          </div>

          {/* Production Formula */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Модель максимальной ценности
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Тема */}
                <div className="flex-1 bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">ТЕМА</h4>
                  <p className="text-gray-600 mt-2">Единый смысловой блок</p>
                </div>

                <div className="text-4xl font-bold text-indigo-600">×</div>

                {/* Формат */}
                <div className="flex-1 bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">ФОРМАТ</h4>
                  <p className="text-gray-600 mt-2">Текст, видео, аудио</p>
                </div>

                <div className="text-4xl font-bold text-indigo-600">×</div>

                {/* Аудитория */}
                <div className="flex-1 bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">АУДИТОРИЯ</h4>
                  <p className="text-gray-600 mt-2">Разные точки контакта</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  = Увеличение охвата без повторного производства «с нуля»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Интерактивный пример готовой темы: «Мифы Древнего Кипра»
            </p>
          </div>

          {/* Demo Container */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Hero Section Demo */}
            <div className="relative bg-[#fdfcf8] overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-[url('/images/themes/paper-texture.jpg')] bg-cover"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Title */}
                  <div className="z-10">
                    <h3 className="font-serif text-4xl md:text-5xl font-light leading-tight text-[#1a1a1a] mb-4">
                      Мифы Древнего Кипра
                    </h3>
                    <p className="font-sans text-lg md:text-xl text-[#6b6b6b] leading-relaxed">
                      Исследуйте легенды о рождении Афродиты, культы древних богов и мифических героев острова
                    </p>
                  </div>

                  {/* Right: Collage Preview */}
                  <div className="relative h-[350px] md:h-[400px]">
                    {/* Main statue - Aphrodite */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[85%] z-20">
                      <Image
                        src="/images/themes/ancient-myths-hero-aphrodite.png"
                        alt="Statue of Aphrodite"
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>

                    {/* Left artifact - Pottery */}
                    <div className="absolute top-[10%] left-0 w-[35%] h-[35%] z-10">
                      <Image
                        src="/images/themes/ancient-myths-pottery.png"
                        alt="Ancient Cypriot pottery"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Right decoration - Olive branch */}
                    <div className="absolute top-[5%] right-[5%] w-[30%] h-[30%] z-5 opacity-80">
                      <Image
                        src="/images/themes/ancient-myths-olive.png"
                        alt="Olive branch"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom divider */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e8e4dc]"></div>
            </div>

            {/* Navigation Demo */}
            <div className="bg-[#fdfcf8] border-b border-[#e8e4dc] py-4">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  <Link
                    href="/theme/ancient-myths#watch"
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm bg-[#c4866b] text-white hover:bg-[#b07759] transition-colors"
                  >
                    <Image
                      src="/images/themes/watch-icon.png"
                      alt=""
                      width={16}
                      height={16}
                      className="brightness-0 invert"
                    />
                    <span>Смотреть</span>
                  </Link>
                  <div className="w-px h-6 bg-[#e8e4dc] mx-2"></div>
                  <Link
                    href="/theme/ancient-myths#listen"
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e8e4dc] transition-colors"
                  >
                    <Image
                      src="/images/themes/listen-icon.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>Слушать</span>
                  </Link>
                  <div className="w-px h-6 bg-[#e8e4dc] mx-2"></div>
                  <Link
                    href="/theme/ancient-myths#read"
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e8e4dc] transition-colors"
                  >
                    <Image
                      src="/images/themes/read-icon.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>Читать</span>
                  </Link>
                  <div className="w-px h-6 bg-[#e8e4dc] mx-2"></div>
                  <Link
                    href="/theme/ancient-myths#map"
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e8e4dc] transition-colors"
                  >
                    <Image
                      src="/images/themes/map-icon.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>На карте</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 px-6 py-8 text-center">
              <p className="text-white text-lg mb-4 font-medium">
                Это интерактивный пример MVP темы с видео, статьями, интерактивной картой и AI-подкастом
              </p>
              <Link
                href="/theme/ancient-myths"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <span>Открыть полную страницу</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Видео</h4>
              <p className="text-sm text-gray-600">Summary и shorts форматы</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Подкаст</h4>
              <p className="text-sm text-gray-600">AI-генерация голоса</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Тексты</h4>
              <p className="text-sm text-gray-600">Структурированные главы</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Карта</h4>
              <p className="text-sm text-gray-600">Интерактивные точки</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Автоматизация производства
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">ИИ как инструмент</h4>
                  <p className="text-gray-700">Ускорение производства, а не замена экспертизе</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Масштабирование</h4>
                  <p className="text-gray-700">Адаптация на 3 языка и форматы</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AI-подкасты</h4>
                  <p className="text-gray-700">Генерация на основе утверждённого сценария</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Дистрибуция</h4>
                  <p className="text-gray-700">Системная публикация контента</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Formats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Форматы видеоконтента
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Три типа видео для разных сценариев потребления и аудиторий. Примеры видео подобраны исходя из потенциала автоматизации продакшна и подтвержденного социальными сетями интереса к подобному формату подачи материала
            </p>
          </div>

          <div className="space-y-16">
            {/* Short Stories */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  SHORT STORIES
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Короткие истории
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Формат для социальных сетей (TikTok, Instagram, Facebook). Динамичные видео длительностью 60-90 секунд, 
                  захватывающие внимание и вызывающие интерес к полному материалу.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Длительность:</strong> 60-90 секунд</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Цель:</strong> Привлечение внимания и вовлечение</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Платформы:</strong> YouTube, TikTok, Instagram Reels, Facebook</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <OptimizedVideoPlayer
                    src="/videos/3 Наказания Для Жены В Средневековье!.mp4"
                    poster="/images/themes/ancient-myths-shorts-thumb.png"
                    autoPlayOnView={true}
                  />
                </div>
              </div>
            </div>

            {/* Video Brief */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2">
                <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  VIDEO BRIEF
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Краткий обзор темы
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Формат для YouTube и основного сайта. Структурированный рассказ длительностью 15-20 минут, 
                  охватывающий ключевые аспекты темы с визуальными материалами и анимацией.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Длительность:</strong> 15-20 минут</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Цель:</strong> Системное изложение темы</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Платформы:</strong> YouTube, Основной сайт</span>
                  </div>
                </div>
              </div>
              <div className="order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <OptimizedVideoPlayer
                    src="/videos/Древняя Греция за 18 минут (1).mp4"
                    poster="/images/themes/ancient-myths-summary-thumb.png"
                    autoPlayOnView={true}
                  />
                </div>
              </div>
            </div>

            {/* Deep Dive */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  DEEP DIVE
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Глубокое погружение
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Формат для тех, кто хочет максимально погрузиться в тему. Подкаст 1-2 часа с подробным разбором всех аспектов, источников и исторического контекста. Производство полностью AI.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Длительность:</strong> 1-2 часа</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Цель:</strong> Максимальное погружение в тему</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Платформы:</strong> YouTube, Подкасты</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <OptimizedVideoPlayer
                    src="/videos/🌙 ЛЕКЦИЯ ДЛЯ СНА_ Боги и мифы Древней Греции (1).mp4"
                    autoPlayOnView={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Note */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Многоуровневая стратегия</h4>
                <p className="text-gray-700 leading-relaxed">
                  Такая структура позволяет охватить разные аудитории: от случайных зрителей в социальных сетях 
                  до глубоко заинтересованных исследователей. Каждый формат работает как воронка, ведущая 
                  к более глубокому контенту.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Точки контакта с аудиторией
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Запуск сразу на нескольких платформах создает больше точек контакта с аудиторией и ускоряет рост проекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Web Application</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Основная база знаний</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Навигационный центр</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Интерактивная карта</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Фундамент для масштабирования</span>
                </li>
              </ul>
            </div>

            {/* YouTube */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">YouTube Channel</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Органический канал дистрибуции</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Мультиязычный (RU / EN / GR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Отдельные аудиодорожки</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Переходы на web-версию</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">TikTok / Facebook</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Короткие форматы</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрый охват</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Привлечение новой аудитории</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Воронка в основной контент</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Events Block - full width */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-10 shadow-xl">
              <div className="flex items-start gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Афиша мероприятий
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Афиша мероприятий позволяет привлекать аудиторию через интерес к досугу и событиям, 
                    превращая портал в культурный навигатор.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Это создаёт органический трафик даже тогда, когда пользователь не ищет просвещение, 
                    а ищет впечатления.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              MVP: первые 3 месяца
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Проверка модели масштабируемого производства и дистрибуции
            </p>
          </div>

          {/* Content Volume */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 mb-12 text-white text-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/themes/byzantine-legacy.png"
                alt=""
                fill
                className="object-cover opacity-20"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-8xl md:text-9xl font-bold mb-6">112</div>
              <div className="text-3xl md:text-4xl font-bold mb-4">единиц контента</div>
              <div className="text-xl opacity-90">8 тем × множество форматов</div>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">48</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Статей</h4>
              <p className="text-gray-600">8 тем × 6 подразделов</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">8</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Подкастов</h4>
              <p className="text-gray-600">1-2 часа каждый</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-pink-600 mb-3">8</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Summary-видео</h4>
              <p className="text-gray-600">15-20 минут каждое</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-orange-600 mb-3">48</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Short-видео</h4>
              <p className="text-gray-600">8 тем × 6 shorts</p>
            </div>
          </div>

          {/* Production Flow */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Схема создания контента
            </h3>
            
            <div className="max-w-6xl mx-auto">
              {/* Starting Node */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Выбор темы</h4>
                <p className="text-gray-600 mt-1 text-center">
                  Работа редактора на этапе MVP с последующей автоматизацией по мере увеличения глубины базы знаний
                </p>
              </div>

              {/* Splitting arrows */}
              <div className="flex justify-center mb-8">
                <svg className="w-64 h-16" viewBox="0 0 256 64" fill="none">
                  <path d="M128 0 L128 20 M128 20 L80 50 M128 20 L176 50" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Two parallel processes */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Process 1: Texts -> Podcast & Video */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col items-center">
                    {/* Texts Node */}
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-md">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 text-center">Тексты для сайта</h4>
                      <p className="text-sm text-gray-600 text-center mt-1">3 языка</p>
                    </div>

                    {/* Splitting arrows for texts */}
                    <svg className="w-32 h-12 mb-4" viewBox="0 0 128 48" fill="none">
                      <path d="M64 0 L64 15 M64 15 L40 40 M64 15 L88 40" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                    {/* Podcast and Video nodes */}
                    <div className="flex gap-6 w-full">
                      {/* Podcast */}
                      <div className="flex-1">
                        <div className="w-14 h-14 bg-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white shadow-md">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <h5 className="text-sm font-bold text-gray-900 text-center">Подкаст</h5>
                        <p className="text-xs text-gray-600 text-center mt-1">Полностью AI производство</p>
                      </div>

                      {/* Summary Video */}
                      <div className="flex-1">
                        <div className="w-14 h-14 bg-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white shadow-md">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h5 className="text-sm font-bold text-gray-900 text-center">Summary видео</h5>
                        <p className="text-xs text-gray-600 text-center mt-1">15-20 минут</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process 2: Shorts Series */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-2">Shorts Series</h4>
                    <p className="text-gray-600 text-center">6 коротких видео по теме</p>
                    <p className="text-sm text-gray-500 text-center mt-2">Простой и вовлекающий формат для привлечения внимания</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-900 font-semibold">Автоматизированный контроль фактической точности на каждом этапе</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Языки проекта</h3>
            <div className="flex items-center justify-center gap-6">
              <div className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-bold text-lg">
                Русский
              </div>
              <div className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-bold text-lg">
                English
              </div>
              <div className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-bold text-lg">
                Ελληνικά
              </div>
            </div>
            <p className="text-gray-600 mt-4">Все языки равноправны по качеству и структуре</p>
          </div>

          {/* Project Timeline Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Проектный таймлайн MVP
            </h3>
            <p className="text-xl text-gray-600 text-center mb-12">
              3 месяца от концепции до масштабируемого продукта
            </p>

            {/* Timeline Legend */}
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                <span className="text-sm text-gray-700">Фаза 1: Подготовка</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-sm text-gray-700">Фаза 2: Производство</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-500 rounded"></div>
                <span className="text-sm text-gray-700">Фаза 3: Публикация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-gray-700">Фаза 4: Масштабирование</span>
              </div>
            </div>

            {/* Gantt Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
              {/* Month Headers */}
              <div className="grid grid-cols-13 gap-0 mb-4">
                <div className="col-span-1"></div>
                <div className="col-span-4 text-center font-bold text-gray-900 border-l border-r border-gray-300 py-2">
                  Месяц 1
                </div>
                <div className="col-span-4 text-center font-bold text-gray-900 border-r border-gray-300 py-2">
                  Месяц 2
                </div>
                <div className="col-span-4 text-center font-bold text-gray-900 border-r border-gray-300 py-2">
                  Месяц 3
                </div>
              </div>

              {/* Week Headers */}
              <div className="grid grid-cols-13 gap-0 mb-2">
                <div className="col-span-1"></div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
                  <div key={week} className="text-center text-xs text-gray-500 border-l border-gray-200 py-1">
                    {week}
                  </div>
                ))}
              </div>

              {/* Timeline Rows */}
              <div className="space-y-3">
                {/* Phase 1 */}
                <div className="grid grid-cols-13 gap-0 items-center">
                  <div className="col-span-1 text-sm font-semibold text-gray-700 pr-2">
                    Фаза 1
                  </div>
                  <div className="col-span-4 relative h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg shadow-md flex items-center justify-center text-white text-xs font-semibold">
                      Подготовка и настройка
                    </div>
                  </div>
                  <div className="col-span-8"></div>
                </div>

                {/* Phase 2 */}
                <div className="grid grid-cols-13 gap-0 items-center">
                  <div className="col-span-1 text-sm font-semibold text-gray-700 pr-2">
                    Фаза 2
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-7 relative h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg shadow-md flex items-center justify-center text-white text-xs font-semibold">
                      Массовое производство контента
                    </div>
                  </div>
                  <div className="col-span-3"></div>
                </div>

                {/* Phase 3 */}
                <div className="grid grid-cols-13 gap-0 items-center">
                  <div className="col-span-1 text-sm font-semibold text-gray-700 pr-2">
                    Фаза 3
                  </div>
                  <div className="col-span-3"></div>
                  <div className="col-span-9 relative h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg shadow-md flex items-center justify-center text-white text-xs font-semibold">
                      Публикация и работа с аудиторией
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="grid grid-cols-13 gap-0 items-center">
                  <div className="col-span-1 text-sm font-semibold text-gray-700 pr-2">
                    Фаза 4
                  </div>
                  <div className="col-span-9"></div>
                  <div className="col-span-3 relative h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-md flex items-center justify-center text-white text-xs font-semibold">
                      Масштабирование
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about overlapping */}
              <div className="mt-6 flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Фазы частично перекрываются</span>, что сокращает time-to-market, 
                  позволяет учиться на данных ещё до окончания MVP и снижает риски
                </div>
              </div>
            </div>

            {/* Phase Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phase 1 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Подготовка и настройка системы</h4>
                </div>
                <p className="text-sm text-indigo-900 font-semibold mb-4">Месяц 1</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Визуальная концепция и UI-структура</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Тематический план (8 тем, структура глав)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Редакторский пайплайн и факт-чекинг</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Образцы контента как эталон</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">AI-воркфлоу версии v1</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-200">
                  <p className="text-xs font-semibold text-indigo-900">РЕЗУЛЬТАТ:</p>
                  <p className="text-sm text-gray-700 mt-1">Готовая production-система и шаблоны</p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Массовое производство контента</h4>
                </div>
                <p className="text-sm text-purple-900 font-semibold mb-4">Недели 3-9 (7 недель интенсивного производства)</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">112 единиц контента (48 статей, 8 подкастов, 8 summary, 48 shorts)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Параллельная локализация (RU / EN / GR)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Отладка AI-воркфлоу в процессе</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Сокращение времени производства</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-200">
                  <p className="text-xs font-semibold text-purple-900">РЕЗУЛЬТАТ:</p>
                  <p className="text-sm text-gray-700 mt-1">Полный пул MVP-контента, масштабируемый процесс</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Публикация и работа с аудиторией</h4>
                </div>
                <p className="text-sm text-pink-900 font-semibold mb-4">Недели 4-12 (параллельно с производством)</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Поэтапная публикация (web, YouTube, socials)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Настройка аналитики и трекинга метрик</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Анализ вовлечённости и глубины потребления</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Корректировки на основе реакции</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-200">
                  <p className="text-xs font-semibold text-pink-900">РЕЗУЛЬТАТ:</p>
                  <p className="text-sm text-gray-700 mt-1">Проект в публичном пространстве, первые инсайты</p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Подготовка к масштабированию</h4>
                </div>
                <p className="text-sm text-orange-900 font-semibold mb-4">3-я неделя месяца 3 → конец месяца 3</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Разработка UI для AI-воркфлоу</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Финальный анализ метрик и поведения пользователей</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Рекомендации по развитию (новые темы, форматы, языки)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">Стратегия партнёрств</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <p className="text-xs font-semibold text-orange-900">РЕЗУЛЬТАТ:</p>
                  <p className="text-sm text-gray-700 mt-1">MVP как завершённый продукт, roadmap следующей фазы</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Budget Block */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-200">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Бюджет MVP
                </h3>
                <div className="text-2xl font-semibold text-gray-700 mb-5">
                  ≈ 85 000 euro
                </div>
                
                <ul className="space-y-2 text-gray-600 mb-5">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>креативная курация и создание визуального стиля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>редакторская работа и настройка фактчекинга</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>производство контента</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>кроссплатформенная дистрибуция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>настройка воркфлоу автоматизированного AI производства после этапа MVP</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    Разработка web application не учтена в стоимости и может обсуждаться отдельно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Результаты стадии MVP
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Устойчивый рост контента</h3>
              <p className="text-gray-700">Выход на ожидаемую производительность в рамках установленных форматов</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Управляемый рост аудитории</h3>
                <p className="text-gray-700">Растущие охваты и вовлечение аудитории. Готовность к выходу на новые сегменты аудитории, например создание раздела для детей.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Готовность к масштабированию</h3>
                <p className="text-gray-700">По темам, форматам и языкам с оптимизированной стоимостью единицы контента.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/themes/modern-cyprus.png"
            alt=""
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/70 via-purple-600/70 to-pink-600/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Культурный актив с долгосрочной ценностью
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            {t('mvpPage.missionSubtitle', language)}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {t('mvpPage.viewSiteMap', language)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
