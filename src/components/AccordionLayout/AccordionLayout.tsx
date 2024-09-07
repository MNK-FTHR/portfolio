import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import { keyframes } from '@emotion/react';

// Animation gradient néon
const neonAnimation = keyframes`
  0% {
    border-color: #ff00ff;
    box-shadow: 0 0 1px #ff00ff;
  }
  25% {
    border-color: #00ffff;
    box-shadow: 0 0 1px #00ffff;
  }
  50% {
    border-color: #00ff00;
    box-shadow: 0 0 1px #00ff00;
  }
  75% {
    border-color: #ffff00;
    box-shadow: 0 0 1px #ffff00;
  }
  100% {
    border-color: #ff00ff;
    box-shadow: 0 0 1px #ff00ff;
  }
`;
function AccordionLayout({
  sectionName,
  handleChange,
  expanded,
  contentSummary,
  content,
}: {
  sectionName: string;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | false;
  contentSummary: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Stack p={2}>
      <Accordion
        sx={{
          border: '1px solid',
          borderImageSlice: 1,
          borderColor: '#ff00ff',
          animation: `${neonAnimation} 32s infinite`,
          boxShadow: '0px 0px 20px 100px rgba(255, 0, 255, 0.5)',
        }}
        expanded={expanded === sectionName}
        onChange={handleChange(sectionName)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={sectionName + 'bh-content'}
          id={sectionName + 'bh-header'}
          sx={{
            borderBottom: '1px solid',
            borderImageSlice: 1,
            borderColor: '#ff00ff',
            animation: `${neonAnimation} 32s infinite`,
            boxShadow: '0px 0px 20px 5px rgba(255, 0, 255, 0.5)',
          }}
        >
          {contentSummary}
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default AccordionLayout;
