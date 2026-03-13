import type { Lang } from "@/i18n/ui";
import { getLocalizedData } from "@/i18n/data";

interface Language {
	name: string;
	level: string;
	description: string;
	show: boolean;
}

export const getLanguages = (lang: Lang): Language[] => {
	return getLocalizedData(lang).languages as Language[];
};

const languages: Language[] = getLanguages("fr");

export default languages;
