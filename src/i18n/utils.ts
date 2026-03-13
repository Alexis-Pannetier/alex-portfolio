import { defaultLang, type Lang, type TranslationKey, ui } from "./ui";

const getValueByPath = (obj: unknown, path: string): string | undefined => {
	const value = path.split(".").reduce<unknown>((acc, segment) => {
		if (acc && typeof acc === "object" && segment in (acc as Record<string, unknown>)) {
			return (acc as Record<string, unknown>)[segment];
		}
		return undefined;
	}, obj);

	return typeof value === "string" ? value : undefined;
};

export const getLangFromUrl = (url: URL): Lang => {
	const [, maybeLang] = url.pathname.split("/");
	if (maybeLang && maybeLang in ui) {
		return maybeLang as Lang;
	}
	return defaultLang;
};

export const useTranslations = (lang: Lang) => {
	return (key: TranslationKey) => {
		return getValueByPath(ui[lang], key) ?? getValueByPath(ui[defaultLang], key) ?? key;
	};
};

export const localizePath = (path: string, lang: Lang): string => {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	if (lang === defaultLang) {
		return normalizedPath;
	}
	return `/${lang}${normalizedPath}`;
};
