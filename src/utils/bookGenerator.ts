import type { Book } from './types';
import { generateFractionalCount } from './rng';
import { generateReview } from './reviewGenerator';
import { getFaker } from './locales';

export const generateBook = (
  index: number,
  rng: () => number,
  avgLikes: number,
  avgReviews: number,
  locale: string = 'en',
  baseSeed: number
): Book => {
  const recordSeed = baseSeed + index;
  const fakerInstance = getFaker(locale, recordSeed);

  const isbn = fakerInstance.commerce.isbn();
  const title = fakerInstance.word
    .words({ count: { min: 2, max: 4 } })
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const authorCount = 1 + Math.floor(rng() * 3);
  const authors = Array.from({ length: authorCount }, () => fakerInstance.person.fullName());
  const year = fakerInstance.date.birthdate({ mode: 'year', min: 1980, max: 2025 }).getFullYear();
  const publisher = `${fakerInstance.company.name()}, ${year}`;

  const likes = generateFractionalCount(rng, avgLikes);
  const reviewsCount = generateFractionalCount(rng, avgReviews);
  const reviews = Array.from({ length: reviewsCount }, (_, reviewIndex) =>
    generateReview(rng, locale, recordSeed, reviewIndex)
  );

  return { index, isbn, title, authors, publisher, likes, reviews };
};
