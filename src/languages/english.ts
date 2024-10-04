import { T_Languages } from './T_Language';

export const english: T_Languages = {
  main: 'Welcome to my portfolio site',
  micelaneous: {
    languages: {
      fr: {
        abrev: 'fr',
        name: 'Français',
      },
      en: {
        abrev: 'en',
        name: 'English',
      },
    },
    ui: {
      modes: {
        dark: 'Dark mode',
        light: 'Light mode',
      },
    },
  },
  whoAmI: {
    title: 'Who am I?',
    under_title: 'Victor GRANIER, passionate Web Developer',
    text: `
        My name is Victor GRANIER, a web developer familiar with multiple languages and frameworks, a big fan of new technologies, and always staying up-to-date with the latest industry trends.

        Most of my experience has been on the front-end side of the projects I've had the chance to work on, but I have also gained experience in handling complex back-end systems on a few occasions, as well as databases.

        Additionally, I enjoy project architecture. I apply my knowledge to school or personal projects, and I would be happy to provide my perspective if needed, as I consistently keep myself informed on best practices and new approaches, which of course evolve as technology advances in the development field.

        My skills have allowed me to work under different contracts in a small startup, a mid-sized company, and a large corporation. I enjoyed each of these experiences, so I don't have a preference for a specific type of work environment.

        I have also had the opportunity to work both independently and as part of a team. While I enjoyed both, I prefer working in teams as I tend to communicate well with my colleagues, helping to keep the project moving forward.
        `,
  },
  whatAmILookingFor: {
    title: 'What am I looking for?',
    under_title: 'Web development position',
    text: `
        I am looking for a web developer position, I have no preferences regarding the type of project or the language used.

        I would like to contribute my skills to companies or individuals who need a developer capable of creating or working on a project, either alone or in a team.

        As you can see in my skills section, I am ready to work with all types of modern and popular technologies, as well as older projects.

        If my profile interests you, feel free to contact me at the following details:
    `,
  },
  skills: {
    title: 'My Skills',
    under_title: 'Foundations, frameworks, and more',
    webSkills: {
      title: 'Web Skills',
      content: [
        {
          title: 'Front',
          content: [
            {
              name: 'JS/TS',
              text: `
              Javascript was the first language I really enjoyed, and I focused on getting good at it.
              I've been using TS for the past two years, and now I do everything with it.
            `,
            },
            {
              name: 'React',
              text: `
              This is the framework I've used the most, and it's also my favorite. I'm up-to-date with it.
              This site is built with React!
            `,
            },
            {
              name: 'Vue',
              text: `
              Used it a lot for a year, I really enjoy working with it, and I'm up-to-date with it.
            `,
            },
            {
              name: 'Angular',
              text: `
              Not up-to-date with it, but I like it as much as Vue and have no issues working with it.
            `,
            },
            {
              name: 'Ionic',
              text: `
              Used it a lot for a year in class, I know the basics well.
            `,
            },
            {
              name: 'JQuery',
              text: `
              I did a lot of JQuery during my training, so I'm familiar with the basics.
            `,
            },
            {
              name: 'HTML/CSS',
              text: `
              Like most web developers, I started here. I can handle complex CSS files.
            `,
            },
            {
              name: 'MUI',
              text: `
              I use MUI in most of my projects, and I customize it to get the results I want.
            `,
            },
          ],
        },
        {
          title: 'Back',
          content: [
            {
              name: 'Laravel',
              text: `
              I worked with it a lot in school and for a year during my apprenticeship. It's a great back-end framework.
            `,
            },
            {
              name: 'Node',
              text: `
              My default choice since I work with JS/TS.
            `,
            },
            {
              name: 'Symfony',
              text: `
              I used it for two years in class. It's very pleasant to work with, but I need to refresh my knowledge.
            `,
            },
            {
              name: 'Django',
              text: `
              Used it once in class, but Python is always easy to pick up again.
            `,
            },
          ],
        },
      ],
    },
    softwareSkills: {
      title: 'Software Skills',
      content: {
        title: 'Languages',
        content: [
          {
            name: 'C',
            text: `
            The first language taught in class, I know the basics well.
          `,
          },
          { name: 'C++', text: `` },
          {
            name: 'Java',
            text: `
            The second language taught in class, I know the basics well.
          `,
          },
          {
            name: 'C#',
            text: `
            I studied it for one year, I don't remember much, but I can pick it up again.
          `,
          },
          {
            name: 'Bash',
            text: `
            Used a lot for scripting in my work environment.
          `,
          },
          {
            name: 'Python',
            text: `
            The third language taught in class, I know the basics well, and I use it for personal projects.
          `,
          },
        ],
      },
    },
    softwares: {
      title: 'Software Used',
      content: {
        title: 'Software',
        content: [
          {
            name: 'VSCode',
            text: `
            I use VSCode every day for my work.
          `,
          },
          {
            name: 'Postman',
            text: `
            I've been using it for four years, and I'm quite skilled with it.
          `,
          },
          {
            name: 'Git',
            text: `
            I know all the necessary commands for my work, and I have no issues using it.
          `,
          },
          {
            name: 'JetBrains Suite',
            text: `
            I had the chance to try this suite for a year during school.
          `,
          },
          {
            name: 'DaVinci Resolve',
            text: `
            I know the basics of video editing with this software.
          `,
          },
          {
            name: 'Cisco Packet Tracer',
            text: `
            I used it extensively during the first two years of my studies.
          `,
          },
        ],
      },
    },
    other: {
      title: 'Miscellaneous',
      content: {
        title: 'Knowledge',
        content: [
          {
            name: 'UML',
            text: `
            Basics learned in class to understand architecture!
          `,
          },
          {
            name: 'Software Architecture',
            text: `
            I have good knowledge of software architecture and I keep myself informed on it.
          `,
          },
          {
            name: 'Database Architecture',
            text: `
            I know the basics of SQL and NoSQL database architecture.
          `,
          },
          {
            name: 'Documentation',
            text: `
            I know libraries for creating good technical documentation, especially Swagger and Storybook.
          `,
          },
          {
            name: 'Styling',
            text: `
            I can apply styles to a project or create basic styles, but it's a separate profession, and I only know a little.
          `,
          },
          {
            name: 'Electronic Schematics',
            text: `
            Studied for two years in high school.
          `,
          },
          {
            name: 'Docker',
            text: `
            I know how to use it to deploy projects, but I've never used it independently.
          `,
          },
          {
            name: 'English',
            text: `
            I have the basics to hold a technical conversation in English.
          `,
          },
        ],
      },
    },
  },
};
