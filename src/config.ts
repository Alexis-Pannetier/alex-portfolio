import type { Lang } from "@/i18n/ui";
import { getLocalizedConfig } from "@/i18n/config";

export const COLORS = {
	primary: "#FAE081",
	secondary: "#62C4C3",
};

const siteBase = {
	website: "https://alexis-pannetier.netlify.app/",
	ogImage: "/og-image.jpg",
	logo: "logo",
	logoText: "AP",
	favicon: "/favicon.ico",
	repository: "https://github.com/Alexis-Pannetier/alex-portfolio",
	author: "Alexis Pannetier",
	profile: "https://www.linkedin.com/in/alexis-pannetier/",
};

const meBase = {
	name: "Alexis Pannetier",
	profileImage: "pp.jpg",
	contactInfo: {
		email: "alexis.pannetier@hotmail.fr",
		linkedin: "https://www.linkedin.com/in/alexis-pannetier/",
		resumeDoc: "resume.pdf",
	},
};

export const getSiteConfig = (lang: Lang = "fr") => {
	const localized = getLocalizedConfig(lang).site;
	return {
		...siteBase,
		lang,
		title: localized.title,
		description: localized.description,
		display: localized.display,
		tags: localized.tags,
	};
};

export const getMeConfig = (lang: Lang = "fr") => {
	const localized = getLocalizedConfig(lang).me;
	return {
		...meBase,
		profession: localized.profession,
		profileFacts: localized.profileFacts,
		aboutMe: localized.aboutMe,
	};
};

export const SITE = getSiteConfig("fr");
export const ME = getMeConfig("fr");

export const SOCIALS = [
  {
    name: "GitHub",
		url: "https://github.com/Alexis-Pannetier",
    icon: "github-fill",
    show: true,
  }
];
