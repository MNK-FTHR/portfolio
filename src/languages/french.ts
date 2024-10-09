import { T_Languages } from './T_Language';

export const french: T_Languages = {
  main: 'Bienvenu sur mon site portfolio',
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
        dark: 'Passer au thème sombre',
        light: 'Passer au thème claire',
      },
    },
  },
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

        J'aimerais pouvoir apporter mes compétences aux entreprises ou personnes ayant besoin d'un développeur capable de créer ou travailler sur un projet, seul ou en équipe.
        
        Comme vous pouvez le voir dans ma section compétences, je suis prêt à intervenir sur tout types de technologies modernes et en vogue ainsi que sur des projets un peu plus vieux.

        Si mon profil vous intéresse, vous pouvez librement me contacter aux contacts suivants:`,
  },
  skills: {
    title: 'Mes compétences ?',
    under_title: 'Bases, frameworks et bien plus',
    webSkills: {
      title: 'Compétences Web',
      content: [
        {
          title: 'Front',
          content: [
            {
              name: 'JS/TS',
              text: `
              Javascript est le premier langage que j'ai beaucoup aimé et je me suis concentré à devenir bon avec, 
              je suis passé à TS depuis deux ans et je fait tout avec maintenant.
              `,
            },
            {
              name: 'React',
              text: `
              Framework que j'ai le plus utilisé, également mon préféré, je suis bien à jour dessus.
              Ce site est fait en React !
              `,
            },
            {
              name: 'Vue',
              text: `
              Beaucoup utilisé pendant un an, j'aime beaucoup travailler avec et je suis à jour dessus.
              `,
            },
            {
              name: 'Angular',
              text: `
              Pas à jour dessus mais je l’apprécie autant que Vue je n'ai pas de soucis à travailler avec.
              `,
            },
            {
              name: 'Ionic',
              text: `
              Bien utilisé pendant un an en cours, je connais bien les bases.
              `,
            },
            {
              name: 'JQuery',
              text: `
              J'ai fait beaucoup de JQuery dans mon apprentissage je connais bien les bases.
              `,
            },
            {
              name: 'HTML/CSS',
              text: `
              J'ai commencé par là comme tout les développeurs Web, je sais gérer des fichiers CSS complexe.
              `,
            },
            {
              name: 'MUI',
              text: `
              Je fais la plupart de mes projets avec MUI, que je modifie à ma guise pour arriver au résultat que je veux.
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
              J'en ait beaucoup fait à l'école et un an en alternance, super framework back.
              `,
            },
            {
              name: 'Node',
              text: `
              Ce que je choisis par défaut car JS/TS.
              `,
            },
            {
              name: 'Symphony',
              text: `
              J'en ais fait deux ans en cours, très appréciable mais je dois me mettre à jours dessus.
              `,
            },
            {
              name: 'Django',
              text: `
              Fait une fois en cours, mais python est toujours facilement utilisable.
              `,
            },
          ],
        },
      ],
    },
    softwareSkills: {
      title: 'Compétences logiciel',
      content: {
        title: 'Languages',
        content: [
          {
            name: 'C',
            text: `
            Premier langage enseigné en cours, je connais bien les bases.
            `,
          },
          {
            name: 'C++',
            text: `
            Vue qu'un an, j'ai peu de souvenir mais je peux l'apprendre.
            `,
          },
          {
            name: 'Java',
            text: `
            Second langage enseigné en cours, je connais bien les bases.
            `,
          },
          {
            name: 'C#',
            text: `
            Vue qu'un an, j'ai peu de souvenir mais je peux l'apprendre.
            `,
          },
          {
            name: 'Bash',
            text: `
            Beaucoup utilisé pour des script pour mon environment de travail.
            `,
          },
          {
            name: 'Python',
            text: `
            Troisième langage enseigné en cours, je connais bien les bases et j'en fait pour moi.`,
          },
        ],
      },
    },
    softwares: {
      title: 'Logiciels utilisés',
      content: {
        title: 'Logiciels',
        content: [
          {
            name: 'VSCode',
            text: `
            J'utilise tout les jours VSCode pour faire mon travail.
            `,
          },
          {
            name: 'Postman',
            text: `
            Je l'utilise depuis 4 ans, je sais bien m'en servir.
            `,
          },
          {
            name: 'Git',
            text: `
            Je connais toutes les commandes nécessaires à mon travail et je n'ai pas de soucis à m'en servir.
            `,
          },
          {
            name: 'Suite JetBrain',
            text: `
            J'ai pu essayer cette suite pendant un an à mon école.
            `,
          },
          {
            name: 'DaVinci Resolve',
            text: `
            J'ai les bases en montage vidéo sur ce logiciel.
            `,
          },
          {
            name: 'Cisco Packet Tracer',
            text: `
            j'en ai beaucoup fait les deux premières années de cours.
            `,
          },
        ],
      },
    },
    other: {
      title: 'Divers',
      content: {
        title: 'Connaissances',
        content: [
          {
            name: 'UML',
            text: `
            Les Bases apprises en cours afin d'apprendre l'architecture !
            `,
          },
          {
            name: 'Architecture Logiciel',
            text: `
            J'ai de bonnes connaissances en architecture logiciel et je m'informe beaucoup dessus.
            `,
          },
          {
            name: 'Architecture Base de données',
            text: `
            Je connais les bases de l'architecture de bdd SQL et NoSQL.
            `,
          },
          {
            name: 'Documentation',
            text: `
            Je connais des librairies pour avoir une bonne documentation technique, je sais utiliser notamment Swagger et Storybook.
            `,
          },
          {
            name: 'Style',
            text: `
            Je sais appliquer des styles à un projet ou faire des bases de style cependant c'est un métier à part, je ne connais que peu.
            `,
          },
          {
            name: 'Schéma Électronique',
            text: `
            Fait pendant deux ans au lycée.
            `,
          },
          {
            name: 'Docker',
            text: `
            Je sais l'utiliser pour déployer les projet mais je ne l'ai jamais utilisé de moi même.
            `,
          },
          {
            name: 'Anglais',
            text: `
            J'ai les bases pour tenir une discussion technique en anglais.
            `,
          },
        ],
      },
    },
  },
};
