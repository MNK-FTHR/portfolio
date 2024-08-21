import { create } from 'zustand';
import { createTheme, Theme } from '@mui/material/styles';

interface ThemeState {
  isDarkMode: boolean;
  theme: Theme;
  toggleDarkMode: () => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  isDarkMode: false,
  theme: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#d32f2f',
      },
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
            primary: {
              main: get().theme.palette.primary.main,
            },
            secondary: {
              main: get().theme.palette.secondary.main,
            },
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
