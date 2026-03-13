import type { Lang } from "@/i18n/ui";
import { getLocalizedData } from "@/i18n/data";

interface MenuItem {
	href: string;
	label: string;
}

export const getMenu = (lang: Lang): MenuItem[] => {
	return getLocalizedData(lang).menu as MenuItem[];
};

export const menu: MenuItem[] = getMenu("fr");
