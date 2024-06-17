import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Paper, Stack } from "@mui/material";
export const DrawerEditor = () => {
  return (
    <Stack direction={"row"} p={2} m={2}>
      <Paper elevation={3} sx={{ p: 1 }} variant="outlined">
        <Stack direction={"row"}></Stack>
      </Paper>
    </Stack>
  );
};
