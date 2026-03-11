export const BADGE_BASE_CLASS =
  "text-xs px-2 py-0.5 rounded font-bold capitalize transition-colors cursor-default";

export function getBadgeClass(badge: string): string {
  switch (badge) {
    case "frontend":
      return "bg-teal-100 text-teal-100 hover:bg-teal-100/70 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-900/70";
    case "backend":
      return "bg-cyan-100 text-cyan-700 hover:bg-cyan-100/70 dark:bg-cyan-900 dark:text-cyan-300 dark:hover:bg-cyan-900/70";
    case "devops":
      return "bg-purple-100 text-purple-800 hover:bg-purple-800/70 dark:bg-purple-900 dark:text-purple-300 w-fit dark:hover:bg-purple-900/70";
    case "fullstack":
    default:
      return "bg-amber-100 text-amber-700 hover:bg-amber-100/70 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-900/70";
  }
}