interface Language {
	name: string;
	level: string;
	description: string;
	show: boolean;
}

const languages: Language[] = [
	{
		name: "French",
		level: "Langue maternelle",
		description: "Aisance complète à l'oral et à l'écrit.",
		show: true,
	},
	{
		name: "English",
		level: "Professionnel",
		description: "Utilisation quotidienne en contexte technique et projet.",
		show: true,
	}
];

export default languages;
