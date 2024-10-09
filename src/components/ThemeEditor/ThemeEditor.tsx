import React, { useRef, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  Fab,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { useThemeStore } from '../../store/themeStore';

const ThemeEditor = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const isMobile = useMediaQuery('(max-width:769px)');

  const { language, toggleLanguage } = useThemeStore();
  const { textContent } = useThemeStore();

  return (
    <>
      {isMobile ? (
        <Stack direction={'row'} p={2}>
          <Stack direction={'row'}>
            <Tooltip
              title={
                isDarkMode
                  ? textContent.micelaneous.ui.modes.light
                  : textContent.micelaneous.ui.modes.dark
              }
              placement="left"
            >
              <Fab
                sx={{
                  top: '10px',
                  right: '2px',
                  bottom: '20px',
                  left: 'auto',
                  position: 'fixed',
                }}
                color="primary"
                onClick={toggleDarkMode}
                variant="extended"
              >
                {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
              </Fab>
            </Tooltip>
            <Tooltip
              title={
                language === 'fr'
                  ? textContent.micelaneous.languages.fr.name
                  : textContent.micelaneous.languages.en.name
              }
              placement="left"
            >
              <Fab
                variant="extended"
                sx={{
                  top: '10px',
                  right: 'auto',
                  bottom: '20px',
                  left: '0px',
                  position: 'fixed',
                }}
                color="primary"
                onClick={toggleLanguage}
              >
                {language === 'fr'
                  ? textContent.micelaneous.languages.fr.abrev
                  : textContent.micelaneous.languages.en.abrev}
              </Fab>
            </Tooltip>
          </Stack>
        </Stack>
      ) : (
        <Stack direction={'row'} p={2}>
          <Stack direction={'column'} spacing={1}>
            <Tooltip
              title={
                isDarkMode
                  ? textContent.micelaneous.ui.modes.light
                  : textContent.micelaneous.ui.modes.dark
              }
              placement="left"
            >
              <Fab
                sx={{
                  margin: '0px',
                  top: '10px',
                  right: '20px',
                  bottom: '20px',
                  left: 'auto',
                  position: 'fixed',
                }}
                color="primary"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
              </Fab>
            </Tooltip>
            <Tooltip
              title={
                language === 'fr'
                  ? textContent.micelaneous.languages.fr.name
                  : textContent.micelaneous.languages.en.name
              }
              placement="left"
            >
              <Fab
                sx={{
                  margin: '0px',
                  top: '70px',
                  right: '20px',
                  bottom: '20px',
                  left: 'auto',
                  position: 'fixed',
                }}
                color="primary"
                onClick={toggleLanguage}
              >
                <Typography> {language}</Typography>
              </Fab>
            </Tooltip>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ThemeEditor;
