import { Paper, Slider, Stack, Typography } from "@mui/material";
import React from "react";

const FontEditor = () => {
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
              <Typography textAlign={"center"}>FontSize</Typography>
              <Stack direction={"row"} spacing={1}>
                <Slider
                  defaultValue={30}
                  valueLabelDisplay="off"
                  sx={{ color: "accent.main" }}
                  shiftStep={30}
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
