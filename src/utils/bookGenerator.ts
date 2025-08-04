import type { Book } from './types';
import { generateFractionalCount } from './rng';
import { generateReview } from './reviewGenerator';
import { getFaker } from './locales';

export const generateBook = (
  index: number,
  rng: () => number,
  avgLikes: number,
  avgReviews: number,
  locale: string = 'en'
): Book => {
  const fakerInstance = getFaker(locale);

  const isbn = fakerInstance.commerce.isbn();
  const title = fakerInstance.book.title();
  const authors = [fakerInstance.book.author()];
  const publisher = fakerInstance.book.publisher();

  const likes = generateFractionalCount(rng, avgLikes);
  const reviewsCount = generateFractionalCount(rng, avgReviews);
  const reviews = Array.from({ length: reviewsCount }, () => generateReview(rng, locale));

  return { index, isbn, title, authors, publisher, likes, reviews };
};
