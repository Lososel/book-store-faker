import { Box, Typography, List, ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { Book } from '../../utils/types';
import { BookCoverDiv } from './BookCoverDiv';

interface BookExpandedRowProps {
  book: Book;
}

export const BookExpandedRow = ({ book }: BookExpandedRowProps) => {
  return (
    <Box margin={1} display="flex" gap={3} style={{ paddingBottom: 10, paddingTop: 10 }}>
      <Box>
        <BookCoverDiv book={book} />
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
          maxWidth={132}
          padding={'10px'}
          justifyContent="center"
        >
          <Typography sx={{ color: 'red', fontSize: 18 }}>{book.likes}</Typography>
          <FavoriteIcon sx={{ color: 'red', fontSize: 18 }} />
        </Box>
      </Box>
      <Box flex={1}>
        <Box display="flex" flexDirection="column" marginBottom={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: 'black', fontSize: 30, fontFamily: 'Verdana', fontStyle: 'italic' }}
          >
            {book.title}
          </Typography>
          <Typography variant="caption" color="text.primary">
            {book.authors.join(', ')}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {book.publisher}
          </Typography>
        </Box>
        <Typography variant="subtitle2">Reviews:</Typography>
        <List dense>
          {book.reviews.map((r, i) => (
            <ListItem
              key={i}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingY: 0.5,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: 13 }}>
                {r.author}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: 'text.secondary',
                  paddingLeft: 1,
                }}
              >
                - {r.text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
