"use client";
import {
  Divider,
  PaletteColor,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ColorPaletteEditor } from "@/app/thiswebsite/ColorPaletteEditor";
import { DrawerEditor } from "@/app/thiswebsite/DrawerEditor";
import { FontEditor } from "./FontEditor";

const ThisWebSite = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Paper elevation={3} sx={{ p: 1 }} square={false}>
        <Stack>
          <Typography variant="h4">Color Palette</Typography>
          <Typography variant="body1">
            Voici les couleurs de ce site, vous pouvez modifier la Main, la Dark
            et la Light sont calculées en fonction de la Main.
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 2 }}
            justifyContent="space-around"
            alignItems="center"
          >
            <ColorPaletteEditor
              name={"Primary"}
              color={theme.palette.primary}
            />
            <ColorPaletteEditor
              name={"Secondary"}
              color={theme.palette.secondary}
            />
            <ColorPaletteEditor
              name={"Accent"}
              color={theme.palette.accent as PaletteColor}
            />
          </Stack>
        </Stack>
      </Paper>
      <Paper elevation={3} sx={{ p: 1 }} square={false}>
        <Typography variant="h4">Drawer Props</Typography>
        <Typography variant="body1">
          Cette section permet de modifier les propriétés du drawer menu
        </Typography>
        <DrawerEditor />
      </Paper>
      <Paper elevation={3} sx={{ p: 1 }} square={false}>
        <Typography variant="h4">Font</Typography>
        <Typography variant="body1">
          Cette section permet de modifier la police d&apos;écriture
        </Typography>
        <FontEditor />
      </Paper>
    </Stack>
  );
};

export default ThisWebSite;
