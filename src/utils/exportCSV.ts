import type { Book } from './types';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

export const exportBooksToCsv = (books: Book[]) => {
  const formattedBooks = books.map(book => ({
    Index: book.index,
    ISBN: book.isbn,
    Title: book.title,
    Authors: book.authors.join('; '),
    Publisher: book.publisher,
    Likes: book.likes,
    Reviews: book.reviews.length,
    ReviewDetails: book.reviews.map(r => `${r.author}: ${r.text.replace(/\n/g, ' ')}`).join(' | '),
  }));

  const csv = Papa.unparse(formattedBooks, {
    quotes: true,
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `books.csv`);
};
