import { Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

function Contact() {
  const isMobile = useMediaQuery('(max-width:769px)');

  return (
    <Paper elevation={3}>
      {!isMobile ? (
        <Typography variant="h5" p={1}>
          victorgranier.pierre@gmail.com / 06 59 79 28 63
        </Typography>
      ) : (
        <>
          <Typography variant="h6" p={1}>
            victorgranier.pierre@gmail.com
          </Typography>
          <Typography variant="h6" p={1}>
            06 59 79 28 63
          </Typography>
        </>
      )}
    </Paper>
  );
}

export default Contact;
