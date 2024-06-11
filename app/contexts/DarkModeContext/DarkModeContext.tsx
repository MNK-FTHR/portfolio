"use client";

import { PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material";
import { FC, ReactNode, createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

type Props = { children: ReactNode };
export const ColorModeContextProvider: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const { palette } = createTheme();

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
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
