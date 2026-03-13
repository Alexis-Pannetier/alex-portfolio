import type { Lang } from "@/i18n/ui";
import { en } from "@/i18n/en";
import { fr } from "@/i18n/fr";

const localizedData = {
	fr: fr.data,
	en: en.data,
} as const;

export const getLocalizedData = (lang: Lang) => {
	const data = localizedData[lang] ?? localizedData.fr;
	// Keep locale files strongly typed with `as const`, but expose mutable data to legacy consumers.
	return JSON.parse(JSON.stringify(data));
};
