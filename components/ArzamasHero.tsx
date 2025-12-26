'use client';

import Image from 'next/image';
import { Theme } from '@/data/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ArzamasHeroProps {
  theme: Theme;
}

export default function ArzamasHero({ theme }: ArzamasHeroProps) {
  const { language } = useLanguage();

  return (
    <section className="relative w-full bg-[#fdfcf8] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/themes/paper-texture.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Title */}
          <div className="z-10">
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-[#1a1a1a] mb-6">
              {theme.title[language]}
            </h1>
            <p className="font-sans text-xl md:text-2xl text-[#6b6b6b] leading-relaxed">
              {theme.description[language]}
            </p>
          </div>

          {/* Right: Collage */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main statue - Aphrodite */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[85%] z-20">
              <Image
                src="/images/themes/ancient-myths-hero-aphrodite.png"
                alt="Statue of Aphrodite"
                fill
                className="object-contain object-bottom"
                priority
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
    </section>
  );
}

