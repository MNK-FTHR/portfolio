import React, { useRef, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  Button,
  IconButton,
  PaletteColor,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { MuiColorInput } from 'mui-color-input';
import { useThemeStore } from '../../store/themeStore';
import { debounce, throttle } from 'lodash';

const ThemeEditor = () => {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
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
    <Stack direction={'row'} sx={{ float: 'right' }}>
      <Stack direction={'column'}>
        <Button>Save</Button>
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
        {showSecondaryPicker && (
          <MuiColorInput
            format="hex"
            value={secondaryColor}
            onChange={(color) => {
              makeSetSecondaryColorThrottled.current(color);
              setSecondaryColorInput(color);
            }}
          />
        )}
      </Stack>
      <Stack direction={'column'}>
        <Tooltip
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
        <Stack direction={'row'}>
          <Tooltip title={'Edit primary color'} placement="left">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => setShowPrimaryPicker(!showPrimaryPicker)}
            >
              <ColorLensIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack>
          <Tooltip title={'Edit secondary color'} placement="left">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => {}}
            >
              <ColorLensOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      {/* <div>
        <TextField
          label="Primary Color"
          value={primaryColor}
          onChange={(e) => setPrimaryColorInput(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => setPrimaryColor(primaryColor)}
        >
          Set Primary Color
        </Button>
      </div>
      <div>
        <TextField
          label="Secondary Color"
          value={secondaryColor}
          onChange={(e) => setSecondaryColorInput(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => setSecondaryColor(secondaryColor)}
        >
          Set Secondary Color
        </Button>
      </div> */}
    </Stack>
  );
};

export default ThemeEditor;
