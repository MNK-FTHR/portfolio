import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";
import { Paper, Slider, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const FontEditor = () => {
  const theme = useTheme();
  const { updateFontSize, typographyChanger } = useThemeEditor();
  const handleChange = (event: Event, newValue: number | number[]) => {
    updateFontSize(newValue as number);
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, md: 2 }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Stack direction={"row"} p={2} m={2}>
        <Paper elevation={3} sx={{ p: 1, flexGrow: 1, height: "100px" }}>
          <Stack direction={"row"}>
            <Stack spacing={1} width={300}>
              <Typography textAlign={"center"}>Global FontSize</Typography>
              <Stack direction={"column"} spacing={1}>
                <Typography textAlign={"center"}>
                  {theme.typography.fontSize}px
                </Typography>
                <Slider
                  onChange={handleChange}
                  defaultValue={theme.typography.fontSize}
                  valueLabelDisplay="off"
                  sx={{ color: "accent.main" }}
                  shiftStep={10}
                  step={1}
                  marks
                  min={8}
                  max={42}
                />
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};

export { FontEditor };
