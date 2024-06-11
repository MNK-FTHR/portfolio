import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import VGLink from "./VGLink";

const VGArianeString = ({
  root,
  usefulPathname,
}: {
  root: string;
  usefulPathname: string;
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {usefulPathname !== "hobbies" && (
        <VGLink underline="hover" color="inherit" href="/hobbies">
          {root}
        </VGLink>
      )}
      <Typography sx={{ textDecoration: "underline" }}>
        {usefulPathname}
      </Typography>
    </Breadcrumbs>
  );
};

export default VGArianeString;
