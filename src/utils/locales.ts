import { Faker, en, fr, de } from '@faker-js/faker';

export const getFaker = (locale: string, seed?: number) => {
  let locales;
  switch (locale) {
    case 'fr':
      locales = [fr];
      break;
    case 'de':
      locales = [de];
      break;
    default:
      locales = [en];
  }

  const fakerInstance = new Faker({ locale: locales });
  if (seed !== undefined) {
    fakerInstance.seed(seed);
  }
  return fakerInstance;
};
