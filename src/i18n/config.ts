import type { Lang } from "./ui";
import { en } from "./en";
import { fr } from "./fr";

const localizedConfig = {
	fr: fr.config,
	en: en.config,
} as const;

export const getLocalizedConfig = (lang: Lang) => {
	return localizedConfig[lang] ?? localizedConfig.fr;
};
