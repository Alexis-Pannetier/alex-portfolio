import { COLORS } from "@/config";
import { skillIconRegistry } from "./icons/SkillIcons";

interface Props {
  name: string;
  nameItalic?: boolean;
  description: string;
  iconKey: string;
}

export default function CustomSkillCard({ name, description, iconKey, nameItalic }: Props) {
  const Icon = skillIconRegistry[iconKey];

  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-n700 p-4 rounded-md">
      {Icon && (
        <div className="w-10 h-10" style={{ color: COLORS.primary }}>
          <Icon width={40} height={40} />
        </div>
      )}
      <h3 className={`text-lg font-bold ${nameItalic ? "italic" : ""}`}>{name}</h3>
      <p
        className="text-n700 dark:text-n200 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}