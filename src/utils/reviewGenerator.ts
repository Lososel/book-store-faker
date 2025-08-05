import type { Review } from './types';
import { getFaker } from './locales';

export const generateReview = (
  rng: () => number,
  locale: string,
  seed: number,
  reviewIndex: number = 0
): Review => {
  const reviewSeed = seed + reviewIndex;
  const fakerInstance = getFaker(locale, reviewSeed);

  const sentenceCount = Math.floor(rng() * 3) + 1;

  const sentences = Array.from({ length: sentenceCount }).map(() => {
    const sentence = fakerInstance.word.words({ count: { min: 5, max: 8 } });
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });
  const text = sentences.join('. ') + '.';

  return {
    author: fakerInstance.person.fullName(),
    text,
  };
};
