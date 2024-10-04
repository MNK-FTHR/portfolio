import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import AccordionLayout from '../components/AccordionLayout/AccordionLayout';
import WhoAmI from './content/WhoAmI';
import { useThemeStore } from '../store/themeStore';
import Skills from './content/Skills';
import Contact from '../components/Contact/Contact';
import { T_Skill } from '../languages/T_Language';
import { red, green, blue } from '@mui/material/colors';
import Title from '../components/Title/Title';

function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>('whoAmI');
  const { textContent } = useThemeStore();
  const accordion1Ref = useRef<HTMLDivElement>(null);
  const accordion2Ref = useRef<HTMLDivElement>(null);
  const accordion3Ref = useRef<HTMLDivElement>(null);
  const handleAccordionClick = (ref: React.RefObject<HTMLDivElement>) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 350);
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useThemeStore((state) => state.theme);

  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <Stack maxWidth={'1500px'}>
      <Title text={textContent.main} />

      <AccordionLayout
        sectionName="whoAmI"
        expanded={expanded}
        handleChange={handleChange}
        scrollOnClick={() => handleAccordionClick(accordion1Ref)}
        reference={accordion1Ref}
        contentSummary={
          <>
            <Typography
              variant="h3"
              sx={{
                width: '50%',
                flexShrink: 0,
                ...(mobile && { width: '100%', textAlign: 'center' }),
                ...(tablet && { width: '100%', textAlign: 'center' }),
              }}
            >
              {textContent.whoAmI.title}
            </Typography>
            {tablet && (
              <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
                {textContent.whoAmI.under_title}
              </Typography>
            )}
          </>
        }
        content={<WhoAmI text={textContent.whoAmI.text} />}
      />
      <AccordionLayout
        sectionName="whatAmILookingFor"
        expanded={expanded}
        handleChange={handleChange}
        reference={accordion2Ref}
        scrollOnClick={() => handleAccordionClick(accordion2Ref)}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              {textContent.whatAmILookingFor.title}
            </Typography>
            {tablet && (
              <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
                {textContent.whatAmILookingFor.under_title}
              </Typography>
            )}
          </>
        }
        content={
          <>
            {textContent.whatAmILookingFor.text
              .split('.')
              .map((sentence) => sentence.trim())
              .filter((sentence) => sentence.length > 0)
              .map((sentence, key) => {
                return (
                  <Typography key={key}>
                    {sentence}
                    {key + 1 <
                      textContent.whatAmILookingFor.text.split('.').length &&
                      '.'}
                  </Typography>
                );
              })}
            <Contact />
          </>
        }
      />
      <AccordionLayout
        sectionName="whatIKnow"
        expanded={expanded}
        handleChange={handleChange}
        reference={accordion3Ref}
        scrollOnClick={() => handleAccordionClick(accordion3Ref)}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              {textContent.skills.title}
            </Typography>
            {tablet && (
              <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
                {textContent.skills.under_title}
              </Typography>
            )}
          </>
        }
        content={
          <>
            {
              <Skills
                data={
                  Object.entries(textContent.skills)
                    .map((e) => e[1])
                    .splice(2, 5) as T_Skill[]
                }
              />
            }
          </>
        }
      />
      {/* <AccordionLayout
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
      /> */}
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
