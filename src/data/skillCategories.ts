export type Badge = "frontend" | "backend" | "fullstack" | "devops";

export interface Skill {
  name: string;
  nameItalic?: boolean;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const hardSkills: SkillCategory[] = [
  {
    id: "fullstack",
    title: "Développement Fullstack",
    skills: [
      { name: "HTML", description: "", icon: "html" },
      { name: "CSS", description: "", icon: "css" },
      { name: "Javacript", description: "", icon: "javascript" },
      { name: "Typescript", description: "", icon: "typescript"},
      { name: "PHP", description: "", icon: "php" },
      { name: "Laravel", description: "", icon: "laravel"},
      { name: "Symfony", description: "", icon: "symfony"},
      { name: "React", description: "", icon: "react" },
      { name: "Angular", description: "", icon: "angular" },
      { name: "Docker", description: "", icon: "docker" },
      { name: "Kubernetes", description: "", icon: "kubernetes" },
      { name: "Ansible", description: "", icon: "ansible" },
      { name: "Mysql", description: "", icon: "mysql" },
      { name: "PostgreSQL", description: "", icon: "postgresql" },
      { name: "Git", description: "", icon: "git" },
      { name: "VSCode", description: "", icon: "vscode" },
      { name: "Postman", description: "", icon: "postman" },
      { name: "Figma", description: "", icon: "figma" },
      { name: "Shopify", description: "", icon: "shopify"},
      { name: "Wordpress", description: "", icon: "wordpress"},
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "passions",
    title: "Centres d'intérêt",
    skills: [
      { name: "Cinema / Series", description: "Intérêt pour l'art de la narration, la mise en scène et les univers créatifs.", icon: "movie" },
      { name: "Jeux de société", description: "Esprit de stratégie, collaboration et plaisir du jeu en groupe.", icon: "tabletop" },
      { name: "Nouvelles technologies", description: "Curiosité permanente sur les outils, frameworks et pratiques émergentes.", icon: "tech" },
      { name: "Vélo", description: "Équilibre personnel, dépassement et régularité.", icon: "bike" },
    ],
  },
  {
    id: "softSkills",
    title: "Atouts",
    skills: [
      { name: "Curieux", description: "Toujours en veille pour apprendre et faire évoluer les pratiques d'équipe.", icon: "eyes" },
      { name: "Force de proposition", description: "Capacité à proposer des pistes d'amélioration pragmatiques et utiles.", icon: "idea" },
      { name: "Organisé", description: "Structuration claire des tâches, des priorités et de la communication.", icon: "organisation" },
      { name: "Passionné", description: "Engagement dans la qualité du produit et l'expérience utilisateur.", icon: "smile" },
      { name: "Documentation", description: "Transmission des connaissances via guides, schémas et onboarding.", icon: "documentation" },
      { name: "Qualité de code", description: "Application des bonnes pratiques pour un code durable et maintenable.", icon: "quality" },
    ],
  },
];