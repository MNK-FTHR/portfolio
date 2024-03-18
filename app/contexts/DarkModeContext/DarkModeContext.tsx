"use client";

import { ThemeProvider, createTheme } from "@mui/material";
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
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
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
