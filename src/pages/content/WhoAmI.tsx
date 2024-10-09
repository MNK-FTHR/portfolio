import {
  Box,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Me from './Me.jpg';
import React from 'react';

function WhoAmI({ text = '' }: { text: string }) {
  const theme = useTheme();
  const editedText = text
    .split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
  const isMobile = useMediaQuery('(max-width:769px)');

  return (
    <Stack direction={'row'}>
      <Stack
        direction={'column'}
        alignItems={'center'}
        p={2}
        width={isMobile ? '100%' : '70%'}
      >
        {editedText.map((sentence, key) => {
          return <Typography key={key}>{sentence}.</Typography>;
        })}
        {isMobile && (
          <Box
            component="img"
            sx={{
              p: 4,
              width: 614 / 2,
              height: 936 / 2,
              opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
            }}
            alt={'myPhoto'}
            src={Me}
          />
        )}
      </Stack>
      {!isMobile && (
        <Stack direction={'column'} p={2} width={'30%'}>
          <Box
            component="img"
            sx={{
              width: { sx: 614 / 5, md: 614 / 4, lg: 614 / 3 },
              height: { sx: 936 / 5, md: 936 / 4, lg: 936 / 3 },
              opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
            }}
            alt={'myPhoto'}
            src={Me}
          />
        </Stack>
      )}
    </Stack>
  );
}

export default WhoAmI;
