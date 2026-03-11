import type { Badge } from "./skillCategories";

export interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals?: string[];
  currentJob: boolean;
  website?: string;
}

const workExperience: WorkExperience[] = [
  {
    title: "Ingenieur Consultant Fullstack",
    startDate: "2022-01-01",
    company: "Extia",
    location: "France",
    description: "Prestations de services en développement fullstack chez plusieurs clients.",
    website: "https://www.extia.fr/",
    currentJob: true,
  },
  {
    title: "Ingenieur Fullstack - Mission Lacroix",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    company: "Lacroix",
    location: "France",
    description: "Mission de 12 mois orientée modernisation applicative et fiabilisation des pratiques.",
    goals: [
      "Migration PHP 7.4 vers 8.3.",
      "Migration Symfony 3 vers 7.",
      "Ajout et industrialisation d'Ansible.",
      "Production de documentations et support onboarding.",
      "Mise en place et diffusion des bonnes pratiques de code.",
    ],
    website: "https://www.lacroix.com/",
    currentJob: false,
  },
  {
    title: "Développeur Fullstack - Mission Onestaff",
    startDate: "2024-02-01",
    endDate: "2024-07-31",
    company: "Onestaff",
    location: "France",
    description: "Mission de 6 mois en maintenance et évolution d'applications web.",
    goals: [
      "Maintenance de projets PHP existants.",
      "Refonte d'une application front en React.",
      "Production de documentations et schémas techniques.",
    ],
    website: "https://www.onestaff.eu/",
    currentJob: false,
  },
  {
    title: "Développeur Fullstack - Mission Bouygues Telecom",
    startDate: "2023-01-01",
    endDate: "2024-01-31",
    company: "Bouygues Telecom",
    location: "France",
    description: "Mission de 13 mois autour du développement fullstack et de la maintenance applicative.",
    goals: [
      "Développement fullstack sur des fonctionnalités métier.",
      "Maintenance et amélioration continue de l'existant.",
      "Participation aux revues de code et aux bonnes pratiques d'équipe.",
    ],
    website: "https://www.bouyguestelecom.fr/",
    currentJob: false,
  },
  {
    title: "Développeur Fullstack - Mission Salaun Holidays",
    startDate: "2022-02-01",
    endDate: "2022-12-31",
    company: "Salaun Holidays",
    location: "France",
    description: "Mission de 11 mois orientée backend Laravel et qualité logicielle.",
    goals: [
      "Développement et maintenance de fonctionnalités en Laravel.",
      "Création de tests Dusk pour fiabiliser les parcours critiques.",
      "Production de documentations et schémas fonctionnels/techniques.",
    ],
    website: "https://www.salaun-holidays.com/",
    currentJob: false,
  },
  {
    title: "Développeur Fullstack - Alternance",
    startDate: "2019-11-01",
    endDate: "2022-11-30",
    company: "ADB Dev",
    location: "France",
    description: "Alternance de 3 ans en développement fullstack, principalement en Laravel et React.",
    goals: [
      "Création d'une application CRM en React.",
      "Développement de fonctionnalités en Laravel.",
    ],
    website: "https://www.adb-dev.com/",
    currentJob: false,
  },
];

export default workExperience;