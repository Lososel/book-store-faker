import { useState } from 'react';
import type { Book } from '../../utils/types';
import './BookRow.css';

interface BookRowProps {
  book: Book;
}

export const BookRow = ({ book }: BookRowProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className="book-row" onClick={() => setExpanded(prev => !prev)}>
        <td>{book.index}</td>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.authors.join(', ')}</td>
        <td>{book.publisher}</td>
        <td>{book.likes}</td>
        <td>{book.reviews.length}</td>
      </tr>
      {expanded && (
        <tr className="book-row-expanded">
          <td colSpan={7}>
            <strong>Reviews:</strong>
            <ul>
              {book.reviews.map((r, i) => (
                <li key={i}>
                  <em>{r.author}:</em> {r.text}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      )}
    </>
  );
};
