export interface Event {
  id: string;
  title: {
    ru: string;
    en: string;
    gr: string;
  };
  description: {
    ru: string;
    en: string;
    gr: string;
  };
  date: string;
  location: string;
  city: string;
  category: 'carnival' | 'festival' | 'concert' | 'exhibition' | 'theater' | 'cultural';
  image: string;
  price?: {
    ru: string;
    en: string;
    gr: string;
  };
  website?: string;
}

export const events: Event[] = [
  {
    id: 'epiphany-2025',
    title: {
      ru: 'Праздник Богоявления (Крещение)',
      en: 'Epiphany (Blessing of the Waters)',
      gr: 'Θεοφάνεια (Αγιασμός των Υδάτων)',
    },
    description: {
      ru: 'Традиционная церемония благословения вод. Священники бросают крест в море, а молодые люди ныряют за ним.',
      en: 'Traditional water blessing ceremony. Priests throw a cross into the sea and young men dive to retrieve it.',
      gr: 'Παραδοσιακή τελετή ευλογίας των υδάτων με κατάδυση για τον Σταυρό.',
    },
    date: '2025-01-06',
    location: 'Набережные городов',
    city: 'Лимассол, Пафос, Ларнака',
    category: 'cultural',
    image: '/images/themes/byzantine-legacy.png',
  },
  {
    id: 'limassol-carnival-2025',
    title: {
      ru: 'Лимассольский карнавал 2025',
      en: 'Limassol Carnival 2025',
      gr: 'Καρναβάλι Λεμεσού 2025',
    },
    description: {
      ru: 'Крупнейший карнавал Кипра! Костюмированные парады, музыка, танцы и веселье. Кульминация - Большой парад в последнее воскресенье.',
      en: 'Cyprus\' biggest carnival! Costume parades, music, dancing and fun. Culminates in the Grand Parade on final Sunday.',
      gr: 'Το μεγαλύτερο καρναβάλι της Κύπρου! Παρελάσεις, μουσική και χορός.',
    },
    date: '2025-02-20 - 2025-03-02',
    location: 'Центр города',
    city: 'Лимассол',
    category: 'carnival',
    image: '/images/themes/modern-cyprus.png',
    price: {
      ru: 'Бесплатно',
      en: 'Free',
      gr: 'Δωρεάν',
    },
    website: 'https://www.limassolcarnival.com.cy',
  },
  {
    id: 'opera-aida-2025',
    title: {
      ru: 'Опера "Аида" Верди',
      en: 'Verdi\'s Opera "Aida"',
      gr: 'Όπερα "Αΐντα" του Βέρντι',
    },
    description: {
      ru: 'Классическая опера Джузеппе Верди в исполнении Кипрской государственной оперы. Величественная постановка с оркестром.',
      en: 'Giuseppe Verdi\'s classic opera performed by Cyprus State Opera. Grand production with full orchestra.',
      gr: 'Κλασική όπερα του Βέρντι από την Κρατική Όπερα Κύπρου.',
    },
    date: '2025-01-25, 2025-01-26',
    location: 'Муниципальный театр Никосии',
    city: 'Никосия',
    category: 'theater',
    image: '/images/themes/byzantine-legacy.png',
    price: {
      ru: '€25-60',
      en: '€25-60',
      gr: '€25-60',
    },
    website: 'http://www.satco.org.cy',
  },
  {
    id: 'contemporary-art-jan',
    title: {
      ru: 'Выставка современного искусства: Кипрские художники',
      en: 'Contemporary Art Exhibition: Cypriot Artists',
      gr: 'Έκθεση Σύγχρονης Τέχνης: Κύπριοι Καλλιτέχνες',
    },
    description: {
      ru: 'Коллективная выставка работ современных кипрских художников. Живопись, скульптура и инсталляции.',
      en: 'Collective exhibition of contemporary Cypriot artists. Paintings, sculptures and installations.',
      gr: 'Συλλογική έκθεση σύγχρονων Κυπρίων καλλιτεχνών.',
    },
    date: '2025-01-10 - 2025-02-28',
    location: 'Галерея современного искусства',
    city: 'Никосия',
    category: 'exhibition',
    image: '/images/themes/modern-cyprus.png',
    price: {
      ru: '€5',
      en: '€5',
      gr: '€5',
    },
  },
  {
    id: 'jazz-festival-jan',
    title: {
      ru: 'Джазовый вечер в Старом городе',
      en: 'Jazz Evening in Old Town',
      gr: 'Βραδιά Τζαζ στην Παλιά Πόλη',
    },
    description: {
      ru: 'Концерт джазового трио в атмосферном дворике Старого города Никосии. Классический и современный джаз.',
      en: 'Jazz trio concert in atmospheric Old Town Nicosia courtyard. Classic and modern jazz.',
      gr: 'Συναυλία τζαζ τρίο σε αυλή της Παλιάς Πόλης Λευκωσίας.',
    },
    date: '2025-01-18',
    location: 'Культурный центр Старого города',
    city: 'Никосия',
    category: 'concert',
    image: '/images/themes/british-colonial.png',
    price: {
      ru: '€15',
      en: '€15',
      gr: '€15',
    },
  },
  {
    id: 'wine-festival-feb',
    title: {
      ru: 'Фестиваль кипрского вина',
      en: 'Cyprus Wine Festival',
      gr: 'Φεστιβάλ Κυπριακού Κρασιού',
    },
    description: {
      ru: 'Дегустация местных вин, мастер-классы виноделов, традиционная музыка и закуски. Представлены лучшие винодельни Кипра.',
      en: 'Local wine tasting, winemaker workshops, traditional music and snacks. Featuring Cyprus\' finest wineries.',
      gr: 'Γευσιγνωσία τοπικών κρασιών με παραδοσιακή μουσική.',
    },
    date: '2025-02-08 - 2025-02-09',
    location: 'Муниципальный парк',
    city: 'Лимассол',
    category: 'festival',
    image: '/images/themes/ottoman-period.png',
    price: {
      ru: '€10 (дегустация включена)',
      en: '€10 (tasting included)',
      gr: '€10 (γευσιγνωσία)',
    },
  },
  {
    id: 'ballet-swan-lake',
    title: {
      ru: 'Балет "Лебединое озеро"',
      en: 'Swan Lake Ballet',
      gr: 'Μπαλέτο "Η Λίμνη των Κύκνων"',
    },
    description: {
      ru: 'Легендарный балет Чайковского в исполнении приглашенной балетной труппы. Классическая постановка с живым оркестром.',
      en: 'Tchaikovsky\'s legendary ballet performed by guest ballet company. Classic production with live orchestra.',
      gr: 'Θρυλικό μπαλέτο του Τσαϊκόφσκι.',
    },
    date: '2025-02-14',
    location: 'Театр Пттихио',
    city: 'Лимассол',
    category: 'theater',
    image: '/images/themes/british-colonial.png',
    price: {
      ru: '€30-75',
      en: '€30-75',
      gr: '€30-75',
    },
  },
  {
    id: 'traditional-music-fest',
    title: {
      ru: 'Фестиваль традиционной кипрской музыки',
      en: 'Traditional Cypriot Music Festival',
      gr: 'Φεστιβάλ Παραδοσιακής Κυπριακής Μουσικής',
    },
    description: {
      ru: 'Вечер традиционной кипрской музыки с народными инструментами. Выступления местных ансамблей и танцевальных групп.',
      en: 'Evening of traditional Cypriot music with folk instruments. Performances by local ensembles and dance groups.',
      gr: 'Βραδιά παραδοσιακής κυπριακής μουσικής με λαϊκά όργανα.',
    },
    date: '2025-01-31',
    location: 'Культурный центр',
    city: 'Пафос',
    category: 'concert',
    image: '/images/themes/ottoman-period.png',
    price: {
      ru: '€12',
      en: '€12',
      gr: '€12',
    },
  },
  {
    id: 'photography-exhibition',
    title: {
      ru: 'Фотовыставка "Кипр: прошлое и настоящее"',
      en: 'Photo Exhibition "Cyprus: Past and Present"',
      gr: 'Φωτογραφική Έκθεση "Κύπρος: Παρελθόν και Παρόν"',
    },
    description: {
      ru: 'Уникальная коллекция исторических и современных фотографий Кипра. Сравнение одних и тех же мест в разные эпохи.',
      en: 'Unique collection of historical and contemporary photos of Cyprus. Comparison of same places across different eras.',
      gr: 'Μοναδική συλλογή ιστορικών και σύγχρονων φωτογραφιών της Κύπρου.',
    },
    date: '2025-01-15 - 2025-02-15',
    location: 'Музей Левентиса',
    city: 'Никосия',
    category: 'exhibition',
    image: '/images/themes/modern-cyprus.png',
    price: {
      ru: 'Бесплатно',
      en: 'Free',
      gr: 'Δωρεάν',
    },
    website: 'http://www.leventismuseum.org.cy/',
  },
  {
    id: 'childrens-theater',
    title: {
      ru: 'Детский спектакль "Кипрские сказки"',
      en: 'Children\'s Play "Cypriot Fairy Tales"',
      gr: 'Παιδική Παράσταση "Κυπριακά Παραμύθια"',
    },
    description: {
      ru: 'Интерактивный спектакль для детей на основе кипрских народных сказок. Яркие костюмы, музыка и участие зрителей.',
      en: 'Interactive play for children based on Cypriot folk tales. Colorful costumes, music and audience participation.',
      gr: 'Διαδραστική παράσταση για παιδιά βασισμένη σε κυπριακά παραμύθια.',
    },
    date: '2025-02-22',
    location: 'Театр Пафоса',
    city: 'Пафос',
    category: 'theater',
    image: '/images/themes/ancient-myths.png',
    price: {
      ru: '€8',
      en: '€8',
      gr: '€8',
    },
  },
];


