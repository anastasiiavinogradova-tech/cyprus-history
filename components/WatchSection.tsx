'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VideoContent } from '@/data/types';

interface WatchSectionProps {
  videos: VideoContent[];
}

export default function WatchSection({ videos }: WatchSectionProps) {
  const [playingShortsVideo, setPlayingShortsVideo] = useState(false);
  const [playingSummaryVideo, setPlayingSummaryVideo] = useState(false);

  const shortsVideos = videos.filter(v => v.type === 'short-stories');
  const summaryVideo = videos.find(v => v.type === 'video-brief');
  
  // Используем первое видео из shorts для отображения
  const mainShortsVideo = shortsVideos[0];

  return (
    <section id="watch" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section number and title */}
        <div className="mb-8">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-7xl md:text-8xl font-light text-[#e8e4dc]">1</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a]">
              Смотреть
            </h2>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: Shorts Series - Vertical card */}
          {mainShortsVideo && (
            <div className="flex flex-col items-center">
              {!playingShortsVideo ? (
                <div 
                  className="group cursor-pointer w-full max-w-md" 
                  onClick={() => setPlayingShortsVideo(true)}
                >
                  <div className="relative aspect-[9/16] max-h-[462px] bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/themes/ancient-myths-shorts-thumb.png"
                      alt="Shorts Series"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-serif text-xl font-semibold mb-1">Shorts Series</h3>
                        <p className="text-xs opacity-90">Серия коротких видео</p>
                      </div>
                    </div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <svg className="w-5 h-5 text-[#1a1a1a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b6b6b]">
                    {mainShortsVideo.title.ru}
                  </p>
                </div>
              ) : (
                <div className="relative aspect-[9/16] max-h-[462px] bg-black rounded-lg overflow-hidden mb-3 w-full max-w-md">
                  <video
                    key={mainShortsVideo.filename}
                    src={`/videos/${encodeURIComponent(mainShortsVideo.filename)}`}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                    onEnded={() => setPlayingShortsVideo(false)}
                  >
                    <source src={`/videos/${encodeURIComponent(mainShortsVideo.filename)}`} type="video/mp4" />
                  </video>
                  <button
                    onClick={() => setPlayingShortsVideo(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Right column: Summary Video + Listen Section */}
          <div className="space-y-6 flex flex-col items-center">
            {/* Summary Video - Horizontal card */}
            {summaryVideo && (
              <div className="w-full">
                {!playingSummaryVideo ? (
                  <div className="group cursor-pointer w-full max-w-2xl mx-auto" onClick={() => setPlayingSummaryVideo(true)}>
                    <div className="relative aspect-video max-h-[200px] bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <Image
                        src="/images/themes/ancient-myths-summary-thumb.png"
                        alt="Summary Video"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <h3 className="font-serif text-xl font-semibold mb-1">{summaryVideo.title.ru}</h3>
                          <p className="text-xs opacity-90">20 минут</p>
                        </div>
                      </div>
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <svg className="w-5 h-5 text-[#1a1a1a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#6b6b6b]">
                      Полный обзор темы
                    </p>
                  </div>
                ) : (
                  <div className="relative aspect-video max-h-[200px] bg-black rounded-lg overflow-hidden mb-3 w-full max-w-2xl mx-auto">
                    <video
                      key={summaryVideo.filename}
                      src={`/videos/${encodeURIComponent(summaryVideo.filename)}`}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                      onEnded={() => setPlayingSummaryVideo(false)}
                    >
                      <source src={`/videos/${encodeURIComponent(summaryVideo.filename)}`} type="video/mp4" />
                    </video>
                    <button
                      onClick={() => setPlayingSummaryVideo(false)}
                      className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Listen Section - Integrated */}
            <div id="listen" className="w-full max-w-2xl">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-5xl font-light text-[#e8e4dc]">2</span>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a]">
                  Слушать
                </h3>
              </div>

              <div className="bg-white rounded-lg p-4 border border-[#e8e4dc]">
                <div className="flex items-start gap-3">
                  {/* Podcast icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c4866b] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  
                  {/* Podcast info */}
                  <div className="flex-1">
                    <h4 className="font-serif text-base font-semibold text-[#1a1a1a] mb-1">
                      Подкаст: Мифы Древнего Кипра
                    </h4>
                    <p className="text-xs text-[#6b6b6b] mb-2">
                      Аудио-рассказ о легендах острова, богах и героях древности
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-1.5 bg-[#c4866b] text-white rounded-full hover:bg-[#b37a5f] transition-colors font-sans text-xs">
                        Слушать
                      </button>
                      <span className="text-xs text-[#6b6b6b]">45 минут</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

