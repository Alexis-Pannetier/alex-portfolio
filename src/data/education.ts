import type { Lang } from "@/i18n/ui";
import { getLocalizedData } from "@/i18n/data";

export interface EducationDetail {
  title: string;
  label?: string;
  url?: string;
}

export interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  detail?: EducationDetail;
  website?: string;
  currentUni: boolean;
  type: "degree" | "training";
}

export const getEducation = (lang: Lang): Education[] => {
  return getLocalizedData(lang).education as Education[];
};

const education: Education[] = getEducation("fr");

export default education;