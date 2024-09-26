import { Box, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import AccordionLayout from '../components/AccordionLayout/AccordionLayout';
import WhoAmI from './content/WhoAmI';
import { useThemeStore } from '../store/themeStore';
import Skills from './content/Skills';
import Contact from '../components/Contact/Contact';
import { T_Skill } from '../languages/T_Language';

function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>('whoAmI');
  const { textContent } = useThemeStore();
  const accordion1Ref = useRef<HTMLDivElement>(null);
  const accordion2Ref = useRef<HTMLDivElement>(null);
  const accordion3Ref = useRef<HTMLDivElement>(null);
  const handleAccordionClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack maxWidth={'1500px'}>
      <Typography id="d1" variant="h3" p={4}>
        {textContent.main}
      </Typography>

      <AccordionLayout
        sectionName="whoAmI"
        expanded={expanded}
        handleChange={handleChange}
        scrollOnClick={() => handleAccordionClick(accordion1Ref)}
        ref={accordion1Ref}
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
        ref={accordion2Ref}
        scrollOnClick={() => handleAccordionClick(accordion2Ref)}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              {textContent.whatAmILookingFor.title}
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              {textContent.whatAmILookingFor.under_title}
            </Typography>
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
        ref={accordion3Ref}
        scrollOnClick={() => handleAccordionClick(accordion3Ref)}
        contentSummary={
          <>
            <Typography variant="h3" sx={{ width: '50%', flexShrink: 0 }}>
              {textContent.skills.title}
            </Typography>
            <Typography p={2} variant="h5" sx={{ color: 'text.secondary' }}>
              {textContent.skills.under_title}
            </Typography>
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
