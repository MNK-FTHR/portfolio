"use client";

import { lightenDarkenColor } from "@/app/utils/lightenDarkenColor";
import { ThemeProvider, createTheme } from "@mui/material";
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
  const defaultColorsLight = {
    primary: {
      main: "#1e3d59",
      light: lightenDarkenColor("#1e3d59", 40),
      dark: lightenDarkenColor("#1e3d59", -40),
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1ca3ec",
      light: lightenDarkenColor("#1ca3ec", 40),
      dark: lightenDarkenColor("#1ca3ec", -40),
      contrastText: "#ffffff",
    },
    accent: {
      main: "#e67e22",
      light: lightenDarkenColor("#e67e22", 40),
      dark: lightenDarkenColor("#e67e22", -40),
      contrastText: "#ffffff",
    },
    background: { default: "#ecf0f1", paper: "#ffffff" },
    text: { primary: "#2c3e50", secondary: "#7f8c8d", disabled: "#bdc3c7" },
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#1e3d59",
                  light: "#486a8b",
                  dark: "#152a3c",
                  contrastText: "#ffffff",
                },
                secondary: {
                  main: "#1ca3ec",
                  light: "#61d5ff",
                  dark: "#0071b1",
                  contrastText: "#ffffff",
                },
                accent: palette.augmentColor({
                  color: { main: "#e67e22", light: "#ffa04d", dark: "#b55a15" },
                }),
                background: {
                  default: "#ecf0f1",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#2c3e50",
                  secondary: "#7f8c8d",
                  disabled: "#bdc3c7",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#1e3d59",
                  light: "#486a8b",
                  dark: "#152a3c",
                  contrastText: "#ffffff",
                },
                secondary: {
                  main: "#1ca3ec",
                  light: "#61d5ff",
                  dark: "#0071b1",
                  contrastText: "#ffffff",
                },
                accent: palette.augmentColor({
                  color: { main: "#e67e22", light: "#ffa04d", dark: "#b55a15" },
                }),
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#b0bec5",
                  disabled: "#78909c",
                },
              }),
        },
      }),
    [mode, palette]
  );
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
