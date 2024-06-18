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
  const { sidebarWidth, sidebarPosition } = useThemeEditor();

  return (
    <>
      <TopBar />
      <Drawer />
      <Box
        component="main"
        overflow="auto"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          ...(sidebarPosition === "left"
            ? {
                ml: { sm: `${sidebarWidth}px` },
              }
            : {
                mr: { sm: `${sidebarWidth}px` },
              }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
};
