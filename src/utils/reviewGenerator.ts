import type { Review } from './types';
import { getFaker } from './locales';

export const generateReview = (rng: () => number, locale: string): Review => {
  const fakerInstance = getFaker(locale);
  return {
    author: fakerInstance.person.fullName(),
    text: rng() > 0.5 ? fakerInstance.lorem.sentence() : fakerInstance.lorem.sentences(2),
  };
};
