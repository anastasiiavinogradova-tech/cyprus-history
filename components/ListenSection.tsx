'use client';

export default function ListenSection() {
  return (
    <section id="listen" className="py-16 md:py-24 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section number and title */}
        <div className="mb-12">
          <div className="flex items-baseline gap-6">
            <span className="font-serif text-8xl md:text-9xl font-light text-[#e8e4dc]">2</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Слушать
            </h2>
          </div>
        </div>

        {/* Podcast card */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-lg p-8 border border-[#e8e4dc]">
            <div className="flex items-start gap-6">
              {/* Podcast icon */}
              <div className="flex-shrink-0 w-24 h-24 bg-[#c4866b] rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              
              {/* Podcast info */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-2">
                  Подкаст: Мифы Древнего Кипра
                </h3>
                <p className="text-[#6b6b6b] mb-4">
                  Аудио-рассказ о легендах острова, богах и героях древности. Погрузитесь в атмосферу античных мифов.
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-6 py-2 bg-[#c4866b] text-white rounded-full hover:bg-[#b37a5f] transition-colors font-sans text-sm">
                    Слушать
                  </button>
                  <span className="text-sm text-[#6b6b6b]">45 минут</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming soon notice */}
          <p className="text-sm text-[#6b6b6b] mt-4 text-center">
            Скоро: аудио-версия всех глав для прослушивания в любое время
          </p>
        </div>
      </div>
    </section>
  );
}


