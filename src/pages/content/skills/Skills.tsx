import React from 'react';
import { T_Skill } from '../../../languages/T_Language';
import { useMediaQuery } from '@mui/material';
import MobileSkills from './MobileSkills';
import DesktopSkills from './DesktopSkills';

function Skills({ data }: { data: T_Skill[] }) {
  const isMobile = useMediaQuery('(max-width:769px)');

  if (isMobile) {
    return <MobileSkills data={data} />;
  } else {
    return <DesktopSkills data={data} />;
  }
}

export default Skills;
