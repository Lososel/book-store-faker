import { useState } from 'react';
import type { Book } from '../../utils/types';
import { TableRow, TableCell, Collapse, Box, Typography, List, ListItem } from '@mui/material';

interface BookRowProps {
  book: Book;
}

export const BookRow = ({ book }: BookRowProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TableRow onClick={() => setExpanded(prev => !prev)} hover style={{ cursor: 'pointer' }}>
        <TableCell>{book.index}</TableCell>
        <TableCell>{book.isbn}</TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.authors.join(', ')}</TableCell>
        <TableCell>{book.publisher}</TableCell>
        <TableCell>{book.likes}</TableCell>
        <TableCell>{book.reviews.length}</TableCell>
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
