export const fr = {
	ui: {
		layout: {
			langSwitch: "Langue",
		},
		nav: {
			home: "Accueil",
			projects: "Projets",
			blog: "Blog",
		},
		navbar: {
			openMenu: "Ouvrir le menu principal",
		},
		footer: {
			madeWith: "Fait avec",
			by: "par",
		},
		common: {
			backToTop: "Retour en haut",
			today: "Aujourd'hui",
			na: "N/A",
		},
		home: {
			title: "Alexis Pannetier | CV",
			description: "Un CV et portfolio simple",
			tabs: {
				about: "Profil",
				skills: "Compétences",
			},
			switch: {
				fr: "Français",
				en: "Anglais",
			},
			typewriterPrefix: "Développeur",
		},
		about: {
			experiences: "Expériences",
			education: "Formations",
		},
		skills: {
			languages: "Langues",
		},
		projects: {
			heading: "Projets",
			viewAll: "Voir tous les projets",
			index: {
				title: "Alexis Pannetier | CV | Mes projets",
				description: "Une sélection de mes projets",
				heading: "Tous mes projets",
				empty: "Aucun projet trouvé.",
			},
			detail: {
				imageAlt: "Image principale",
				viewProject: "Voir le projet",
			},
		},
		post: {
			readAria: "Lire l'article",
		},
		project: {
			viewAria: "Voir le projet",
			coverAlt: "Aperçu du projet",
		},
		profile: {
			downloadCv: "Télécharger le CV",
			linkedinAria: "lien vers mon profil LinkedIn",
			emailAria: "m'envoyer un email",
		},
		job: {
			achievements: "Réalisations",
		},
		blog: {
			index: {
				title: "Alexis Pannetier | CV | Blog",
				description: "Mes articles et notes techniques",
				heading: "Tous mes articles",
				empty: "Aucun article trouvé.",
			},
			detail: {
				imageAlt: "Image principale",
			},
		},
		"404": {
			title: "404 Introuvable |",
			description: "La page que vous recherchez est introuvable. Vérifiez l'URL ou revenez à l'accueil.",
			heading: "Page introuvable",
			back: "Retour à l'accueil",
			backAria: "retour à l'accueil",
			shrugAria: "Emoji haussement d'épaules",
		},
	},
	config: {
		site: {
			title: "Alexis Pannetier | Développeur Fullstack",
			description:
				"Portfolio d'Alexis Pannetier, développeur fullstack. Migration PHP 7.4 vers 8.3, Symfony 3 vers 7, React, Angular, Laravel, tests et documentation.",
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
		},
		me: {
			profession: "Développeur Fullstack",
			profileFacts: [
				{
					start: 2019,
					description: "Années d'expériences",
					color: "secondary",
				},
				{
					description: "Missions complétées",
				},
			],
			aboutMe:
				"Développeur fullstack passionné, je conçois et fais évoluer des applications web robustes en [[primary:PHP, Symfony, Laravel, React et Angular]]. J'interviens sur des contextes de [[secondary:migration technique]], de maintenance évolutive et de structuration des pratiques (documentation, onboarding, qualité de code). Curieux, organisé et force de proposition, j'aime transformer les besoins métier en solutions concrètes et maintenables.",
		},
	},
	data: {
		menu: [
			{ href: "/", label: "Accueil" },
			{ href: "/projects", label: "Projets" },
			{ href: "/blog", label: "Blog" },
		],
		languages: [
			{
				name: "Français",
				level: "Langue maternelle",
				description: "Aisance complète à l'oral et à l'écrit.",
				show: true,
			},
			{
				name: "English",
				level: "Professionnel",
				description: "Utilisation quotidienne en contexte technique et projet.",
				show: true,
			},
		],
		hardSkills: [
			{
				id: "fullstack",
				title: "Développement Fullstack",
				skills: [
					{ name: "HTML", description: "", icon: "html" },
					{ name: "CSS", description: "", icon: "css" },
					{ name: "Javacript", description: "", icon: "javascript" },
					{ name: "Typescript", description: "", icon: "typescript" },
					{ name: "PHP", description: "", icon: "php" },
					{ name: "Laravel", description: "", icon: "laravel" },
					{ name: "Symfony", description: "", icon: "symfony" },
					{ name: "React", description: "", icon: "react" },
					{ name: "Angular", description: "", icon: "angular" },
					{ name: "Docker", description: "", icon: "docker" },
					{ name: "Kubernetes", description: "", icon: "kubernetes" },
					{ name: "Ansible", description: "", icon: "ansible" },
					{ name: "Mysql", description: "", icon: "mysql" },
					{ name: "PostgreSQL", description: "", icon: "postgresql" },
					{ name: "Git", description: "", icon: "git" },
					{ name: "VSCode", description: "", icon: "vscode" },
					{ name: "Postman", description: "", icon: "postman" },
					{ name: "Figma", description: "", icon: "figma" },
					{ name: "Shopify", description: "", icon: "shopify" },
					{ name: "Wordpress", description: "", icon: "wordpress" },
				],
			},
		],
		skillCategories: [
			{
				id: "passions",
				title: "Centres d'intérêt",
				skills: [
					{
						name: "Cinéma / Séries",
						description: "Intérêt pour l'art de la narration, la mise en scène et les univers créatifs.",
						icon: "movie",
					},
					{
						name: "Jeux de société",
						description: "Esprit de stratégie, collaboration et plaisir du jeu en groupe.",
						icon: "tabletop",
					},
					{
						name: "Nouvelles technologies",
						description: "Curiosité permanente sur les outils, frameworks et pratiques émergentes.",
						icon: "tech",
					},
					{
						name: "Vélo",
						description: "Équilibre personnel, dépassement et régularité.",
						icon: "bike",
					},
				],
			},
			{
				id: "softSkills",
				title: "Atouts",
				skills: [
					{
						name: "Curieux",
						description: "Toujours en veille pour apprendre et faire évoluer les pratiques d'équipe.",
						icon: "eyes",
					},
					{
						name: "Force de proposition",
						description: "Capacité à proposer des pistes d'amélioration pragmatiques et utiles.",
						icon: "idea",
					},
					{
						name: "Organisé",
						description: "Structuration claire des tâches, des priorités et de la communication.",
						icon: "organisation",
					},
					{
						name: "Passionné",
						description: "Engagement dans la qualité du produit et l'expérience utilisateur.",
						icon: "smile",
					},
					{
						name: "Documentation",
						description: "Transmission des connaissances via guides, schémas et onboarding.",
						icon: "documentation",
					},
					{
						name: "Qualité de code",
						description: "Application des bonnes pratiques pour un code durable et maintenable.",
						icon: "quality",
					},
				],
			},
		],
		education: [
			{
				title: "Master Fullstack",
				startDate: "2019-09-01",
				endDate: "2022-06-30",
				school: "MyDigitalSchool",
				location: "France",
				description: "Formation en alternance orientée développement web fullstack.",
				detail: {
					title: "Titre RNCP : Concepteur Développeur d'Application",
					label: "Concepteur Développeur d'Application",
					url: "https://certificate.bcdiploma.com/check/8B344BD9B8E26309A1FD100E5AD4A291E08101B265DD39336A081F7C48988846dEkzVzc1RVp4V1JzekIxQkdVRzJEZjBtUlVjbXV3ZzVQUTFYelFuanJiZWFqdGNp",
				},
				website: "https://www.mydigitalschool.com/",
				currentUni: false,
				type: "degree",
			},
			{
				title: "Titre RNCP - Concepteur Développeur d'Application",
				startDate: "2017-09-01",
				endDate: "2019-06-30",
				school: "IMIE",
				location: "France",
				description: "Parcours en alternance axé sur la conception et le développement logiciel.",
				detail: {
					title: "Parcours alternance développeur logiciel",
					label: "Développeur logiciel",
					url: "https://www.francecompetences.fr/recherche/rncp/31678/",
				},
				website: "https://www.imie.fr/",
				currentUni: false,
				type: "degree",
			},
		],
		jobs: [
			{
				title: "Ingénieur Consultant Fullstack",
				startDate: "2022-01-01",
				company: "Extia",
				location: "France",
				description: "Prestations de services en développement fullstack chez plusieurs clients.",
				website: "https://www.extia.fr/",
				currentJob: true,
			},
			{
				title: "Ingénieur Fullstack - Mission Lacroix",
				startDate: "2025-01-01",
				endDate: "2025-12-31",
				company: "Lacroix",
				location: "France",
				description: "Mission de 12 mois orientée modernisation applicative et fiabilisation des pratiques.",
				goals: [
					"Migration PHP 7.4 vers 8.3.",
					"Migration Symfony 3 vers 7.",
					"Ajout et industrialisation d'Ansible.",
					"Production de documentations et support onboarding.",
					"Mise en place et diffusion des bonnes pratiques de code.",
				],
				website: "https://www.lacroix.com/",
				currentJob: false,
			},
			{
				title: "Développeur Fullstack - Mission Onestaff",
				startDate: "2024-02-01",
				endDate: "2024-07-31",
				company: "Onestaff",
				location: "France",
				description: "Mission de 6 mois en maintenance et évolution d'applications web.",
				goals: [
					"Maintenance de projets PHP existants.",
					"Refonte d'une application front en React.",
					"Production de documentations et schémas techniques.",
				],
				website: "https://www.onestaff.eu/",
				currentJob: false,
			},
			{
				title: "Développeur Fullstack - Mission Bouygues Telecom",
				startDate: "2023-01-01",
				endDate: "2024-01-31",
				company: "Bouygues Telecom",
				location: "France",
				description: "Mission de 13 mois autour du développement fullstack et de la maintenance applicative.",
				goals: [
					"Développement fullstack sur des fonctionnalités métier.",
					"Maintenance et amélioration continue de l'existant.",
					"Participation aux revues de code et aux bonnes pratiques d'équipe.",
				],
				website: "https://www.bouyguestelecom.fr/",
				currentJob: false,
			},
			{
				title: "Développeur Fullstack - Mission Salaun Holidays",
				startDate: "2022-02-01",
				endDate: "2022-12-31",
				company: "Salaun Holidays",
				location: "France",
				description: "Mission de 11 mois orientée backend Laravel et qualité logicielle.",
				goals: [
					"Développement et maintenance de fonctionnalités en Laravel.",
					"Création de tests Dusk pour fiabiliser les parcours critiques.",
					"Production de documentations et schémas fonctionnels/techniques.",
				],
				website: "https://www.salaun-holidays.com/",
				currentJob: false,
			},
			{
				title: "Développeur Fullstack - Alternance",
				startDate: "2019-11-01",
				endDate: "2022-11-30",
				company: "ADB Dev",
				location: "France",
				description: "Alternance de 3 ans en développement fullstack, principalement en Laravel et React.",
				goals: [
					"Création d'une application CRM en React.",
					"Développement de fonctionnalités en Laravel.",
				],
				website: "https://www.adb-dev.com/",
				currentJob: false,
			},
		],
	},
} as const;
