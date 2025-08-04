import type { Book } from './types';
import { generateFractionalCount } from './rng';
import { generateFakeIsbn } from './isbn';
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

  const isbn = generateFakeIsbn(rng);
  const title = fakerInstance.commerce.productName();
  const authors = [fakerInstance.person.fullName()];
  const publisher = fakerInstance.company.name();

  const likes = generateFractionalCount(rng, avgLikes);
  const reviewsCount = generateFractionalCount(rng, avgReviews);
  const reviews = Array.from({ length: reviewsCount }, () => generateReview(rng, locale));

  return { index, isbn, title, authors, publisher, likes, reviews };
};
