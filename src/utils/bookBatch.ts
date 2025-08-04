import type { Book } from './types';
import { createSeededRng } from './rng';
import { generateBook } from './bookGenerator';

export const generateBooksBatch = (
  seed: string | number,
  page: number,
  batchSize: number,
  avgLikes: number,
  avgReviews: number,
  locale: string
): Book[] => {
  const rng = createSeededRng(seed, page);
  return Array.from({ length: batchSize }, (_, i) =>
    generateBook(i + 1 + page * batchSize, rng, avgLikes, avgReviews, locale)
  );
};
