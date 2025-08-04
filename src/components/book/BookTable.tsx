import type { Book } from '../../utils/types';
import { BookRow } from './BookRow';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface BookTableProps {
  books: Book[];
}

export const BookTable = ({ books }: BookTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author(s)</TableCell>
            <TableCell>Publisher</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Reviews</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <BookRow key={book.index} book={book} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
