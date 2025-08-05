import { useState } from 'react';
import type { Book } from '../../utils/types';
import { TableRow, TableCell, Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BookExpandedRow } from './BookExpandedRow.tsx';

interface BookRowProps {
  book: Book;
}

export const BookRow = ({ book }: BookRowProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow
        onClick={() => setExpanded(prev => !prev)}
        sx={{
          cursor: 'pointer',
          backgroundColor: expanded ? '#A7C7E7' : 'transparent',
          transition: 'all 0.3s ease',
          '& .MuiTableCell-root': {
            color: expanded ? '#FFF' : '#000',
            transition: 'color 0.3s ease',
          },
          ...(expanded
            ? {}
            : {
                '&:hover': {
                  backgroundColor: '#A7C7E7',
                  '& .MuiTableCell-root': {
                    color: '#FFF',
                  },
                },
              }),
        }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{book.index}</TableCell>
        <TableCell width="130px">{book.isbn}</TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.authors.join(', ')}</TableCell>
        <TableCell>{book.publisher}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <BookExpandedRow book={book} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
