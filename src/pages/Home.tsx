import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import AccordionLayout from '../components/AccordionLayout/AccordionLayout';
import WhoAmI from './content/WhoAmI';

function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack maxWidth={'1500px'}>
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
        content={<WhoAmI />}
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
              Mes compétences ?
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
