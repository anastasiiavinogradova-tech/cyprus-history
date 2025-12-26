'use client';

import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlayOnView?: boolean;
}

export default function OptimizedVideoPlayer({ 
  src, 
  poster, 
  className = "w-full aspect-video",
  autoPlayOnView = false 
}: OptimizedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(autoPlayOnView);
  const [showUnmuteHint, setShowUnmuteHint] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !autoPlayOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          // Auto-play when video comes into view (only once)
          if (entry.isIntersecting && !hasPlayed && videoRef.current) {
            // Must be muted for autoplay to work in browsers
            videoRef.current.muted = true;
            videoRef.current.play().then(() => {
              setShowUnmuteHint(true);
              // Hide hint after 3 seconds
              setTimeout(() => setShowUnmuteHint(false), 3000);
            }).catch((error) => {
              // Autoplay might be blocked by browser policy
              console.log('Autoplay blocked:', error);
            });
            setHasPlayed(true);
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [autoPlayOnView, hasPlayed]);

  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        className={className}
        poster={poster}
        preload="metadata"
        playsInline
        muted={autoPlayOnView}
        onVolumeChange={handleVolumeChange}
      >
        <source src={src} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      
      {/* Unmute hint - shows briefly when video autoplays */}
      {showUnmuteHint && isMuted && (
        <div className="absolute top-4 right-4 bg-black/75 text-white px-4 py-2 rounded-lg flex items-center gap-2 animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <span className="text-sm">Нажмите для звука</span>
        </div>
      )}
    </div>
  );
}

