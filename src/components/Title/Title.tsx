import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useThemeStore } from '../../store/themeStore';

function Title({ text }: { text: string }) {
  const theme = useThemeStore((state) => state.theme);
  const isMobile = useMediaQuery('(max-width:769px)');

  const variant = () => {
    if (isMobile) {
      return 'h4';
    } else {
      return 'h3';
    }
  };
  const mt = () => {
    if (isMobile) {
      return '40px';
    } else {
      return '0px';
    }
  };
  return (
    <Typography
      id="d1"
      variant={variant()}
      mt={mt}
      mb={'30px'}
      sx={{ textAlign: 'center' }}
    >
      {text}
    </Typography>
  );
}

export default Title;
