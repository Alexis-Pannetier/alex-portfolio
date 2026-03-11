import { COLORS } from "@/config";
import { skillIconRegistry } from "./icons/SkillIcons";

interface Props {
  name: string;
  nameItalic?: boolean;
  description: string;
  iconKey: string;
}

export default function CustomSkill({ name, description, iconKey, nameItalic }: Props) {
  const Icon = skillIconRegistry[iconKey];

  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      {Icon && (
      <div className="w-20 h-20" style={{ color: COLORS.primary }}>
        <Icon width={80} height={80} />
      </div>
      )}
      <h3 className={`text-sm font-bold ${nameItalic ? "italic" : ""}`}>{name}</h3>
      <p
      className="text-n700 dark:text-n200 text-sm"
      dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}