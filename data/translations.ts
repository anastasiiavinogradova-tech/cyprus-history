import { Language } from '@/lib/LanguageContext';

export type TranslatedText = {
  ru: string;
  en: string;
  gr: string;
};

export const translations = {
  // Header
  siteTitle: {
    ru: 'Кипр. История',
    en: 'Cyprus. History',
    gr: 'Κύπρος. Ιστορία',
  },
  
  // Main page
  explorePeriods: {
    ru: 'Исследуйте периоды истории Кипра',
    en: 'Explore periods of Cyprus history',
    gr: 'Εξερευνήστε περιόδους της ιστορίας της Κύπρου',
  },
  allPeriods: {
    ru: 'Все периоды',
    en: 'All periods',
    gr: 'Όλες οι περίοδοι',
  },
  clickToExplore: {
    ru: 'Нажмите, чтобы узнать больше',
    en: 'Click to explore',
    gr: 'Κάντε κλικ για να εξερευνήσετε',
  },
  
  // Periods
  periods: {
    mythology: {
      ru: 'Мифология и доисторический Кипр',
      en: 'Mythology and Prehistoric Cyprus',
      gr: 'Μυθολογία και Προϊστορική Κύπρος',
    },
    antiquity: {
      ru: 'Античность',
      en: 'Antiquity',
      gr: 'Αρχαιότητα',
    },
    byzantine: {
      ru: 'Византия',
      en: 'Byzantine Period',
      gr: 'Βυζαντινή Περίοδος',
    },
    lusignan: {
      ru: 'Лузиньяны',
      en: 'Lusignan Period',
      gr: 'Περίοδος Λουζινιάν',
    },
    venetian: {
      ru: 'Венецианцы',
      en: 'Venetian Period',
      gr: 'Ενετική Περίοδος',
    },
    ottoman: {
      ru: 'Османы',
      en: 'Ottoman Period',
      gr: 'Οθωμανική Περίοδος',
    },
    british: {
      ru: 'Британский период',
      en: 'British Period',
      gr: 'Βρετανική Περίοδος',
    },
    modern20: {
      ru: 'Современная история XX века',
      en: 'Modern History 20th Century',
      gr: 'Σύγχρονη Ιστορία 20ού Αιώνα',
    },
    century21: {
      ru: 'XXI век',
      en: '21st Century',
      gr: '21ος Αιώνας',
    },
  },
  
  // Video sections
  videoSections: {
    shortStories: {
      ru: 'Короткие истории',
      en: 'Short Stories',
      gr: 'Σύντομες Ιστορίες',
    },
    videoBrief: {
      ru: 'Видео обзор',
      en: 'Video Brief',
      gr: 'Βίντεο Επισκόπηση',
    },
    deepDive: {
      ru: 'Глубокое погружение',
      en: 'Deep Dive Podcast',
      gr: 'Βαθιά Κατάδυση',
    },
  },
  
  // Navigation
  map: {
    ru: 'Карта',
    en: 'Map',
    gr: 'Χάρτης',
  },
  onMap: {
    ru: 'на карте',
    en: 'on map',
    gr: 'στον χάρτη',
  },
  backToHome: {
    ru: 'На главную',
    en: 'Back to Home',
    gr: 'Πίσω στην Αρχική',
  },
  
  // New menu items
  places: {
    ru: 'Места',
    en: 'Places',
    gr: 'Τόποι',
  },
  events: {
    ru: 'События',
    en: 'Events',
    gr: 'Εκδηλώσεις',
  },
  mvpConcept: {
    ru: 'MVP концепция',
    en: 'MVP Concept',
    gr: 'Έννοια MVP',
  },
  
  // MVP Concept page
  mvpPage: {
    heroTitle: {
      ru: 'Кипр. История',
      en: 'Cyprus. History',
      gr: 'Κύπρος. Ιστορία',
    },
    heroSubtitle: {
      ru: 'Цифровой медиа-проект, посвящённый истории, культуре и мифологии Кипра',
      en: 'Digital media project dedicated to the history, culture and mythology of Cyprus',
      gr: 'Ψηφιακό έργο μέσων επικοινωνίας αφιερωμένο στην ιστορία, τον πολιτισμό και τη μυθολογία της Κύπρου',
    },
    heroDescription: {
      ru: 'Единая точка входа в культурное и историческое знание об острове',
      en: 'Single entry point to cultural and historical knowledge about the island',
      gr: 'Ενιαίο σημείο εισόδου στην πολιτιστική και ιστορική γνώση για το νησί',
    },
    missionTitle: {
      ru: 'Миссия проекта',
      en: 'Project Mission',
      gr: 'Αποστολή του Έργου',
    },
    missionText: {
      ru: 'Популяризировать историю и культурное наследие Кипра, делая его доступным, интересным и полезным для широкой аудитории, без упрощения смысла и без академической отстранённости.',
      en: 'To popularize the history and cultural heritage of Cyprus, making it accessible, interesting and useful for a wide audience, without simplifying the meaning and without academic detachment.',
      gr: 'Να δημοσιοποιήσει την ιστορία και την πολιτιστική κληρονομιά της Κύπρου, καθιστώντας την προσβάσιμη, ενδιαφέρουσα και χρήσιμη για ένα ευρύ κοινό, χωρίς να απλουστεύει το νόημα και χωρίς ακαδημαϊκή απόσταση.',
    },
    missionSubtitle: {
      ru: 'Репутационный проект, создающий цифровое наследие Кипра',
      en: 'A reputation project creating the digital heritage of Cyprus',
      gr: 'Ένα έργο φήμης που δημιουργεί την ψηφιακή κληρονομιά της Κύπρου',
    },
    whyNeededTitle: {
      ru: 'Почему проект нужен Кипру',
      en: 'Why Cyprus Needs This Project',
      gr: 'Γιατί η Κύπρος Χρειάζεται Αυτό το Έργο',
    },
    noSystematic: {
      ru: 'Нет систематизированного знания',
      en: 'No systematic knowledge',
      gr: 'Δεν υπάρχει συστηματική γνώση',
    },
    noSystematicDesc: {
      ru: 'Информация об истории и культуре Кипра фрагментирована между академическими текстами, туристическими буклетами и локальными источниками',
      en: 'Information about Cyprus history and culture is fragmented between academic texts, tourist brochures and local sources',
      gr: 'Οι πληροφορίες σχετικά με την ιστορία και τον πολιτισμό της Κύπρου είναι κατακερματισμένες μεταξύ ακαδημαϊκών κειμένων, τουριστικών φυλλαδίων και τοπικών πηγών',
    },
    limitedFormats: {
      ru: 'Ограниченность форматов',
      en: 'Limited formats',
      gr: 'Περιορισμένες μορφές',
    },
    limitedFormatsDesc: {
      ru: 'Музеи, книги, лекции — форматы, которые требуют усилий. Нет лёгких точек входа в тему для массовой аудитории',
      en: 'Museums, books, lectures - formats that require effort. There are no easy entry points to the topic for a mass audience',
      gr: 'Μουσεία, βιβλία, διαλέξεις - μορφές που απαιτούν προσπάθεια. Δεν υπάρχουν εύκολα σημεία εισόδου στο θέμα για ένα ευρύ κοινό',
    },
    languageBarriers: {
      ru: 'Языковые барьеры',
      en: 'Language barriers',
      gr: 'Γλωσσικά εμπόδια',
    },
    languageBarriersDesc: {
      ru: 'Качественный контент часто доступен только на греческом или английском, что исключает значительные сегменты аудитории',
      en: 'Quality content is often available only in Greek or English, which excludes significant audience segments',
      gr: 'Το ποιοτικό περιεχόμενο είναι συχνά διαθέσιμο μόνο στα ελληνικά ή τα αγγλικά, γεγονός που αποκλείει σημαντικά κοινά',
    },
    productionTitle: {
      ru: 'Подход к эффективному производству',
      en: 'Approach to Effective Production',
      gr: 'Προσέγγιση για Αποτελεσματική Παραγωγή',
    },
    productionSubtitle: {
      ru: 'Масштабируемая модель без экспоненциального роста затрат',
      en: 'Scalable model without exponential cost growth',
      gr: 'Κλιμακωτό μοντέλο χωρίς εκθετική αύξηση κόστους',
    },
    maxValueTitle: {
      ru: 'Модель максимальной ценности',
      en: 'Maximum Value Model',
      gr: 'Μοντέλο Μέγιστης Αξίας',
    },
    theme: {
      ru: 'ТЕМА',
      en: 'THEME',
      gr: 'ΘΕΜΑ',
    },
    themeDesc: {
      ru: 'Единый смысловой блок',
      en: 'Single semantic block',
      gr: 'Ενιαίο σημασιολογικό μπλοκ',
    },
    format: {
      ru: 'ФОРМАТ',
      en: 'FORMAT',
      gr: 'ΜΟΡΦΗ',
    },
    formatDesc: {
      ru: 'Текст, видео, аудио',
      en: 'Text, video, audio',
      gr: 'Κείμενο, βίντεο, ήχος',
    },
    audience: {
      ru: 'АУДИТОРИЯ',
      en: 'AUDIENCE',
      gr: 'ΚΟΙΝΟ',
    },
    audienceDesc: {
      ru: 'Разные точки контакта',
      en: 'Different contact points',
      gr: 'Διαφορετικά σημεία επαφής',
    },
    result: {
      ru: 'Увеличение охвата без повторного производства «с нуля»',
      en: 'Increased reach without re-production from scratch',
      gr: 'Αύξηση της εμβέλειας χωρίς επαναπαραγωγή από την αρχή',
    },
    exampleTitle: {
      ru: 'Интерактивный пример готовой темы: «Мифы Древнего Кипра»',
      en: 'Interactive example of a ready-made theme: "Ancient Myths of Cyprus"',
      gr: 'Διαδραστικό παράδειγμα ενός έτοιμου θέματος: «Αρχαίοι Μύθοι της Κύπρου»',
    },
    exampleSubtitle: {
      ru: 'Это интерактивный пример MVP темы с видео, статьями, интерактивной картой и AI-подкастом',
      en: 'This is an interactive example of an MVP theme with videos, articles, interactive map and AI podcast',
      gr: 'Αυτό είναι ένα διαδραστικό παράδειγμα ενός θέματος MVP με βίντεο, άρθρα, διαδραστικό χάρτη και podcast AI',
    },
    automationTitle: {
      ru: 'Автоматизация производства',
      en: 'Production Automation',
      gr: 'Αυτοματισμός Παραγωγής',
    },
    aiTool: {
      ru: 'ИИ как инструмент',
      en: 'AI as a tool',
      gr: 'AI ως εργαλείο',
    },
    aiToolDesc: {
      ru: 'Ускорение производства, а не замена экспертизе',
      en: 'Accelerating production, not replacing expertise',
      gr: 'Επιτάχυνση παραγωγής, όχι αντικατάσταση εμπειρογνωμοσύνης',
    },
    scaling: {
      ru: 'Масштабирование',
      en: 'Scaling',
      gr: 'Κλιμάκωση',
    },
    scalingDesc: {
      ru: 'Адаптация на 3 языка и форматы',
      en: 'Adaptation to 3 languages and formats',
      gr: 'Προσαρμογή σε 3 γλώσσες και μορφές',
    },
    aiPodcasts: {
      ru: 'AI-подкасты',
      en: 'AI podcasts',
      gr: 'AI podcasts',
    },
    aiPodcastsDesc: {
      ru: 'Полностью AI производство',
      en: 'Fully AI production',
      gr: 'Πλήρως AI παραγωγή',
    },
    touchpointsTitle: {
      ru: 'Точки контакта с аудиторией',
      en: 'Audience Touchpoints',
      gr: 'Σημεία Επαφής με το Κοινό',
    },
    touchpointsSubtitle: {
      ru: 'Запуск сразу на нескольких платформах создает больше точек контакта с аудиторией и ускоряет рост проекта',
      en: 'Launching on multiple platforms at once creates more audience touchpoints and accelerates project growth',
      gr: 'Η εκκίνηση σε πολλές πλατφόρμες ταυτόχρονα δημιουργεί περισσότερα σημεία επαφής με το κοινό και επιταχύνει την ανάπτυξη του έργου',
    },
    webApp: {
      ru: 'Web Application',
      en: 'Web Application',
      gr: 'Web Application',
    },
    knowledgeBase: {
      ru: 'Основная база знаний',
      en: 'Main knowledge base',
      gr: 'Κύρια βάση γνώσεων',
    },
    navCenter: {
      ru: 'Навигационный центр',
      en: 'Navigation center',
      gr: 'Κέντρο πλοήγησης',
    },
    interactiveMap: {
      ru: 'Интерактивная карта',
      en: 'Interactive map',
      gr: 'Διαδραστικός χάρτης',
    },
    scalingFoundation: {
      ru: 'Фундамент для масштабирования',
      en: 'Foundation for scaling',
      gr: 'Βάση για κλιμάκωση',
    },
    youtubeChannel: {
      ru: 'YouTube Channel',
      en: 'YouTube Channel',
      gr: 'YouTube Channel',
    },
    organicChannel: {
      ru: 'Органический канал дистрибуции',
      en: 'Organic distribution channel',
      gr: 'Οργανικό κανάλι διανομής',
    },
    multilingual: {
      ru: 'Мультиязычный (RU / EN / GR)',
      en: 'Multilingual (RU / EN / GR)',
      gr: 'Πολύγλωσσο (RU / EN / GR)',
    },
    separateAudio: {
      ru: 'Отдельные аудиодорожки',
      en: 'Separate audio tracks',
      gr: 'Ξεχωριστά κομμάτια ήχου',
    },
    webTransitions: {
      ru: 'Переходы на web-версию',
      en: 'Transitions to web version',
      gr: 'Μεταβάσεις στην έκδοση ιστού',
    },
    socialMedia: {
      ru: 'TikTok / Facebook',
      en: 'TikTok / Facebook',
      gr: 'TikTok / Facebook',
    },
    shortFormats: {
      ru: 'Короткие форматы',
      en: 'Short formats',
      gr: 'Σύντομες μορφές',
    },
    fastReach: {
      ru: 'Быстрый охват',
      en: 'Fast reach',
      gr: 'Γρήγορη εμβέλεια',
    },
    newAudience: {
      ru: 'Привлечение новой аудитории',
      en: 'Attracting new audience',
      gr: 'Προσέλκυση νέου κοινού',
    },
    contentFunnel: {
      ru: 'Воронка в основной контент',
      en: 'Funnel to main content',
      gr: 'Χωνί προς κύριο περιεχόμενο',
    },
    eventsCalendar: {
      ru: 'Афиша мероприятий',
      en: 'Events Calendar',
      gr: 'Ημερολόγιο Εκδηλώσεων',
    },
    eventsDesc1: {
      ru: 'Афиша мероприятий позволяет привлекать аудиторию через интерес к досугу и событиям, превращая портал в культурный навигатор.',
      en: 'The events calendar allows attracting audience through interest in leisure and events, turning the portal into a cultural navigator.',
      gr: 'Το ημερολόγιο εκδηλώσεων επιτρέπει την προσέλκυση κοινού μέσω ενδιαφέροντος για αναψυχή και εκδηλώσεις, μετατρέποντας την πύλη σε πολιτιστικό πλοηγό.',
    },
    eventsDesc2: {
      ru: 'Это создаёт органический трафик даже тогда, когда пользователь не ищет просвещение, а ищет впечатления.',
      en: 'This creates organic traffic even when the user is not looking for enlightenment, but for impressions.',
      gr: 'Αυτό δημιουργεί οργανική κίνηση ακόμα και όταν ο χρήστης δεν αναζητά διαφώτιση, αλλά εντυπώσεις.',
    },
    reputation: {
      ru: 'Репутация',
      en: 'Reputation',
      gr: 'Φήμη',
    },
    reputationDesc: {
      ru: 'Поддержка культурной идентичности региона',
      en: 'Supporting regional cultural identity',
      gr: 'Υποστήριξη της πολιτιστικής ταυτότητας της περιοχής',
    },
    education: {
      ru: 'Образование',
      en: 'Education',
      gr: 'Εκπαίδευση',
    },
    educationDesc: {
      ru: 'Доступное знание для резидентов и туристов',
      en: 'Accessible knowledge for residents and tourists',
      gr: 'Προσβάσιμη γνώση για κατοίκους και τουρίστες',
    },
    accessibility: {
      ru: 'Доступность',
      en: 'Accessibility',
      gr: 'Προσβασιμότητα',
    },
    accessibilityDesc: {
      ru: 'Многоформатный контент для разной аудитории',
      en: 'Multi-format content for different audiences',
      gr: 'Περιεχόμενο πολλαπλών μορφών για διαφορετικό κοινό',
    },
    disclaimer: {
      ru: '*При разработке концепции учитывалась задача максимальной автоматизации производства для достижения минимальной стоимости единицы контента при масштабировании.',
      en: '*The concept was developed with the goal of maximum production automation to achieve minimum unit content cost during scaling.',
      gr: '*Η ιδέα αναπτύχθηκε με στόχο τη μέγιστη αυτοματοποίηση παραγωγής για την επίτευξη ελάχιστου κόστους μονάδας περιεχομένου κατά την κλιμάκωση.',
    },
    viewSiteMap: {
      ru: 'Смотреть схему сайта',
      en: 'View Site Map',
      gr: 'Προβολή χάρτη ιστότοπου',
    },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value[lang] || key;
}




