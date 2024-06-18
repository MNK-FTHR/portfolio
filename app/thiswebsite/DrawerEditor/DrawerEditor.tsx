import React from "react";
import {
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { VGButton } from "@/app/components/atoms";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const DrawerEditor = () => {
  const { sidebarWidth, setSidebarWidth, sidebarPosition, setSidebarPosition } =
    useThemeEditor();
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newPosition: "left" | "right"
  ) => {
    if (newPosition === null) {
      //is null when you click twice in a row the same button, so it's the same as taking the actual sidebarPosition
      newPosition = sidebarPosition;
    }
    setSidebarPosition(newPosition);
  };
  const increaseWidth = () => {
    setSidebarWidth(sidebarWidth + 50);
  };

  const decreaseWidth = () => {
    if (sidebarWidth > 100) {
      setSidebarWidth(sidebarWidth - 50);
    }
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
            <Stack spacing={1}>
              <Typography textAlign={"center"}>
                Menu width: {sidebarWidth}px
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <VGButton
                  startIcon={<ArrowUpwardIcon />}
                  variant="contained"
                  color="accent"
                  size="small"
                  onClick={increaseWidth}
                >
                  Increase Width
                </VGButton>
                <VGButton
                  endIcon={<ArrowDownwardIcon />}
                  size="small"
                  variant="contained"
                  color="accent"
                  onClick={decreaseWidth}
                >
                  Decrease Width
                </VGButton>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
      <Stack direction={"row"} p={2} m={2}>
        <Paper elevation={3} sx={{ p: 1, flexGrow: 1, height: "100px" }}>
          <Stack direction={"row"}>
            <Stack spacing={1}>
              <Typography textAlign={"center"}>Menu position</Typography>
              <ToggleButtonGroup
                color="primary"
                value={sidebarPosition}
                exclusive
                onChange={handleAlignment}
                aria-label="SideBarPosition"
              >
                <ToggleButton value="left" aria-label="left">
                  <ArrowLeftIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right">
                  <ArrowRightIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};
