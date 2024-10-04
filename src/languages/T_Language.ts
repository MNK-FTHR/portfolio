export type T_Languages = {
  main: string;
  micelaneous: {
    languages: {
      fr: {
        name: string;
        abrev: string;
      };
      en: {
        name: string;
        abrev: string;
      };
    };
    ui: {
      modes: {
        dark: string;
        light: string;
      };
    };
  };
  whoAmI: {
    title: string;
    under_title: string;
    text: string;
  };
  whatAmILookingFor: {
    title: string;
    under_title: string;
    text: string;
  };
  skills: {
    title: string;
    under_title: string;
    webSkills: T_Skill;
    softwareSkills: T_Skill;
    softwares: T_Skill;
    other: T_Skill;
  };
};

export type T_Skill = {
  title: string;
  content: T_SkillCategory | T_SkillCategory[];
};

type T_SkillCategory = {
  title: string;
  content: Array<{ name: string; text: string }>;
};
