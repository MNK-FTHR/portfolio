import React from 'react';
import { Button } from '@mui/material';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle: React.FC = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Button variant="contained" onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggle;
