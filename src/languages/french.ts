import { T_Languages } from './T_Language';

export const french: T_Languages = {
  main: 'Bienvenu sur mon site portfolio',
  whoAmI: {
    title: 'Qui suis-je ?',
    under_title: 'GRANIER Victor, développeur Web passionné',
    text: `
        Je m'appelle Victor GRANIER, développeur web, habitué à de multiples langages et frameworks, grand fan des nouvelles technologies, à jour sur les nouveautés du milieu.

        Mes principales expériences ont été sur la partie front-end des projets sur lesquels j'ai eu la chance de travailler, cependant j'ai pu prendre de l'expérience sur des back-ends complexes à quelques occasions ainsi que sur des bases de données.

        De plus, j'aime l'architecture de projet, j'ai des connaissances que j'applique sur mes projets scolaires ou personnels.
        
        Je suis heureux d'apporter mon point de vue si nécessaire car je m'informe toujours régulièrement sur les meilleures pratiques et nouvelle façons de faire qui, évidemment, se multiplient avec les avancées dans les technologies du développement.

        Mes compétences m'ont permis d'avoir eu différents contrats dans une petite startup, une entreprise moyenne ainsi qu'une grande entreprise, j'ai aimé chacune de ces expériences, je n'ai donc pas de préférences de milieux.

        J'ai également eu l'occasion de travailler seul et en équipe, les deux m'ont plu, cependant j'ai une préférence pour les équipes car j'ai tendance à savoir bien communiquer à mes collègues des informations sur le projet afin de faire avancer les choses.
        `,
  },
  whatAmILookingFor: {
    title: 'Ce que je recherche ?',
    under_title: 'Poste en développement Web',
    text: `
        Je suis à la recherche d'un poste de développeur web, je n'ai pas de préférences au niveau du type de projet ou de langage utilisé.

        J'aimerai pouvoir apporter mes compétences aux entreprises ou personnes ayant besoin d'un développeur capable de créer ou travailler sur un projet, seul ou en équipe.
        
        Comme vous pouvez le voir dans ma section compétences, je suis prêt à intervenir sur tout types de technologies modernes et en vogue ainsi que sur des projets un peu plus vieux.

        Si mon profil vous intéresse, vous pouvez librement me contacter aux contacts suivants:`,
  },
  skills: {
    title: 'Mes compétences ?',
    under_title: 'Bases frameworks et bien plus',
    webSkills: {
      title: 'Compétences Web',
      content: [
        {
          title: 'Front',
          content: [
            {
              name: 'JS/TS',
              text: "Javascript est le premier langage que j'ai beaucoup aimé et je me suis concentré à devenir bon avec",
            },
            { name: 'React', text: '' },
            { name: 'Vue', text: '' },
            { name: 'Angular', text: '' },
            { name: 'Ionic', text: '' },
            { name: 'JQuery', text: '' },
            { name: 'HTML/CSS', text: '' },
            { name: 'MUI', text: '' },
          ],
        },
        {
          title: 'Back',
          content: [
            { name: 'Laravel', text: '' },
            { name: 'Node', text: '' },
            { name: 'Symphony', text: '' },
            { name: 'Django', text: '' },
          ],
        },
      ],
    },
    softwareSkills: {
      title: 'Compétences Logiciels',
      content: {
        title: 'Langages',
        content: [
          { name: 'C', text: '' },
          { name: 'C++', text: '' },
          { name: 'Java', text: '' },
          { name: 'C#', text: '' },
          { name: 'Bash', text: '' },
          { name: 'Python', text: '' },
        ],
      },
    },
    softwares: {
      title: 'Logiciels utilisés',
      content: {
        title: 'Logiciels',
        content: [
          { name: 'VSCode', text: '' },
          { name: 'Postman', text: '' },
          { name: 'Git', text: '' },
          { name: 'Suite JetBrain', text: '' },
          { name: 'DaVinci Resolve', text: '' },
          { name: 'Cisco Packet Tracer', text: '' },
        ],
      },
    },
    other: {
      title: 'Divers',
      content: {
        title: 'Connaissances',
        content: [
          { name: 'UML', text: '' },
          { name: 'Architecture Logiciel', text: '' },
          { name: 'Architecture Base de données', text: '' },
          { name: 'Documentation', text: '' },
          { name: 'Styling', text: '' },
          { name: 'Schéma Électronique', text: '' },
          { name: 'Docker', text: '' },
          { name: 'Anglais', text: '' },
        ],
      },
    },
  },
};
