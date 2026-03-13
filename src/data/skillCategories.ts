import type { Lang } from "@/i18n/ui";
import { getLocalizedData } from "@/i18n/data";

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

export const getHardSkills = (lang: Lang): SkillCategory[] => {
  return getLocalizedData(lang).hardSkills as SkillCategory[];
};

export const hardSkills: SkillCategory[] = getHardSkills("fr");

export const getSkillCategories = (lang: Lang): SkillCategory[] => {
  return getLocalizedData(lang).skillCategories as SkillCategory[];
};

export const skillCategories: SkillCategory[] = getSkillCategories("fr");