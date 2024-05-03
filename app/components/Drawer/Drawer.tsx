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
import MailIcon from "@mui/icons-material/Mail";
import { drawerWidth } from "@/app/utils/consts";
import { DrawerContext } from "@/app/contexts/NavigationContext";
import Link from "next/link";
import VGLink from "../atoms/VGLink";
const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {["Summary", "Experience", "Skills", "Personal", "Contact"].map(
        (text, index) => (
          <VGLink key={index} href={text.toLocaleLowerCase()}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </VGLink>
        )
      )}
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
