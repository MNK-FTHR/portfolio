import { Box, Stack, Typography, useTheme } from '@mui/material';
import Me from './Me.jpg';
import React from 'react';

function WhoAmI() {
  const theme = useTheme();

  return (
    <Stack direction={'row'}>
      <Stack direction={'column'} p={2} width={'70%'}>
        <Typography>
          Je m'appelle Victor GRANIER, développeur web, habitué à de multiples
          langages et frameworks, grand fan des nouvelles technologies qui se
          garde à jour sur les nouveautés du milieu.
        </Typography>
        <Typography>
          Mes principales expériences ont été sur la partie front-end des
          projets sur lesquels j'ai eu la chance de travailler, cependant j'ai
          pu prendre de l'expérience sur des back-ends complexes à quelques
          occasions ainsi que sur des bases de données.
        </Typography>
        <Typography>
          De plus, j'aime l'architecture de projet, j'ai des connaissances que
          j'applique sur mes projets scolaires ou personnels. Je peux apporter
          mon point de vue si nécessaire car je m'informe toujours régulièrement
          sur les meilleures pratiques et nouvelle façons de faire qui,
          évidemment, se multiplient avec les avancées dans les technologies du
          développement.
        </Typography>
        <Typography>
          Mes compétences m'ont permis d'avoir eu différents contrats dans une
          petite startup, une entreprise moyenne ainsi qu'une grande entreprise.
          J'ai aimé chacune de ces expériences, je n'ai donc pas de préférences
          de milieux.
        </Typography>
        <Typography>
          J'ai également eu l'occasion de travailler seul et en équipe, les deux
          m'ont plu, cependant j'ai une préférence pour les équipes car j'ai
          tendance à savoir bien communiquer à mes collègues des informations
          sur le projet afin de faire avancer les choses.
        </Typography>
      </Stack>
      <Stack direction={'column'} p={2} width={'30%'}>
        <Box
          component="img"
          sx={{
            width: 614 / 3,
            height: 936 / 3,
            opacity: theme.palette.mode === 'dark' ? 0.7 : 1,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt={'myPhoto'}
          src={Me}
        />
      </Stack>
    </Stack>
  );
}

export default WhoAmI;
