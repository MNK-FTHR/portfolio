import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Slider, Stack } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { useThemeEditor } from "@/app/contexts/ThemeEditorContext/ThemeEditorContext";
import { VGButton } from "@/app/components/atoms";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 1,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const SiteEditor = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const [value, setValue] = React.useState("#ffffff");

  const handleColorChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { sidebarWidth, setSidebarWidth } = useThemeEditor();

  const increaseWidth = () => {
    setSidebarWidth(sidebarWidth + 50);
  };

  const decreaseWidth = () => {
    if (sidebarWidth > 100) {
      setSidebarWidth(sidebarWidth - 50);
    }
  };
  return (
    <>
      <Accordion
        expanded={expanded === "fontsizepanel"}
        onChange={handleChange("fontsizepanel")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Font Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ mb: 1 }}
            alignItems="center"
          >
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
            <Typography>40px</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
