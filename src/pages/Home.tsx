import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import AccordionLayout from '../components/AccordionLayout/AccordionLayout';

function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack>
      <Typography variant="h4" p={2}>
        Bienvenu sur mon site portfolio
      </Typography>
      <AccordionLayout
        sectionName="whoAmI"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              Qui suis-je ?
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              GRANIER Victor, développeur Web passionné
            </Typography>
          </>
        }
        content={
          <Stack direction={'row'}>
            <Stack direction={'column'} p={2} width={'70%'}>
              <Typography>
                Je m'appelle Victor GRANIER, développeur web, habitué à de
                multiples langages et frameworks, grand fan des nouvelles
                technologies qui se garde à jour sur les nouveautés du milieu.
              </Typography>
              <Typography>
                Mes principales expériences ont été sur la partie front-end des
                projets sur lesquels j'ai eu la chance de travailler, cependant
                j'ai pu prendre de l'expérience sur des back-ends complexes à
                quelques occasions ainsi que sur des bases de données.
              </Typography>
              <Typography>
                De plus, j'aime l'architecture de projet, j'ai des connaissances
                que j'applique sur mes projets scolaires ou personnels. Je peux
                apporter mon point de vue si nécessaire car je m'informe
                toujours régulièrement sur les meilleures pratiques et nouvelle
                façons de faire qui, évidemment, se multiplient avec les
                avancées dans les technologies du développement.
              </Typography>
              <Typography>
                Mes compétences m'ont permis d'avoir eu différents contrats dans
                une petite startup, une entreprise moyenne ainsi qu'une grande
                entreprise. J'ai aimé chacune de ces expériences, je n'ai donc
                pas de préférences de milieux.
              </Typography>
              <Typography>
                J'ai également eu l'occasion de travailler seul et en équipe,
                les deux m'ont plu, cependant j'ai une préférence pour les
                équipes car j'ai tendance à savoir bien communiquer à mes
                collègues des informations sur le projet afin de faire avancer
                les choses.
              </Typography>
            </Stack>
            <Stack direction={'column'} p={2} width={'30%'}>
              <Box
                component="img"
                sx={{
                  width: 614 / 3,
                  height: 936 / 3,
                  opacity: 0.7,
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                alt={'myPhoto'}
                src="https://cdn.discordapp.com/attachments/941388929620377676/1281936616130347038/1725707882442.jpg?ex=66dd8802&is=66dc3682&hm=b270c7e810dadf9dae0868029250167e8d38e83a6e717c681a409b5ad0eaefd6&"
              />
            </Stack>
          </Stack>
        }
      />
      <AccordionLayout
        sectionName="whatAmILookingFor"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              Ce que je recherche ?
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              Poste en développement Web
            </Typography>
          </>
        }
        content={<></>}
      />
      <AccordionLayout
        sectionName="whatIKnow"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              Mes qualifications et compétences ?
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              Bases frameworks et bien plus
            </Typography>
          </>
        }
        content={<></>}
      />
      <AccordionLayout
        sectionName="myProfessionnalJourney"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              Mon parcours
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              Scolaire et professionnel
            </Typography>
          </>
        }
        content={<></>}
      />
      <AccordionLayout
        sectionName="myPassions"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              Mes Passions
            </Typography>
          </>
        }
        content={<></>}
      />
    </Stack>
  );
}

export default HomePage;
