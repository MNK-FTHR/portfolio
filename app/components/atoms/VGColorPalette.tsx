import { lightenDarkenColor } from "@/app/utils/lightenDarkenColor";
import { Box, Button, Palette, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { VGButton } from "@/app/components/atoms";

const VGColorPalette = ({ palette }: { palette: Palette }) => {
  return (
    <Stack direction={"row"} p={2} m={2}>
      <Paper elevation={3} sx={{ p: 1 }}>
        <Stack direction={"column"}>
          <Typography variant="h5" textAlign={"center"} width={"100%"}>
            Primary
          </Typography>
          <Stack direction={"row"}>
            <Stack bgcolor={palette.primary.main} padding={4}>
              <Typography variant="body1" color={palette.primary.contrastText}>
                Main
              </Typography>
            </Stack>
            <Stack bgcolor={palette.primary.dark} padding={4}>
              <Typography variant="body1" color={palette.primary.contrastText}>
                Dark
              </Typography>
            </Stack>
            <Stack bgcolor={palette.primary.light} padding={4}>
              <Typography variant="body1" color={palette.primary.contrastText}>
                Light
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <VGButton variant="contained">Save</VGButton>
      </Paper>
    </Stack>
  );
};

export default VGColorPalette;
