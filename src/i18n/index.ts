export type Locale = 'es' | 'en';

export type ServiceEntry = { title: string; href: string };

export interface ServicesDict {
  heading_general: string;
  heading_special: string;
  subtitle?: string;   
  footer1?: string;    
  footer2?: string;    
  general: ReadonlyArray<ServiceEntry>;
  special: ReadonlyArray<ServiceEntry>;
}

export interface Dictionary {
  common: any;        
  home: any;          
  services: ServicesDict;
}

import esRaw from './es';
import enRaw from './en';

export const dictionaries: Record<Locale, Dictionary> = {
  es: esRaw as Dictionary,
  en: enRaw as Dictionary,
};

export function lnk(locale: Locale, path: string) {
  if (locale === 'en') return '/en' + (path === '/' ? '' : path.replace(/^\/en/, ''));
  return path.replace(/^\/en/, '') || '/';
}
