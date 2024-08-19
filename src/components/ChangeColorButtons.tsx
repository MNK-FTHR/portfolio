import React from 'react';
import { Button, TextField } from '@mui/material';
import { useThemeStore } from '../store/themeStore';

const ChangeColorButtons: React.FC = () => {
  const setPrimaryColor = useThemeStore((state) => state.setPrimaryColor);
  const setSecondaryColor = useThemeStore((state) => state.setSecondaryColor);

  const [primaryColor, setPrimaryColorInput] = React.useState('#1976d2');
  const [secondaryColor, setSecondaryColorInput] = React.useState('#d32f2f');

  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default ChangeColorButtons;
