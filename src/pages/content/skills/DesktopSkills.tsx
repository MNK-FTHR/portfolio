import {
  Box,
  Grid,
  Paper,
  Stack,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import Zoom from '@mui/material/Zoom';

import { T_Skill } from '../../../languages/T_Language';

function Skills({ data }: { data: T_Skill[] }) {
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
  const bgColors = ['#77DD77', '#FF6961', '#AEC6CF', '#33778f', '#FDFD96'];
  const selectColor = () => {
    const selectedColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const index = bgColors.indexOf(selectedColor);
    if (index > -1) {
      bgColors.splice(index, 1);
    }
    return selectedColor;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
        {data.map((item, i) => (
          <Grid
            item
            xs={i === 0 || i === 3 ? 8 : 4}
            boxShadow={3}
            p={1}
            borderRadius={'4px'}
            key={i}
          >
            <Item>{item.title}</Item>
            <Grid container spacing={2}>
              {!Array.isArray(item.content) && (
                <Grid item xs={12}>
                  <Item>
                    <Typography variant="h5">{item.content.title}</Typography>
                    <Stack
                      direction={'row'}
                      width={'100%'}
                      sx={{
                        backgroundColor: selectColor(),
                        borderRadius: '4px',
                      }}
                    >
                      <Stack width={'100%'}>
                        {item.content.content
                          .slice(0, item.content.content.length / 2)
                          .map((content, i) => (
                            <Tooltip
                              placement="right"
                              title={
                                <Typography variant="h5">
                                  {content.text}
                                </Typography>
                              }
                              TransitionComponent={Zoom}
                              key={i}
                            >
                              <Item>{content.name}</Item>
                            </Tooltip>
                          ))}
                      </Stack>
                      <Stack width={'100%'}>
                        {item.content.content
                          .slice(
                            item.content.content.length / 2,
                            item.content.content.length,
                          )
                          .map((content, i) => (
                            <Tooltip
                              placement="right"
                              title={
                                <Typography variant="h5">
                                  {content.text}
                                </Typography>
                              }
                              TransitionComponent={Zoom}
                              key={i}
                            >
                              <Item>{content.name}</Item>
                            </Tooltip>
                          ))}
                      </Stack>
                    </Stack>
                  </Item>
                </Grid>
              )}
              {Array.isArray(item.content) &&
                item.content.map((content, index) => (
                  <Grid item xs={6} key={index}>
                    <Item>
                      <Typography variant="h5">{content.title}</Typography>
                      <Stack
                        direction={'row'}
                        width={'100%'}
                        sx={{
                          backgroundColor: selectColor(),
                          borderRadius: '4px',
                        }}
                      >
                        {index === 0 && (
                          <>
                            <Stack width={'100%'}>
                              {content.content
                                .slice(0, content.content.length / 2)
                                .map((content, i) => (
                                  <Tooltip
                                    placement="right"
                                    title={
                                      <Typography variant="h5">
                                        {content.text}
                                      </Typography>
                                    }
                                    TransitionComponent={Zoom}
                                    key={i}
                                  >
                                    <Item>{content.name}</Item>
                                  </Tooltip>
                                ))}
                            </Stack>
                            <Stack width={'100%'}>
                              {content.content
                                .slice(
                                  content.content.length / 2,
                                  content.content.length,
                                )
                                .map((content, i) => (
                                  <Tooltip
                                    placement="right"
                                    title={
                                      <Typography variant="h5">
                                        {content.text}
                                      </Typography>
                                    }
                                    TransitionComponent={Zoom}
                                    key={i}
                                  >
                                    <Item>{content.name}</Item>
                                  </Tooltip>
                                ))}
                            </Stack>
                          </>
                        )}
                        {index === 1 && (
                          <Stack width={'100%'}>
                            {content.content.map((content, i) => (
                              <Tooltip
                                placement="right"
                                title={
                                  <Typography variant="h5">
                                    {content.text}
                                  </Typography>
                                }
                                TransitionComponent={Zoom}
                                key={i}
                              >
                                <Item>{content.name}</Item>
                              </Tooltip>
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </Item>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
