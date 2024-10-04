import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useThemeStore } from '../../store/themeStore';

function Title({ text }: { text: string }) {
  const theme = useThemeStore((state) => state.theme);

  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));
  const variant = () => {
    if (desktop) return 'h3';
    if (tablet) return 'h4';
    if (mobile) return 'h5';
  };

  return (
    <Typography id="d1" variant={variant()} sx={{ textAlign: 'center' }}>
      {text}
    </Typography>
  );
}

export default Title;
