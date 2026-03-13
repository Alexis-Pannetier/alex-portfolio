import { en } from "./en";
import { fr } from "./fr";

export const defaultLang = "fr";

export const languages = {
	fr: "Français",
	en: "English",
} as const;

export const locales = Object.keys(languages) as Array<keyof typeof languages>;
export const prefixedLocales = locales.filter((locale) => locale !== defaultLang);

export const ui = {
	fr: fr.ui,
	en: en.ui,
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = string;
