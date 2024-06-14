"use client";
import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import VGColorPalette from "../components/atoms/VGColorPalette";

const ThisWebSite = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"column"}
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <Stack
        width={"100%"}
        direction={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h4">Palette</Typography>
        <VGColorPalette palette={theme.palette} />
      </Stack>
    </Stack>
  );
};

export default ThisWebSite;
