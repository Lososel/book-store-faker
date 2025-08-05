import { Box, Typography } from '@mui/material';
import { getBookCoverColor } from '../../utils/bookCover';
import type { Book } from '../../utils/types';

interface BookCoverProps {
  book: Book;
}

export const BookCoverDiv = ({ book }: BookCoverProps) => {
  const bgColor = getBookCoverColor(book.title, book.authors[0]);

  return (
    <Box
      width={120}
      height={180}
      borderRadius={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: bgColor,
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        color: 'white',
        textAlign: 'center',
        padding: '6px',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 8,
          maxWidth: '100%',
        }}
      >
        {book.authors[0]}
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center" flex={1} width="100%">
        <Typography
          variant="subtitle2"
          sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            fontSize: 15,
            lineHeight: 1.2,
            fontFamily: 'Times New Roman',
          }}
        >
          {book.title}
        </Typography>
      </Box>
    </Box>
  );
};
