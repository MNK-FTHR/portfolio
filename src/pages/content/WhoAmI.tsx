import { Box, Stack, Typography, useTheme } from '@mui/material';
import Me from './Me.jpg';
import React from 'react';

function WhoAmI({ text = '' }: { text: string }) {
  const theme = useTheme();
  const editedText = text
    .split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
  return (
    <Stack direction={'row'}>
      <Stack direction={'column'} p={2} width={'70%'}>
        {editedText.map((sentence, key) => {
          return <Typography key={key}>{sentence}.</Typography>;
        })}
      </Stack>
      <Stack direction={'column'} p={2} width={'30%'}>
        <Box
          component="img"
          sx={{
            width: 614 / 3,
            height: 936 / 3,
            opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt={'myPhoto'}
          src={Me}
        />
      </Stack>
    </Stack>
  );
}

export default WhoAmI;
