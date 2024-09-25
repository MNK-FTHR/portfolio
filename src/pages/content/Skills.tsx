import { Grid, Paper, Stack, styled, Typography } from '@mui/material';
import React from 'react';

function Skills() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const WebGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'left',
    borderRadius: '4px',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#14181d',
    }),
  }));
  return (
    <Grid container spacing={3} p={2}>
      <WebGrid container xs={8} boxShadow={3}>
        <Item>Compétences Web</Item>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5">Front</Typography>
              <Stack
                direction={'row'}
                width={'100%'}
                sx={{ backgroundColor: '#77DD77', borderRadius: '4px' }}
              >
                <Stack width={'100%'}>
                  <Item>JS/TS</Item>
                  <Item>React</Item>
                  <Item>Vue</Item>
                  <Item>Angular</Item>
                </Stack>
                <Stack width={'100%'}>
                  <Item>Ionic</Item>
                  <Item>JQuery</Item>
                  <Item>HTML/CSS</Item>
                  <Item>MUI</Item>
                </Stack>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5">Back</Typography>
              <Stack
                width={'100%'}
                sx={{ backgroundColor: '#FF6961', borderRadius: '4px' }}
              >
                <Item>Laravel</Item>
                <Item>Node</Item>
                <Item>Symfony</Item>
                <Item>Django</Item>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </WebGrid>
      <WebGrid container xs={4} boxShadow={3}>
        <Item>Compétences Logiciels</Item>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5">Langages</Typography>
              <Stack
                direction={'row'}
                width={'100%'}
                sx={{ backgroundColor: '#AEC6CF', borderRadius: '4px' }}
              >
                <Stack width={'100%'}>
                  <Item>C</Item>
                  <Item>C++</Item>
                  <Item>Java</Item>
                  <Item>C#</Item>
                </Stack>
                <Stack width={'100%'}>
                  <Item>Bash</Item>
                  <Item>Python</Item>
                </Stack>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </WebGrid>
      <WebGrid container xs={4}>
        <Item>Logiciels déjà utilisé</Item>
      </WebGrid>
      <WebGrid container xs={8}>
        <Item>Divers</Item>
      </WebGrid>
    </Grid>
  );
}

export default Skills;
