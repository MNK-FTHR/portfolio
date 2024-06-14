import { Button, ButtonProps, ButtonTypeMap } from "@mui/material";
import { ComponentRef, forwardRef, memo } from "react";

export type T_VGButtonProps<
  RootComponent extends React.ElementType = ButtonTypeMap["defaultComponent"],
  AdditionalProps = object
> = ButtonProps<RootComponent, AdditionalProps>;

export const VGButton = memo(
  forwardRef<ComponentRef<typeof Button>, T_VGButtonProps>((props, ref) => {
    return (
      <Button
        ref={ref}
        sx={{ bgcolor: "accent.main" }}
        {...props}
        disableElevation
      />
    );
  })
) as typeof Button;

export default VGButton;
