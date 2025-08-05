import type { Review } from './types';
import { getFaker } from './locales';

export const generateReview = (rng: () => number, locale: string, seed: number): Review => {
  const fakerInstance = getFaker(locale, seed);
  return {
    author: fakerInstance.person.fullName(),
    text: rng() > 0.5 ? fakerInstance.lorem.sentence() : fakerInstance.lorem.sentences(2),
  };
};
