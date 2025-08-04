import { useState } from 'react';
import type { Book } from '../../utils/types';
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
        <TableCell>{book.isbn}</TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.authors.join(', ')}</TableCell>
        <TableCell>{book.publisher}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle2">Reviews:</Typography>
              <List dense>
                {book.reviews.map((r, i) => (
                  <ListItem key={i}>
                    <em>{r.author}:</em>&nbsp;{r.text}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
