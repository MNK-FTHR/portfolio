import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import AccordionLayout from '../components/AccordionLayout/AccordionLayout';
import WhoAmI from './content/WhoAmI';
import { useThemeStore } from '../store/themeStore';
import Skills from './content/Skills';

function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { textContent } = useThemeStore();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack maxWidth={'1500px'}>
      <Typography variant="h4" p={2}>
        {textContent.main}
      </Typography>
      <AccordionLayout
        sectionName="whoAmI"
        expanded={expanded}
        handleChange={handleChange}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              {textContent.whoAmI.title}
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              {textContent.whoAmI.under_title}
            </Typography>
          </>
        }
        content={<WhoAmI text={textContent.whoAmI.text} />}
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
        content={<Skills />}
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
      {/* <AccordionLayout
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
      /> */}
    </Stack>
  );
}

export default HomePage;
