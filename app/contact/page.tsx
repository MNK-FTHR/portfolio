import { Stack } from "@mui/material";
import React from "react";

const contact = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack>Phone</Stack>
        <Stack>Mail</Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack>Phone</Stack>
        <Stack>Mail</Stack>
      </Stack>
    </Stack>
  );
};

export default contact;
