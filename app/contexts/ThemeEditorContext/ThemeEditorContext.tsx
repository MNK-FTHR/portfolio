"use client";

import { lightenDarkenColor } from "@/app/utils/lightenDarkenColor";
import {
  PaletteColorOptions,
  ThemeProvider,
  alpha,
  createTheme,
} from "@mui/material";

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
}
export const ThemeEditorContext = createContext<I_ThemeEditorContext>({
  colorMode: { toggleColorMode: () => {} },
  sidebarWidth: 300,
  setSidebarWidth: () => {},
});
declare module "@mui/material/styles" {
  interface Palette {
    accent: PaletteColorOptions;
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

type Props = { children: ReactNode };
export const ThemeEditorContextProvider: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const [colors, setColors] = useState({});
  const colorChanger = useMemo(
    () => ({
      toggleColorMode: (newColors: any) => {
        setColors(newColors);
      },
    }),
    []
  );
  const { palette } = createTheme();
  const theme = useMemo(() => {
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
      palette: {
        mode,
        primary: {
          main: "#1e3d59",
          light: lightenDarkenColor("#1e3d59", 60),
          dark: lightenDarkenColor("#1e3d59", -60),
          // light: "#486a8b",
          // dark: "#152a3c",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#1ca3ec",
          light: "#61d5ff",
          dark: "#0071b1",
          contrastText: "#ffffff",
        },
        accent: palette.augmentColor({
          color: {
            main: "#e67e22",
            light: "#ffa04d",
            dark: "#b55a15",
          },
        }),
        ...(mode === "light" ? defaultColorsLight : defaultColorsDark),
      },
    });
  }, [mode, palette]);
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);
  return (
    <ThemeEditorContext.Provider
      value={{ colorMode, sidebarWidth, setSidebarWidth }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeEditorContext.Provider>
  );
};

export const useThemeEditor = (): I_ThemeEditorContext => {
  const context = useContext(ThemeEditorContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
