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
    <TableContainer
      id="scrollableDiv"
      component={Paper}
      sx={{ maxHeight: '700px', overflow: 'auto' }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell>#</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author(s)</TableCell>
            <TableCell>Publisher</TableCell>
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
