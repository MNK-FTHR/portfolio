import { create } from 'zustand';
import { createTheme, darken, lighten, Theme } from '@mui/material/styles';
import { T_Languages } from '../languages/T_Language';
import { french } from '../languages/french';
import { english } from '../languages/english';
import { useMediaQuery } from '@mui/material';

interface ThemeState {
  isDarkMode: boolean;
  theme: Theme;
  language: 'en' | 'fr';
  textContent: T_Languages;
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
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
    },
  }),
  language: 'fr',
  textContent: french,
  toggleDarkMode: () =>
    set(() => {
      const isDarkMode = !get().isDarkMode;
      return {
        isDarkMode,
        theme: createTheme({
          palette: {
            mode: isDarkMode ? 'dark' : 'light',
          },
        }),
      };
    }),
  toggleLanguage: () =>
    set(() => {
      const currentLanguage = get().language;
      const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
      const newTexts = newLanguage === 'en' ? english : french;
      return {
        language: newLanguage,
        textContent: newTexts,
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
