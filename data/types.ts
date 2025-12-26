import { TranslatedText } from './translations';

export type Period = 
  | 'mythology' 
  | 'antiquity' 
  | 'byzantine' 
  | 'lusignan' 
  | 'venetian' 
  | 'ottoman' 
  | 'british' 
  | 'modern20' 
  | 'century21';

export interface MapPoint {
  id: string;
  name: TranslatedText;
  coordinates: [number, number]; // [lat, lng]
  description: TranslatedText;
}

export interface Chapter {
  id: string;
  slug: string;
  title: TranslatedText;
  content: TranslatedText;
  image: string;
  mapPointId?: string;
}

export interface Theme {
  id: string;
  slug: string;
  period: Period;
  title: TranslatedText;
  description: TranslatedText;
  image: string;
  chapters: Chapter[];
  mapPoints: MapPoint[];
}

export interface VideoContent {
  type: 'short-stories' | 'video-brief' | 'deep-dive';
  title: TranslatedText;
  filename: string;
  thumbnail?: string;
}





