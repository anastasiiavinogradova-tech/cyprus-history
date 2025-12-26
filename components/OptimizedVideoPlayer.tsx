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
            videoRef.current.play().catch((error) => {
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

  return (
    <video
      ref={videoRef}
      controls
      className={className}
      poster={poster}
      preload="metadata" // Load metadata first, then buffer as needed
      playsInline // Better mobile support
      muted={autoPlayOnView} // Required for autoplay
    >
      <source src={src} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
}

