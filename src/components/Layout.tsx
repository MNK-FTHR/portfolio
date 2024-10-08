import React from 'react';
import ThemeEditor from './ThemeEditor/ThemeEditor';
import { Box } from '@mui/material';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ThemeEditor />
      {children}
    </Box>
  );
}

export default Layout;
