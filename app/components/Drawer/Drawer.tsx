"use client";

import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
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
import { SiteEditor } from "@/app/components/SiteEditor/SiteEditor";
import { usePathname } from "next/navigation";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";

const drawer = (usefulPathname: string) => (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {[
        { category: "Summary", icon: <SummarizeIcon /> },
        { category: "Experience", icon: <EqualizerIcon /> },
        { category: "Skills", icon: <AccessibilityIcon /> },
        { category: "Hobbies", icon: <InsertEmoticonIcon /> },
        { category: "Contact", icon: <CallIcon /> },
        { category: "This Website", icon: <WebIcon /> },
      ].map((tab, index) => (
        <VGLink
          key={index}
          href={
            "/" + tab.category !== "Summary"
              ? tab.category.replace(/\s/g, "").toLocaleLowerCase()
              : ""
          }
        >
          <ListItem>
            <ListItemButton
              sx={
                usefulPathname === tab.category.toLocaleLowerCase()
                  ? {
                      bgcolor: "text.disabled",
                    }
                  : {}
              }
            >
              <ListItemIcon>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.category} />
            </ListItemButton>
          </ListItem>
        </VGLink>
      ))}
    </List>
    <Divider />
    <SiteEditor />
    <Divider />
    <Stack direction={"column"} p={1} mt={1} justifyContent={"space-between"}>
      <VGButton
        sx={{ m: 4, bgcolor: "accent.main" }}
        size="small"
        variant="contained"
      >
        Reset Site To default
      </VGButton>
    </Stack>
  </div>
);
interface Props {
  window?: () => Window;
}
export const LeftDrawer = (props: Props) => {
  const { sidebarWidth } = useThemeEditor();

  const pathname = usePathname();
  const usefulPathname = pathname.split("/")[pathname.split("/").length - 1];
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
        {drawer(usefulPathname)}
      </Drawer>
      <Drawer
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
        {drawer(usefulPathname)}
      </Drawer>
    </Box>
  );
};
