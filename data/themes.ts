import { Theme } from './types';
import { ancientMythsTheme, ancientMythsChapters, ancientMythsMapPoints } from './content/ancient-myths';

// Placeholder themes data - only Ancient Myths will have full content
export const themes: Theme[] = [
  {
    id: 'ancient-myths',
    slug: 'ancient-myths',
    period: 'mythology',
    title: {
      ru: 'Мифы Древнего Кипра',
      en: 'Ancient Myths of Cyprus',
      gr: 'Αρχαίοι Μύθοι της Κύπρου',
    },
    description: {
      ru: 'Исследуйте легенды о рождении Афродиты, культы древних богов и мифических героев острова',
      en: 'Explore the legends of Aphrodite\'s birth, ancient god cults, and mythical heroes of the island',
      gr: 'Εξερευνήστε τους θρύλους της γέννησης της Αφροδίτης, τις λατρείες των αρχαίων θεών και των μυθικών ηρώων του νησιού',
    },
    image: 'https://picsum.photos/seed/cyprus-myths/1200/800',
    chapters: ancientMythsChapters,
    mapPoints: ancientMythsMapPoints,
  },
  {
    id: 'bronze-age',
    slug: 'bronze-age',
    period: 'antiquity',
    title: {
      ru: 'Бронзовый век Кипра',
      en: 'Bronze Age Cyprus',
      gr: 'Εποχή Χαλκού στην Κύπρο',
    },
    description: {
      ru: 'Период расцвета медной торговли и формирования кипрской цивилизации',
      en: 'The flourishing period of copper trade and formation of Cypriot civilization',
      gr: 'Η περίοδος ακμής του εμπορίου χαλκού και της διαμόρφωσης του κυπριακού πολιτισμού',
    },
    image: 'https://picsum.photos/seed/bronze-age/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'byzantine-legacy',
    slug: 'byzantine-legacy',
    period: 'byzantine',
    title: {
      ru: 'Византийское наследие',
      en: 'Byzantine Legacy',
      gr: 'Βυζαντινή Κληρονομιά',
    },
    description: {
      ru: 'Христианское искусство, архитектура и культура византийского периода',
      en: 'Christian art, architecture, and culture of the Byzantine period',
      gr: 'Χριστιανική τέχνη, αρχιτεκτονική και πολιτισμός της βυζαντινής περιόδου',
    },
    image: 'https://picsum.photos/seed/byzantine/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'crusader-kingdoms',
    slug: 'crusader-kingdoms',
    period: 'lusignan',
    title: {
      ru: 'Королевство крестоносцев',
      en: 'Crusader Kingdoms',
      gr: 'Βασίλεια των Σταυροφόρων',
    },
    description: {
      ru: 'Период правления династии Лузиньянов и влияние крестовых походов',
      en: 'The reign of the Lusignan dynasty and the influence of the Crusades',
      gr: 'Η βασιλεία της δυναστείας των Λουζινιάν και η επιρροή των Σταυροφοριών',
    },
    image: 'https://picsum.photos/seed/crusader/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'venetian-fortresses',
    slug: 'venetian-fortresses',
    period: 'venetian',
    title: {
      ru: 'Венецианские крепости',
      en: 'Venetian Fortresses',
      gr: 'Ενετικά Φρούρια',
    },
    description: {
      ru: 'Укрепления и архитектурное наследие венецианского владычества',
      en: 'Fortifications and architectural heritage of Venetian rule',
      gr: 'Οχυρώσεις και αρχιτεκτονική κληρονομιά της ενετικής κυριαρχίας',
    },
    image: 'https://picsum.photos/seed/venetian/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'ottoman-period',
    slug: 'ottoman-period',
    period: 'ottoman',
    title: {
      ru: 'Османский период',
      en: 'Ottoman Period',
      gr: 'Οθωμανική Περίοδος',
    },
    description: {
      ru: 'Три века османского правления и культурного взаимодействия',
      en: 'Three centuries of Ottoman rule and cultural interaction',
      gr: 'Τρεις αιώνες οθωμανικής κυριαρχίας και πολιτιστικής αλληλεπίδρασης',
    },
    image: 'https://picsum.photos/seed/ottoman/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'british-colonial',
    slug: 'british-colonial',
    period: 'british',
    title: {
      ru: 'Британское колониальное правление',
      en: 'British Colonial Rule',
      gr: 'Βρετανική Αποικιακή Κυριαρχία',
    },
    description: {
      ru: 'Модернизация острова и путь к независимости',
      en: 'Modernization of the island and the path to independence',
      gr: 'Εκσυγχρονισμός του νησιού και ο δρόμος προς την ανεξαρτησία',
    },
    image: 'https://picsum.photos/seed/british/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'independence-struggle',
    slug: 'independence-struggle',
    period: 'modern20',
    title: {
      ru: 'Борьба за независимость',
      en: 'Struggle for Independence',
      gr: 'Αγώνας για την Ανεξαρτησία',
    },
    description: {
      ru: 'EOKA, независимость и события 1974 года',
      en: 'EOKA, independence, and the events of 1974',
      gr: 'ΕΟΚΑ, ανεξαρτησία και τα γεγονότα του 1974',
    },
    image: 'https://picsum.photos/seed/independence/1200/800',
    chapters: [],
    mapPoints: [],
  },
  {
    id: 'modern-cyprus',
    slug: 'modern-cyprus',
    period: 'century21',
    title: {
      ru: 'Современный Кипр',
      en: 'Modern Cyprus',
      gr: 'Σύγχρονη Κύπρος',
    },
    description: {
      ru: 'Европейская интеграция и современные вызовы',
      en: 'European integration and contemporary challenges',
      gr: 'Ευρωπαϊκή ολοκλήρωση και σύγχρονες προκλήσεις',
    },
    image: 'https://picsum.photos/seed/modern-cyprus/1200/800',
    chapters: [],
    mapPoints: [],
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find(theme => theme.slug === slug);
}

export function getThemesByPeriod(period: string): Theme[] {
  if (period === 'all') return themes;
  return themes.filter(theme => theme.period === period);
}

