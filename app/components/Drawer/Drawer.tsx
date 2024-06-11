"use client";

import React, { useContext, useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CallIcon from "@mui/icons-material/Call";
import { drawerWidth } from "@/app/utils/consts";
import { DrawerContext } from "@/app/contexts/NavigationContext";
import Link from "next/link";
import VGLink from "../atoms/VGLink";
const drawer = (
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
      ].map((tab, index) => (
        <VGLink key={index} href={"/" + tab.category.toLocaleLowerCase()}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.category} />
            </ListItemButton>
          </ListItem>
        </VGLink>
      ))}
    </List>
    <Divider />
  </div>
);
interface Props {
  window?: () => Window;
}
export const LeftDrawer = (props: Props) => {
  const { window } = props;
  const { mobileOpen, handleDrawerTransitionEnd, handleDrawerClose } =
    useContext(DrawerContext);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
