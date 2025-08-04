import { fakerEN, fakerFR, fakerJA } from '@faker-js/faker';

export const localeMap: Record<string, typeof fakerEN> = {
  en: fakerEN,
  fr: fakerFR,
  ja: fakerJA,
};

export const getFaker = (locale: string) => localeMap[locale] || fakerEN;

export const supportedLocales = [
  { code: 'en', label: 'English (USA)' },
  { code: 'fr', label: 'Français (France)' },
  { code: 'ja', label: '日本語 (日本)' },
];
