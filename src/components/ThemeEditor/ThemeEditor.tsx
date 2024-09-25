import React, { useRef, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  Button,
  Fab,
  IconButton,
  PaletteColor,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { MuiColorInput } from 'mui-color-input';
import { useThemeStore } from '../../store/themeStore';
import { debounce, throttle } from 'lodash';

const ThemeEditor = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { language, toggleLanguage } = useThemeStore();

  const theme = useThemeStore((state) => state.theme);
  const setPrimaryColor = useThemeStore((state) => state.setPrimaryColor);
  const setSecondaryColor = useThemeStore((state) => state.setSecondaryColor);
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);
  const [primaryColor, setPrimaryColorInput] = useState(
    theme.palette.primary.main,
  );
  const [secondaryColor, setSecondaryColorInput] = useState(
    theme.palette.secondary.main,
  );
  const makeSetPrimaryColorThrottled = useRef(throttle(setPrimaryColor, 300));
  const makeSetSecondaryColorThrottled = useRef(
    throttle(setSecondaryColor, 300),
  );
  return (
    <Stack direction={'row'} p={2} sx={{ float: 'right' }}>
      <Stack direction={'column'}>
        {showPrimaryPicker && (
          <MuiColorInput
            format="hex"
            value={primaryColor}
            onChange={(color) => {
              makeSetPrimaryColorThrottled.current(color);
              setPrimaryColorInput(color);
            }}
          />
        )}
      </Stack>

      <Stack direction={'column'} spacing={1}>
        {/* <Tooltip
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          placement="left"
        >
          <Fab color="primary">
            <IconButton>
              <SaveIcon />
            </IconButton>
          </Fab>
        </Tooltip> */}
        <Tooltip
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          placement="left"
        >
          <Fab color="primary" onClick={toggleDarkMode}>
            <IconButton>
              {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
            </IconButton>
          </Fab>
        </Tooltip>
        <Tooltip title={'Change language'} placement="left">
          <Fab color="primary" onClick={toggleLanguage}>
            <IconButton>{language}</IconButton>
          </Fab>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default ThemeEditor;
