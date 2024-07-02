"use client";

import { lightenDarkenColor } from "@/app/utils/lightenDarkenColor";
import { PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
interface I_ThemeEditorContext {
  colorMode: { toggleColorMode: () => void };
  sidebarWidth: number;
  setSidebarWidth: (width: number) => void;
  sidebarPosition: "left" | "right";
  setSidebarPosition: (position: "left" | "right") => void;
  colorChanger: (
    colorType: "primary" | "secondary" | "accent",
    color: string
  ) => void;
  updateFontSize: (newFontSize: number) => void;
  typographyChanger: (typographyType: any, typography: string) => void;
}
export const ThemeEditorContext = createContext<I_ThemeEditorContext>({
  colorMode: { toggleColorMode: () => {} },
  sidebarWidth: 250,
  setSidebarWidth: () => {},
  sidebarPosition: "left",
  setSidebarPosition: () => {},
  colorChanger: () => {},
  updateFontSize: () => {},
  typographyChanger: () => {},
});

type Props = { children: ReactNode };
export const ThemeEditorContextProvider: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [typography, setTypography] = useState({
    fontSize: 14,
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  });
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const [colors, setColors] = useState<{
    primary: string;
    secondary: string;
    accent: string;
  }>({
    primary: "#1e3d59",
    secondary: "#1ca3ec",
    accent: "#e67e22",
  });
  const colorChanger = (
    colorType: "primary" | "secondary" | "accent",
    color: string
  ) => {
    setColors((prevColors) => ({ ...prevColors, [colorType]: color }));
  };
  const updateFontSize = (newFontSize: number) => {
    setTypography((prevState) => ({
      ...prevState,
      fontSize: newFontSize,
    }));
  };
  const typographyChanger = (element: string, newFontSize: string) => {
    setTypography((prevState) => ({
      ...prevState,
      [element]: {
        ...(prevState[element as keyof typeof prevState] as object),
        fontSize: newFontSize,
      },
    }));
  };
  const { palette } = createTheme();
  let theme = useMemo(() => {
    const defaultColorsLight = {
      background: {
        default: "#ecf0f1",
        paper: "#ffffff",
      },
      text: {
        primary: "#2c3e50",
        secondary: "#7f8c8d",
        disabled: "#bdc3c7",
        hint: "#95a5a6",
      },
    };
    const defaultColorsDark = {
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0bec5",
        disabled: "#78909c",
        hint: "#90a4ae",
      },
    };
    return createTheme({
      typography: typography,
      palette: {
        mode,
        primary: {
          main: colors.primary,
          light: lightenDarkenColor(colors.primary, 30),
          dark: lightenDarkenColor(colors.primary, -30),
          // Default:
          // light: "#486a8b",
          // dark: "#152a3c",
          contrastText: "#ffffff",
        },
        secondary: {
          main: colors.secondary,
          light: lightenDarkenColor(colors.secondary, 30),
          dark: lightenDarkenColor(colors.secondary, -30),
          // Default:
          // light: "#61d5ff",
          // dark: "#0071b1",
          contrastText: "#ffffff",
        },
        accent: palette.augmentColor({
          color: {
            main: colors.accent,
            light: lightenDarkenColor(colors.accent, 30),
            dark: lightenDarkenColor(colors.accent, -30),
            // Default:
            // light: "#ffa04d",
            // dark: "#b55a15",
          },
        }),
        ...(mode === "light" ? defaultColorsLight : defaultColorsDark),
      },
    });
  }, [colors, mode, palette, typography]);

  const [sidebarWidth, setSidebarWidth] = useState<number>(300);
  const [sidebarPosition, setSidebarPosition] = useState<"left" | "right">(
    "left"
  );
  return (
    <ThemeEditorContext.Provider
      value={{
        colorMode,
        sidebarWidth,
        setSidebarWidth,
        colorChanger,
        sidebarPosition,
        setSidebarPosition,
        updateFontSize,
        typographyChanger,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeEditorContext.Provider>
  );
};

export const useThemeEditor = (): I_ThemeEditorContext => {
  const context = useContext(ThemeEditorContext);
  if (!context) {
    throw new Error("You don't know how bad things really are...");
  }
  return context;
};
