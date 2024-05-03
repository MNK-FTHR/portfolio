import { LanguageContext } from "@/app/contexts/LanguageContext";
import React, { useContext } from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const DrawerContent = () => {
  const textData = useContext(LanguageContext).getText();
  const menuItems = textData.menu;
  const menuIcons = [
    FeaturedPlayListIcon,
    BarChartIcon,
    SchoolIcon,
    SportsFootballIcon,
    AlternateEmailIcon,
  ];
  const menu = () => {
    for (const [key, value] of Object.entries(menuItems)) {
      console.log(`${key}: ${value}`);
    }
  };
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {Object.entries(menuItems).map((text, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default DrawerContent;
