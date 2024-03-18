import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Stack, Box, Toolbar, Typography, CssBaseline } from "@mui/material";
import TopBar from "@/app/components/TopBar/TopBar";
import { DrawerContextProvider } from "@/app/contexts/NavigationContext";
import { drawerWidth } from "@/app/utils/consts";
import { Drawer } from "@/app/components/Drawer";
import { ColorModeContextProvider } from "@/app/contexts/DarkModeContext/DarkModeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRANIER Victor",
  description: "Portfolio de Victor GRANIER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ColorModeContextProvider>
            <Stack
              sx={{
                minWidth: "100%",
                width: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                height: "100%",
                maxHeight: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              <CssBaseline />
              <DrawerContextProvider>
                <TopBar />
                <Drawer />
                <Box
                  component="main"
                  overflow="auto"
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                  }}
                >
                  <Toolbar />
                  {children}
                </Box>
              </DrawerContextProvider>
            </Stack>
          </ColorModeContextProvider>
        </main>
      </body>
    </html>
  );
}
