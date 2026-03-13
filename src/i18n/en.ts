export const en = {
	ui: {
		layout: {
			langSwitch: "Language",
		},
		nav: {
			home: "Home",
			projects: "Projects",
			blog: "Blog",
		},
		navbar: {
			openMenu: "Open main menu",
		},
		footer: {
			madeWith: "Made with",
			by: "by",
		},
		common: {
			backToTop: "Back to Top",
			today: "Today",
			na: "N/A",
		},
		home: {
			title: "Alexis Pannetier | Resume",
			description: "A simple resume and portfolio",
			tabs: {
				about: "Profile",
				skills: "Skills",
			},
			switch: {
				fr: "Français",
				en: "English",
			},
			typewriterPrefix: "Developer",
		},
		about: {
			experiences: "Experience",
			education: "Education",
		},
		skills: {
			languages: "Languages",
		},
		projects: {
			heading: "Projects",
			viewAll: "View all projects",
			index: {
				title: "Alexis Pannetier | Resume | My projects",
				description: "A selection of my projects",
				heading: "All my projects",
				empty: "No project found.",
			},
			detail: {
				imageAlt: "Main image",
				viewProject: "View project",
			},
		},
		post: {
			readAria: "Read article",
		},
		project: {
			viewAria: "View project",
			coverAlt: "Project preview",
		},
		profile: {
			downloadCv: "Download CV",
			linkedinAria: "link to my LinkedIn profile",
			emailAria: "send me an email",
		},
		job: {
			achievements: "Achievements",
		},
		blog: {
			index: {
				title: "Alexis Pannetier | Resume | Blog",
				description: "My articles and technical notes",
				heading: "All my articles",
				empty: "No article found.",
			},
			detail: {
				imageAlt: "Main image",
			},
		},
		"404": {
			title: "404 Not Found |",
			description: "The page you are looking for cannot be found. Check the URL or go back home.",
			heading: "Page not found",
			back: "Back to home",
			backAria: "back to home",
			shrugAria: "Shrug emoji",
		},
	},
	config: {
		site: {
			title: "Alexis Pannetier | Fullstack Developer",
			description:
				"Portfolio of Alexis Pannetier, fullstack developer. PHP 7.4 to 8.3 migration, Symfony 3 to 7, React, Angular, Laravel, testing, and documentation.",
			display: [
				{ text: "Fullstack", color: "secondary" },
				{ text: "React", color: "primary" },
				{ text: "Symfony/Laravel", color: "secondary" },
				{ text: "Web", color: "primary" },
			],
			tags: [
				"Alexis Pannetier",
				"Fullstack Developer",
				"Fullstack",
				"PHP",
				"Symfony",
				"Laravel",
				"React",
				"Angular",
				"React Native",
				"Ansible",
				"Testing",
				"Documentation",
			],
		},
		me: {
			profession: "Fullstack Developer",
			profileFacts: [
				{
					start: 2019,
					description: "Years of experience",
					color: "secondary",
				},
				{
					description: "Completed missions",
				},
			],
			aboutMe:
				"Passionate fullstack developer, I design and evolve robust web applications in [[primary:PHP, Symfony, Laravel, React, and Angular]]. I work on [[secondary:technical migration]], ongoing maintenance, and engineering practices (documentation, onboarding, code quality). Curious, organized, and proactive, I enjoy turning business needs into concrete and maintainable solutions.",
		},
	},
	data: {
		menu: [
			{ href: "/", label: "Home" },
			{ href: "/projects", label: "Projects" },
			{ href: "/blog", label: "Blog" },
		],
		languages: [
			{
				name: "French",
				level: "Native",
				description: "Complete fluency in speaking and writing.",
				show: true,
			},
			{
				name: "English",
				level: "Professional",
				description: "Daily use in technical and project contexts.",
				show: true,
			},
		],
		hardSkills: [
			{
				id: "fullstack",
				title: "Fullstack Development",
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
				title: "Interests",
				skills: [
					{
						name: "Cinema / Series",
						description: "Interest in storytelling, staging, and creative worlds.",
						icon: "movie",
					},
					{
						name: "Board games",
						description: "Strategy mindset, collaboration, and joy of group play.",
						icon: "tabletop",
					},
					{
						name: "New technologies",
						description: "Continuous curiosity for tools, frameworks, and emerging practices.",
						icon: "tech",
					},
					{
						name: "Cycling",
						description: "Personal balance, self-improvement, and consistency.",
						icon: "bike",
					},
				],
			},
			{
				id: "softSkills",
				title: "Strengths",
				skills: [
					{
						name: "Curious",
						description: "Always learning and helping evolve team practices.",
						icon: "eyes",
					},
					{
						name: "Proactive",
						description: "Ability to propose practical and useful improvements.",
						icon: "idea",
					},
					{
						name: "Organized",
						description: "Clear structure for tasks, priorities, and communication.",
						icon: "organisation",
					},
					{
						name: "Passionate",
						description: "Committed to product quality and user experience.",
						icon: "smile",
					},
					{
						name: "Documentation",
						description: "Knowledge sharing through guides, diagrams, and onboarding.",
						icon: "documentation",
					},
					{
						name: "Code quality",
						description: "Applying best practices for durable and maintainable code.",
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
				description: "Work-study program focused on fullstack web development.",
				detail: {
					title: "RNCP Certification: Application Designer Developer",
					label: "Application Designer Developer",
					url: "https://certificate.bcdiploma.com/check/8B344BD9B8E26309A1FD100E5AD4A291E08101B265DD39336A081F7C48988846dEkzVzc1RVp4V1JzekIxQkdVRzJEZjBtUlVjbXV3ZzVQUTFYelFuanJiZWFqdGNp",
				},
				website: "https://www.mydigitalschool.com/",
				currentUni: false,
				type: "degree",
			},
			{
				title: "RNCP Certification - Application Designer Developer",
				startDate: "2017-09-01",
				endDate: "2019-06-30",
				school: "IMIE",
				location: "France",
				description: "Work-study track focused on software design and development.",
				detail: {
					title: "Software developer work-study track",
					label: "Software developer",
					url: "https://www.francecompetences.fr/recherche/rncp/31678/",
				},
				website: "https://www.imie.fr/",
				currentUni: false,
				type: "degree",
			},
		],
		jobs: [
			{
				title: "Fullstack Consultant Engineer",
				startDate: "2022-01-01",
				company: "Extia",
				location: "France",
				description: "Fullstack software consulting services for multiple clients.",
				website: "https://www.extia.fr/",
				currentJob: true,
			},
			{
				title: "Fullstack Engineer - Lacroix mission",
				startDate: "2025-01-01",
				endDate: "2025-12-31",
				company: "Lacroix",
				location: "France",
				description: "12-month mission focused on application modernization and engineering reliability.",
				goals: [
					"Migrated PHP from 7.4 to 8.3.",
					"Migrated Symfony from 3 to 7.",
					"Added and industrialized Ansible usage.",
					"Produced documentation and onboarding support.",
					"Set up and shared coding best practices.",
				],
				website: "https://www.lacroix.com/",
				currentJob: false,
			},
			{
				title: "Fullstack Developer - Onestaff mission",
				startDate: "2024-02-01",
				endDate: "2024-07-31",
				company: "Onestaff",
				location: "France",
				description: "6-month mission for maintenance and evolution of web applications.",
				goals: [
					"Maintained existing PHP projects.",
					"Rebuilt a front-end application in React.",
					"Produced documentation and technical diagrams.",
				],
				website: "https://www.onestaff.eu/",
				currentJob: false,
			},
			{
				title: "Fullstack Developer - Bouygues Telecom mission",
				startDate: "2023-01-01",
				endDate: "2024-01-31",
				company: "Bouygues Telecom",
				location: "France",
				description: "13-month mission focused on fullstack development and application maintenance.",
				goals: [
					"Built fullstack business features.",
					"Maintained and continuously improved legacy applications.",
					"Contributed to code reviews and team best practices.",
				],
				website: "https://www.bouyguestelecom.fr/",
				currentJob: false,
			},
			{
				title: "Fullstack Developer - Salaun Holidays mission",
				startDate: "2022-02-01",
				endDate: "2022-12-31",
				company: "Salaun Holidays",
				location: "France",
				description: "11-month mission focused on Laravel backend and software quality.",
				goals: [
					"Developed and maintained Laravel features.",
					"Created Dusk tests to secure critical user journeys.",
					"Produced functional and technical documentation and diagrams.",
				],
				website: "https://www.salaun-holidays.com/",
				currentJob: false,
			},
			{
				title: "Fullstack Developer - Apprenticeship",
				startDate: "2019-11-01",
				endDate: "2022-11-30",
				company: "ADB Dev",
				location: "France",
				description: "3-year apprenticeship in fullstack development, mainly Laravel and React.",
				goals: [
					"Built a CRM application in React.",
					"Developed features in Laravel.",
				],
				website: "https://www.adb-dev.com/",
				currentJob: false,
			},
		],
	},
} as const;
