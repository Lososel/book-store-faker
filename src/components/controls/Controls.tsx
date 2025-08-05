import {
  Box,
  TextField,
  MenuItem,
  Slider,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { exportBooksToCsv } from '../../utils/exportCSV';
import type { Book } from '../../utils/types';

interface ControlsProps {
  seed: string;
  onSeedChange: (seed: string) => void;
  onRandomSeed: () => void;

  locale: string;
  onLocaleChange: (locale: string) => void;

  avgLikes: number;
  onAvgLikesChange: (value: number) => void;

  avgReviews: number;
  onAvgReviewsChange: (value: number) => void;

  books: Book[];
}

export const Controls = ({
  seed,
  onSeedChange,
  onRandomSeed,
  locale,
  onLocaleChange,
  avgLikes,
  onAvgLikesChange,
  avgReviews,
  onAvgReviewsChange,
  books,
}: ControlsProps) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
      <TextField
        label="Seed"
        value={seed}
        onChange={e => onSeedChange(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <ShuffleRoundedIcon
                  titleAccess="Random seed"
                  onClick={onRandomSeed}
                ></ShuffleRoundedIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
      <TextField
        select
        label="Locale"
        value={locale}
        onChange={e => onLocaleChange(e.target.value)}
        style={{ minWidth: 150 }}
      >
        <MenuItem value="en">English (US)</MenuItem>
        <MenuItem value="fr">Français (FR)</MenuItem>
        <MenuItem value="de">Deutsch (DE)</MenuItem>
      </TextField>

      <Box>
        <Typography>Avg Likes: {avgLikes.toFixed(1)}</Typography>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={avgLikes}
          onChange={(_, value) => onAvgLikesChange(value as number)}
          style={{ width: 150 }}
        />
      </Box>

      <TextField
        label="Avg Reviews"
        type="number"
        value={avgReviews}
        inputProps={{ step: 0.1, min: 0, max: 10 }}
        onChange={e => onAvgReviewsChange(parseFloat(e.target.value))}
      />
      <IconButton>
        <DownloadForOfflineIcon
          titleAccess="Download CSV"
          onClick={() => exportBooksToCsv(books)}
        ></DownloadForOfflineIcon>
      </IconButton>
    </Box>
  );
};
