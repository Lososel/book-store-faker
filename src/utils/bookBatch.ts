import type { Book } from './types';
import { createSeededRng } from './rng';
import { generateBook } from './bookGenerator';

const INITIAL_BATCH_SIZE = 20;
const NEXT_BATCH_SIZE = 10;

export const generateBooksBatch = (
  seed: string | number,
  page: number,
  batchSize: number,
  avgLikes: number,
  avgReviews: number,
  locale: string
): Book[] => {
  const numericSeed =
    typeof seed === 'number'
      ? seed
      : seed
          .toString()
          .split('')
          .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const rng = createSeededRng(numericSeed + page, page);

  const startIndex = page === 0 ? 0 : INITIAL_BATCH_SIZE + (page - 1) * NEXT_BATCH_SIZE;

  return Array.from({ length: batchSize }, (_, i) =>
    generateBook(startIndex + i + 1, rng, avgLikes, avgReviews, locale, numericSeed)
  );
};
