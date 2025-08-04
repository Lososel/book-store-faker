import { useState, useEffect, useCallback } from 'react';
import { Controls } from '../components/controls/Controls';
import { BookTable } from '../components/book/BookTable';
import { generateBooksBatch } from '../utils/bookBatch';
import type { Book } from '../utils/types';

const INITIAL_BATCH_SIZE = 20;
const NEXT_BATCH_SIZE = 10;

export const BookStorePage = () => {
  const [seed, setSeed] = useState('42');
  const [locale, setLocale] = useState('en');
  const [avgLikes, setAvgLikes] = useState(1.5);
  const [avgReviews, setAvgReviews] = useState(2.7);

  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const initialBatch = generateBooksBatch(
      seed,
      0,
      INITIAL_BATCH_SIZE,
      avgLikes,
      avgReviews,
      locale
    );
    setBooks(initialBatch);
    setPage(0);
  }, [seed, locale, avgLikes, avgReviews]);

  const loadNextBatch = useCallback(() => {
    const nextPage = page + 1;
    const nextBatch = generateBooksBatch(
      seed,
      nextPage,
      NEXT_BATCH_SIZE,
      avgLikes,
      avgReviews,
      locale
    );
    setBooks(prev => [...prev, ...nextBatch]);
    setPage(nextPage);
  }, [page, seed, locale, avgLikes, avgReviews]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadNextBatch();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadNextBatch]);

  const handleRandomSeed = () => {
    setSeed(Math.floor(Math.random() * 1_000_000).toString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <Controls
        seed={seed}
        onSeedChange={setSeed}
        onRandomSeed={handleRandomSeed}
        locale={locale}
        onLocaleChange={setLocale}
        avgLikes={avgLikes}
        onAvgLikesChange={setAvgLikes}
        avgReviews={avgReviews}
        onAvgReviewsChange={setAvgReviews}
      />

      <BookTable books={books} />
    </div>
  );
};
