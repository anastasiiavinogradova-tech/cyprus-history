'use client';

import { VideoContent } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/data/translations';

interface VideoPreviewProps {
  videos: VideoContent[];
}

export default function VideoPreview({ videos }: VideoPreviewProps) {
  const { language } = useLanguage();

  const getVideoTypeLabel = (type: string) => {
    switch(type) {
      case 'short-stories':
        return t('videoSections.shortStories', language);
      case 'video-brief':
        return t('videoSections.videoBrief', language);
      case 'deep-dive':
        return t('videoSections.deepDive', language);
      default:
        return type;
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-900">
          {language === 'ru' ? 'Видео материалы' : language === 'gr' ? 'Βίντεο Υλικό' : 'Video Content'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.type}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  src={`/videos/${video.filename}`}
                  controls
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Play overlay - shows when video is paused */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  {getVideoTypeLabel(video.type)}
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {video.title[language]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

