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


