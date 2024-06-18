"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import { DrawerContext } from "@/app/contexts/NavigationContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  ThemeEditorContext,
  useThemeEditor,
} from "@/app/contexts/ThemeEditorContext/ThemeEditorContext";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { VGLink } from "@/app/components/atoms";

export const TopBar = () => {
  const { sidebarWidth, sidebarPosition } = useThemeEditor();
  const theme = useTheme();
  const { colorMode } = useContext(ThemeEditorContext);
  const { handleDrawerToggle } = useContext(DrawerContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ...(sidebarPosition === "left"
          ? { ml: { sm: `${sidebarWidth}px` } }
          : { mr: { sm: `${sidebarWidth}px` } }),
      }}
    >
      <Toolbar
        sx={{
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            <VGLink href={"/"}>GRANIER Victor</VGLink>
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <IconButton
            sx={{ ml: 1, color: "inherit" }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="add to shopping cart"
            onClick={() => changeLanguage()}
          >
            {language.toUpperCase()}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
