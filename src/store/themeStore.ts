import { create } from 'zustand';
import { createTheme, darken, lighten, Theme } from '@mui/material/styles';

interface ThemeState {
  isDarkMode: boolean;
  theme: Theme;
  toggleDarkMode: () => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}
declare module '@mui/material/styles' {
  interface Palette {
    blockColor: Palette['primary'];
  }
  interface PaletteOptions {
    blockColor?: PaletteOptions['primary'];
  }
}
const generatePaletteColors = (mainColor: string) => {
  return {
    main: mainColor,
    light: lighten(mainColor, 0.2), // Éclaircir de 20%
    dark: darken(mainColor, 0.2), // Assombrir de 20%
  };
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  isDarkMode: true,
  theme: createTheme({
    palette: {
      mode: 'dark',
      blockColor: generatePaletteColors('#121212'),
    },
  }),
  toggleDarkMode: () =>
    set(() => {
      const isDarkMode = !get().isDarkMode;
      return {
        isDarkMode,
        theme: createTheme({
          palette: {
            mode: isDarkMode ? 'dark' : 'light',
            blockColor: generatePaletteColors('#121212'),
          },
        }),
      };
    }),
  setPrimaryColor: (color: string) =>
    set((state) => ({
      theme: createTheme({
        palette: {
          mode: state.isDarkMode ? 'dark' : 'light',
          primary: {
            main: color,
          },
          secondary: {
            main: state.theme.palette.secondary.main,
          },
        },
      }),
    })),
  setSecondaryColor: (color: string) =>
    set((state) => ({
      theme: createTheme({
        palette: {
          mode: state.isDarkMode ? 'dark' : 'light',
          primary: {
            main: state.theme.palette.primary.main,
          },
          secondary: {
            main: color,
          },
        },
      }),
    })),
}));
