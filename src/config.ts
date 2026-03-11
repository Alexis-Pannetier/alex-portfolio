export const COLORS = {
	primary: "#FAE081",
	secondary: "#62C4C3",
};

export const SITE = {
	website: "https://alexis-pannetier.netlify.app/",
	title: "Alexis Pannetier | Développeur Fullstack",
	description:
  "Portfolio d'Alexis Pannetier, developpeur fullstack. Migration PHP 7.4 vers 8.3, Symfony 3 vers 7, React, Angular, Laravel, tests et documentation.",
	display: [
    { text: "Fullstack", color: "secondary" },
    { text: "React", color: "primary" },
    { text: "Symfony/Laravel", color: "secondary" },
    { text: "Web", color: "primary" },
  ],
	tags: [
		"Alexis Pannetier",
		"Développeur Fullstack",
		"Fullstack",
		"PHP",
		"Symfony",
		"Laravel",
		"React",
		"Angular",
		"React Native",
		"Ansible",
		"Tests",
		"Documentation",
	],
	ogImage: "/og-image.jpg",
	logo: "logo",
	logoText: "AP",
	lang: "fr",
	favicon: "/favicon.ico",
	repository: "https://github.com/Alexis-Pannetier/alex-portfolio",
	author: "Alexis Pannetier",
	profile: "https://www.linkedin.com/in/alexis-pannetier/",
};

export const ME = {
	name: "Alexis Pannetier",
	profession: "Développeur Fullstack",
	profileImage: "pp.jpg",
	profileFacts: [
		{
			start: 2019,
			description: "Années d'expériences",
			color: "secondary",
		},
		{
			description: "Missions complétées",
		}
	],
	contactInfo: {
		email: "alexis.pannetier@hotmail.fr",
		linkedin: "https://www.linkedin.com/in/alexis-pannetier/",
		resumeDoc: "resume.pdf",
	},
	aboutMe: `Développeur fullstack passionné, je conçois et fais évoluer des applications web robustes en <span style="color:${COLORS.primary};font-weight:600;">PHP, Symfony, Laravel, React et Angular</span>. J'interviens sur des contextes de <span style="color:${COLORS.secondary};font-weight:600;">migration technique</span>, de maintenance évolutive et de structuration des pratiques (documentation, onboarding, qualité de code). Curieux, organisé et force de proposition, j'aime transformer les besoins métier en solutions concrètes et maintenables.`,
};

export const SOCIALS = [
  {
    name: "GitHub",
		url: "https://github.com/Alexis-Pannetier",
    icon: "github-fill",
    show: true,
  }
];
