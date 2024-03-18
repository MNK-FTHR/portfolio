"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import { drawerWidth } from "@/app/utils/consts";
import { DrawerContext } from "@/app/contexts/NavigationContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "@/app/contexts/DarkModeContext/DarkModeContext";
const TopBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { handleDrawerToggle } = useContext(DrawerContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          GRANIER Victor
        </Typography>

        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
