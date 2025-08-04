import { fakerEN, fakerFR, fakerDE } from '@faker-js/faker';

export const localeMap: Record<string, typeof fakerEN> = {
  en: fakerEN,
  fr: fakerFR,
  ja: fakerDE,
};

export const getFaker = (locale: string) => localeMap[locale] || fakerEN;

export const supportedLocales = [
  { code: 'en', label: 'English (USA)' },
  { code: 'fr', label: 'Français (France)' },
  { code: 'de', label: 'Deutsch (Germany)' },
];
