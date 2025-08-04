import type { Book } from '../../utils/types';
import { BookRow } from './BookRow';
import './BookTable.css';

interface BookTableProps {
  books: Book[];
}

export const BookTable = ({ books }: BookTableProps) => {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>#</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author(s)</th>
          <th>Publisher</th>
          <th>Likes</th>
          <th>Reviews</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <BookRow key={book.index} book={book} />
        ))}
      </tbody>
    </table>
  );
};
