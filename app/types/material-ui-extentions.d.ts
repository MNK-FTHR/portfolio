import {
  PaletteColorOptions,
  ButtonPropsColorOverrides,
  PaletteOptions,
  ToggleButtonProps,
} from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    accent: PaletteColorOptions;
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
  }
}
