"use client";
import React, { useContext } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CallIcon from "@mui/icons-material/Call";
import WebIcon from "@mui/icons-material/Web";
import { DrawerContext } from "@/app/contexts/NavigationContext";
import { VGLink, VGButton } from "@/app/components/atoms";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";

const drawer = (sidebarWidth: number) => {
  const tabs = [
    { category: "Summary", icon: <SummarizeIcon />, slug: "summary" },
    { category: "Experience", icon: <EqualizerIcon />, slug: "experience" },
    { category: "Skills", icon: <AccessibilityIcon />, slug: "skills" },
    { category: "Hobbies", icon: <InsertEmoticonIcon />, slug: "hobbies" },
    { category: "Contact", icon: <CallIcon />, slug: "contact" },
    { category: "This Website", icon: <WebIcon />, slug: "thiswebsite" },
  ];
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {tabs.map((tab, index) => (
          <VGLink key={index} href={"/" + tab.slug}>
            <ListItem>
              {sidebarWidth > 150 ? (
                <ListItemButton color="accent">
                  <ListItemIcon color="primary">{tab.icon}</ListItemIcon>
                  <ListItemText color="primary" sx={{ color: "primary" }}>
                    {tab.category}
                  </ListItemText>
                </ListItemButton>
              ) : (
                <Stack pl={sidebarWidth < 150 ? 1 : 4}>
                  <IconButton aria-label="delete" size="large">
                    {tab.icon}
                  </IconButton>
                </Stack>
              )}
            </ListItem>
          </VGLink>
        ))}
      </List>
      <Divider />
      <Stack
        direction={"column"}
        p={1}
        mt={1}
        spacing={1}
        justifyContent={"space-between"}
      >
        <VGButton
          sx={{ ...(sidebarWidth > 150 && { m: 4 }), bgcolor: "accent.main" }}
          size={sidebarWidth > 150 ? "large" : "small"}
          variant="contained"
        >
          Save My changes
        </VGButton>
        <VGButton
          sx={{ ...(sidebarWidth > 150 && { m: 4 }), bgcolor: "accent.main" }}
          size={sidebarWidth > 150 ? "large" : "small"}
          variant="contained"
        >
          Reset Site To default
        </VGButton>
      </Stack>
    </div>
  );
};
interface Props {
  window?: () => Window;
}
export const LeftDrawer = (props: Props) => {
  const { sidebarWidth, sidebarPosition } = useThemeEditor();

  useThemeEditor();
  const { window } = props;
  const { mobileOpen, handleDrawerTransitionEnd, handleDrawerClose } =
    useContext(DrawerContext);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        anchor={sidebarPosition}
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
          },
        }}
      >
        {drawer(sidebarWidth)}
      </Drawer>
      <Drawer
        anchor={sidebarPosition}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
          },
        }}
        open
      >
        {drawer(sidebarWidth)}
      </Drawer>
    </Box>
  );
};
