"use client";
import { Box, Toolbar } from "@mui/material";
import { Drawer } from "@/app/components/Drawer";

import React from "react";
import { TopBar } from "@/app/components/TopBar/TopBar";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";

export const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { sidebarWidth } = useThemeEditor();

  return (
    <>
      <TopBar />
      <Drawer />
      HOOO
      <Box
        component="main"
        overflow="auto"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          ml: { sm: `${sidebarWidth}px` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
};
