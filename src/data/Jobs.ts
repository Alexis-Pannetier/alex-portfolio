import type { Lang } from "@/i18n/ui";
import { getLocalizedData } from "@/i18n/data";

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

export const getWorkExperience = (lang: Lang): WorkExperience[] => {
  return getLocalizedData(lang).jobs as WorkExperience[];
};

const workExperience: WorkExperience[] = getWorkExperience("fr");

export default workExperience;